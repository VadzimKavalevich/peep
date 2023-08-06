import React from "react";
import c from './Post.module.css'


const Post = (props) => {
    return (
        <div className={c.post}>
            <img src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"/>
                {props.message}
            <div>
                {props.likesCount} likes
            </div>
        </div>
    )
}

export default Post;