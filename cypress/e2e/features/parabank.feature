Feature: parabank.com

  Scenario:  Register
    Given The user open the application
    When He opened the register page and register his personal data
      | firstName | lastName | street    | city     | state     | zipCode | phoneNumber   | ssn  | userName        | password |
      | juan      | maya     | calle 111 | medellin | antioquia | 050045  | +573012405678 | 0001 | juanCarlos_1010 | juanMaya |
    Then His account is activated and a welcome message is displayed