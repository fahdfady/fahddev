import Image from "next/image";

const Skills = ({ skills }) => {
    return (
        <section className="skills" id="skills">
            <div className="content">
                <h2 className="sectionTitle">
                    my skills
                </h2>

                <div className="skills-container">
                    {skills.map((skill) => (
                        <a key={skill.id} href={skill.link} target="blank" className="skill max-lg:w-1/5">
                            <div className="skillIcon">
                                <Image
                                    src={skill.img} alt={skill.name}
                                    width={150} height={150}
                                    quality={50}
                                    priority={false} />
                            </div>
                            <div className="skillTitle">
                                {skill.name}
                            </div>
                        </a>
                    ))}


                </div>
            </div>
        </section>
    )
}

export default Skills;