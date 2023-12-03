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