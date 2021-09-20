import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';

class App extends React.Component {
  render() { 
    return (
      <div id="appRoot">
        <Header />
        <Footer />
      </div>
    );
  }
}
 
export default App;