const Information = ({ information }) => {
    return (
        <section className="container info" id="info">
            <div className="content">
                <div className="info-container">
                    <div className="textFeild">
                        <p className="text">
                            "
                            { information.text }
                            "
                        </p>

                        <div className="authorInfo">
                            <p className="authorName">
                                Fahd Fady
                            </p>
                            <p className="authorJob">
                                { information.jobTitle }
                            </p>

                        </div>
                    </div>
                    <div className="imageFeild">
                        <img src={ information.pic } alt="Personal Picture" className="image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Information;
