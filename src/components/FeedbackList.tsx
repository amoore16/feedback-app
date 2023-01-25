import { useContext } from 'react';

import FeedbackItem, { FeedbackItemType } from './FeedbackItem'
import SimpleLoader from './shared/simpleLoader'
import FeedbackContext from '../context/FeedbackContext';


type Props = {
  handleDelete: (id: string | number) => void
}

const FeedbackList = (props: Props) => {
  const { handleDelete } = props

  const feedback = useContext(FeedbackContext)

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
