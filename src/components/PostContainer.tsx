import React, { useEffect, useState } from 'react'
import { IPost } from '../models/IPost'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'
const PostContainer = () => {
    const [limit , setLimit] = useState(100)
    const {data: posts , isLoading , error ,} = postAPI.useFetchAllPostsQuery(limit, {
        pollingInterval: 1000
    }  
 )
 const [deletePost , {}] = postAPI.useDeletePostMutation()
    const [updatePost , {}] = postAPI.useUpdatePostMutation()
    const handleUpdate = (post: IPost) => { 
      updatePost(post)
    }
    const handleRemove = (post: IPost) => {
      deletePost(post)
    }
 const [createPost , {}] = postAPI.useCreatePostMutation()
    const handleCreate = async () => {
        console.log('sss');
        const title = prompt()
       await createPost({title , body: title} as IPost)
    }
  return (
    <div>
        <button onClick={handleCreate}>Add Content</button>
        {isLoading && <h1>Загрузка...</h1>}
        {error && <h1>Произошло ошибка при загрузке</h1>}
       {posts && posts?.map(post => 
        <PostItem remove={handleRemove} update={handleUpdate} key={post?.id} post={post} />
    
        )}
        
    </div>
  )
}

export default PostContainer