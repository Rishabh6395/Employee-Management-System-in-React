/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData])
  
  

  const handleLogin = (email, password) =>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }
    else if(authData ){
      const employee = authData.employees.find((e)=>e.email && e.password == password)
      if(employee){
        setUser('employee')
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))
      }
    }
    else{
      alert("Invalid Credentials")
    }
  }


  return (
    <>
      {!user ? <Login handleLogin= {handleLogin}/>: ''}
      {user == 'admin' ? <AdminDashboard/>: <EmployeeDashboard data={loggedInUserData}/>}
    </>
  )
}

export default App
