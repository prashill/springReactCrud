import React from 'react'
import {Button, Container, Jumbotron } from 'reactstrap'


const Home = () => {
    return (
        <div>
                <Jumbotron className="text-center bg-secondary">
                
                    <h1>Course Management App</h1>
                    <p>
                   Develop this app to demonstrate Java, Spring boot, React, Rest API CRUD technologies.
                    </p>
                    <Container>
                        <Button color="primary">Home</Button> 
                    </Container>
                    <br />
                </Jumbotron>      
        </div>
    )
}

export default Home
