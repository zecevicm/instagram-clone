import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import TelegramIcon from '@mui/icons-material/Telegram'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'

function Post({ user, postImage, likes, timestamp }) {
  return (
    <div className='post'>

      <div className='post_header'>
        <div className='post__headerAuthor'>
          <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
          {user} • <span>{timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>

      <div className='post_image'>
        <img src={postImage} alt="Post" />
      </div>

      <div className='post_footer'>
        <div className='post__footerIcons'>
          <div className='post__iconsMain'>
            <FavoriteBorderIcon className='postIcon' />
            <ChatBubbleOutlineIcon className='postIcon' />
            <TelegramIcon className='postIcon' />
          </div>
          <div className='post__iconSave'>
            <BookmarkBorderIcon />
          </div>
        </div>
        <div>
          Liked by {likes} people.
        </div>
      </div>

    </div>
  )
}

export default Post
