import React,{Component} from "react";
import Navbar from "../Navbar";
import Jumbotron from "./jumbotron/index"
class Landingpage extends Component {
    state={
        id:1
      }
      componentDidMount =() =>{
        if(this.props.match.params.id){
          console.log(this.props.match.params.id)
        }
        else{
          console.log(this.state.id)
        }
        
      }
    render(){
        return (
      <div>
            <Navbar id="1"/>
        
            <Jumbotron></Jumbotron>
            {/* <Intro></Intro> */}
      </div> 
    )
    }  
    
}


export default Landingpage;