Feature: LoginTest

    As a user I should login and use the application

    Scenario: Verify user login with valid login credentials

    Given I am on home page
    When I enter username "standard_user" and password "secret_sauce"
    And I click login button
    Then I should login successfully and get redirected to products page