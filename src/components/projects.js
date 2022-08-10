const Projects = ({ projects }) => {
    return (
        <section class="container projects" id="projects">
            <div class="content">
                <h2 class="sectionTitle">
                    my showcase
                </h2>

                <div class="projects-container">
                    { projects.map((project) => (
                        <a key={ project.id } target="blank" href={ project.link } class="project">
                            <span class="ribbon">
                                { project.status }
                            </span>
                            <div class="projectIcon">
                                <img src={ project.img } alt={ project.name } />
                            </div>
                            <div class="projectTitle">
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