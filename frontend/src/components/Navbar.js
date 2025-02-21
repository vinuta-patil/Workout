import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"
const Navbar =()=>{
    const {logout} = useLogout()
    const {user} = useAuthContext()
    const handleClick= ()=>{
        logout()
    }
    return (
        <header>
            <div className="container">
            <Link to="/">
            <h1>WORKOUT</h1>
            </Link>
            <nav>
                {user && (<div>
                    <span>{user.email}</span>
                    <button onClick={handleClick}>Log Out</button>
                </div>
                 )} 
                 {/* the above part of the block means only when user is loggedin then show the email */}
                {!user && (<div>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">SignUp</Link>
                </div>)}
                 {/* the above part of the block means when user is loggedout then show login and signup options */}
            </nav>
            </div>
        </header>
    )
}
export default Navbar