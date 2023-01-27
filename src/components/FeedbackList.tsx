import React, { useContext } from 'react';

import FeedbackItem from './FeedbackItem'
import SimpleLoader from './shared/simpleLoader'
import FeedbackContext, { FeedbackContextType } from '../context/FeedbackContext';
import { FeedbackItemType } from '../types/FeedbackItem';


const FeedbackList = () => {

  const {feedback } = useContext(FeedbackContext) as FeedbackContextType

  return (
    <>
      {' '}
      {!feedback ? (
        <SimpleLoader />
      ) : (
        <>
          <div className="feedback-list">
            {feedback.map((item: FeedbackItemType) => (
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
