import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicLayout from './components/layouts/PublicLayout'
import Login from './components/layouts/Login';
import Settings from './components/layouts/Settings';
import OTPCode from './components/layouts/OTPCode';

function App() {
  return (

   <Router> 
      <Routes>
        <Route exact path="/" element={<Login/ >} />
        <Route path="/otp" element={<OTPCode/ >} />
        <Route path="/home" element={<PublicLayout/ >} />
        <Route path="/settings" element={<Settings/ >} />
      </Routes>
    </Router>

   
  );
}

export default App;
