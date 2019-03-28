import React from 'react';

import './SearchResult.css';

const searchResult = (props) => (
    <article className="SearchResult">
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
            <div className="Author">{props.date}</div>
            {/* <div className="Author">{props.description}</div> */}
        </div>
        <a href={props.publicationLink}>Visit publication</a>
    </article>
);

export default searchResult;