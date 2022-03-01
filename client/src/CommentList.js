import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default ({ id }) => {

    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${id}/comments`);
        setComments(res.data);
    }

    useEffect(() => {
        fetchComments();
    }, [])

    return (<ul>
        {comments.map((comment, key) => {
            return <li className='' key={comment.id}>

                {comment.content}
            </li>
        })}
    </ul>)
}