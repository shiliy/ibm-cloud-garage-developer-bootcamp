package com.ibm.cloud;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;

public class Person {
  final static String FIRST_NAME = "firstName";
  final static String LAST_NAME = "lastName";
  final static String GENDER = "gender";
  final static String DATE_OF_BIRTH = "dateOfBirth";
  final static String COLOR = "color";
  final static String IGNORE = "ignore";

  private String firstName;
  private String lastName;
  private Gender gender;
  private Date dateOfBirth;
  private String color;

  public Person(String lastName, String firstName, String gender, String color, String dateOfBirth) throws PersonParseException {
    this.firstName = firstName;
    this.lastName = lastName;

    if(gender.startsWith("M")) { this.gender = Gender.MALE; }
    else { this.gender = Gender.FEMALE; }
    this.color = color;
    this.dateOfBirth = toDate(dateOfBirth);
  }

  /**
   Constructs a Person object by parsing a string that contains attributes for
   the Person.

   @param line         input text string
   @param lineElements ordering of the elements within the text string
   @param delimiter    defines the delimiter pattern that separates individual
   tokens in the input text string - refer {@link
   java.util.Scanner} for definition of the delimiter
   pattern

   @throws PersonParseException if a parsing is encountered in the input text
   string
   */
  public Person(String line, String[] lineElements, String delimiter) throws PersonParseException {

    try(Scanner scanner = new Scanner(line)) {
      scanner.useDelimiter(delimiter);
      int i = 0;

      while(scanner.hasNext()) {
        String token = scanner.next();

        switch(lineElements[i++]) {

          case FIRST_NAME:
            firstName = token;
            break;

          case LAST_NAME:
            lastName = token;
            break;

          case GENDER:
            if(token.startsWith("M")) {
              gender = Gender.MALE;
            }
            else if(token.startsWith("F")) {
              gender = Gender.FEMALE;
            }
            else {
              throw new PersonParseException("Invalid gender encountered");
            }
            break;

          case DATE_OF_BIRTH:
            dateOfBirth = toDate(token);
            break;

          case COLOR:
            color = token;
            break;

          default:
            break;
        }
      }
    }
  }

  private Date toDate(String token) throws PersonParseException {
    Date dateOfBirth;
    SimpleDateFormat format;

    if(token.contains("/")) {
      format = new SimpleDateFormat("MM/dd/yyyy");
    }
    else if(token.contains("-")) {
      format = new SimpleDateFormat("MM-dd-yyyy");
    }
    else {
      throw new PersonParseException("Invalid date encountered");
    }

    try {
      dateOfBirth = format.parse(token);
    }
    catch(ParseException e) {
      throw new PersonParseException("Invalid date encountered");
    }
    return dateOfBirth;
  }

  public String getFirstName() {
    return firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public Gender getGender() {
    return gender;
  }

  Date getDateOfBirth() {
    return dateOfBirth;
  }

  public String getColor() {
    return color;
  }

  @Override
  public String toString() {
    SimpleDateFormat format = new SimpleDateFormat("M/d/yyyy");
    return lastName + " " + firstName + " " + gender + " " + format.format(dateOfBirth) + " " + color;
  }

  public Object getElement(String elementName) {

    switch(elementName) {

      case FIRST_NAME:
        return getFirstName();
      case LAST_NAME:
        return getLastName();
      case GENDER:
        return getGender().toString();
      case COLOR:
        return getColor();
      case DATE_OF_BIRTH:
        return getDateOfBirth();
      default:
        return null; //todo: fix this
    }

  }
}
