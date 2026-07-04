import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

export const prerender = false;

const GITHUB_USERNAME = "hellolingc";

const query = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              weekday
              contributionCount
              color
            }
          }
        }
      }
    }
  }
`;

export const GET: APIRoute = async () => {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
      "User-Agent": "astro-cloudflare-github-heatmap",
    },
    body: JSON.stringify({
      query,
      variables: {
        username: GITHUB_USERNAME,
      },
    }),
  });

  if (!response.ok) {
    return new Response(
      JSON.stringify({ error: "GitHub API request failed" }),
      {
        status: response.status,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  const json: any = await response.json();

  if (json.errors) {
    return new Response(JSON.stringify({ error: json.errors }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const calendar =
    json.data.user.contributionsCollection.contributionCalendar;

  return new Response(JSON.stringify(calendar), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
