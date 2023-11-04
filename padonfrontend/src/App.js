import './style/App.css';
import PadonNavbar from './_shared/PadonNavbar';
import Main from './Main';
import Footer from './_shared/Footer';
import Header from './_shared/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <PadonNavbar />
      <Header />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
