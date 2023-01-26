export type FeedbackItemType = {
    rating: number
    text: string
    id: string | number
  }

export type EditFeedbackItem = {
    item: FeedbackItemType,
    edit: boolean
}