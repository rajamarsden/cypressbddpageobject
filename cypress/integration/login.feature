Feature: Sauce demo login
@e2e
Scenario: End to end journey
Given I was on Sauce demo site
When I logged in with "standard_user" "secret_sauce"
Then I should landed  in products page
When I logout
Then I should see the login page
