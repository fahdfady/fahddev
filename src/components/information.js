const Information = ({ information }) => {
    return (
        <section className="container info" id="info">
            <div className="content">
                { information.map((info) => (
                    <div className="info-container" key={ info.id }>
                        <div className="textFeild">
                            <p className="text">
                                "
                                { info.text }
                                "
                            </p>

                            <div className="authorInfo">
                                <p className="authorName">
                                    Fahd Fady
                                </p>
                                <p className="authorJob">
                                    { info.jobTitle }
                                </p>

                            </div>
                        </div>
                        <div className="imageFeild">
                            <img width="528" height="443" src={ info.pic } alt="Personal Picture" className="image" />
                        </div>
                    </div>
                )) }

            </div>
        </section>
    )
}

export default Information;
