import Bridegroom from './components/Bridegroom';
import Countdown from './components/Countdown';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import RSVP from './components/RSVP';
import Seeyou from './components/Seeyou';
import Sidebar from './components/Sidebar';
import Story from './components/Story';
import WhatsApp from './components/WhatsApp';
import Where from './components/Where';


function App() {
  return (
    <>
    <WhatsApp />
      <Sidebar />
      <div id='oliven-main'>
        <Header />
        <Bridegroom />
        <Countdown />
        <Story />
        <Seeyou />
        <Gallery />
        <Where />
        <RSVP />
        <Footer />
      </div>

    </>
    
    
  );
}

export default App;
