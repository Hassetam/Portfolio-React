import Button from "./Button";
import Title from "./Title";
import {buttons, sectionTitles} from "../data.js";
import '../styles/Contact.css';

function Contact() {
    return (
        <div className="contact-form">

            < Title {...sectionTitles.contact} />

            <h2>Send a Message</h2>

            <form>
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Ababa"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="ababa@gmail.com"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        placeholder="Hi Abebe, I'd love to..."
                    />
                </div>

                <Button {...buttons.contact} />
                
            </form>
        </div>
    );
}

export default Contact;