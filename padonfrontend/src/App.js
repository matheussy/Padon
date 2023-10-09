import './style/App.css';
import Navbar from './_shared/Navbar';
import Main from './Main';
import Footer from './_shared/Footer';
import Header from './_shared/Header';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
