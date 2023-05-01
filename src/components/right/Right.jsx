import React from 'react'
import './right.scss'
import { useGlobalContext } from '../../Context'

function Right() {

  const { currentUser, mode } = useGlobalContext();


  return <div className="right-pane" >
    <div className="container" style={mode ? { backgroundColor: "#03001C" } : { backgroundColor: "#d6d6d6" }} >
      <div className="item" style={mode ? { backgroundColor: "#0c0032" } : { backgroundColor: "whitesmoke" }}>
        <span className='title'>Suggested for You</span>
        <div className='content'>
          <div className="user-info">
            <img src={currentUser.profilePic} className="user-img"
            />
            <span>{currentUser.name}</span>
          </div>
          <div className="buttons">
            <button className='follow'>Follow</button>
            <button className='dismiss'>Dismiss</button>
          </div>
        </div>
        <div className='content'>
          <div className="user-info">
            <img src={currentUser.profilePic} className="user-img"
            />
            <span>{currentUser.name}</span>
          </div>
          <div className="buttons">
            <button className='follow'>Follow</button>
            <button className='dismiss'>Dismiss</button>
          </div>
        </div>
      </div>
      <div className="item" style={mode ? { backgroundColor: "#0c0032" } : { backgroundColor: "whitesmoke" }}>
        <span className='title'>Latest Activities</span>
        <div className='content'>
          <div className="user-info">
            <img src={currentUser.profilePic} className="user-img"
            />
            <span>{currentUser.name}</span>
          </div>
          <span className='title'>Updated their life</span>
          <span className='title'>1 min ago</span>
        </div>
        <div className='content'>
          <div className="user-info">
            <img src={currentUser.profilePic} className="user-img"
            />
            <span>{currentUser.name}</span>
          </div>
          <span className='title'>Updated their life</span>
          <span className='title'>1 min ago</span>
        </div>
        <div className='content'>
          <div className="user-info">
            <img src={currentUser.profilePic} className="user-img"
            />
            <span>{currentUser.name}</span>
          </div>
          <span className='title'>Updated their life</span>
          <span className='title'>1 min ago</span>
        </div>
        <div className='content'>
          <div className="user-info">
            <img src={currentUser.profilePic} className="user-img"
            />
            <span>{currentUser.name}</span>
          </div>
          <span className='title'>Updated their life</span>
          <span className='title'>1 min ago</span>
        </div>
      </div>
      <div className="item" style={mode ? { backgroundColor: "#0c0032" } : { backgroundColor: "whitesmoke" }}>
        <span className="title">Online Friends</span>
        <div className='content'>
          <div className="user-info">
            <img src={currentUser.profilePic} className="user-img"
            />
            <div className="online" />
            <span>{currentUser.name}</span>
          </div>
        </div>
        <div className='content'>
          <div className="user-info">
            <img src={currentUser.profilePic} className="user-img"
            />
            <div className="online" />
            <span>{currentUser.name}</span>
          </div>
        </div>
        <div className='content'>
          <div className="user-info">
            <img src={currentUser.profilePic} className="user-img"
            />
            <div className="online" />
            <span>{currentUser.name}</span>
          </div>
        </div>
        <div className='content'>
          <div className="user-info">
            <img src={currentUser.profilePic} className="user-img"
            />
            <div className="online" />
            <span>{currentUser.name}</span>
          </div>
        </div>
        <div className='content'>
          <div className="user-info">
            <img src={currentUser.profilePic} className="user-img"
            />
            <div className="online" />
            <span>{currentUser.name}</span>
          </div>
        </div>
        <div className='content'>
          <div className="user-info">
            <img src={currentUser.profilePic} className="user-img"
            />
            <div className="online" />
            <span>{currentUser.name}</span>
          </div>
        </div>

      </div>
    </div>
  </div>
}

export default Right
