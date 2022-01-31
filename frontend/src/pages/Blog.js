import React, { useState, useEffect } from 'react';
import PostItem from '../components/PostItem';

const Blog = () => {
    document.title = "Blog - iCoder"

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);


    let getPosts = async () => {
        let response = await fetch("/api/getPosts");
        let data = await response.json()
        setPosts(data.posts);
    }

    return (
        <div className="container my-3">
            {posts.map((post) => {
                return <div className="my-2 p-3 border rounded-3 shadow-sm" key={post.sno}>
                    <PostItem sno={post.sno} title={post.title} slug={post.slug} tagline={post.tagline}/>
                </div>
            })}
        </div>
    );
};

export default Blog;
