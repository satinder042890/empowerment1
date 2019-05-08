import React from "react";
import "./style.css"

const Jumbotron = (props) => {

  return (
  <div>
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="/images/women-background.jpg" alt="First slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/images/women-hiking.jpg" alt="Second slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/images/women-drinking.jpg" alt="Third slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/images/women-standing.jpg" alt="Fourth slide"></img>
    </div>
    {/* <div class="carousel-item">
      <img class="d-block w-100" src="/images/women.jpg" alt="Fifth slide"></img>
    </div> */}
  </div>
</div>

<div className="cardDiv">
  <div id="card" className="card text-center">
  <div className="card-header">
    EMPOWERMENT
  </div>
  <div className="card-body">
    <h3 className="card-title">Welcome!</h3>
    <p class="card-text"> A place where you can organize yourself, feel safe, and relax!</p>
  </div>
</div>
</div>
</div>
  )
}

export default Jumbotron;