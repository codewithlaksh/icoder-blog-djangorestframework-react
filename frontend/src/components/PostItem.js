import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ sno, title, slug, tagline }) => {
    return (
        <>
            <p className="fw-bold text-danger mb-1">Article #{sno}</p>
            <h3><a href={`/blogpost/${slug}`} className="text-dark text-decoration-none">{title}</a></h3>
            <p className="mb-2">{tagline}</p>
            <Link to={`/blogpost/${slug}`} className="btn btn-sm btn-outline-danger">Read More &raquo;</Link>
        </>
    );
};

export default PostItem;
