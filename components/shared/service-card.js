const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;