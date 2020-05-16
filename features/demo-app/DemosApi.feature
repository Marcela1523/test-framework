Feature: Visibility elements
    
   Background: 
   Given Navigates to "View" menu

   Scenario: Element is invisible
   Given Selects "Visibility" option from the list
   When Clicks on "Hide" option
   Then Element should not be displayed
