export interface Project {
  name: string;
  startedAt: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    name: "ROS2 RobotCar",
    startedAt: "2026.8",
    description: "A personal space for writing, projects, and long-term growth.",
    href: "/",
    image: "/projects/homepage.svg",
    imageAlt: "Abstract preview of a personal homepage",
  },
  {
    name: "RISC-V 32-bit OS Kernel",
    startedAt: "2026.8",
    description: "A lightweight, focused visualization of coding activity.",
    href: "https://github.com/hellolingc",
    image: "/projects/github-heatmap.svg",
    imageAlt: "Abstract preview of a GitHub contribution heatmap",
  },
  {
    name: "Raspberry RobotCar",
    startedAt: "2025.9",
    description:
      "A four-wheel differential-drive robot built with Raspberry Pi and STM32, featuring OpenCV lane following, YOLOv8 object detection, and a Next.js control dashboard.",
    href: "https://lycois.org/blog/2025/rasp-robot-car/en/",
    image: "https://lycois.org/assets/projects/rasp_robotcar.jpg",
    imageAlt: "Raspberry RobotCar",
  },
];
