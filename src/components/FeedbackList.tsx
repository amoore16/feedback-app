import FeedbackItem from "./FeedbackItem"
import SimpleLoader from "./simpleLoader"

type Props = {
  feedback: any
}


const FeedbackList = (props: Props) => {

  const { feedback } = props

  return (<> {!feedback ? (<SimpleLoader />) :
    <>
      <div className="feedback-list">
        {feedback.map((item: any) => (<FeedbackItem key={item.id} item={item}></FeedbackItem>))}
      </div>
    </>}
  </>)
}

export default FeedbackList