package com.secyield.service;

import java.util.List;

import org.joda.time.DateTime;
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
	    person.setBirthday(new DateTime(1991, 11, 14, 0, 0, 0));
	    personDao.save(person);
	}	

	@Autowired
	public void setPersonDao(PersonDao pd){
		personDao = pd;
	}
	
	public boolean isOver18(Person p){
		DateTime current = new DateTime();
		int yearDiff = current.getYear() - p.getBirthday().getYear();
		
		if (yearDiff > 18){
			return true;
		} else if (yearDiff == 18){
			int monthDiff = current.getMonthOfYear() - p.getBirthday().getMonthOfYear();
			if (monthDiff == 0){
				int dayDiff = current.getDayOfMonth() - p.getBirthday().getDayOfMonth();
				if (dayDiff >= 0) {
					return true;
				}
			} else if (monthDiff > 0) {
				return true;
			}
			
		}
		return false;
	}
}
