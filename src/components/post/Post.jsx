import React from 'react'
import { Link } from 'react-router-dom';
import './post.scss'



import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import { useGlobalContext } from '../../Context';
import Comments from '../comments/Comments';




function Post({ p }) {

  const { handleComment, commentSection, mode } = useGlobalContext();

  return (
    <div className='post'>
      <div className="container" style={mode ? { backgroundColor: "#0c0032" } : { backgroundColor: "whitesmoke" }}>
        <div className="user">
          <Link to={`profile/${p.userId}`} >
            <img src={p.profilePic} />
          </Link>
          <div className="info">
            <Link to={`profile/${p.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
              <span> {p.name}</span>
            </Link>
            <p>a few seconds ago.</p>
          </div>
        </div>
        <div className="content">
          <span>{p.desc}</span>
          <img src={p.img} />
        </div>
        <div className="icons">
          <div className="icon">
            <FavoriteIcon />
            <span>12 Likes</span>
          </div>
          <div className="icon" onClick={handleComment}>
            <InsertCommentIcon />
            <span>10 Comments</span>
          </div>
          <div className="icon">
            <ShareIcon />
            <span>Share</span>
          </div>
        </div>
        {commentSection && <Comments />}
      </div>

    </div>

  )


}

export default Post
