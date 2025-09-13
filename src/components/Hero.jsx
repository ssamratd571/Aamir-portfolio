function Hero() {
    return (
      <section
        id="hero"
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center px-6"
      >
        <h1 className="text-5xl font-bold mb-4">Dr. [Your Name]</h1>
        <p className="text-xl mb-6">Assistant Professor | Researcher | Mentor</p>
        <a
          href="#contact"
          className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          Get in Touch
        </a>
      </section>
    );
  }
  
  export default Hero;
  