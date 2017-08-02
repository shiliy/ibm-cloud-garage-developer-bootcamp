package com.ibm.cloud;

import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.List;

public class PersonOutputGenerator {
  public static void generateOutput1(List<Person> personList) {

    System.out.println("Output 1:\n");
    generateOutput(personList, Person.GENDER, Person.LAST_NAME);
  }

  private static void printPersons(List<Person> personList) {
    for(Person person : personList) {
      System.out.println(person);
    }
  }

  public static void generateOutput2(List<Person> personList) {
    // sort by DateOfBirth in ascending order, then by LastName in ascending order
    System.out.println("\nOutput 2:\n");
    generateOutput(personList, Person.DATE_OF_BIRTH, Person.LAST_NAME);
  }

  private static int compareElement(Person p1, Person p2, String elementName) {
    Object obj1 = p1.getElement(elementName);
    Object obj2 = p2.getElement(elementName);
    if(obj1 instanceof Date) { return ((Date) obj1).compareTo((Date) obj2); }
    return ((String) obj1).compareTo((String) obj2);
  }

  private static void generateOutput(List<Person> personList, String firstElement, String secondElement) {
    Collections.sort(personList, new Comparator<Person>() {
      public int compare(Person p1, Person p2) {
        if(compareElement(p1, p2, firstElement) != 0) {
          return compareElement(p1, p2, firstElement);
        }
        return compareElement(p1, p2, secondElement);

      }
    });
    printPersons(personList);
  }

  public static void generateOutput3(List<Person> personList) {
    Collections.sort(personList, new Comparator<Person>() {
      // sort by LastName in descending order
      public int compare(Person p1, Person p2) {
        return p2.getLastName().compareTo(p1.getLastName());
      }
    });

    System.out.println("\nOutput 3:\n");

    printPersons(personList);
  }
}
