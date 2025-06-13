
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToMobiliario = () => {
    const element = document.getElementById('mobiliario');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold text-iron-900 mb-8 font-ubuntu">
            MAM Taller
          </h1>
          <p className="text-xl md:text-2xl text-iron-700 mb-4 max-w-3xl mx-auto leading-relaxed">
            Diseño y producción de herrería y mobiliario con mamadera
          </p>
          <p className="text-lg md:text-xl text-iron-600 mb-12 font-light">
            Guadalajara, México
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-iron-800 mb-2">Mobiliario</h3>
              <p className="text-iron-600">Diseños únicos en madera</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-iron-300"></div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-iron-800 mb-2">Herrería</h3>
              <p className="text-iron-600">Estructuras habitacionales</p>
            </div>
          </div>

          <button
            onClick={scrollToMobiliario}
            className="inline-flex items-center space-x-2 bg-iron-900 text-white px-8 py-4 rounded-full hover:bg-iron-800 transition-all duration-300 transform hover:scale-105"
          >
            <span>Ver Proyectos</span>
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
