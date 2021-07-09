package com.springrest.springrest.services;

import java.util.List;
//import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import java.util.ArrayList;
import com.springrest.springrest.entities.Course;
import com.springrest.springrest.dao.CourseDao;

@Service
public class CourseServiceImpl implements CourseService {
	
	@Autowired
	private CourseDao CourseDao;

//	List<Course> list;
	
	public CourseServiceImpl() {	
//		list = new ArrayList<>();
//		list.add(new Course(145, "Java Core Course", "This course is contains basic of java."));
//		list.add(new Course(455, "Spring boot Course", "Creating Rest API using string boot."));

	}
	
	@Override
	public List<Course> getCourses() {
		return CourseDao.findAll();
	}

	@Override
	public Course getCourse(long courseId) {
		
//		Course c=null;
//		
//		for(Course course:list) {
//			if(course.getId()==courseId) {
//				c=course;
//				break;
//			};
//		};
		return CourseDao.getOne(courseId);
	}
	
	
	public Course addCourse(Course course) {
//		list.add(course);
		return CourseDao.save(course);
	}

	@Override
	public Course updateCourse(Course course) {
//		list.forEach(e-> {
//					if(e.getId()== course.getId()) {
//						e.setTitle(course.getTitle());
//						e.setDescription(course.getDescription());
//					}
//				}
//				);
		return CourseDao.save(course);
	}
	
	@Override
	public void deleteCourse(long parseLong) {
//		list=this.list.stream().filter(e->e.getId()!=parseLong).collect(Collectors.toList());
		Course entity = CourseDao.getOne(parseLong);
		CourseDao.delete(entity);
	}

}
