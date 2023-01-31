import React, { useState, } from 'react';
// import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Page from './components/Page';

// import Sky from 'react-sky';
// import Placeholder from './components/img/Placeholder.png'
// import PageContent from './components/PageContent';


function App() {
  const [pages] = useState([
    {
      name: "About"
    },
    {
      name: "Portfolio"
    },
    {
      name: "Contact"
    },
    {
      name: "Resume"
    },
  ])

  const [currentPage, setCurrentPage] = useState(pages[0])
  return (
      //  <Sky
      //     images={{
      //       /* FORMAT AS FOLLOWS */
      //       0: <img src={Placeholder}/>,  /* You can pass as many images as you want */
      //       1: {Placeholder},
      //       // 2: "myImage" /* you can pass images in any form: link, imported via webpack... */
      //       /* 3: your other image... */
      //       /* 4: your other image... */
      //       /* 5: your other image... */
      //       /* ... */
      //     }}
      //     how={130} /* Pass the number of images Sky will render chosing randomly */
      //     time={40} /* time of animation */
      //     size={'100px'} /* size of the rendered images */
      //     background={'palettedvioletred'} /* color of background */
      //   />
    <section className='main-section'>
      <Header>
        <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </Header>

      <main>
        <Page currentPage={currentPage}></Page>
      </main>

      <Footer />

      

    </section>
  );
}
export default App;

// class App extends Component {
//   render() {
//     return (
//       <div>
//         /* Sky adapts size to its container */
        // <Sky
        //   images={{
        //     /* FORMAT AS FOLLOWS */
        //     0: <img src={Placeholder}/>,  /* You can pass as many images as you want */
        //     // 1: "{https://linkToYourImage1}",
        //     // 2: "myImage" /* you can pass images in any form: link, imported via webpack... */
        //     /* 3: your other image... */
        //     /* 4: your other image... */
        //     /* 5: your other image... */
        //     /* ... */
        //   }}
        //   how={130} /* Pass the number of images Sky will render chosing randomly */
        //   time={40} /* time of animation */
        //   size={'100px'} /* size of the rendered images */
        //   background={'palettedvioletred'} /* color of background */
        // />
//       </div>
//     );
//   }
// }

// export default App;
