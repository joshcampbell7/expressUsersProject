import { Link } from "react-router-dom";

const PeopleList  = ({persons,title,handleDelete}) => {

    return (  
        <div className="people-list">
            <h1>{title}</h1>
            {persons.map((person)=>(
                <div className="name-preview" key={person.userID}>
                    <Link to={`/users/${person.userID}`}>
                        <h2>{person.name}</h2>
                    </Link>
                    <h2>{person.age}</h2>

                </div>
            ))}
        </div>
    );
}
 
export default PeopleList ;