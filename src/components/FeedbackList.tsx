import { useContext } from 'react';

import FeedbackItem, { FeedbackItemType } from './FeedbackItem'
import SimpleLoader from './shared/simpleLoader'
import FeedbackContext, { FeedbackContextType } from '../context/FeedbackContext';


type Props = {
}

const FeedbackList = (props: Props) => {

  const {feedback, deleteFeedback} = useContext(FeedbackContext) as FeedbackContextType

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
                handleDelete={deleteFeedback}
              ></FeedbackItem>
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default FeedbackList
