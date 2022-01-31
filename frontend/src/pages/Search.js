import React, { useState, useEffect } from 'react';
import PostItem from '../components/PostItem';

const Search = () => {

    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState([]);

    useEffect(() => {
        getSearchResults();
    }, [])

    let currentUrl = window.location.href;

    // Split the current window's url which contains a ? before a parameter
    let paramString = currentUrl.split('?')[1]
    let queryString = new URLSearchParams(paramString);

    // Get the pair after splitting the url
    // pair [0] : the parameter
    // pair [1] : value of the parameter
    let getSearchResults = async () => {
        for (let pair of queryString.entries()) {
            document.title = `Search results for "${pair[1]}" - iCoder`
            let response = await fetch(`/api/searchPosts?q=${pair[1]}`);
            let data = await response.json();
            // console.log(data);
            setSearchResults(data.posts);
            setSearchQuery(pair[1]);
        }
    }
    return (
        <div className="container my-3">
            <h3>Search results <small>for {searchQuery}: ({searchResults.length} results fetched)</small></h3>
            <hr />
            {searchResults.length===0?<h5 dangerouslySetInnerHTML={{ __html: `Sorry, we have no search results for ${searchQuery}. Try some more general keywords.`}}></h5>:searchResults.map((post) => {
                return <div className="my-2 p-3 border rounded-3 shadow-sm" key={post.sno}>
                    <PostItem sno={post.sno} title={post.title} slug={post.slug} tagline={post.tagline}/>
                </div>
            })}
        </div>
    );
};

export default Search;
