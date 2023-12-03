Feature: Testando API Pokemon.

Background: Executa antes de cada teste
    * def url_base = 'https://pokeapi.co/api/v2/'
    
Scenario: Testando retorno de um nome de pokemon
        Given url url_base
        And path 'pokemon/squirtle'
        When method get
        Then status 200
        And match response.name == "squirtle"

Scenario: Testando retorno com informações inválidas.
        Given url url_base
        And path 'pokemon/ronaldo'
        When method get
        Then status 404

Scenario: Testando retorno de uma habilidade de um pokemon
        Given url url_base
        And path '/ability/65/'
        When method get
        Then status 200
        And match response.name == "overgrow"

Scenario: Testando retorno de um tipo selvagem de um pokemon
        Given url url_base
        And path '/type/12/'
        When method get
        Then status 200
        And match response.name == "grass"

        Scenario: Testando retorno se um pokemon se encontra presente na versão "pokemon blue"
        Given url url_base
        And path '/version/2/'
        When method get
        Then status 200
        And match response.name == "blue"

    Scenario: Testando retorno de uma habilidade de um pokemon
        Given url url_base
        And path 'move/55/'
        When method get
        Then status 200
        And match response.name == "water-gun"