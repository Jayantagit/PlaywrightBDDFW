Feature: Verify the Admin Module functionality

  Scenario Outline: To validate that user navigates to Admin Page
    Given User Launch the Browser
    When User enter navigates to "<url>"
    Then User enter username "<username>"
    And User enter password "<password>"
    And Click on Login button
    And User click on Admin Link
    And User validate the Admin Page Header
    And User select the employment status "<status>"
  

    Examples:
      | url                                                                | username | password | status              |
      | https://opensource-demo.orangehrmlive.com/web/index.php/auth/login | Admin    | admin123 | Admin|
