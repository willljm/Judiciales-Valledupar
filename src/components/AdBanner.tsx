
import Publicidad from '../public/publicidad.jpg';
import Publicidad2 from '../public/otrapublicidad.jpg';
export default function AdBanner() {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-md flex items-center justify-center flex-col gap-4">
      <div className="text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Advertisement</p>
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg min-h-[250px] flex items-center justify-center">
          <img src={Publicidad} alt="Publicidad" className="h-full w-auto" />
        </div>
      </div>

      <div className="text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Advertisement</p>
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg min-h-[100px] flex items-center justify-center">
          <img src={Publicidad2} alt="Publicidad" className="h-full w-auto" />
        </div>
      </div>
    </div>
    
  );
}