import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'
import { FeedbackProvider } from './context/FeedbackContext'

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
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  )
}

export default App
