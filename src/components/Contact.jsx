function Contact() {
    return (
      <section id="contact" className="bg-indigo-600 text-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-4">📧 Email: <a href="mailto:your@email.com" className="underline">your@email.com</a></p>
          <p className="mb-4">🏫 Department of [Your Department], [Your University]</p>
          <p className="mb-4">🌐 <a href="https://your-website.com" target="_blank" className="underline">your-website.com</a></p>
        </div>
      </section>
    );
  }
  
  export default Contact;
  