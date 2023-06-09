Feature: parabank.com

  Scenario:  Register
    Given The user open the application
    When He opened the register page and register his personal data
      | firstName | lastName | street    | city     | state     | zipCode | phoneNumber   | ssn  | userName        | password |
      | juan      | maya     | calle 111 | medellin | antioquia | 050045  | +573012405678 | 0001 | juanCarlos_4    | juanMaya |
    Then His account is activated and a welcome message is displayed

    @login
    Scenario: login user
      Given  The user register in the application with his personal data
        | firstName | lastName | street    | city     | state     | zipCode | phoneNumber   | ssn  | userName        | password |
        | juan      | maya     | calle 111 | medellin | antioquia | 050045  | +573012405678 | 0001 | juanCarlos_5    | juanMaya |
      When he opens the application and do login
      Then he successfully logged into the application