import { GithubIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import SpidermanGIF from "./components/SpidermanGIF";

export default function Home() {
  return (
    <main className="text-left w-full space-y-6">
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
            Building &nbsp;<a href="https://x.com/BLEU_io" className="text-blue-900 font-bold" target="_blank">BLEU Community</a>
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




      <SpidermanGIF />
    </main>
  );
}
