package com.secyield.service;

import static org.testng.Assert.assertEquals;

import org.joda.time.DateTime;
import org.testng.annotations.Test;

import com.secyield.model.Person;

public class TestPersonService {
	PersonService personService = new PersonService();
	
	@Test
	public void testIsOver18(){
		DateTime current = new DateTime();
		DateTime eighteenYearAgo = current.minusYears(18);
		DateTime eighteenYearAndOneDayOld = eighteenYearAgo.minusDays(1);
		DateTime eighteenYearAndOneDayLess = eighteenYearAgo.plusDays(1);
		Person person = new Person("Tom", "US", eighteenYearAgo);
		assertEquals(personService.isOver18(person), true);
		person.setBirthday(eighteenYearAndOneDayLess);
		assertEquals(personService.isOver18(person), false);
		person.setBirthday(eighteenYearAndOneDayOld);
		assertEquals(personService.isOver18(person), true);
	}
}
