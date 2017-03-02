Feature: A webpage is returned
  Hiting the server on port 3000 should return a webpage

Scenario: Buy last coffee
  When I make a request to the server
  Then I should recieve a status 200 back
  And I should recieve a html document