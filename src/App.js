import React  from 'react';
import { Header, About, Portfolio, Resume, Footer, ContactUs, Testimonials } from './components/Index';
import Welcome from 'pages/welcomePage'

import resumeDataAlexandr from './resources/store/resumeDataAlexandr';

function App () {
  return (
    <div className="App">
      <Welcome resumeData={resumeDataAlexandr} />
      {/*<Header resumeDataAlexandr={resumeDataAlexandr}/>*/}
      {/*<About resumeDataAlexandr={resumeDataAlexandr}/>*/}
      {/*<Resume resumeDataAlexandr={resumeDataAlexandr}/>*/}
      {/*<Portfolio resumeDataAlexandr={resumeDataAlexandr}/>*/}
      {/*/!*<Testimonials resumeDataAlexandr={resumeDataAlexandr}/>*!/*/}
      {/*/!*<ContactUs resumeDataAlexandr={resumeDataAlexandr}/>*!/*/}
      {/*<Footer resumeDataAlexandr={resumeDataAlexandr}/>*/}
    </div>
  )
}

export default App;