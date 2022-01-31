import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
// import 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v12.0'

const Blogpost = () => {
    let params = useParams();
    let slug = params.slug;

    const [post, setPost] = useState([]);

    useEffect(() => {
        getPost();
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.textContent = `(function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v12.0";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));`;
        document.body.appendChild(script);

        let prismCss = document.createElement("link");
        prismCss.rel = "stylesheet";
        prismCss.href = "/prism.css";
        document.head.appendChild(prismCss);

        let customCss = document.createElement("link");
        customCss.rel = "stylesheet";
        customCss.href = "/custom.css";
        document.head.appendChild(customCss);

        let prismJs = document.createElement("script");
        prismJs.type = "text/javascript";
        prismJs.src = "/prism.js";
        document.body.appendChild(prismJs);
    }, []);


    let getPost = async () => {
        let response = await fetch(`/api/getPost/${slug}`);
        let data = await response.json();
        setPost(data.post);
    }

    document.title = `${post.title} - iCoder`

    return (
        <div className="container my-3">
            <h2>{post.title}</h2>
            <hr />
            <p dangerouslySetInnerHTML={{ __html: post.description }}></p>
            <hr />
            <div id="fb-root"></div>
            <div className="fb-comments" data-href="http://127.0.0.1:3000/blogpost/first-post" data-width="100%" data-numposts="5"></div>
        </div>
    );
};

export default Blogpost;
