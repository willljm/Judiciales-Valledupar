import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../public/cropped-cropped-cropped-cropped-logo-judiciales-valledupar-e1678684785552-removebg-preview.png';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-red-50 to-red-100 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 group">
              <img src={Logo} alt="Logo" className=" h-12" />
            </div>
            <p className="text-sm">Su fuente confiable para las últimas noticias y actualizaciones de todo el mundo.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-600 dark:text-red-500">Quick Links</h3>
            <ul className="space-y-2">
              {['Sobre nosotros', 'Contacto', 'Terms of Use', 'Privacy Policy'].map(link => (
                <li key={link}>
                  <Link to="/" className="text-sm hover:text-red-600 dark:hover:text-red-500 transition-colors duration-200">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-600 dark:text-red-500">Categorias</h3>
            <ul className="space-y-2">
              {['Judiciales', 'Regionales', 'Valledupar', 'Comunidad', 'Nacionales', 'Internacionales', 'Farandula', 'Cesar'].map(category => (
                <li key={category}>
                  <Link to="/" className="text-sm hover:text-red-600 dark:hover:text-red-500 transition-colors duration-200">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-600 dark:text-red-500">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 group">
                <Mail className="h-5 w-5 text-red-600 dark:text-red-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">judicialesvalledupar@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2 group">
                <Phone className="h-5 w-5 text-red-600 dark:text-red-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">+57 301 001 0001</span>
              </li>
              <li className="flex items-center space-x-2 group">
                <MapPin className="h-5 w-5 text-red-600 dark:text-red-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">La nevada, Calle 44 # 12-15</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-200 dark:border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Judiciales Valledupar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}