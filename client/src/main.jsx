
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { App } from './pages/App'
import { Index } from '../src/pages/Index.jsx'
import { LoginForm } from '../src/pages/Login.jsx'
import { RegisterForm } from '../src/pages/Register.jsx'
import "../src/App.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>} />
      <Route path="/App" element={<App />} /> 
      <Route path="/login" element={<LoginForm />} />  
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  </BrowserRouter>
 
)
