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

  const handleProjectName = event => {
    setNewProjectName(event.target.value)
  }

  const handleProjectOwner = event => {
    setNewProjectOwner(event.target.value)
  }

  const handleKeyPressed = event => {
    if (event.key === "Enter") {
      handleAddProject()
    }
  }

  return (
    <>
      <Header prefix="My" title="Projects" />
      <div className="container">
        <Projects projects={projects} />
      </div>
      <NewProject
        handleProjectName={handleProjectName}
        handleProjectOwner={handleProjectOwner}
        handleAddProject={handleAddProject}
        handleKeyPressed={handleKeyPressed}
      />
    </>
  )
}

export default App
