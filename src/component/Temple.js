import React from "react";
import img1 from "./Palani-Temple.jpg";
import img2 from "./thiru.jpg";
import img3 from "./Tiruttani.jpg";
import img4 from "./pazha.jpg";
import img5 from "./swami.jpg";

const temple = ()=> {
    return(
        <>
        <h1 id="temple">Top 5 Famous Murugan's Temple</h1>
        <div class="card-container">
        <div class="card" style={{width: "18rem"}}>
        <img src={img1} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">Arulmigu Dhandayuthapani Swamy Temple, Palani</h5>
          <p class="card-text">The temple a top the Palani Hills is known for its ancient architecture and the idol of Lord Murugan, which is believed to be self-manifested</p>
          
        </div>
      </div>

      <div class="card" style={{width: "18rem"}}>
        <img src={img2} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">Arulmigu Subramaniyaswami Temple, Thiruchendur</h5>
          <p class="card-text">Situated along the coast of the Bay of Bengal, the Thiruchendur Murugan Temple is one of the Arupadaiveedu, the six abodes of Murugan..</p>
          
        </div>
      </div>

      <div class="card" style={{width: "18rem"}}>
        <img src={img3} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">Arulmigu Murugan Temple, Tiruttani</h5>
          <p class="card-text">Situated on a hill, Tiruttani is one of the Arupadaiveedu and is associated with the wedding of Lord Murugan to Valli.</p>
          
        </div>
      </div>

      <div class="card" style={{width: "18rem"}}>
        <img src={img4} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">Pazhamudircholai, Madurai</h5>
          <p class="card-text">The temple is known for its picturesque surroundings and is believed to be the place where Lord Murugan performed the "Pazhamudircholai Vizha" (fruit festival).</p>
          
        </div>
      </div>


      <div class="card" style={{width: "18rem"}}>
        <img src={img5} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">Arulmigu Murugan Temple, Swamimalai</h5>
          <p class="card-text">It is renowned for its historical significance and is believed to be the place where Lord Murugan taught the Pranava mantra "Om" to his father, Lord Shiva.</p>
          
        </div>
      </div>

      </div>
      </>
    )
};

export default temple;