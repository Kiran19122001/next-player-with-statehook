import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')

  const [commentsList, setCommentsList] = useState([])

  const handleName = event => {
    setName(event.target.value)
  }

  const handleCommentText = event => {
    setCommentText(event.target.value)
  }
  const addComments = e => {
    e.preventDefault()

    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    }
    setCommentsList(prevComment => [...prevComment, newComment])
    setName('')
    setCommentText('')
  }
  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={addComments}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={handleName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={handleCommentText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      {commentsList.map(each => (
        <CommentItem commentDetails={each} key={each.id} />
      ))}
    </CommentsContainer>
  )
}

export default Comments
