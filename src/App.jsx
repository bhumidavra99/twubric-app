import './App.css'
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './routes/AllRoutes';
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css";

function App() {
  

  return (
     <BrowserRouter>
     <AllRoutes/>
     </BrowserRouter>
  )
}

export default App
