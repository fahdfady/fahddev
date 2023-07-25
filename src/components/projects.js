const Projects = ({ projects }) => {
    return (
        <section className="projects" id="projects">
            <div className="content">
                <h2 className="sectionTitle">
                    my showcase
                </h2>

                <div className="projects-container flex flex-col gap-10">
                    {/* { projects.map((project) => (
                        <a key={ project.id } target="blank" href={ project.link } className="project">
                            <span className="ribbon">
                                { project.status }
                            </span>
                            <div className="projectIcon">
                                <img src={ project.img } alt={ project.name } />
                            </div>
                            <div className="projectTitle">
                                { project.name }
                            </div>
                        </a>
                    )) } */}

                    {projects.map((project) => (
                        <div key={project.id} className="text-center flex flex-row items-center gap-12 max-md:flex-col max-sm:w-full max-sm:gap-4">

                            <div className="w-1/2 h-[280px] max-lg:h-[180px] max-sm:h-[150px] max-sm:w-full max-sm:px-3 relative">
                                <span className="ribbon">
                                    {project.status}
                                </span>

                                <img src={project.img} alt={project.name} className="w-full h-full object-cover" loading="lazy" />
                            </div>
                            <div className="w-1/2 flex flex-col justify-center items-center gap-7 max-md:w-4/5 max-sm:gap-3">
                                <h2 className="h-fit font-bold text-3xl">
                                    <span className="text-[#b071ff]">#</span>  {project.name}
                                </h2>

                                <p className="text-lg max-lg:text-base">
                                    {project.des}
                                </p>

                                <a class="inline-flex items-center h-8 px-4 m-2 text-md text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-md focus:shadow-outline hover:bg-indigo-800" href={project.link} target="blank">Visit</a>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Projects;