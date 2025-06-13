import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import SignupPage from './pages/Authpages/SignupPage'
import SignInPage from './pages/Authpages/SignInPage'
import ResetPassword from './pages/Authpages/ResetPassword'
import Checkemail from './pages/Authpages/Checkemail'
import Verification from './pages/Authpages/Verification'
import Createnewpassword from './pages/Authpages/Createnewpassword'
import Homepage from './pages/Homepage'

function App() {
  const appRouter= createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      children:[
        {
          path:"/",
          element:<Homepage/>
        },
        {
          path:"/register",
          element:<SignupPage/>
        },
        {
          path:"/login",
          element:<SignInPage/>
        },
        {
          path:"/reset-password",
          element:<ResetPassword/>
        },
        {
          path:"/check-email",
          element:<Checkemail/>
        },
        {
          path:"/verification",
          element:<Verification/>
        },
        {
          path:"/create-new-password",
          element:<Createnewpassword/>
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App