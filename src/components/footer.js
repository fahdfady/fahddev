const Footer = ({ socials }) => {
    return (

        <footer className="page-footer">

            <div class="footer-container">
                <p class="name">
                    Fahd Fady
                </p>

                <ul class="socialMedia">


                    { socials.map((social) => (
                        <li key={ social.id }>
                            <a href={ social.link } target="_balnk">
                                <i class={ "fab fa-" + social.name }></i>
                            </a>
                        </li>
                    )) }

                </ul>

                <p class="email">
                    fahd.fady212@gmail.com
                </p>
            </div>
        </footer >
    )
}

export default Footer;