import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl}= this.props;
        return (
            <div className='my-3'>
                <div class="card" style={{width: '18rem'}}>
                    <img src={!imageUrl?"https://www.wykop.pl/cdn/c3397993/link_1669992973twhWEYPk5kGImh3WwDmd1E,w1200h627f.jpg":imageUrl} class="card-img-top" style={{height:"15rem"}} alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{title}...</h5>
                            <p class="card-text">{description}...</p>
                            <a href={newsUrl} class="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
