import { FeedbackItemType } from './FeedbackItem'

type Props = {
  feedback: FeedbackItemType[]
}

function FeedbackStats(props: Props) {
  const { feedback } = props;

  let average: number = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length

  average = Number(average.toFixed(1));

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
