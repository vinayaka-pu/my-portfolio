import DarkModeToggle from './DarkModeToggle';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-bohoBeige dark:bg-bohoDarkGreen shadow-md z-50">
  <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-bohoGreen dark:text-bohoBeige">Vinayaka</h1>
    <div className="flex items-center space-x-4">
      <ul className="hidden sm:flex space-x-6 text-gray-700 dark:text-gray-200 font-medium">
        <li><a href="#home" className="hover:text-bohoGreen dark:hover:text-bohoBeige">Home</a></li>
        <li><a href="#about" className="hover:text-bohoGreen dark:hover:text-bohoBeige">About</a></li>
        <li><a href="#projects" className="hover:text-bohoGreen dark:hover:text-bohoBeige">Projects</a></li>
        <li><a href="#contact" className="hover:text-bohoGreen dark:hover:text-bohoBeige">Contact</a></li>
      </ul>
      <DarkModeToggle />
    </div>
  </div>
</nav>

  );
}