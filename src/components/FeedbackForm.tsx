import { ChangeEvent, FormEventHandler, useState } from 'react'

import Card from './shared/Card'

type Props = {}

function FeedbackForm({}: Props) {
  const [text, setText] = useState('')
  
  const handleTextChange = (e: ChangeEvent<HTMLButtonElement>) => {
    console.log(e.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* todo rating select component */}
      </form>
      <div className="input-group">
        <input type="text" placeholder="Write a review" />
        <button type="submit" onChange={handleTextChange}>Send</button>
      </div>
    </Card>
  )
}

export default FeedbackForm
