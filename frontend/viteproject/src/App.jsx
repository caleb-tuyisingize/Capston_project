import AddCourse from "./components/AddCourse";
import AdminForm from "./components/AdminForm";
import Login from "./components/Login";
import NavigationMenu from "./components/Navbar";
import RegisterStudent from "./components/RegisterStudent";
import ViewCourses from "./components/ViewCourses";
import WelcomePage from "./components/WelcomePage";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
   
        <NavigationMenu />

        <div >
          <Routes>
            <Route path="/" element={<AdminForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register-student" element={<RegisterStudent />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/add-course" element={<AddCourse />} />
            <Route path="/view-courses" element={<ViewCourses />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
