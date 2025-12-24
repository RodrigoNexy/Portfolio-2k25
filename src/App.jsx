import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Work2 from './components/Work2';
import Contact from './components/Contact';
import WorksText from './components/WorksText';
import { LanguageProvider } from './contexts/LanguageContext';

const App = () => {
  return (
    <LanguageProvider>
      <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
        <Header />
        <Banner />
        <Nav />
        <About />
        <WorksText />
        <Work />
        <Work2 />
        <Services />
        <Contact />
      </div>
    </LanguageProvider>
  );
};

export default App;
