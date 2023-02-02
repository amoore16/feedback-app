import React from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from './shared/Card'
import { useContext } from 'react'
import FeedbackContext, {
  FeedbackContextType,
} from '../context/FeedbackContext'
import { FeedbackItemType } from '../types/FeedbackItem'

type Props = {
  item: FeedbackItemType
}

function FeedbackItem(props: Props) {
  const { deleteFeedback, editFeedback } = useContext(
    FeedbackContext,
  ) as FeedbackContextType

  const { item } = props
  const { rating, text, id } = item

  return (
    <Card reverse={true}>
      <div className="num-display">{rating}</div>
      {id && (
        <button onClick={() => deleteFeedback(id)} className="close">
          <FaTimes color="purple" />
        </button>
      )}

      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  )
}

export default FeedbackItem
