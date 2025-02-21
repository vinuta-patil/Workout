import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/Home'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
function App() {
  const {user} =useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className="pages">
      <Routes>
        {/* if the user is loggedin only then he can go to home component otherwise he should be navigated to login component */}
      <Route path="/" element={user?<Home/>: <Navigate to="/login" />}/>
      {/* if not user the go to login component otherwise if he is user, navigate to hoome component */}
      <Route path="/login" element={!user?<Login/>:<Navigate to="/"/>}/>
      <Route path="/signup" element={!user?<SignUp/>:<Navigate to="/"/>}/>
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
