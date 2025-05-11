import {BrowserRouter as Router,Routes, Route,Link} from "react-router-dom";

function Header(){

    return(
        <>
                <nav>
          <Link to="/">Home</Link>|{" "}
          <Link to="/addStudent">Add Student</Link>|{" "}
          <Link to="/AllStudents"><button>All Students</button></Link>
        </nav>
        </>
    );
}

export default Header