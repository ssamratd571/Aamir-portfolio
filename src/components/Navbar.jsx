function Navbar() {
    return (
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-600">Dr. [Your Name]</h1>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-indigo-600">About</a></li>
            <li><a href="#research" className="hover:text-indigo-600">Research</a></li>
            <li><a href="#publications" className="hover:text-indigo-600">Publications</a></li>
            <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  