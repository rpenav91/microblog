import React, { useState } from 'react'
import axios from 'axios'


export default ({ id }) => {
    const [content, setContent] = useState('');
    const handleOnSubmit = async (evt) => {
        evt.preventDefault();
        await axios.post(`http://localhost:4001/posts/${id}/comments`, {
            content: content
        })

        setContent('');

    }

    return <div>
        <form onSubmit={handleOnSubmit} className="m-3">
            <div className='form-group'>
                <label htmlFor="">Comment</label>
                <input type="text" className="form-control" value={content} onChange={e => setContent(e.target.value)} />
            </div>
            <button className="mt-3 btn btn-primary">Add Post</button>
        </form>
    </div>
}