import React  from 'react';
import { Header, About, Portfolio, Resume, Footer } from '../../components/Index';

import resumeDataAlexandr from '../../resources/store/resumeDataAlexandr';

function alexandrPage () {
  return (
    <div className="App">
      <Header resumeData={resumeDataAlexandr}/>
      <About resumeData={resumeDataAlexandr}/>
      <Resume resumeData={resumeDataAlexandr}/>
      <Portfolio resumeData={resumeDataAlexandr}/>
      <Footer resumeData={resumeDataAlexandr} name='Обухов Александр'/>
    </div>
  )
}

export default alexandrPage;