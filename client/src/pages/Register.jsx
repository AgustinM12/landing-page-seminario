
import logo from '../assets/images/logo1.png';
import MyFooter from '../components/layout/Footer.component.jsx'
import CoverParticulas from '../components/layout/Particulas.component.jsx';
export function RegisterForm() {
  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md text-gray-200">
        <img src={logo} alt="logo" className="block mx-auto h-20 w-35" />
        <p className="text-center text-2xl font-bold mb-1">Registro</p>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-gray-400 mb-1">Username</label>
            <input type="text" name="username" id="username" className="bg-gray-700 border border-gray-600 rounded p-2 text-gray-200 focus:outline-none focus:ring focus:ring-blue-700" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="correo electronico" className="text-gray-400 mb-1">Correo Electronico</label>
            <input type="text" name="username" id="username" className="bg-gray-700 border border-gray-600 rounded p-2 text-gray-200 focus:outline-none focus:ring focus:ring-blue-700" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-400 mb-1">Password</label>
            <input type="password" name="password" id="password" className="bg-gray-700 border border-gray-600 rounded p-2 text-gray-200 focus:outline-none focus:ring focus:ring-blue-700" />
            <div className="flex justify-end mt-2">
              <a href="#" className="text-sm text-gray-400 hover:text-blue-800  transition-colors">Te olvidaste tu contraseña?</a>
            </div>
          </div>
          <button className="relative w-full px-5 py-2.5 text-gray-200 font-semibold text-sm uppercase overflow-hidden transition-transform transform bg-blue-900 border border-blue-900 rounded-md hover:bg-blue-700 hover:shadow-lg hover:ring-10 hover:ring-blue-800">
            <span className="absolute inset-10 bg-blue-800 opacity-50"></span>
            <span className="relative">Registrar</span>
          </button>


        </form>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-600"></div>
          <p className="mx-2 text-sm text-gray-400">Registrarme con Gmail</p>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button aria-label="Log in with Google" className="p-2 bg-transparent rounded-full hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 fill-current">
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>
        
        <p className="text-center text-sm text-gray-400 mt-4">¿Ya tienes una cuenta? <a href="/login" className="hover:underline text-blue-800">Login</a></p>
      </div>
      
    </div>
    <CoverParticulas/>
    <MyFooter/>
    </>
  );
  
}
