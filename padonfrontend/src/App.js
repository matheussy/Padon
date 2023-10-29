import './style/App.css';
import PadonNavbar from './_shared/PadonNavbar';
import Main from './Main';
import Header from './_shared/Header';
import Footer from './_shared/Footer';
import Leftmenu from './_shared/Leftmenu';

function App() {
  return (
    <div className="App">
      <Header />
      <PadonNavbar />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
