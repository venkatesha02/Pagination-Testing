import React from 'react'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import DeploymentFrom from '../DeploymentForm/DeploymentForm'
import FormData from '../FormData/FormData'
import TableData from '../Table/Table'
import ShowData from '../ShowData/ShowData'

export default function Header() {



  return (
    <Router>
      <>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand" >Employee Management System</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link id="link" className="nav-link " to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link id="link" className="nav-link" to="/form">Employee Data</Link>
              </li>
              {/* <li className="nav-item">
                <Link id="link" className="nav-link" to="/tabledata">All Table Data</Link>
              </li> */}
              <li className="nav-item">
                <Link id="link" className="nav-link" to="/showdata">show data</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link id="link" className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Forms link
        </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link className="dropdown-item" to="/deploymentform">DeploymentFrom</Link>
                  <Link className="dropdown-item" to="#">Another action</Link>
                  <Link className="dropdown-item" to="#">Something else here</Link>
                </div>
              </li>*/}
            </ul>
          </div>
        </nav>
      </>
      <Route exact path='/' component={DeploymentFrom} />
      <Route path='/form' component={FormData} />
      {/* <Route path='/tabledata' component={TableData} /> */}
      <Route path='/showdata' component={ShowData} />



    </Router>
  )
}
