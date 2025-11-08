export type ProjectItem = {
  id: string;
  category: string;
  title: string;
  sub_title: string;
  thumbail_image: string;
  live_link?: string;
  github_Link?: Array<{ title: string; url: string }>;
  technology_used?: string[];
};

const projectsData: ProjectItem[] = [
  {
    id: "p1",
    category: "portfolio",
    title: "Fontora Icons - 5000+ Open Source Icons",
    sub_title:
      "FontoraIcons is a large library of over 5000 open-source vector icons designed for designers and developers.",
    thumbail_image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop",
    live_link: "https://example.com/fontora",
    github_Link: [{ title: "GitHub", url: "https://github.com/example/fontora" }],
    technology_used: ["React", "Next.js", "TailwindCSS"],
  },
  {
    id: "p2",
    category: "agency",
    title: "Splito - Share Expenses, Made Simple",
    sub_title:
      "Keep track of group expenses without the hassle. Splito helps you record costs and divide them fairly among friends.",
    thumbail_image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80&auto=format&fit=crop",
    live_link: "https://example.com/splito",
    github_Link: [
      { title: "Design Files", url: "https://dribbble.com/example/splito" },
    ],
    technology_used: ["Figma", "Branding"],
  },
  {
    id: "p3",
    category: "e-commerce",
    title: "Shoply - Modern E-commerce",
    sub_title: "A modern e-commerce frontend with a polished UI and fast performance.",
    thumbail_image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&auto=format&fit=crop",
    live_link: "https://example.com/shoply",
    github_Link: [{ title: "GitHub", url: "https://github.com/example/shoply" }],
    technology_used: ["Next.js", "Stripe", "TailwindCSS"],
  },
];

export default projectsData;
