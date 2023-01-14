import { useState } from "react"
import Card from "./shared/Card";

export interface FeedbackItemType {
  rating: number,
  text: string
}

type Props = {
  item: FeedbackItemType
}

function FeedbackItem(props: Props) {

  const { item } = props;
  const { rating, text } = item

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <div className="text-display">
        {text}
      </div>
    </Card>
  )
}

export default FeedbackItem