import React from 'react';

const New = ({newsItem}) => {
    //Desestructuring data
    const {urlToImage, url, title, description, source} = newsItem;
    return (
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    <img src={urlToImage} alt={title}/>
                    <span className="card-title">{source.name}</span>
                </div>
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className='card-action'>
                    <a
                        href={url}
                        target='_blank'
                        rel="noopener noreferrer"
                        className="waves-efefect waves-light btn"
                    >Ver noticia completa</a>
                </div>
            </div>
        </div>
    );
}

export default New