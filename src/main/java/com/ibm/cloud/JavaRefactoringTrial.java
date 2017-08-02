package com.ibm.cloud;

import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;

public class JavaRefactoringTrial {
  public static void main(String[] args) {
    List<Person> personList = new ArrayList<>();

    try {
      personList.addAll(PersonLoader.loadPersonRecordsFromSpaceFile());
      personList.addAll(PersonLoader.loadPersonRecordsFromPipeFile());
      personList.addAll(PersonLoader.loadPersonRecordsFromCommaFile());

      PersonOutputGenerator.generateOutput1(personList, "Output 1:\n");
      PersonOutputGenerator.generateOutput2(personList, "\nOutput 2:\n");
      PersonOutputGenerator.generateOutput3(personList, "\nOutput 3:\n");

    }
    catch(FileNotFoundException e) {
      e.printStackTrace();
    }
  }
}
