package com.ibm.cloud;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class PersonLoader {
  public static List<Person> loadPersonRecordsFromSpaceFile() throws java.io.FileNotFoundException {
    String inputFilePath = "./data/space.txt";
    String[] elements = {Person.LAST_NAME, Person.FIRST_NAME, Person.IGNORE,
    Person.GENDER, Person.DATE_OF_BIRTH, Person.COLOR};
    String delimiter = "\\s+";
    List<Person> personList = new ArrayList<Person>();

    try(Scanner scanner = new Scanner(new File(inputFilePath))) {
      while(scanner.hasNextLine()) {
        String line = scanner.nextLine();
        String[] tokens = line.split(" ");


        try {
          // Person person = new Person(line, elements, delimiter);
          // personList.add(person);
          personList.add(new Person(tokens[0], tokens[1], tokens[3], tokens[5],  tokens[4]));

        }
        catch(PersonParseException e) {
          e.printStackTrace();
        }
      }
    }

    return personList;
    // return loadPersonRecords(inputFilePath, elements, delimiter);
  }

  public static List<Person> loadPersonRecordsFromPipeFile() throws java.io.FileNotFoundException {
    String inputFilePath = "./data/pipe.txt";
    String[] elements = {Person.LAST_NAME, Person.FIRST_NAME, Person.IGNORE,
    Person.GENDER, Person.COLOR, Person.DATE_OF_BIRTH};
    String delimiter = "\\s*\\|\\s*";
    List<Person> personList = new ArrayList<Person>();

    try(Scanner scanner = new Scanner(new File(inputFilePath))) {
      while(scanner.hasNextLine()) {
        String line = scanner.nextLine();
        String[] tokens = line.split("\\|");
        for (int i = 0; i < tokens.length; i++) {
          tokens[i] = tokens[i].trim();
        };

        try {
          // Person person = new Person(line, elements, delimiter);
          // personList.add(person);
          personList.add(new Person(tokens[0], tokens[1], tokens[3], tokens[4],  tokens[5]));

        }
        catch(PersonParseException e) {
          e.printStackTrace();
        }
      }
    }

    return personList;
    // return loadPersonRecords(inputFilePath, elements, delimiter);
  }

  public static List<Person> loadPersonRecordsFromCommaFile() throws java.io.FileNotFoundException {
    String inputFilePath = "./data/comma.txt";
    String[] elements = {Person.LAST_NAME, Person.FIRST_NAME, Person.GENDER,
    Person.COLOR, Person.DATE_OF_BIRTH};
    String delimiter = "\\s*,\\s*";

    List<Person> personList = new ArrayList<Person>();

    try(Scanner scanner = new Scanner(new File(inputFilePath))) {
      while(scanner.hasNextLine()) {
        String line = scanner.nextLine();
        String[] tokens = line.split(",");
        for (int i = 0; i < tokens.length; i++) {
          tokens[i] = tokens[i].trim();
        };

        try {
          // Person person = new Person(line, elements, delimiter);
          // personList.add(person);
          personList.add(new Person(tokens[0], tokens[1], tokens[2], tokens[3],  tokens[4]));

        }
        catch(PersonParseException e) {
          e.printStackTrace();
        }
      }
    }

    return personList;
    // return loadPersonRecords(inputFilePath, elements, delimiter);
  }


  private static List<Person> loadPersonRecords(String inputFilePath, String[] elements, String delimiter) throws java.io.FileNotFoundException {
    List<Person> personList = new ArrayList<Person>();

    try(Scanner scanner = new Scanner(new File(inputFilePath))) {
      while(scanner.hasNextLine()) {
        String line = scanner.nextLine();

        try {
          Person person = new Person(line, elements, delimiter);
          personList.add(person);
        }
        catch(PersonParseException e) {
          e.printStackTrace();
        }
      }
    }

    return personList;
  }
}
