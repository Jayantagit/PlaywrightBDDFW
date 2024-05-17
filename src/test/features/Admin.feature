Feature: Verify the Login Functionalities


    Scenario Outline: Successful Login
        Given User Launch the Browser
        When User enter navigates to "<url>"
        Then User enter username "<username>"
        And User enter password "<password>"
        And Click on Login button
        And User click on Admin Link
        And User validate the Admin Page Header
        Examples:
            | url                                                                | username | password |
            | https://opensource-demo.orangehrmlive.com/web/index.php/auth/login | Admin    | admin123 |