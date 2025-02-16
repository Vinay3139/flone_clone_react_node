import './App.css';
import Navbar from './components/common/navbar/navbar';
import LoginRegister from './components/loginRegister/loginRegister';
import "react-toastify/dist/ReactToastify.css"
function App() {
  return (
    <>
    <Navbar/>
    <LoginRegister/>
    
    </>
  );
}

export default App;
