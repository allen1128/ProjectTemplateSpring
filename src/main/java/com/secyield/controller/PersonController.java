package com.secyield.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.secyield.model.Person;
import com.secyield.service.PersonService;

@Controller
@RequestMapping("/api")
public class PersonController {
	
	private PersonService personService;

    @ResponseBody
    @RequestMapping("/")
    public String helloWorld()
    {
        return "Hello, World!";
    }
	
	@ResponseBody
	@RequestMapping(value="/persons", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Person> getPerson() {		
		return personService.getPersons();	
	}
	
	@ResponseBody
	@RequestMapping("/add")
	public String savePerson(){
		personService.save();
		return "person added";
	}

	@Autowired
	public void setPersonService(PersonService personService) {
		this.personService = personService;
	}
}
