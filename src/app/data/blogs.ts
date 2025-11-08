import images from "@/app/Assets/ImagesUrls";

export type BlogItem = {
  id: string;
  name: string;
  icon: string;
  summary?: string;
  content?: string;
};

const blogs = [
  { id: "b-js", name: "Javascript", icon: images.js, summary: "Tips and tricks for modern JavaScript", content: "Full blog content for JS..." },
  { id: "b-ts", name: "Typescript", icon: images.ts, summary: "Why TypeScript matters", content: "Full blog content for TS..." },
  { id: "b-react", name: "React", icon: images.react, summary: "React patterns and performance", content: "Full blog content for React..." },
  { id: "b-css", name: "CSS", icon: images.css, summary: "Modern CSS techniques", content: "Full blog content for CSS..." },
  { id: "b-redux", name: "Redux", icon: images.redux, summary: "State management approaches", content: "Full blog content for Redux..." },
  { id: "b-mongo", name: "MongoDB", icon: images.mongodb, summary: "Basics of MongoDB", content: "Full blog content for MongoDB..." },
];

export default blogs;
