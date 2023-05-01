import React from 'react'
import './stories.scss'
import { useGlobalContext } from '../../Context'

function Stories() {

    const { currentUser } = useGlobalContext();
    // Dummy data

    const stories = [
        {
            id: 1,
            name: "Kalpesh Maru",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        },
        {
            id: 2,
            name: "Kalpesh Maru",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        },
        {
            id: 3,
            name: "Kalpesh Maru",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        },
        {
            id: 4,
            name: "Kalpesh Maru",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        },
    ]

    return <div className="stories">
        <div className="story">
            <img src={currentUser.profilePic} />
            <span>{currentUser.name}</span>
            <button>+</button>
        </div>
        {stories.map((s) => (
            <div className="story" key={s.id}>
                <img src={s.img} />
                <span>{s.name}</span>
            </div>
        ))}
    </div>





}
export default Stories
