import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./page/LandingPage/LandingPage";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "./Firebase/firebase";





const App = () => {
  // const [user] = useAuthState(auth);
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
           
        </Routes>
      </Router>
    
  );
};

export default App;