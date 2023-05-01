import React, { useContext, useEffect, useState } from "react";


export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {

    const posts = [
        {
            id: 1,
            name: "John Doe",
            userId: 1,
            profilePic:
                "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 2,
            name: "Jane Doe",
            userId: 2,
            profilePic:
                "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
            img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
    ];

    const [mode, setMode] = useState(null);
    const modeChange = () => {
        if (!mode) {
            setMode(true)
        } else {
            setMode(false)
        }
    }

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const login = (e) => {
        // TO DOOOO
        e.preventDefault()
        setCurrentUser({
            id: 1,
            name: "Kalpesh Maru",
            profilePic: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        })

    }

    const [commentSection, setCommentSection] = useState(false);
    const handleComment = () => {

        if (!commentSection)
            setCommentSection(true)
        else setCommentSection(false)
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])


    return <AppContext.Provider value={{
        modeChange, mode, login, currentUser, posts, commentSection, handleComment
    }} >
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}