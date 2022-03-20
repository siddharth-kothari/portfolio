
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

function App() {
  return (

    <div className="app">
      <Header />
      <div className="app__body">
        <Home />
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
