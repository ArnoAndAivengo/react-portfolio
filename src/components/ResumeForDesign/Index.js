import React, { Component } from 'react';
import { Line, Circle } from 'rc-progress';

import './ResumeForDesign.scss';

class ResumeForDesign extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="resume-designer">
          <div className="row education">
            <div className="three columns header-col">
              <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item, key)=>{
                  return(
                    <div className="work-card-wrapper">
                      <ul className="address" key={key}>
                        <li><h3>{item.UniversityName}</h3></li>
                        <li><a href={item.url}>{item.website}</a></li>
                        <li><span>Специализация: </span>{item.specialization}</li>
                        <li><span>Год окончания: </span>{item.YearOfPassing}</li>
                        <li>{item.Achievements}</li>
                      </ul>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="row work">
            <div className="three columns header-col">
              <h1><span>Work</span></h1>
              <p>Опыт работы {getYear(2016, 1, 1)} года {getMonth(2016, 1, 1)}  месяцев</p>
            </div>
            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item, key) => {
                  return(
                    <div className="work-card-wrapper">
                      <ul className="address" key={key}>
                        <li><h3>{item.CompanyName}</h3></li>
                        <li><a href={item.url}>{item.website}</a></li>
                        <li><span>Специализация: </span> {item.specialization}</li>
                        <li><span>Год начала: </span><em className="date">{item.YearOfBeginning}</em></li>
                        <li><span>Год окончания: </span><em className="date">{item.YearOfLeaving}</em></li>
                        <li>{item.Achievements}</li>
                      </ul>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="row skill">
            <div className=" header-col title">
              <h1><span>Skills</span></h1>
            </div>
            <div className="six columns align-center">
              <p className="skillsDescription">{resumeData.skillsDescription[0].languages}</p>
              <div className="bars">
                <ul className="skills">
                  {
                    resumeData.skills && resumeData.skills.map((skills) => {
                      return skills.languages.map((item, key) => {
                        return (
                          <li key={key}>
                            <Circle percent={item.percent}
                                    trailWidth="10"
                                    strokeWidth="10"
                                    strokeColor="aqua"
                                    strokeLinecap="butt"
                            />
                            <span>{item.skill_name}</span>
                          </li>
                        )
                      })
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="six columns align-center">
              <p className="skillsDescription">{resumeData.skillsDescription[1].framework}</p>
              <div className="bars">
                <ul className="skills">
                  {
                    resumeData.skills && resumeData.skills.map((skills) => {
                      return skills.framework.map((item, key) => {
                        return (
                          <li key={key}>
                            <Circle percent={item.percent}
                                    trailWidth="10"
                                    strokeWidth="10"
                                    strokeColor="aqua"
                                    strokeLinecap="butt"
                            />
                            <span>{item.skill_name}</span>
                          </li>
                        )
                      })
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function getYear(y,m,d){
  var r = new Date(new Date().getTime() - Date.UTC(y,m-1,d));
  return [r.getFullYear()-1970]
}

function getMonth(y,m,d){
  var r = new Date(new Date().getTime() - Date.UTC(y,m-1,d));
  return [r.getMonth()]
}
// function passed(y,m,d){
//     var r=new Date(new Date().getTime()-Date.UTC(y,m-1,d));
//     return [r.getFullYear()-1970,r.getMonth(),r.getDate()-1]
// }
export default ResumeForDesign;
