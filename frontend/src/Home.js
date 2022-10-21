import { useState,useEffect } from "react"
import PeopleList from "./PeopleList";
import useFetch from "./useFetch";


const Home = () => {

    const {data:persons,isPending,error} = useFetch('http://localhost:4000/api/users')

    //This will show a message on the user screen whilst data is being fetched from API

    // const handleDelete = (userID) =>{
    //     const newPersons = persons.filter(person=>person.userID !== userID)
    //         setPeople(newPersons)
        
    // }

    return (  
        <div className="home">
            {error && <div>{error}</div>}
            { isPending && <div>Loading.... </div>}
            {persons && <PeopleList persons={persons} title="All Users"/>}
            {/* <PeopleList persons={persons.filter((person)=> person.name === 'Joshua' )} title="Joshua's details"/> */}
        </div>
    );
}
 
export default Home;