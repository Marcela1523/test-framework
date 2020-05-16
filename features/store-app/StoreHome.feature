Feature: Home form

   As a customer 
   I want to be able to submit the home screen's form
   when all fields are filled

   Background: 
   Given "Home" screen is displayed

   Scenario Outline: Fill all form fields
   When The user submits "<country>", "<name>" and "<gender>" fields
   Then Produc list is displayed

   Examples:
   | country   | name      | gender    |
   |Armenia    | Marcela   | Female    |