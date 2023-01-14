import FeedbackItem, { FeedbackItemType } from './FeedbackItem'
import SimpleLoader from './simpleLoader'

type Props = {
  feedback: FeedbackItemType[];
  handleDelete: (id: number) => void
}

const FeedbackList = (props: Props) => {
  const { feedback, handleDelete } = props

  return (
    <>
      {' '}
      {!feedback ? (
        <SimpleLoader />
      ) : (
        <>
          <div className="feedback-list">
            {feedback.map((item: any) => (
              <FeedbackItem
                key={item.id}
                item={item}
                handleDelete={handleDelete}
              ></FeedbackItem>
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default FeedbackList
