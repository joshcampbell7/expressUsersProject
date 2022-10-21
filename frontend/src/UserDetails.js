import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const UserDetails = () => {
    const {userID} = useParams()
    const {data:user,isPending,error} = useFetch('http://localhost:4000/api/users/' + userID)


    return ( 
        <div className="user-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <h2>User Details for {user.userID}</h2>
            {user && (
                <article>
                    <h2>{user.name}</h2>
                    <h3>{user.age}</h3>
                    <h3>{user.team}</h3>
                </article>
            ) }
        </div>
     );

}
 
export default UserDetails;