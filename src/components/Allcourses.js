import React, { useState, useEffect } from 'react'
// import Course from './Course'
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

import {Card, Button, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Allcourses = () => {

    useEffect(()=>{
        document.title = "All Course || CRUD React, spring app";
    },[]);

    // function to call server
    const getAllCoursesFromServer = ()=>{
        axios.get("/courses").then(
            (response) =>{
                //success
                console.log(response.data);
                setCourses(response.data);
                
            },
            (error) =>{
                //for error
                console.log(error);
               
            }
        )
    }

    //calling loading function
    useEffect(()=>{
        getAllCoursesFromServer();
    }, [])

    // const updateCourseById = (id) =>{
    //     setCourses(courses.filter((c)=>c.id !== id));
    // }

    

    const [courses, setCourses] = useState([
        // {title:" Java Course", desc:"this is begineer Java course"},
        // {title:" React Course", desc:"this is begineer React course"},
        // {title:" Javascript Course", desc:"this is begineer Javascript course"}
    ])

    const deleteCourse = (id)=>{
        axios.delete(`/courses/${id}`).then(
                (response) =>{
                    console.log(response);
                    console.log("success");
                    // setCourses(courses.id);
                    window.location.reload();
                },
                (error) =>{
                    console.log(error);
                    console.log("error");
                }
        )}

        



    
    return (
        <div>
            {/* <h1>All courses</h1> */}
            <p>List of courses as below</p>
            {
                // courses.length >0 ? courses.map((item)=>(<Course key={item.id} course={item} update={updateCourseById} />)) : "No courses"
                courses.length >0 ? courses.map((item)=>( 
            <>
            <Card border="warning" style={{ maxWidth: '25rem' }}>
                <Card.Header style={{ backgroundColor:"white" }}>{item.title}</Card.Header>
                <Card.Body>
                    <Card.Text> {item.description}</Card.Text>
                    <br />
                    <Container >
                        <Button variant="dark" onClick={()=>{
                            deleteCourse(item.id);
                        }}>Delete</Button> &nbsp;

                      <Link className="btn btn-light"   variant="light" tag="a" to={`/Update/${item.id}`}>Update</Link>  
                      
                      {/* <Button variant="light" onClick={()=>{
                           updateCourse(item.id, item.title, item.description);
                        }}  >Update</Button> */}
                    </Container>
                </Card.Body>
            </Card>   
            <br />
            </>


            ))
            : "No courses"

            }
        </div>
    )
}

export default Allcourses
