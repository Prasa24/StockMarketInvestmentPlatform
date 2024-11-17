import Login from "./Components/Login";
import Register from "./Components/Register"
import Forgotpassword from "./Components/Forgotpassword";
import Resetpassword from "./Components/Resetpassword";

import { BrowserRouter, Route,Routes  } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Otpverify from "./Components/Otpverify";

function App()
{

  return(
    <div className="w-full h-screen bg">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/forgotpassword" element={<Forgotpassword />}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/reset password" element={<Resetpassword/>}/>
          <Route path="/otpverify" element={<Otpverify/>}/>
          <Route path="/resetpassword" element={<Resetpassword/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}
export default App;
