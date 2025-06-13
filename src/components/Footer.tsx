
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-iron-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-playfair font-bold mb-6">MAM Taller</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Diseño y producción de herrería y mobiliario con madera. 
              Creamos piezas únicas que combinan funcionalidad, 
              estética y calidad artesanal.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-iron-800 p-3 rounded-full hover:bg-iron-700 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-wood-400" />
                <span className="text-gray-300">Guadalajara, Jalisco, México</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-wood-400" />
                <span className="text-gray-300">+52 (33) 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-wood-400" />
                <span className="text-gray-300">contacto@mamtaller.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Diseño de mobiliario personalizado</li>
              <li>Herrería arquitectónica</li>
              <li>Estructuras habitacionales</li>
              <li>Restauración de muebles</li>
              <li>Consultoría en diseño</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-iron-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 MAM Taller. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
