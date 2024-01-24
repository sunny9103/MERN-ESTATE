import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "../pages/Home"
import Signin from "../pages/signin"
import Signup from "../pages/Signup"
import About from "../pages/about"
import Profile from "../pages/profile"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/sign-in' element={<Signin></Signin>}></Route>
      <Route path='/sign-up' element={<Signup></Signup>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/profile' element={<Profile></Profile>}></Route>
      </Routes>
      </BrowserRouter>
  )
}
