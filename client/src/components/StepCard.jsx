function StepCard({ number, title, description }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 text-center hover:scale-105 transition duration-300">
      <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold mx-auto text-white">
        {number}
      </div>

      <h3 className="text-2xl font-semibold text-white mt-5">
        {title}
      </h3>

      <p className="text-gray-400 mt-3">
        {description}
      </p>
    </div>
  );
}

export default StepCard;