const Footer = ({ socials }) => {
    return (

        <footer className="page-footer">

            <div className="footer-container">
                <p className="name">
                    Fahd Fady
                </p>

                <ul className="socialMedia">


                    { socials.map((social) => (
                        <li key={ social.id }>
                            <a href={ social.link } target="_balnk">
                                <i className={ "fab fa-" + social.name }></i>
                            </a>
                        </li>
                    )) }

                </ul>

                <p className="email">
                    fahd.fady212@gmail.com
                </p>
            </div>
        </footer >
    )
}

export default Footer;