import { useContext } from "react";
import { GlobalContext } from "../../context/context.mjs";
import axios from "axios";
import { BoxArrowLeft} from "react-bootstrap-icons";
import { baseURL } from '../../core.mjs';
import './profile.css'

const Profile = () =>{
    let {state, dispatch} = useContext(GlobalContext);
    console.log(state);

    const logoutHandler = async () =>{
        try{
            await axios.post(`${baseURL}/api/v1/logout` , {} , {
                withCredentials: true
            });
            dispatch({
                type: "USER_LOGOUT",
            });
        }catch(e){
            console.log(e);
        }
    }

    return(
       <div>
        <div className="info">
            <h3>{(state.user.firstName)} {(state.user.lastName)}</h3>
        </div>
        <div className="dropdown" id="dropDown">
            <button className="drop-down" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <p id="p" className="bi bi-three-dots-vertical dots"></p>
            </button>
            <ul className="dropdown-menu">
                <li className="list"><button onClick={logoutHandler}><BoxArrowLeft/> LOGOUT</button></li>
            </ul>
        </div>
       </div>
    )
}

export default Profile;