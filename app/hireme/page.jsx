export default function HireMe() {
    return (
        <>
            <section className="hire">
                <div className="flex flex-col max-w-3xl mx-auto">
                    <div className="flex flex-col text-center gap-2 mb-2">
                        <h2 className="sectionTitle !m-0">Hire Me</h2>
                        <p className="text-slate-400 font-semibold">If you are looking for a professional and reliable web developer, you have come to the right place. I can help you in:</p>
                    </div>

                    <div className="flex flex-col">
                        <div className="spec-item flex flex-col gap-3 my-5 text-center">
                            <header>
                                <h3 className="text-lg lg:text-3xl font-semibold">Front-End Web Development</h3>
                                <p className="text-slate-300">I will help you in  transforming your designs or ideas into dynamic, adaptable, responsive , efficient, user-friendly and future-proof web pages.</p>
                            </header>

                            <ul className="my-3 ps-6 space-y-2 text-start list-disc">
                                <li>Implementing your .PSD files, Sketches, Ideas into a real website</li>
                                <li>Developing responsive and interactive web pages that work well on different devices and browsers.</li>
                                <li>Using the latest web technologies and frameworks to ensure your website is fast, secure and easy to maintain.</li>
                                <li>Implementing web accessibility and SEO best practices to make your website more user-friendly and visible.</li>
                                <li>Troubleshooting and fixing any issues or bugs that may arise on your website.</li>
                            </ul>
                            <p className="text-slate-100">I have years of experience in web development and a portfolio of successful projects to showcase my skills and expertise. I am passionate about web design and development and always eager to learn new things and improve my craft.</p>
                            <p className="text-slate-100">If you are interested in hiring me, please contact me and let me know more about your project. I would love to hear from you and discuss how I can help you achieve your goals. Thank you for your consideration and I hope to hear from you soon.</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}