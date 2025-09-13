function Research() {
    return (
      <section id="research" className="bg-gray-100 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600">Research Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Artificial Intelligence</h3>
            <p className="text-gray-600">Exploring applications of AI in agriculture, healthcare, and education.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Machine Learning</h3>
            <p className="text-gray-600">Developing models for predictive analytics and decision support systems.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">IoT & Smart Systems</h3>
            <p className="text-gray-600">Building sensor-based systems for real-time environmental monitoring.</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default Research;
  