package com.ibm.cloud;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class PersonLoader {
  public static List<Person> loadPersonRecordsFromSpaceFile() throws java.io.FileNotFoundException {
    return createPersonList("./data/space.txt", " ", new int[] {0,1,3,5,4});
  }

  public static List<Person> loadPersonRecordsFromPipeFile() throws java.io.FileNotFoundException {
    return createPersonList("./data/pipe.txt", "\\|" ,new int[] {0,1,3,4,5});
  }

  public static List<Person> loadPersonRecordsFromCommaFile() throws java.io.FileNotFoundException {
    return createPersonList("./data/comma.txt", ",", new int[]{0,1,2,3,4});
  }

  private static List<Person> createPersonList(String inputFilePath, String delimiter, int[] fields)  throws java.io.FileNotFoundException {
    List<Person> personList = new ArrayList<Person>();

    try(Scanner scanner = new Scanner(new File(inputFilePath))) {
      while(scanner.hasNextLine()) {
        String line = scanner.nextLine();
        String[] tokens = line.split(delimiter);
        for (int i = 0; i < tokens.length; i++) {
          tokens[i] = tokens[i].trim();
        };

        try {
          personList.add(new Person(tokens[fields[0]], tokens[fields[1]], tokens[fields[2]], tokens[fields[3]],  tokens[fields[4]]));

        }
        catch(PersonParseException e) {
          e.printStackTrace();
        }
      }
    }
    return personList;
  }
}
