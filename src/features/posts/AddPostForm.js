import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postAdded } from './postsSlice'
import { nanoid } from '@reduxjs/toolkit'

const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const titleChangeHandler = (event) => setTitle(event.target.value)
  const postContentChangeHandler = (event) => setContent(event.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      )
      setTitle('')
      setContent('')
    }
  }

  return (
    <div>
      <section>
        <h2>Add a New Post</h2>
        <form>
          <label htmlFor="postTitle">Title: </label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={titleChangeHandler}
          />
          <label htmlFor="postContent">Content:</label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={postContentChangeHandler}
          />
          <button type="button" onClick={onSavePostClicked}>
            Save Post
          </button>
        </form>
      </section>
    </div>
  )
}

export default AddPostForm
