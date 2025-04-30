import { ReactNode } from "react";

export type BlogType = "self-hosted" | "bleu";

export interface Blog {
  id: string;
  title: string;
  description: string;
  date: string;
  type: BlogType;
  link: string;
  coverImage?: string;
  tags?: string[];
  minutes?: number;
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Hidden React Features & Internal APIs",
    description: "React does not want you to use internal features that might break your app/library",
    date: "2025-01-30",
    type: "bleu",
    link: "https://bleu-website.vercel.app/blog/hidden-react-features-internal-apis",
    coverImage: "https://utfs.io/f/jSL73wbQRw5u4NeCktZs7ftKoi5Iq1ZUFhJpCNe3uryBdPVc",
    tags: ["Frontend", "JavaScript", "React", "Open Source", "React Internals"],
    minutes: 5,
  },
  {
    id: "2",
    title: "Breaking Gatekeeping: Learning from Sources, Not Influencers",
    description: "don't let anyone gatekeep the knowledge for you. you can find your way.",
    date: "2025-01-30",
    type: "bleu",
    link: "https://bleu-website.vercel.app/blog/breaking-gatekeeping-learning-from-sources-not-influencers",
    coverImage: "https://utfs.io/f/jSL73wbQRw5uyUugmNNEzg4cyUGpdZkm0x2S6evq5b7lanXi",
    tags: ["General"],
    minutes: 3,
  }
]; 