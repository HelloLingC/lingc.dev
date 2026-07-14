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
    description: "专注于写作、项目与长期积累的个人空间。",
    href: "/",
    image: "/projects/homepage.svg",
    imageAlt: "个人主页的抽象界面预览",
  },
  {
    name: "RISC 32-bit OS Kernel",
    startedAt: "2026.8",
    description: "轻量、清晰的个人代码贡献可视化组件。",
    href: "https://github.com/hellolingc",
    image: "/projects/github-heatmap.svg",
    imageAlt: "GitHub 贡献热力图的抽象预览",
  },
  {
    name: "Raspberry RobotCar",
    startedAt: "2025.9",
    description:
      "基于树莓派与 STM32 的四轮差速智能车，集成 OpenCV 赛道巡线、YOLOv8 目标检测和 Next.js 可视化控制面板。",
    href: "https://lycois.org/blog/2025/rasp-robot-car/en/",
    image: "https://lycois.org/assets/projects/rasp_robotcar.jpg",
    imageAlt: "Raspberry RobotCar",
  },
];
