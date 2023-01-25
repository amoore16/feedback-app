import React, { createContext, useState } from 'react'
import { FeedbackItemType } from '../components/FeedbackItem'

export type FeedbackContextType = {
  feedback: FeedbackItemType[]
  addFeedback: (newFeedbackItem: FeedbackItemType) => void
  deleteFeedback: (id: string | number) => void
}

const FeedbackContext = createContext<FeedbackContextType | null>(null)

type Props = {
  children?: React.ReactNode
}

export const FeedbackProvider = (props: Props) => {
  const { children } = props

  const [feedback, setFeedback] = useState<FeedbackItemType[]>([
    {
      id: 1,
      text: 'Context',
      rating: 10,
    },
    {
      id: 2,
      text: 'Context 2',
      rating: 9,
    },
  ])

  const addFeedback = (newFeedbackItem: FeedbackItemType) => {
    setFeedback([newFeedbackItem, ...feedback])
  }

  const deleteFeedback = (id: string | number) => {
    if (window.confirm('Are you sure you wish to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
