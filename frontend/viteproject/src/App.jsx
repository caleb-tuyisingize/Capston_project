import {BrowserRouter as Router,Routes, Route,Link} from "react-router-dom";
import AdminForm from "./components/AdminForm";
import AdminList from "./components/AdminList";
import Home from "./Home.jsx";
import Header from "./Header.jsx";
import AddStudent from "./landing-page/AddStudent.jsx";
import AllStudents from "./landing-page/AllStudents.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div>
      {/* <AdminForm /> */}
      <Router>
<Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/AddStudent" element={<AddStudent/>} />
          <Route path="/AllStudents" element={<AllStudents/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
