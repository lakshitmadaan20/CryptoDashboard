import React from 'react'

const NewsData = ({news}) => {
    return (
        <div className="card bg-secondary ">
        <div className="card-header ">{news.title}</div>
        <div className="card-body text-center">
        <div className="news-img">
        <img
            src={news.imageurl}
            alt="crypto"
            className="mb-3"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
        </div>
        <hr/>        
         <p className="card-p mt-2">Descritption: {news.body ? news.body.substring(0, 200): "Not Available"} </p>
        <p className="card-p">Category: {news.categories}</p>
         <hr/>
        <a href={news.url} className="btn btn-block btn-primary">View News</a>
        <br />
      </div>
    </div>
    )
}

export default NewsData
