import React from 'react';
import "./style.css";
// import * as moment from 'moment';
export function FutureAppt({children}) {
    return(
        <div className="row" id="futureCont">
            <div className="list-container">
                <ul className="list-group">{children}</ul>
            </div>
        </div>
    );
}

export function FutureItems(props) {
    return(
        <li className="list-group-item" id="apptList" >
            <div className="row">
                <div className="titleCol">
                    <h5>Title: {props.title}</h5>
                </div>
                <div className="typeCol">
                    <h5>Type: {props.apptType}</h5>
                </div>
            </div>
            <div className="row">
                {/* <p>{moment(props.date).format("dddd, MMMM Do YYYY")}</p> */}
                <button {...props} className="btn btn-success typeCol">
                    Delete
                </button>
            </div>
        </li>
    )
}