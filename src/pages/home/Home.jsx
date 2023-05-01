import React from 'react'
import './home.scss'
import Stories from '../../components/stories/Stories'
import Posts from '../../components/posts/Posts'
import { useGlobalContext } from '../../Context'

function Home() {

    const { mode } = useGlobalContext()

    return <div className="home" style={mode ? { backgroundColor: "#03001C" } : { backgroundColor: "#d6d6d6" }}>
        <Stories />
        <Posts />
    </div>
}



export default Home
