import svgicon from '../assets/undraw_programming.svg';

const Information = ({ information }) => {
    return (
        <section className="about" id="about">
            <div className="content p-4">
                {information.map((info) => (
                    <div className="info-container max-sm:flex-col max-sm:items-center max-sm:gap-4" key={info.id}>
                        <div className="textFeild max-sm:w-full max-sm:order-5">
                            <p className="flex mb-2 font-medium text-xl max-md:text-lg">
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
                        <div className="imageFeild flex items-center p-[50px] max-w-[60%] max-sm:max-w-full">
                            {/* <img src={info.pic} alt="Personal Picture" className="image" /> */}
                            <img src={svgicon} alt="Personal Picture" className="image" />
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Information;
