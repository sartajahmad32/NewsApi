import React, { Component } from 'react';
import NewsItem from './NewsItem';
import dotenv from 'dotenv'
dotenv.config()

export class News extends Component {   
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
        }
    };
    async componentDidMount(){
    //    let  url="https://newsapi.org/v2/everything?q=tesla&from=2023-04-29&sortBy=publishedAt&apiKey=77298cfe9e844fa7846e3edd23056c21";
    let url=process.env.newsKey;
       let data = await fetch(url);
       let response = await data.json();
       this.setState({articles:response.articles})
    }
    render() {
        return (
            <div className='container my-3 '>
                <h1 className='text-center bg-dark text-white my-2'>Top Updated News Here</h1>
                <div className="row">
                    {this.state.articles.map((elements) => {
                        return <div className="col-sm-3" key={elements.url}>
                            <NewsItem  title={elements.title?elements.title.slice(0,35):''} description={elements.description?elements.description.slice(0,50):""} imageUrl={elements.urlToImage} newsUrl={elements.url}/>
                        </div>
                    })};

                </div>

            </div>
        )
    }
};

export default News
