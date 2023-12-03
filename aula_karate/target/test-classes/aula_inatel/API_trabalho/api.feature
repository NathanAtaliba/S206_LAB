Feature: Testando API South Park

Background: Executa uma vez antes de cada teste
    * def url_base = 'https://spapi.dev/api/'

Scenario: Testando se o nome de um character está correto
    Given url url_base
    And path 'characters/1' 
    When method get
    Then status 200
    And match response.data.name ==  "Gerald Broflovski"

    

Scenario: Testando retorno com informações inválidas (teste negativo 1)
    Given url url_base
    And path 'characters/1/1234' 
    When method get
    Then status 404
    

Scenario: Testando se o sexo de um character é masculino
    Given url url_base
    And path 'characters/1' 
    When method get
    Then status 200
    And match response.data.sex == "Male"

    Scenario: Testando se o religião de um character é Judaismo
    Given url url_base
    And path 'characters/1' 
    When method get
    Then status 200
    And match response.data.religion == "Judaism"
    
Scenario: Testando se o cabelo de um character é marrom
    Given url url_base
    And path 'characters/1' 
    When method get
    Then status 200
    And match response.data.hair_color == "Brown"

Scenario: Testando um outro retorno com informações invalidas (teste negativo 2)
    Given url url_base
    And path 'characters/1/555555' 
    When method get
    Then status 404