import React from "react";
import './index.css';

type ArticleProp = {
    articles: {
        title: string;
        data: string;
        imgUrl: string;
    }[]
}

const Article = (props: ArticleProp) => {
    return (
        <div className="mydiv">
            {props.articles.map(item => <div>
                <img className="img" src={item.imgUrl}/>
                <h2>{item.title}</h2>
                <p>{item.data}</p>
            </div>)
            }
        </div>
    )
}

export default Article;