function WhyCard({ icon, title, description }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 hover:scale-105 transition duration-300">
      <div className="text-4xl">{icon}</div>

      <h3 className="text-2xl text-white font-semibold mt-4">
        {title}
      </h3>

      <p className="text-gray-400 mt-3">
        {description}
      </p>
    </div>
  );
}

export default WhyCard;