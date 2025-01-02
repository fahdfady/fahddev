import { GithubIcon, LinkedinIcon, XIcon } from "lucide-react";
import Image from "next/image";
import SpidermanGIF from "./components/SpidermanGIF";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
    <main className="text-left w-full space-y-8">
      <section aria-label="Name" className="space-y-1">
        <div className="flex gap-x-4">
          <h1 className="text-3xl font-bold text-purple-900">Fahd Ashour</h1>
          <h1 className="text-3xl font-bold text-purple-900">فهد عاشور</h1>
        </div>
        <h3 className="text-xl text-muted-foreground">Software Engineer</h3>
      </section>

      <section aria-label="Information" className="" >
        <ul className="flex flex-col gap-y-3 text-xl font-semibold">
          <li className="flex items-center">
            <Image alt="BLEU logo" src="/bleulogo.svg" width={32} height={32} className="size-8 me-2" />
            Building &nbsp;<a href="https://x.com/BLEU_io" className="text-blue-800 font-bold" target="_blank">BLEU Community</a>
          </li>
          <li className="flex items-center">
            <XIcon className="size-8 me-2" />
            <a href="https://x.com/fahdashwr" target="_blank">https://x.com/fahdashwr</a>
          </li>
          <li className="flex items-center">
            <GithubIcon className="size-8 me-2" />
            <a href="https://github.com/fahdfady" target="_blank">https://github.com/fahdfady</a>
          </li>
          <li className="flex items-center">
            <LinkedinIcon className="size-8 me-2" />
            <a href="https://linkedin.com/in/fahd-ashour" target="_blank">https://linkedin.com/in/fahd-ashour</a>
          </li>
        </ul>
      </section>

      <section aria-label="about" className="space-y-4">
        {/* TODO: add icons for everything */}
        <p className="text-xl">Currently learning Computer Science. Intrested in Web Development, <a href="https://react.dev">React JS</a>, and <a href="https://rust-lang.org">Rust</a>.</p>
        <p className="text-xl"> Building <a href="https://x.com/BLEU_io" className="text-blue-800 font-bold" target="_blank">BLEU Community</a>, a Discord-based community for people interested in computer science..</p>
        <p className="text-xl">What am I looking forward to do in my career? Learning how Front-end Frameworks works. <a href="https://github.com/fahdfady/yaseer" target="_blank">Building my own Framework</a>, Contibuting to open-source projects. Working with Rust on projects.</p>
      </section>

      <SpidermanGIF />

      <Projects />
    </main>
  );
}
