package aula_inatel.API_trabalho;

import com.intuit.karate.junit5.Karate;

public class APIRunner {

    @Karate.Test
    Karate testSouthPark() {
        return Karate.run("API_trabalho").relativeTo(getClass());
    } 
}