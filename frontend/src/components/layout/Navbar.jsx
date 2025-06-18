// Desktop and mobile navbar hyperlinks remaining


import { useState, useEffect, useRef } from 'react';
import { Menu, X, Package, Wrench, BookOpen, Users } from 'lucide-react';
import logo from '../../assets/logo.png';



const navLinks = [
  { name: 'Products', href: '#', icon: Package },
  { name: 'Services', href: '#', icon: Wrench },
  { name: 'Blogs', href: '#', icon: BookOpen },
  { name: 'About us', href: '#', icon: Users },
];

const Navbar = () => {
  const [active, setActive] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (linkName) => {
    setActive(linkName);
    setIsMenuOpen(false); // Close mobile menu when link is clicked
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Only add event listener if menu is open
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50" ref={navbarRef}>
        <div className="container mx-auto px-6 flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img className="h-12 lg:h-14 w-auto" src={logo} alt="TechAsia Logo" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center font-semibold text-lg">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setActive(link.name)}
                    className={`
                      block px-10 py-2 capitalize transition-colors duration-300
                      ${
                        active === link.name
                          ? 'text-white'
                          : 'text-gray-400 hover:text-white'
                      }
                    `}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center p-2 text-white rounded-lg hover:bg-white hover:bg-opacity-10 focus:outline-none transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 w-64 h-screen bg-white dark:bg-[#2B1515] transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full px-4 py-4 overflow-y-auto">
          {/* Sidebar Header */}
          <div className="flex items-center mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
            <a href="/">
              <img className="h-10 w-auto" src={logo} alt="TechAsia Logo" />
            </a>
            
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="space-y-2 font-medium">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => handleLinkClick(link.name)}
                      className={`
                        flex items-center p-3 rounded-lg transition-colors duration-200 group
                        ${
                          active === link.name
                            ? 'bg-blue-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                            : 'text-red-900 hover:bg-red-100 dark:text-white dark:hover:bg-red-700'
                        }
                      `}
                    >
                      <IconComponent
                        className={`
                          w-5 h-5 transition-colors duration-200
                          ${
                            active === link.name
                              ? 'text-red-700 dark:text-red-300'
                              : 'text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
                          }
                        `}
                      />
                      <span className="ml-3 capitalize">{link.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Navbar;