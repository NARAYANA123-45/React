import React, { Component } from 'react'
import axios from 'axios';
export class Post extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }
    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
           this.setState({posts: response.data}); 
        })
        .catch(error => {
            this.setState({posts: error}); 
        })
    }
    render() {
        return (
            <div>
                <h1>List of posts</h1>
                {this.state.posts.map(post =>{
                    return <p>{post.thumbnailUrl}</p>
                })}
            </div>
        )
    }
}

export default Post
