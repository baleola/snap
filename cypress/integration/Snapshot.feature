Feature: Snapshot image search Application

    Scenario: Visit snapshot homepage
        Given I visit the snapshot homepage
        And The page title should be Snap Shot

    Scenario: Picture search term
        Given I visit the snapshot homepage
        And I search for "computer"
        Then I should see "computer" Pictures under results header
    
    Scenario: Mountain Pictures
        Given I visit the snapshot homepage
        And I click the Mountain button
        Then I should see "Mountain" Pictures under results header


    Scenario: Beaches Pictures
        Given I visit the snapshot homepage
        And I click the Beaches button
        Then I should see "Beach" Pictures under results header

    Scenario: Birds Pictures
        Given I visit the snapshot homepage
        And I click the Birds button
        Then I should see "Bird" Pictures under results header

    Scenario: Food Pictures
        Given I visit the snapshot homepage
        And I click the Food button
        Then I should see "Food" Pictures under results header


    Scenario: Picture search term
        Given I visit the snapshot homepage
        And I search for "computer"
        Then I should see "computer" Images under results header
        

    Scenario: Search picture count
        Given I visit the snapshot homepage
        And I search for "computer"
        Then I should see up to 24 pictures under the results 

    
    Scenario: Search picture, url search term
        Given I visit the snapshot homepage
        And I search for "code"
        Then The url should include "code"

    Scenario: Search no pictures found
        Given I visit the snapshot homepage
        And I search for "qazxswedvvfe"