import React, { useState } from 'react'
import axios from 'axios'


export default () => {
    const [title, setTitle] = useState('');
    const handleOnSubmit = async (evt) => {
        evt.preventDefault();
        await axios.post('http://localhost:4000/posts', {
            title: title
        })

        setTitle('');

    }

    return <div>
        <form onSubmit={handleOnSubmit}>
            <div className='form-group'>
                <label htmlFor="">Title</label>
                <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <button className="mt-3 btn btn-primary">Add Post</button>
        </form>
    </div>
}