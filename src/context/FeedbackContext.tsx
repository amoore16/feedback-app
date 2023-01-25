import React, { createContext, useState } from 'react'
import { FeedbackItemType } from '../components/FeedbackItem'

export type FeedbackContextType = {
  id: number | string
  text: string
  rating: number
}

const FeedbackContext = createContext<FeedbackContextType[] | null>(null)

type Props = {
  children?: React.ReactNode
}

export const FeedbackProvider = (props: Props) => {
  const { children } = props

  const [feedback, setFeedback] = useState<FeedbackContextType[]>([
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

  return (
    <FeedbackContext.Provider value={[...feedback]}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
