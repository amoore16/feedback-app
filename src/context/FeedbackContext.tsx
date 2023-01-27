import React, { createContext, useState } from 'react'
import { EditFeedbackItem, FeedbackItemType } from '../types/FeedbackItem'

type Props = {
  children?: React.ReactNode
}

export type FeedbackContextType = {
  feedback: FeedbackItemType[]
  addFeedback: (newFeedbackItem: FeedbackItemType) => void
  deleteFeedback: (id: string | number) => void
  updateFeedback: (id: string | number, item: FeedbackItemType) => void
  editFeedback: (item: FeedbackItemType) => void
  feedbackEdit: EditFeedbackItem
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(
  undefined,
)
export const FeedbackProvider = (props: Props) => {
  const { children } = props
  const [feedback, setFeedback] = useState<FeedbackItemType[]>([])
  const [feedbackEdit, setFeedbackEdit] = useState<EditFeedbackItem>({
    item: { id: '', text: '', rating: 0 },
    edit: false,
  })

  const addFeedback = (newFeedbackItem: FeedbackItemType) => {
    setFeedback([newFeedbackItem, ...feedback])
  }

  const deleteFeedback = (id: string | number) => {
    if (window.confirm('Are you sure you wish to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const updateFeedback = (
    id: string | number,
    updatedItem: FeedbackItemType,
  ) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item,
      ),
    )
  }

  const editFeedback = (item: FeedbackItemType) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
