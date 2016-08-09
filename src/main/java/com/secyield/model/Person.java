package com.secyield.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.joda.time.DateTime;
 
/**
 * Entity bean with JPA annotations
 * Hibernate provides JPA implementation
 * @author pankaj
 *
 */
@Entity
@Table(name="Person")
public class Person {
 
	public Person(){};
	
	public Person(String name, String country) {
		super();
		this.name = name;
		this.country = country;
	}
	
    public Person(String name, String country, DateTime birthday) {
		super();
		this.name = name;
		this.country = country;
		this.birthday = birthday;
	}

	@Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
     
    private String name;
     
    private String country;
    
    private DateTime birthday;
 
    public int getId() {
        return id;
    }
 
    public void setId(int id) {
        this.id = id;
    }
 
    public String getName() {
        return name;
    }
 
    public void setName(String name) {
        this.name = name;
    }
 
    public String getCountry() {
        return country;
    }
 
    public void setCountry(String country) {
        this.country = country;
    }

	public DateTime getBirthday() {
		return birthday;
	}

	public void setBirthday(DateTime birthday) {
		this.birthday = birthday;
	}

	@Override
    public String toString(){
        return "id="+id+", name="+name+", country="+country;
    }
}