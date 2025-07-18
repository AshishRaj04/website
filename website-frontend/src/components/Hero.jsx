import portfolioData from "../content";
import Contact_btn from "./Contact_btn";

const Hero = () => (
  <section
    id="about"
    className="py-24 font-sans bg-gradient-to-b from-green-50 via-white to-white"
  >
    <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
      <img
        className="rounded-full h-36 w-36 sm:h-48 sm:w-48 object-cover ring-4 ring-gray-100 shadow-xl mb-8"
        src="https://avatars.githubusercontent.com/u/122210726?v=4"
        alt="profile"
      />
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
        ML Engineer | Optimizing the hell out of transformers.
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 mb-2 max-w-2xl">
        {portfolioData.about.intro}
      </p>
      <p className="text-lg sm:text-xl text-gray-700 mb-6 max-w-2xl">
        {portfolioData.about.focus}
      </p>
      <Contact_btn text="Get in Touch" url="/contact" />
    </div>
  </section>
);

export default Hero;
