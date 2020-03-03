import React, { Component } from 'react';

class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">
             <div className="three columns header-col">
                 <h1><span>About Me</span></h1>
             </div>
            <div className="nine columns main-col">
                <p>{resumeData.aboutme}</p>
               <div className="row">
                  <div className="columns contact-details">
                  <h2>Мои Контакты</h2>
                      {
                          resumeData.contactsDetails && resumeData.contactsDetails.map((item, key) =>{
                              return(
                                  <ul className="address" key={key}>
                                    <li><span>Address: </span>{item.address}</li>
                                    <li><span>Skype: </span>{item.skype_id}</li>
                                    <li><span>Email: </span>{item.email}</li>
                                    <li><span>Web site: </span><a href={item.url_web_site}>{item.website}</a></li>
                                    <li><span>GitHub: </span><a href={item.github}>{item.github}</a></li>
                                    <li><span>GitLub: </span><a href={item.gitlab}>{item.gitlab}</a></li>
                                  </ul>
                              )
                          })
                      }
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}

export default About;
