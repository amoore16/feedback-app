import React, { createContext, useEffect, useState } from 'react'
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
  isLoading: boolean
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(
  undefined,
)
export const FeedbackProvider = (props: Props) => {
  const { children } = props

  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState<FeedbackItemType[]>([])
  const [feedbackEdit, setFeedbackEdit] = useState<EditFeedbackItem>({
    item: { id: '', text: '', rating: 0 },
    edit: false,
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
  }

  const addFeedback = async (newFeedbackItem: FeedbackItemType) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedbackItem),
    })

    const data = await response.json()

    setFeedback([data, ...feedback])
  }

  const deleteFeedback = async (id: string | number) => {
    if (window.confirm('Are you sure you wish to delete?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' })

      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const updateFeedback = async (
    id: string | number,
    updatedItem: FeedbackItemType,
  ) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(updatedItem),
    })

    const data = await response.json()

    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...data } : item,
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
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
