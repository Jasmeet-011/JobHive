// we can just type rafce which ia a react arrow function component export

//rafc gives an arrow function but export is at the beginning

// rfc gives a regular function syntacx(not an arrow function) and export is at the beginning
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import React from 'react'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage,{jobLoader} from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'
// we have two types of sate one is the single component and the other is the app level or global state and we can pass down to components 


const App = () => {
  // we can add title and subtitle as props in hero component
  
  //add new job
  const addJob =async (newJob)=>{
    const res=await fetch('/api/jobs',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(newJob)
    })
    return
    
  }
  //delete job

  const deleteJob= async (id)=>{
    const res=await fetch(`/api/jobs/${id}`,{
      method:'DELETE',
    })
    return
    
  }


  // update job

  const updateJob=async(job)=>{
    const res=await fetch(`/api/jobs/${job.id}`,{
      method:'PUT',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(job)
    })
    return

  }
  
  const router= createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
    <Route index element={<HomePage/>}/>
    <Route path="jobs" element={<JobsPage/>}/>
    <Route path="add-job" element={<AddJobPage addJobSubmit={addJob}/>}/>
    <Route path="edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader}/>
    <Route path="jobs/:id" element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
    <Route path="*" element={<NotFoundPage/>}/>
    </Route>
  ))
  return (
  <RouterProvider router={router}/>  )
}

export default App