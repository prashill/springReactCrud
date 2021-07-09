import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup } from 'reactstrap'

const Menus = () => {
    return (
        <div>
            <ListGroup>
                
                <Link className="list-group-item list-group-item-action" tag="a" to="/" >View Courses</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" >Add Courses</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/news" >Latest News</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/weather" >Weather</Link>
            </ListGroup>
            
        </div>
    )
}

export default Menus
