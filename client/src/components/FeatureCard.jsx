function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
      <div className="text-4xl mb-4">{icon}</div>

      <h3 className="text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="text-gray-400 mt-3">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;