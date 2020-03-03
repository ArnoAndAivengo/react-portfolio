import React, { Component } from 'react';

import Resume from "../Resume";

class Portfolio extends Component {
  render() {

    let resumeData = this.props.resumeData;

    return (
      <section id="portfolio">
        <div className="row">
          <div className=" header-col title">
            <h1><span>Portfolio</span></h1>
          </div>
          <div className="twelve columns collapsed">
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {
              resumeData.portfolio && resumeData.portfolio.map((item, key)=>{
                return(
                  <div className="columns portfolio-item" key={key}>
                    <div className="item-wrap">
                      <a href={`${item.url}`}>
                        <img src={`${item.imgurl}`} className="item-img" alt={"images"}/>
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <a href={item.url}><h5>{item.name}</h5></a>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                )
              })
            }
            </div>
          </div>
        </div>
    </section>
    );
  }
}

export default Portfolio;
