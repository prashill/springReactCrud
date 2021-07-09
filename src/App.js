import React,{useEffect} from 'react';

import { Container, Row, Col } from 'reactstrap';
// import Home from './components/Home';

import Header from "./components/Header";
import Allcourses from './components/Allcourses';
import Addcourse from './components/Addcourse';
import Menus  from "./components/Menus";
import {BrowserRouter as Router, Route} from "react-router-dom";
import News from './components/News';
import Weather from './components/Weather'
import Update from './components/Update'

function App() {
  useEffect(()=>{
    document.title = "Home || Welcome to React app"
    }, []);
  return (
    
    <div>
      <Router> 
            <Container>
            <Header />
            <Row>
              <Col md={4}> <Menus />
              </Col>

              <Col md={8}> 
                <Route path="/" component={Allcourses} exact />
                <Route path="/add-course" component={Addcourse} exact />
                <Route path="/view-course" component={Allcourses} exact />
                <Route path="/news" component={News} exact />
                <Route path="/weather" component={Weather} exact />
                <Route path="/update/:id" component={Update} exact />
                {/* <Route path="/update-course" component={Updatecourses} exact /> */}
              </Col>
            </Row>
          </Container>
      </Router>
     
    </div>
  );
}

export default App;
