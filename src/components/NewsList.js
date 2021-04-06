import React from 'react';
import New from './New';

const NewsList = ({newsItems}) => {
    return (
        <div className="row">
            {newsItems.map( newsItem => (
                <New
                    key={newsItem.url}
                    newsItem = {newsItem}
                />
            ))}
        </div>
    );
}

export default NewsList;