import React, { useState } from 'react'
import './Timeline.css'
import Suggestions from './Suggestions'
import Post from './posts/Post'


function Timeline() {

const [posts, setPosts] = useState([
{
  user:'zeka_',
  postImage: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
  likes: 12,
  timestamp: "2d",
},

{
  user:'boris123',
  postImage: 'https://img.freepik.com/free-photo/snowy-mountain-peak-starry-galaxy-majesty-generative-ai_188544-9650.jpg',
  likes: 56,
  timestamp: "12h",
},

{
  user:'zeka_',
  postImage: 'https://images.immediate.co.uk/production/volatile/sites/30/2017/08/smoothie-bowl-3a8632c.jpg?quality=90&resize=556,505',
  likes: 218,
  timestamp: "3d",
},

{
  user:'marko95',
  postImage: 'https://www.foodandwine.com/thmb/OH220PwOZfcTiwuJzkvLANWHw1w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/egg-bhurjee-FT-RECIPE0521-f9573d8c81bb4c9597a9621c0ac064ae.jpg',
  likes: 256,
  timestamp: "4d",
}



]);

  return (
    <div className='timeline'>

<div className='timeline__left'>

    <div className='timeline__posts'>

    
    {posts.map((post) => (
    
      <Post user={post.user}
       postImage = {post.postImage} 
       likes = {post.likes} 
       timestamp = {post.timestamp} />
  ))}

    </div>


</div>
<div className='timeline__right'><Suggestions /></div>
    </div>
  )
}

export default Timeline