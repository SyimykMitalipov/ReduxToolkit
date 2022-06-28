import { count } from 'console';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import PostContainer from './components/PostContainer';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';
import { userSlice } from './store/reducers/UserSlice';
import { setupStore } from './store/store';
import PostContainer2 from './components/PostContainer2';
const store = setupStore()

const App = () => {
  // const {users , isLoading , error} = useAppSelector(state => state.userReducer)
  // const dispatch =  useAppDispatch()
  //  useEffect(() => {
  //   dispatch(fetchUsers())
  //  },[])
  return (
    <div>
      {/* {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}

     {JSON.stringify(users , null , 2)} */}
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <PostContainer />
        <PostContainer2 />
      </div>
    </div>
  );
}

export default App;
