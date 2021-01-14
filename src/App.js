import Navbar from './components/navbar'
import GlobalStyle from './globalStyle';
import Hero from './components/Hero';
import { SlideData } from './data/SliderData';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Navbar/>
      <Hero slides={SlideData}/>
    </div>
  );
}

export default App;
