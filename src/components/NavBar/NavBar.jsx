import SearchBar from "../SearchBar/SearchBar"
import { Link, NavLink } from "react-router-dom";


const NavBar = ({ onSearch }) => {
    return(
        <div>
            <SearchBar onSearch={onSearch}/>
            <button>
            <Link to='/about'>A about</Link> 
            </button>
            <button>
            <Link to='/home'>A home</Link> 
            </button>
            <NavLink to='/favorites' >
                <button>Favs</button>
            </NavLink>     
            
        </div>
    )

}

export default NavBar;