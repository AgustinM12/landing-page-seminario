import logo from '../../assets/images/logo1.png';



const MyFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <img src={logo} alt="Logo" className="h-20 w-35" />
        <p className="mb-4">Equipo codeTrain</p>
        <ul className="flex justify-center space-x-4 mb-4">
          <li><a href="#" className="hover:text-gray-400">Inicio</a></li>
          <li><a href="#" className="hover:text-gray-400">Acerca de</a></li>
          <li><a href="#" className="hover:text-gray-400">Contacto</a></li>
        </ul>
        <p className="text-sm text-gray-400">&copy; 2024 CodeTrain. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default MyFooter;