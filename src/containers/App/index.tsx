import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Footer, Header, ImageDivider, Partners, Services } from 'components';
import data from 'data';

export const App = () => {
  const {images, goods, partners, services} = data;
  return (
    <div>
      <Header image={images[0]}/>
      <Services texts={services.texts} title={services.title}/>
      <ImageDivider image={images[1]}/>
      <Services texts={goods.texts} title={goods.title}/>
      <ImageDivider image={images[2]}/>
      <Partners partners={partners}/>
      <Footer/>
    </div>
  );
};

export default App;
