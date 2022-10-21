import { useState } from "react";

const CreateUser = () => {

    const [name,setName] = useState('')
    const [age,setAge] = useState()
    const [team,setTeam] = useState('')


    const handleSubmit = (e)=>{
        e.preventDefault()
        const user = {name,age,team}

        fetch('http://localhost:4000/api/users',{
            method:'POST',
            headers:{"Content-Type" : "application/json"},
            body : JSON.stringify(user)
        }).then(()=>{
            console.log("New Blog Added")
        })
    


    }

    return ( 
        <div className="create">
            <h2>Add New User</h2>
            <form onSubmit={handleSubmit}>
                <label>Enter Name:</label>
                <input type="text" required value={name} onChange={(e)=>{
                    setName(e.target.value)
                }}/>

                <label>Enter Age:</label>
                <input type="number" required value={age} onChange={(e)=>{
                    setAge(e.target.value)
                }} />

                <label>Enter The Team You Support:</label>
                <input type="text" required value={team} onChange={(e)=>{
                    setTeam(e.target.value)
                }} />

                <button>Add User</button>
            </form>
        </div>
     );
}
 
export default CreateUser;