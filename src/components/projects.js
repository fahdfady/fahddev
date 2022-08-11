const Projects = ({ projects }) => {
    return (
        <section className="container projects" id="projects">
            <div className="content">
                <h2 className="sectionTitle">
                    my showcase
                </h2>

                <div className="projects-container">
                    { projects.map((project) => (
                        <a key={ project.id } target="blank" href={ project.link } className="project">
                            <span className="ribbon">
                                { project.status }
                            </span>
                            <div className="projectIcon">
                                <img width="300" height="150" src={ project.img } alt={ project.name } />
                            </div>
                            <div className="projectTitle">
                                { project.name }
                            </div>
                        </a>
                    )) }

                </div>
            </div>
        </section>
    )
}

export default Projects;