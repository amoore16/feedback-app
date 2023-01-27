import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutLinkIcon from './components/AboutLinkIcon'

function App() {

  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm/>
                  <FeedbackStats/>
                  <FeedbackList
                  />
                </>
              }
            ></Route>
          </Routes>
          <AboutLinkIcon />
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  )
}

export default App
