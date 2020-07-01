import React from 'react';
import Header from './Component/Header/Header'
import  Footer from './Component/Footer/Footer'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">

      <Header />
      <Footer/>
    </div>
  );
}

export default App;
