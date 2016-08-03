package com.secyield.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.secyield.dao.PersonDao;
import com.secyield.model.Person;

@Service
public class PersonService {	
	PersonDao personDao;
	
	public List<Person> getPersons(){	
		return personDao.list();		
	}
	
	public void save(){
		Person person = new Person();
	    person.setName("Test");
	    person.setCountry("CN");
	    personDao.save(person);
	}	

	@Autowired
	public void setPersonDao(PersonDao pd){
		personDao = pd;
	}
}
