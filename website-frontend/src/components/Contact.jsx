import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "../lib/utils";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const public_key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, public_key).then(
      (result) => {
        setStatus("success");
        setMessage("I will get back to you shortly.");
        form.current.reset();
        setTimeout(() => {
          setStatus("");
          setMessage("");
        }, 5000);
      },
      (error) => {
        setStatus("error");
        setMessage(
          `Failed to send message. ${error.text || "Please try again later."}`
        );
      }
    );
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-gradient-to-b from-white via-green-50/30 to-white font-sans relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-green-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
          >
            <div>
              <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-1">
                Full name
              </label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                required
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-colors py-3 px-4 bg-gray-50/50"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="from_email"
                name="from_email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-colors py-3 px-4 bg-gray-50/50"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-colors py-3 px-4 bg-gray-50/50 resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={status === "sending"}
                className={cn(
                  "w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-semibold text-white transition-all duration-200",
                  status === "sending"
                    ? "bg-green-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700 hover:shadow-md hover:-translate-y-0.5"
                )}
              >
                {status === "sending" ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          <AnimatePresence>
            {message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={cn(
                  "mt-6 p-4 rounded-lg flex items-center justify-center text-sm font-medium",
                  status === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                )}
              >
                {status === "success" ? (
                  <CheckCircle className="w-5 h-5 mr-2" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-2" />
                )}
                {message}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
