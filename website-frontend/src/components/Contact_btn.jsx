const Contact_btn = ({ text, url }) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <div className="inline-block mt-4">
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-gray-800 text-green-400 font-semibold rounded-md shadow-md focus:outline-none hover:text-white transition-colors text-base cursor-pointer hover:bg-gray-700"
      >
        {text}
      </button>
    </div>
  );
};

export default Contact_btn;