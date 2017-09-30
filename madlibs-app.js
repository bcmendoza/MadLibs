function madLibs(){
    
        // Create parts-of-speech container
        var inputs = [];
        inputs[0] = "Enter a noun (i.e. prankster)"
        inputs[1] = "Enter a pronoun (i.e. he)"
        inputs[2] = "Enter a verb (i.e. laugh)"
        inputs[3] = "Enter an adjective (i.e. tricky)"
        inputs[4] = "Enter an adverb (i.e. crazily, trickily)"
        inputs[5] = "Enter a preposition (e.g. by, with, about, until)"
        inputs[6] = "Enter a conjunction (Joins phrases, e.g. and, but, because)"
        inputs[7] = "Enter an interjection (Expresses emotion, e.g. 'Wow!' or 'Doh!')"
        
        // Create word log containers
        var nouns = [];
        var pronouns = [];
        var verbs = [];
        var adjectives = [];
        var adverbs = [];
        var prepositions = [];
        var conjunctions = [];
        var interjections = [];
        
        // Request username, log greeting, prep word container
        var name = window.prompt("Please enter your username!");
        alert(`Hello, ${name}! Let's write a 'random' story! Enter words into the prompts to create an epic adventure!`)
        var word = "";
        
        // Entering the loop
        for (var i = 1; i > 0; i++){
            var trap = Math.floor(Math.random() * 100)
            if (trap < 15){
                word = window.prompt(inputs[0]);
                nouns.push(word);
            }
            else if (trap < 25){
                word = window.prompt(inputs[1]);
                pronouns.push(word);
            }
            else if (trap < 40){
                word = window.prompt(inputs[2]);
                verbs.push(word);
            }
            else if (trap < 55){
                word = window.prompt(inputs[3]);
                adjectives.push(word);
            }
            else if (trap < 65){
                word = window.prompt(inputs[4]);
                adverbs.push(word);
            }
            else if (trap < 75){
                word = window.prompt(inputs[5]);
                prepositions.push(word);
            }
            else if (trap < 85){
                word = window.prompt(inputs[6]);
                conjunctions.push(word);
            }
            else if (trap < 100){
                word = window.prompt(inputs[7]);
                interjections.push(word);
            }
            if (i == 25){
                alert(`${name}, hit 'Cancel' anytime to see how your story is shaping up!`)
            }
            if (word === null){
                break;
            }
        }
    
        var rating = ""
        if (i < 11){
            rating = "They were not very patient! :/"
        }
        else if (i < 20){
            rating = "They were very patient! ;)"
        }
        else if (i >= 20){
            rating = "They were very gullible!!!"
        }
        
        var results = (`
            <h2>Haha!!! Here's your story...</h2>
            <p>There once was a person named ${name}.<br>
            ${rating}<br>&nbsp;</p>
            <h2>Result:</h2>
            <p>You entered a total of ${i} words.</p>
            <ul>
                <li>Nouns (${nouns.length}): ${nouns}</li>
                <li>Pronouns (${pronouns.length}): ${pronouns}</li>
                <li>Verbs (${verbs.length}): ${verbs}</li>
                <li>Adjectives (${adjectives.length}): ${adjectives}</li>
                <li>Adverbs (${adverbs.length}): ${adverbs}</li>
                <li>Prepositions (${prepositions.length}): ${prepositions}</li>
                <li>Conjunctions (${conjunctions.length}): ${conjunctions}</li>
                <li>Interjections (${interjections.length}): ${interjections}</li>
            </ul>
        `)
        
        document.getElementById('story').innerHTML = results;
        
    }
    
    madLibs();