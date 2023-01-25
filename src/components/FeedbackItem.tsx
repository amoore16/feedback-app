import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Card from './shared/Card'
import { useContext } from 'react'
import FeedbackContext, { FeedbackContextType } from '../context/FeedbackContext'
import { FeedbackItemType } from '../types/FeedbackItem'


type Props = {
  item: FeedbackItemType
}

function FeedbackItem(props: Props) {

  const {deleteFeedback } = useContext(FeedbackContext) as FeedbackContextType

  const { item } = props
  const { rating, text, id } = item

  return (
    <Card reverse={true}>
      <div className="num-display">{rating}</div>
      <button onClick={() => deleteFeedback(id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  )
}

export default FeedbackItem
