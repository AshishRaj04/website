import { ArrowRight } from "lucide-react";

const Contact_btn = ({ text, url }) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <div className="inline-block mt-4">
      <button
        onClick={handleClick}
        className="group relative px-8 py-3 bg-gray-900 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
      >
        <span className="relative z-10 flex items-center">
          {text}
          <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>
    </div>
  );
};

export default Contact_btn;