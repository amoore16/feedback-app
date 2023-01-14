import React from 'react';
import { FaTimes } from 'react-icons/fa'
import Card from "./shared/Card";


export interface FeedbackItemType {
  rating: number,
  text: string,
  id: any,
}

type Props = {
  item: FeedbackItemType
  handleDelete: (even: React.MouseEventHandler<HTMLButtonElement>) => void
}

function FeedbackItem(props: Props) {

  const { item, handleDelete } = props;
  const { rating, text,  } = item

  return (
    <Card reverse={true}>
      <div className="num-display">{rating}</div>
      <button onClick={() => handleDelete(item.id)} className='close'>
        <FaTimes color='purple'/>
      </button>
      <div className="text-display">
        {text}
      </div>
    </Card>
  )
}

export default FeedbackItem