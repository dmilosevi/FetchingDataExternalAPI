import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

const Userlist = () => {
    const [userlist, setuser] = useState(null)
    useEffect(() => {
        getuser()
    }, [])
    const getuser = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(
                (result) => {                    
                    setuser(result)
                },
                (error) => {
                    setuser(null);
                }
            )
    }
    if (!userlist) return (<div>No Record Found</div>)
    return (<div>
        <h2>Users</h2>
        <table className="table" >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {userlist.map(person => (
                    <tr key={person.id}>
                        <td>{person.id}</td>
                        <td>{person.name}</td>
                        <td><button><Link to={`/details/${person.id}`}>Details</Link></button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>)
}

export default Userlist;
