import React, { Component } from "react";
import Navbar from "../Navbar";
import API from "../../utils/DbAPI";
import Form from "../Form/Formgroup";
import "./style.css";
import * as moment from 'moment';
class Entertainment extends Component {
    state={
        result:[]
    }
    showNews=()=>{
        API.getNews()
        .then(res => {
            console.log(res.data.articles)
            this.setState({result:res.data.articles})
           
            console.log(this.state.result);
            console.log("hello");
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render() {
        return (
            <div>
                <Navbar id={this.props.match.params.id} />
                <ul className="list-inline text-center list">
                    <li className="list-inline-item first" onClick={this.showNews}>News</li>
                    <li className="list-inline-item">Games</li>
                    <li className="list-inline-item" >Parties</li>
                </ul>
               <div id="news">
                {this.state.result.map(news =>
                <div className="container">
                <div className="row">
                   <a href={news.url} id="link" target="_blank"><h5>{news.title}</h5> </a>
                </div>
                <div className="row">
                <div className="col-3">
                  <img src={news.urlToImage} id="newsimg"/>
                </div>
                <div className="col-9">
                <p>{news.description}</p>
                <h6>Published At : {moment(news.publishedAt).format("dddd, MMMM Do YYYY, h:mm:ss a")} </h6>
                </div>
            </div>
            <hr></hr>
               </div>
                  )} 
                </div>
                  
            </div>
        )
    }
}

export default Entertainment;