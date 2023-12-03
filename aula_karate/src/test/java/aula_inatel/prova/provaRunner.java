package aula_inatel.prova;

import com.intuit.karate.junit5.Karate;

public class provaRunner {
    
    @Karate.Test
    Karate testprova() {
        return Karate.run("prova").relativeTo(getClass());
    }     
}