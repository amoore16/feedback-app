import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'

import { FeedbackItemType } from './components/FeedbackItem'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id: string | number) => {
    if (window.confirm('Are you sure you wish to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedbackItem: FeedbackItemType) => {
    setFeedback([newFeedbackItem, ...feedback])
  }

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
