import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import OurServices  from './pages/OurServices'
import Contact from './pages/Contact'
import Complaint from './pages/CompliantForm'
import Login from './users/Login'
import SignUp from './users/Singup';
import HeroSection from './pages/HeroSection'
import WhyUse from './pages/WhyUse'
import AboutSection from './pages/AboutSection';
import Home from './pages/Home'
import MainPage from './components/Mainpage';
import StudentDashboard from './pages/StudentDashboard.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import AdminComplaintList from './pages/AdmincomplaintList.jsx';
import MyComplaints from './pages/Mycomplaints.jsx';
import ViewComplaints from './pages/Mycomplaints.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}>
         <Route index element={<Home />} />
         <Route path='home' element={<Home/>}/>
        <Route path='aboutsection' element={<AboutSection/>}/>
         <Route path='ourservices' element={<OurServices/>}/>
          <Route path='contact' element={<Contact/>}/>
           <Route path='login' element={<Login/>}/>
   <Route path='signup' element={<SignUp/>}/>
             <Route path='complaint' element={<Complaint/>}/>
                <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route
          path="/my-complaints"
          element={<ViewComplaints  />}
        />
<Route path="/admin-complaints" element={<AdminComplaintList />} />

        {/* Admin */}
        <Route path="/admin-dashboard" element={<AdminComplaintList />} />
        </Route>
      </Routes>
    </Router>
   
    </>
  )
}

export default App
