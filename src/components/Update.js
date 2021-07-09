
import axios from 'axios';
import React, { Fragment } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Container } from 'reactstrap';
import { useHistory, useParams } from "react-router-dom";


const Update = () => {

    let history = useHistory(); //The useHistory hook gives you access to the history instance that you may use to navigate.
    const { id } = useParams();  //The useParams() hook helps us to access the URL parameters from a current route. 
    const [course, setCourse] = useState({
        id: "",
        title: "",
        description: ""
    });

    const { cid, title, description } = course;
    const onInputChange = e => {
        setCourse({ ...course, [e.target.name]: e.target.value });
    };

    useEffect(()=>{
        document.title = "Update Course || CRUD React, spring app";
        loadCourse();

    });

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`/courses/${id}`, course);
        history.push("/");
      };

      const loadCourse = async () => {
        const result = await axios.get(`http://localhost:8080/courses/${id}`);
        setCourse(result.data);
      };
      
     
    //   const loadCourse = async () => {
    //     axios.get(`http://localhost:8080/courses/${id}`,
    //     {
    //         headers: {'Content-Type': 'application/json'}
    //       }).then(
    //         (response) =>{
    //             //success
    //             console.log(response.data);
    //             setCourse(response.data);      
    //         },
    //         (error) =>{
    //             //for error
    //             console.log(error.response.data);      
    //         }
    //     )}
       

    // const [editcourse, setEditcourse] = useState({});

    // const updateDatatoServer = (data) =>{
    //     axios.put(`/courses`,data).then(
    //         (response)=>{
    //             console.log(response);
    //             console.log("success");
    //             window.location.reload();

    //         }, (error)=>{
    //             console.log(error);
    //             console.log("error");
    //         }
    //     )
    // };

    // // form handeler function
    // const handleform=(e)=>{
    //     console.log();
    //     updateDatatoServer();
    //     e.preventDefault();
     
    // };

    return (
        <div>
            <Fragment>
            <h1 className="text-center my-3" >Update course</h1>
            <Form id="myform" style={{ maxWidth: '25rem' }} onSubmit={e => onSubmit(e)} >
                <FormGroup>
                    <label>Course ID</label>
                    <Input 
                    type="number" 
                    name="userid" id="userid" value={cid} 
                    placeholder="Write course id"
                    onChange={e => onInputChange(e)}
                   
                     />
                </FormGroup>
                        <br />
                <FormGroup className="mb-3" controlId="formBasicEmail">
                    <label>Course title</label>
                    <Input 
                    type="text" 
                    name="title" 
                    id="title" 
                    placeholder="Write course title"
                    value={title} 
                    onChange={e => onInputChange(e)}
                    />
                </FormGroup>
                        <br />
                <FormGroup>
                    <label>Course description</label>
                    <Input 
                    size="30" 
                    type="textarea" 
                    name="desc" 
                    id="desc" 
                    placeholder="Write course description"
                    style={{height:100}} 
                    value={description} 
                    onChange={e => onInputChange(e)}
          
                    />
                </FormGroup>
                <br />

                <Container className="text-center">
                    <Button type="submit" outline className='mx-2' color='dark'>Update Course</Button> &nbsp;
                    <Link to="/"  className="btn btn-danger text-dark outline " color='danger'>Cancel</Link>
                    {/* <Button type="submit" outline className='text-dark' color='danger'>Cancel</Button> */}
                </Container>

            </Form>
        </Fragment>
        </div>
    )
}

export default Update
