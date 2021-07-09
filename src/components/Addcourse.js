
import axios from 'axios';
import React, { Fragment } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Form, FormGroup, Input, Container } from 'reactstrap';


const Addcourse = () => {


    useEffect(()=>{
        document.title = "Add Course || CRUD React, spring app"
    }, []);

    const [course, setCourse] = useState({});
    // creating function to post data on server
    const postDatatoServer = (data) =>{
        axios.post("/courses",data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                window.location.reload();

            }, (error)=>{
                console.log(error);
                console.log("error");
            }
        )
    };

    // form handeler function
    const handleform=(e)=>{
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();
     
    };

    return (
        <Fragment>
            <h1 className="text-center my-3" >Add course</h1>
            <Form id="myform" style={{ maxWidth: '25rem' }} onSubmit={handleform}>
                <FormGroup>
                    <label>Course ID</label>
                    <Input 
                    type="number" 
                    name="userid" id="userid" 
                    placeholder="Write course id"
                    onChange={(e)=>{
                        setCourse({...course, id: e.target.value});
                    }} 
                     />
                </FormGroup>
                        <br />
                <FormGroup className="mb-3" controlId="formBasicEmail">
                    <label>Course title</label>
                    <Input type="text" name="title" id="title" placeholder="Write course title"
                    onChange={(e)=>{
                        setCourse({...course, title:e.target.value})
                    }} 
                    />
                </FormGroup>
                        <br />
                <FormGroup>
                    <label>Course description</label>
                    <Input size="30" type="textarea" name="desc" id="desc" placeholder="Write course description"
                    style={{height:100}} 
                    onChange= {(e)=>{
                        setCourse({...course, description:e.target.value})
                    }} 
                    />
                </FormGroup>
                <br />

                <Container className="text-center">
                    <Button type="submit" outline className='mx-2' color='dark'>Add Course</Button> &nbsp;
                    <Button type="reset" outline className='text-dark' color='danger'>Clear</Button>
                </Container>

            </Form>
        </Fragment>

    
    )
}

export default Addcourse
