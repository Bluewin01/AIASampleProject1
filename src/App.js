import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, OTPCode, Settings, EmailEditor } from "./containers";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="otp" element={<OTPCode />} />
        <Route element={<Home />}>
          <Route path="email" element={<EmailEditor />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
