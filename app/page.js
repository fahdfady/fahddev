'use client'

// import { useFetch } from './hooks/useFetch';
import Information from './components/information';
import Skills from './components/skills';
import Projects from './components/projects';
import Footer from './components/footer';
import Cursor from './components/cursor';
import useFetch from './hooks/useFetch';

export default function Home() {
  const { data: information } = useFetch("information");
  const { data: skills } = useFetch("skills");
  const { data: projects } = useFetch("projects");
  return (

    <main className="min-h-screen">

      {information && <Information information={information} />}

      {skills && <Skills skills={skills} />}

      {projects && <Projects projects={projects} />}

    </main >
  )
}
