import { BrowserRouter } from 'react-router-dom';

import {
  Hero,
  Blog,
  Recommended,
  BestSells,
  Navbar,
  Clients,
  WhatsNow,
  NumberCount,
  CTA,
  Followme,
  Footer,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary '>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Clients />
        <BestSells />
        <Recommended />
        <Blog />
        <WhatsNow />
        <CTA />
        <NumberCount />
        <Followme />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
