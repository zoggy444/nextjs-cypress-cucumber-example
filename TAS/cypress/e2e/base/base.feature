Feature: Main Menu

  Scenario: Launch App
    When I launch the App
    Then I see an "h1" tag containing "Main menu"
    And I see a button with type "button" containing "Start game"

  Scenario: Start Game
    Given I am on the main menu
    When I click on the "Start game" button
    Then I land on the game page
    And the board is set
    And White player starts their turn
