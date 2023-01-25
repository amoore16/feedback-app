import React, { ChangeEvent, FormEventHandler, useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FeedbackContext, { FeedbackContextType } from '../context/FeedbackContext'

import { FeedbackItemType } from '../types/FeedbackItem'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'

import Card from './shared/Card'

type Props = {
  
}

function FeedbackForm(props: Props) {

  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState('')

  const {addFeedback} = useContext(FeedbackContext) as FeedbackContextType

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage('')
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setBtnDisabled(false)
      setMessage('')
    }
    setText(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedbackItem: FeedbackItemType = {
        id: uuidv4(),
        text,
        rating,
      }
      addFeedback(newFeedbackItem)

      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
