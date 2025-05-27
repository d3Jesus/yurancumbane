import ConfettiExplosion from "react-confetti-explosion";
import { useState } from "react";
import emailjs from "@emailjs/browser"
import Spinner from "../Spinner";

const Contact = () => {
    const [sentSucceeded, setSentSucceeded] = useState(false);
    const [sentFailed, setSentFailed] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function isValidToSent() {
        if (name.length === 0 || email.length === 0 || message.length === 0)
            return false

        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSending(true);
        if (!isValidToSent()) {
            setSentFailed(true)
            setErrorMessage('Fill all the fields')
            setIsSending(false);
            return
        }

        const templateParams = {
            name: name,
            email: email,
            message: message
        }

        emailjs.send(
            import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
            import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
        ).then(() => {
            setSentSucceeded(true);
            setSentSucceeded("Message sent successfuly")

            setName('')
            setEmail('')
            setMessage('')
        }).catch((error) => {
            console.log(error)
            setSentFailed(true)
        });

        setTimeout(() => {
            setIsSending(false);
            setSentSucceeded(false);
            setSentFailed(false);
        }, 3000);
    };

    return (
        <main className="bg-gray">
            <section className="section container" id="contact">
                <div className="section-title" data-aos="fade-up" data-aos-delay="100">
                    <h2>Get In Touch</h2>
                    <span className="mt-o pt-0">Let's Create Something Amazing Together.</span>
                </div>
                <div className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">
                    <form className="col-6" onSubmit={handleSubmit}>
                        {sentSucceeded && <ConfettiExplosion force={0.8} width={1600} particleCount={250} duration={3000} />}
                        {sentFailed && <><p className="text-danger">{errorMessage}</p></>}

                        <div className="form-group mb-2">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" name="name" id="name" className="form-control" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" name="email" id="email" className="form-control" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea type="text" name="message" id="message" className="form-control" placeholder="Your message" rows={10} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>

                        <button type="submit" className="shiny-cta d-grid w-100 mt-4" disabled={isSending}>
                            {isSending ? <Spinner /> : <span>Send Message</span>}
                        </button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Contact
