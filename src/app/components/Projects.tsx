import { JSX } from "react";
import Image from "next/image"

type TProject = {
    name: string;
    year: string;
    description: JSX.Element;
    link: string;
}

const projects: TProject[] = [
    {
        name: "Duolingo Clone",
        year: "2024",
        description: <p>A Duolingo clone</p>,
        link: "https://lingo-two-chi.vercel.app/",
    },
    {
        name: "Duolingo Clone",
        year: "2024",
        description: <p></p>,
        link: "https://lingo-two-chi.vercel.app/",
    },
    {
        name: "Duolingo Clone",
        year: "2024",
        description: <p></p>,
        link: "https://lingo-two-chi.vercel.app/",
    },
    {
        name: "Duolingo Clone",
        year: "2024",
        description: <p></p>,
        link: "https://lingo-two-chi.vercel.app/",
    }
]


export function Projects() {
    return (
        <section aria-label="projects" id="projects">
            <h2 className="text-4xl text-muted-foreground mb-5"><a href="#projects" className="decoration-purple-950 hover:bg-transparent">Projects</a></h2>

            <div className="grid grid-cols-2 gap-x-3 gap-y-4">
                {projects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </div>
        </section>

    )
}


function ProjectCard({ project }: { project: TProject }) {
    const { link, name, year, description } = project;


    return (
        <a href={link} className="p-4 border-muted border border-solid decoration-transparent flex flex-col gap-y-2">
            <h5 className="text-lg text-muted-foreground">{year}</h5>
            <h3 className="text-2xl font-semibold">{name}</h3>

            <a href={link}>{link}</a>
        </a>
    )
}
