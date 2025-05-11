import { useState } from "react";
import fetched from "../AP/student";


const DisplayStudent  = () => {
    const [data,setData] = useState([{}]);
    const [search,setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
        console.log(search);
    }
    const handledata = async () => {
        try {
            const {data} = await fetched();
            setData(data);
        } catch (e) {
           console.error(e.mssg) 
        }
    }
    handledata()

        const border = {
            border : "1px solid black",
            marginLeft : "200px",

        }
    return (
        <>
        <center>
            <input type="text" name="" onChange={handleSearch}/><br /><br />
                <table style={border}>
                    <thead>
                <tr >
                    <th>ID</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Sid</th>
                    <th>Email</th>
                    <th>DOB</th>
                    <th>ContactNo</th>
                    <th>En_Date</th>
                    <th>ProfilePic</th>
                </tr>
                </thead>
                        {data.filter((data) => {
                                 return search.toLowerCase() === '' ? data : data.firstname.toLowerCase().includes(search) ||
                                 search.toUpperCase() === '' ? data : data.firstname.toUpperCase().includes(search) 
}).map((stu,index) => (  
            <tr key={index}>
                    <td>{stu.sid}</td>
                    <td>{stu.firstname}</td>
                    <td>{stu.lastname}</td>
                    <td>{stu.student_id}</td>
                    <td>{stu.email}</td>
                    <td>{stu.dob}</td>
                    <td>{stu.contact_number}</td>
                    <td>{stu.en_date}</td>
                    <td>{stu.profile_pic}</td>
                    <td><button type="button" onClick={(e) => {
                    return alert("ready to update")
                    }}>Update</button></td>
                    <td><button type="button" onClick={(e) => {
                    return alert("ready to Delete something")
                    }}>Delete</button></td>
                   


            </tr>



))}
                

            </table>
            </center>
        </>

    );
}

export default DisplayStudent;



 