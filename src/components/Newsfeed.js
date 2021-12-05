import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Newsfeed() {

    const [articles, setArticles] = useState(null);

    useEffect(() => {
        const options = {
  method: 'GET',
  url: 'https://crypto-news-live.p.rapidapi.com/news/coindesk',
  headers: {
    'x-rapidapi-host': 'crypto-news-live.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
  }
} 

axios.request(options).then(function (response) {
	console.log(response.data);
    setArticles(response.data);
}).catch(function (error) {
	console.error(error);
});
    }, [])

    //?getting first 7 articles from the array(2-8)
    const first7Articles = articles?.slice(2,9);


    return (
        <div className="news-feed">
           <h2 className="newsfeedh2">NewsFeed</h2>
           {first7Articles?.map((article, _index) => (
               <div key={_index}>
               <a className="links" href={article.url}><p>{article.title}</p></a>
               </div>))}
        </div>
    )
}

export default Newsfeed
