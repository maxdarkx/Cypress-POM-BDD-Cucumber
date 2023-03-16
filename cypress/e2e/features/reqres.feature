Feature: reqres.in
  Scenario: Get Request
    When The user makes a request to list user #"2"
    Then the request is completed succesfully