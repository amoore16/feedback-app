import { FeedbackItemType } from './FeedbackItem'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

type Props = {}

function FeedbackStats(props: Props) {
  const feedback = useContext(FeedbackContext)

  let average: number = 0

  if (feedback) {
    average =
      feedback.reduce((acc, cur) => {
        return acc + cur.rating
      }, 0) / feedback.length
  }

  average = Number(average.toFixed(1))

  return (
    <div className="feedback-stats">
      <h4>{feedback?.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
