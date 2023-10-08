import './style/App.css';
import Navbar from './_shared/Navbar';
import Main from './Main';
import Header from './_shared/Header';
import Footer from './_shared/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
