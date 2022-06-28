import React from 'react'
import { IPost } from '../models/IPost'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'
const PostContainer2 = () => {
    const {data: posts , isLoading , error ,} = postAPI.useFetchAllPostsQuery(10)
    
  return (
    <div>
        {isLoading && <h1>Загрузка...</h1>}
        {error && <h1>Произошло ошибка при загрузке</h1>}
       {/* {posts && posts?.map(post => 
        <PostItem remove={handleRemove} update={handleUpdate} key={post?.id} post={post} />
        )}  */}
    </div>
  )
}

export default PostContainer2