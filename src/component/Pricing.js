import React from "react";
import Data from "../Data";
import "./Pricing.css"
const Pricing = () => {
  const $pricing = Data.pricing.map((item) => {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="box">
          <h6>{item.title}</h6>
          <h4>{item.price}</h4>
          <span>{item.time}</span>
         
          <ul>
            <li>
              <span>Bandwidth  :</span>
              {item.Bandwidth}
            </li>
            <li>
              <span>Onlinespace   :</span>
              {item.Onlinespace}
            </li>
            <li>
              <span>support    :</span>
              {item.support}
            </li>
            <li>
              <span>Domain    :</span>
              {item.Domain}
            </li>
          </ul>
          <button>join now</button>
        </div>
        
      </div>
    );
  });
  return (
    <section className="prices">
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            <h2>Our Pricing</h2>
            <p>
              Call to action pricing table is really crucial to your for your
              business website. Make your bids <br />
              stand-out with amazing options.ECONOMY
            </p>
          </div>
        </div>
        <div className="row">{$pricing}</div>
      </div>
    </section>
  );
};

export default Pricing;
