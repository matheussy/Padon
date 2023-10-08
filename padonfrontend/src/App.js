import './style/App.css';
import Navbar from './_shared/Navbar';
import Main from './Main';
import Footer from './_shared/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
