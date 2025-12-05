import { motion } from "framer-motion";
import portfolioData from "../content";
import Contact_btn from "./Contact_btn";

const Hero = () => (
  <section
    id="hero"
    className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-green-50 via-white to-white pt-16"
  >
    {/* Background Elements */}
    <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
    <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />

    <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 relative"
      >
        <div className="absolute inset-0 bg-green-400 rounded-full blur-lg opacity-20" />
        <img
          className="rounded-full h-40 w-40 sm:h-52 sm:w-52 object-cover ring-4 ring-white shadow-2xl relative z-10"
          src="https://avatars.githubusercontent.com/u/122210726?v=4"
          alt="profile"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight"
      >
        ML Engineer | <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Optimizing</span> the hell out of transformers.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-xl sm:text-2xl text-gray-600 mb-4 max-w-2xl font-light"
      >
        {portfolioData.about.intro}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-lg sm:text-xl text-gray-500 mb-10 max-w-2xl"
      >
        {portfolioData.about.focus}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Contact_btn text="Get in Touch" url="/contact" />
      </motion.div>
    </div>
  </section>
);

export default Hero;
