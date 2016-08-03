package com.secyield.dao;

import java.util.List;

import com.secyield.model.Person;

public interface PersonDao {
	 
    public void save(Person p);
     
    public List<Person> list();
     
}
