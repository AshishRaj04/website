import portfolioData from "../content";

const About = () => (
  <section id="about" className="py-20 sm:py-24">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
      <div className="md:col-span-2 space-y-4 text-gray-700">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{portfolioData.title}</h1>
        <p className="text-lg">{portfolioData.about.intro}</p>
        <p className="text-lg">{portfolioData.about.focus}</p>
        <p className="text-lg">{portfolioData.about.experience}</p>
        <p className="text-lg">{portfolioData.about.passion}</p>
        <p className="text-lg">{portfolioData.about.contact}</p>
      </div>
      <div className="flex justify-center md:justify-end">
        <img
          className="rounded-full h-48 w-48 sm:h-64 sm:w-64 object-cover ring-4 ring-white shadow-lg"
          src="https://placehold.co/256x256/EFEFEF/333333?text=You"
          alt="A profile picture of Alex Doe"
        />
      </div>
    </div>
  </section>
);
export default About;