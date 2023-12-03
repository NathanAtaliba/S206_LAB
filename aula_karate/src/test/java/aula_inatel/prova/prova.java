package aula_inatel.poke_prova;

import com.intuit.karate.junit5.Karate;

public class poke_provaRunner {
    
    @Karate.Test
    Karate testpoke_prova() {
        return Karate.run("prova").relativeTo(getClass());
    }    
    
}