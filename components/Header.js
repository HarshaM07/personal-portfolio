// components/Header.js
import Link from 'next/link';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <nav className="container mx-auto flex justify-between">
      <Link href="/" className="mr-4 hover:text-gray-300">Home</Link>
      <Link href="/Project" className="mr-4 hover:text-gray-300">Projects</Link>
      <Link href="/skills" className="mr-4 hover:text-gray-300">Skills</Link>
      {/* <Link href="/Project" className="mr-4 hover:text-gray-300">Projects</Link> */}
      <Link href="/education" className="mr-4 hover:text-gray-300">Education</Link>
      <Link href="/contact" className="hover:text-gray-300">Contact</Link>
    </nav>
  </header>
);

export default Header;
