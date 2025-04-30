import { JSX } from "react";
import Image from "next/image"

type TProject = {
    name: string;
    year: string;
    image?: JSX.Element,
    description: JSX.Element;
    link: string;
}

const projects: TProject[] = [
    {
        name: "Lucky Market",
        year: "2021",
        image: <Image src="/projects/luckymarket.jpg" alt="thumbnail" width={150} height={150} className="mx-auto object-cover size-full" />,
        description: <p>Freelance project. A platform where you can host your E-store for selling E-products and manage your earnings.</p>,
        link: "https://luckymarket.net/",
    },
    {
        name: "react-like library",
        year: "2025",
        description: <p>A simulation of how react works for learning purposes. still working on it.</p>,
        link: "https://github.com/fahdfady/react-from-scratch",
    },
    {
        name: "Duolingo Clone",
        year: "2024",
        image: <Image src="/projects/lingo.jpg" alt="thumbnail" width={150} height={150} className="mx-auto object-cover size-full" />,
        description: <p>A Fullstack Duolingo clone using Nextjs. Made alongside a tutorial</p>,
        link: "https://lingo-two-chi.vercel.app/",
    },
    {
        name: "BLEU Website",
        year: "2025",
        image: <Image src="/projects/bleu.png" alt="thumbnail" width={150} height={150} className="mx-auto object-cover size-full" />,
        description: <p>A website for a community that I&apos;m co-founding. It&apos;s a Discord-based community for people interested in computer science.</p>,
        link: "https://bleu-website.vercel.app/",
    }
]


export function Projects() {
    return (
        <section aria-label="projects" id="projects">
            <h2 className="text-4xl text-muted-foreground mb-5"><a href="#projects" className="decoration-purple-950 hover:bg-transparent">Projects</a></h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-4">
                {projects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </div>
        </section>

    )
}


function ProjectCard({ project }: { project: TProject }) {
    const { link, name, year, description, image } = project;


    return (
        <a href={link} className="pb-2 pt-1 px-2 border-muted border border-solid decoration-transparent flex flex-col gap-y-2 overflow-hidden" target="_blank">
            <div className="min-h-[150px] max-h-[150px]">
                {image && image}
            </div>
            <h5 className="text-lg text-muted-foreground">{year}</h5>
            <h3 className="text-2xl font-semibold">{name}</h3>
            {description}
            <a href={link}>{link}</a>
        </a>
    )
}
