import React  from 'react';
import { Header, About, Footer, ResumeForDesign, GalleryForPortfolio } from '../../components/Index';

import resumeDataNatalya from '../../resources/store/resumeDataNatalya';

function natalyaPage () {
  return (
    <div className="App">
      <Header resumeData={resumeDataNatalya} />
      <About resumeData={resumeDataNatalya} />
      <ResumeForDesign resumeData={resumeDataNatalya} />
      <GalleryForPortfolio resumeData={resumeDataNatalya} name='Обухова Наталья'/>
      <Footer resumeData={resumeDataNatalya} name='Обухова Наталья' />
    </div>
  )
}

export default natalyaPage;