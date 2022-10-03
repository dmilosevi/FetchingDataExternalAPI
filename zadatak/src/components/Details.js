import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from "react";


const Details = () => {
    const {id} = useParams();
    const [persondetails, setpersondetails] = useState(null)
    useEffect(() => {
        getdetails()
    }, [])
    const getdetails = () => {
        fetch("https://jsonplaceholder.typicode.com/users/" + id)
            .then(res => res.json())
            .then(
                (result) => {                    
                    setpersondetails(result)
                    console.log(result)
                },
                (error) => {
                    setpersondetails(null);
                }
            )
    }
    if (!persondetails) return (<div>No Record Found</div>)
    return (<div>
        <h2>Details about: {persondetails.name}</h2>
        <table className="dtable" >
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Street</th>
                    <th>Suite</th>
                    <th>City</th>
                    <th>Zipcode</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company name</th>
                </tr>
            </thead>
            <tbody>
                <tr key={persondetails.id}>
                    <td>{persondetails.username}</td>
                    <td>{persondetails.email}</td>
                    <td>{persondetails.address.street}</td>
                    <td>{persondetails.address.suite}</td>
                    <td>{persondetails.address.city}</td>
                    <td>{persondetails.address.zipcode}</td>
                    <td>{persondetails.phone}</td>
                    <td>{persondetails.website}</td>
                    <td>{persondetails.company.name}</td>
                </tr>        
            </tbody>
        </table>
    </div>)
}

export default Details;

