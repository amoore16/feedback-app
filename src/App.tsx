import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { FeedbackItemType } from './components/FeedbackItem'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id: string | number) => {
    if (window.confirm('Are you sure you wish to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (feedback: FeedbackItemType) => {
    console.log(feedback)
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </div>
  )
}

export default App
