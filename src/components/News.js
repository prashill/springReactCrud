import React, { useEffect, useState } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import axios from 'axios';


const News = () => {

    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        document.title = "News || Read latest news";
        const getnews = async () =>{
            const res = await axios.get(
                "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=f23f6c22211b428e905bf08746f6b7b3"
            );
            setArticles(res.data.articles);
            console.log(res);
        }
        getnews();
    },[])




    return (
       <div>
           {articles.map(({title, description,url, urlToImage, publishedAt, author, content}) =>(
                 <Card style={{marginBottom:"10px", width: '30rem' }}>
                 <CardImg src={urlToImage} alt="Card image cap" />
                 <CardBody>
                   <CardTitle tag="h5">{title} </CardTitle>
                   <CardSubtitle tag="h6" className="mb-2 text-muted">{publishedAt} - {author}</CardSubtitle>
                   <CardText>{description}</CardText>
                   <CardText>{content}</CardText>
                   <Button href={url}>Read more</Button> 
                 </CardBody>
               </Card>
           ))};
           
          
       </div>
    )
}

export default News
