import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default (props) => {
    //Initialize state for data
    const [comments, setComments] = useState([]);
    //Fetch Data
    const fetchData = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${props.postId}/comments`);
        //Set data on state
        setComments(res.data);
    }

    //Fetch data on component load
    useEffect( ()=> {
        fetchData();
    },[]);


    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>{comment.content}</li>
    });

    return <ul>{renderedComments}</ul>;
}