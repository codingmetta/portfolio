export default function Contact() {
    return (
        <section className="flex flex-row gap-4 md:gap-16">
            <figure>
                <img className="img-contact shape" src="images/avatar.JPG" alt="Portrait of Talia Deckardt" />
            </figure>

            <p className="font-extralight flex flex-col justify-around">
                <div>
                    <h2 className="author-heading" > Talia Deckardt</h2>
                    <h3 className="author-subheading" > Developer*in</h3>
                </div>
                <div className="flex flex-col">
                    <a href="mailto:talia.deckardt@proton.me" className="contact-link"> Kontakt</a>
                    <a href="https://www.linkedin.com/in/talia-deckardt-51359b1a5/" className="contact-link" > LinkedIn</a>
                </div>
            </p>
        </section>
    );
}