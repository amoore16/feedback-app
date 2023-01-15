import { ChangeEvent, FormEventHandler, useState } from 'react'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'

import Card from './shared/Card'

type Props = {}

function FeedbackForm({}: Props) {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState('')

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

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)}/>
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

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
