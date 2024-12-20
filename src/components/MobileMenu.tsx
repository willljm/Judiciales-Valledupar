import React from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 p-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold dark:text-white">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
          >
            <X className="h-5 w-5 dark:text-white" />
          </button>
        </div>

        <nav className="space-y-4">
          <Link
            to="/"
            className="block text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            onClick={onClose}
          >
            World
          </Link>
          <Link
            to="/"
            className="block text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            onClick={onClose}
          >
            Politics
          </Link>
          <Link
            to="/"
            className="block text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            onClick={onClose}
          >
            Technology
          </Link>
          <Link
            to="/"
            className="block text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            onClick={onClose}
          >
            Sports
          </Link>
          <Link
            to="/"
            className="block text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            onClick={onClose}
          >
            Entertainment
          </Link>
        </nav>
      </div>
    </div>
  );
}