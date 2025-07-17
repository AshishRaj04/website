import { useRef, useState } from "react";
import emailjs from "../services/emailjs";

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');
        setMessage('');

        // These would be your actual EmailJS credentials
        const serviceID = 'YOUR_SERVICE_ID';
        const templateID = 'YOUR_TEMPLATE_ID';
        const userID = 'YOUR_USER_ID';

        // Create templateParams from form data
        const templateParams = {
            from_name: form.current.from_name.value,
            from_email: form.current.from_email.value,
            message: form.current.message.value,
        };

        emailjs.send(serviceID, templateID, templateParams, userID)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                setMessage('Your message has been sent successfully!');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setMessage(`Failed to send message. ${error.text || 'Please try again later.'}`);
            });
    };

    return (
        <section id="contact" className="py-20 sm:py-24 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Get In Touch</h2>
                <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
                    Have a question or want to work together? Feel free to reach out.
                </p>
                <div className="mt-12 max-w-lg mx-auto">
                    <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-y-6">
                        <div>
                            <label htmlFor="from_name" className="sr-only">Full name</label>
                            <input type="text" name="from_name" id="from_name" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Full name" />
                        </div>
                        <div>
                            <label htmlFor="from_email" className="sr-only">Email</label>
                            <input id="from_email" name="from_email" type="email" required autoComplete="email" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Email" />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea id="message" name="message" rows="4" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md" placeholder="Message"></textarea>
                        </div>
                        <div>
                            <button type="submit" disabled={status === 'sending'} className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400">
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                    {message && (
                        <div className={`mt-4 text-center p-3 rounded-md ${status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {message}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;