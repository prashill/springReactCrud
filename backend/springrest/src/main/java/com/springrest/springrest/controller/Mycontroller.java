package com.springrest.springrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.entities.Course;
import com.springrest.springrest.services.CourseService;

@RestController
@CrossOrigin
public class Mycontroller {
	
	@Autowired
	private CourseService courseService;
	
	@GetMapping("/home")
	public String home() {
		return "This is home page";
	}
	
	//Get the course
	@GetMapping("/courses")
	public List<Course> getCourses(){
			return this.courseService.getCourses();
	}
	
	//Get the course by id
	@GetMapping("/courses/{courseId}")
	public Course getCourses(@PathVariable String courseId){
			return this.courseService.getCourse(Long.parseLong(courseId));
	}
	
	//Add the course
	@PostMapping("/courses")
	public Course addCourses(@RequestBody Course course){
			return this.courseService.addCourse(course);
	}
	
	//Update the course
	@PutMapping("/courses")
	public Course updateCourses(@RequestBody Course course){
			return this.courseService.updateCourse(course);
	}
	
	//Delete the course
	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId){	
		try {
			this.courseService.deleteCourse(Long.parseLong(courseId));
			return new ResponseEntity<>(HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
