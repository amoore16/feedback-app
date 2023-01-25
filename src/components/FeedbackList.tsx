import { useContext } from 'react';

import FeedbackItem from './FeedbackItem'
import SimpleLoader from './shared/simpleLoader'
import FeedbackContext, { FeedbackContextType } from '../context/FeedbackContext';

type Props = {
}

const FeedbackList = (props: Props) => {

  const {feedback } = useContext(FeedbackContext) as FeedbackContextType

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
              ></FeedbackItem>
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default FeedbackList
