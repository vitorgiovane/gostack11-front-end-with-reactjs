import React, { useState, useEffect } from 'react'
import api from './services/api'

import './App.css'

import Header from './components/Header'
import Projects from './components/Projects'
import NewProject from './components/NewProject'

const App = () => {
  const [projects, setProjects] = useState([])
  const [newProjectName, setNewProjectName] = useState('')
  const [newProjectOwner, setNewProjectOwner] = useState('')

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
    })
  }, [])

  const handleAddProject = () => {
    const newProjectBody = {
      name: newProjectName,
      owner: newProjectOwner
    }
    api.post('projects', newProjectBody).then(response => {
      setProjects([...projects, response.data])
    })
  }

  const handleProjectName = (e) => {
    setNewProjectName(e.target.value)
  }

  const handleProjectOwner = (e) => {
    setNewProjectOwner(e.target.value)
  }

  return (
    <>
      <Header title="Projects" />
      <Projects projects={projects} />
      <NewProject
        handleProjectName={handleProjectName}
        handleProjectOwner={handleProjectOwner}
        handleAddProject={handleAddProject}
      />
    </>
  )
}

export default App
