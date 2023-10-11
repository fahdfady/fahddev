import Image from "next/image";

const Information = ({ information }) => {

    return (
        <section className="about" id="about">
            {information.map((info) => (
                <div className="flex flex-wrap justify-center items-center" key={info.id}>
                    <div className="flex flex-col justify-center w-full md:w-1/2 md:order-none order-5">
                        <p className="mb-2 font-medium text-xl max-md:text-lg">
                            "
                            {info.text}
                            "
                        </p>

                        <div className="authorInfo">
                            <p className="ml-2 text-[#d0ccd6] font-semibold text-lg max-md:text-sm">
                                {info.jobTitle}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full md:w-1/2 p-4">
                        {/* <img src={info.pic} alt="Personal Picture" className="image" /> */}
                        <Image src={"undraw_programming.svg"}
                            width={400} height={250}
                            alt={"presonal picture"}
                            quality={80}
                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        // sizes="(max-width: 768px) 100vw"
                        />
                    </div>
                </div>
            ))}

        </section>
    )
}

export default Information;