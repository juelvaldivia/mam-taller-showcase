
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-playfair font-bold text-iron-900">
              MAM Taller
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-iron-700 hover:text-iron-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('mobiliario')}
                className="text-iron-700 hover:text-iron-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Mobiliario
              </button>
              <button
                onClick={() => scrollToSection('herreria')}
                className="text-iron-700 hover:text-iron-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Herrería
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-iron-700 hover:text-iron-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contacto
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-iron-700 hover:text-iron-900 hover:bg-stone-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-stone-200">
              <button
                onClick={() => scrollToSection('inicio')}
                className="block px-3 py-2 text-base font-medium text-iron-700 hover:text-iron-900 w-full text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('mobiliario')}
                className="block px-3 py-2 text-base font-medium text-iron-700 hover:text-iron-900 w-full text-left"
              >
                Mobiliario
              </button>
              <button
                onClick={() => scrollToSection('herreria')}
                className="block px-3 py-2 text-base font-medium text-iron-700 hover:text-iron-900 w-full text-left"
              >
                Herrería
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="block px-3 py-2 text-base font-medium text-iron-700 hover:text-iron-900 w-full text-left"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
