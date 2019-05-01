import React, { Component } from "react";
import Navbar from "../Navbar";
import API from "../../utils/DbAPI";
import Form from "../Form/Formgroup";
import Rodal from 'rodal';

import "./style.css";
import 'rodal/lib/rodal.css';
// import * as moment from 'moment';
class Entertainment extends Component {
    state = {
        result: [],
        visibility: false,
        news: false,
        games: false,
        parties: false

    }

    show = () => {
        this.setState({ visibility: true })
      }
      hide = () => {
        this.setState({ visibility: false })
      }
    showNews = () => {
        this.setState({ news: true, games: false, parties: false })
        API.getNews()
            .then(res => {
                console.log(res.data.articles)
                this.setState({ result: res.data.articles })

                console.log(this.state.result);
                console.log("hello");
            })
            .catch(err => {
                console.log(err);
            })
    }
    componentDidMount = () => {
        this.show();
      }
    showGames=()=>{
        this.setState({ news: false, games: true, parties: false })
    }

    showParties=()=>{
        this.setState({ news: false, games: false, parties: true })
    }
    render() {
        return (
            <div>
                <Navbar id={this.props.match.params.id} />
                <ul className="list-inline text-center list" id="navOptions">
                    <li id="choices" className="list-inline-item first" onClick={this.showNews}>News</li>
                    <li id="choices" className="list-inline-item" onClick={this.showGames}>Games</li>
                    <li id="choices" className="list-inline-item" onClick={this.showParties}>Parties</li>
                </ul>
                {this.state.news ?
                <div id="news">
                    {this.state.result.map(news =>
                        <div className="container">
                            <div className="row">
                                <a href={news.url} id="link" target="_blank"><h5>{news.title}</h5> </a>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <img src={news.urlToImage} id="newsimg" />
                                </div>
                                <div className="col-9">
                                    <p>{news.description}</p>
                                    {/* <h6>Published At : {moment(news.publishedAt).format("dddd, MMMM Do YYYY, h:mm:ss a")} </h6> */}
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                    )}
                </div>
                : this.state.games ?
                <Form>
                <ul className="text-center">
                <a href="https://www.free-training-tutorial.com/mindfulness/walkinthepark/walkinthepark.html" target="_blank">A Walk in the Park (Stress relieving Game)</a><br/><br/>
                <a href="https://www.free-training-tutorial.com/mindfulness/bubbles/bubbles.html" target="_blank">Flying with Bubbles (Stress relieving Game)</a><br/><br/>
                <a href="https://www.free-training-tutorial.com/word-games/word-search-halloween.html" target="_blank">Search Words (Spelling and Vocabulary improvement Game)</a>
                </ul>
                </Form>
                  : this.state.parties ?
                  <Form>
                  <h3>Upcoming Parties</h3>
                  </Form>
                : <Rodal visible={this.state.visibility} height={300} onClose={this.hide} showCloseButton={true} duration={1000} animation={"door"}>
                <h4>Select Option</h4>
                <br></br>
                <h6>If you want to read latest news then click on news</h6><br></br>
                <h6>If you want to play games click on Games</h6><br></br>
                <h6>If you want to see upcoming parties in your area then click on parties</h6>
              </Rodal>
        }
            </div>
        )
    }
}

export default Entertainment;