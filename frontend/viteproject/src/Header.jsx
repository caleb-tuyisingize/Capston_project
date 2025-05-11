import {BrowserRouter as Router,Routes, Route,Link} from "react-router-dom";

function Header(){

    return(
        <>
                <nav>
                    <div className="logo">
                        <h1>L:Tumba College</h1>
                    </div>
                    <div className="links">

          <Link to="/">Home</Link>|{" "}
          <Link to="/addStudent">Add Student</Link>|{" "}
          <Link to="/AllStudents"><button>All Students</button></Link>
                    </div>
        </nav>
        </>
    );
}

export default Header