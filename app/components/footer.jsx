import Link from "next/link";

const Footer = ({ socialsfriends, socialsformal }) => {
    return (

        <footer id="contact" className="page-footer flex flex-col gap-4 py-4 px-2">
            <h1 className="text-3xl text-center font-bold text-[#b071ff]">Fahd Ashour</h1>

            <div className="flex flex-col items-center">
                <h2 className="text-xl text-center font-light dark:text-slate-400 max-sm:text-base">
                    wanna connect and be friends? check out my social media
                </h2>

                <div className="flex justify-center gap-6 my-3">
                    {socialsfriends.map((socialfriends) => (
                        <Link key={socialfriends.id} href={socialfriends.link} title={socialfriends.name} className="text-2xl duration-300 hover:text-violet-500 focus:text-violet-500 active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-300  ">
                            <i className={"fa-brands fa-" + socialfriends.name} ></i>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-center">
                <h2 className="text-xl text-center font-light dark:text-slate-400 max-sm:text-base">
                    or formally as professionals
                </h2>

                <div className="flex justify-center gap-6 my-3">
                    {socialsformal.map((socialformal) => (
                        <Link key={socialformal.id} href={socialformal.link} title={socialformal.name} className="text-2xl duration-300 hover:text-violet-500 focus:text-violet-500 active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-300  ">
                            <i className={"fa-brands fa-" + socialformal.name} ></i>
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer;