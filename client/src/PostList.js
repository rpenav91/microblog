import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

export default () => {

    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4000/posts');
        setPosts(res.data);
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (<div className='row'>
        {Object.values(posts).map((post, key) => {
            return <div className='col-lg-4 card' key={post.id}>
                <div className="card-body">
                    <h3>{post.title}</h3>
                </div>
                <CommentCreate id={post.id} />
                <CommentList id={post.id} />
            </div>
        })}
    </div>)
}