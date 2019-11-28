export let wordFetcher = async function(word){
    // const myHeaders = new Headers({"app_id": "fa8c7193",
    //     "app_key": "9301c0da56a944088d80f425ee8dcc76"});
    let etymologyEl = document.getElementById("etymology");
    let definitionsEl = document.getElementById("definitions");
    let searchWord = document.getElementById("searchWord");
    let options = {
        mode: 'cors',
        method: "GET",
        headers: {
            "app_id": "fa8c7193",
            "app_key": "9301c0da56a944088d80f425ee8dcc76"
        }
    };
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    let wordLower = word.toLowerCase();
    try {
        let fetchingWord = await fetch(proxyurl + `https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${wordLower}`, options);
        let wordInfo = await fetchingWord.json();

        if (wordInfo.length !== 0) {
            let result = wordInfo.results;
            let definitions = result[0].lexicalEntries[0].entries[0].senses.map(sense => {
                return sense.definitions
            });
            let etymologies = result[0].lexicalEntries[0].entries[0].etymologies;
            let data = {
                "word": result[0].id,
                "definitions": definitions,
                "etymologies": etymologies
            };
            let wordModal = document.getElementById("wordModal")
            searchWord.innerText = data.word
            etymologyEl.innerText = data.etymologies[0];
            while (definitionsEl.hasChildNodes()) {
                definitionsEl.removeChild(definitionsEl.firstChild);
            }
            if (data.definitions !== 'undefined') {
            data.definitions.forEach(def => {
                let li = document.createElement("li");
                li.innerText = def[0];
                definitionsEl.appendChild(li);
            });
            }
            wordModal.style.display = "block"
            }
    } catch (err) {
        
        searchWord.innerHTML = `Sorry, ${word} could not be found.`
        etymologyEl.innerText = ''
        definitionsEl.innerText = ''
        wordModal.style.display = "block"
    }; 
};

// {
//     "id": "love",
//         "metadata": {
//         "operation": "retrieve",
//             "provider": "Oxford University Press",
//                 "schema": "RetrieveEntry"
//     },
//     "results": [
//         {
//             "id": "love",
//             "language": "en-gb",
//             "lexicalEntries": [
//                 {
//                     "derivatives": [
//                         {
//                             "id": "loveworthy",
//                             "text": "loveworthy"
//                         }
//                     ],
//                     "entries": [
//                         {
//                             "etymologies": [
//                                 "Old English lufu, of Germanic origin; from an Indo-European root shared by Sanskrit lubhyati‘desires’, Latin libet‘it is pleasing’, libido‘desire’, also by leave and lief"
//                             ],
//                             "grammaticalFeatures": [
//                                 {
//                                     "id": "mass",
//                                     "text": "Mass",
//                                     "type": "Countability"
//                                 }
//                             ],
//                             "senses": [
//                                 {
//                                     "constructions": [
//                                         {
//                                             "text": "love for"
//                                         }
//                                     ],
//                                     "definitions": [
//                                         "an intense feeling of deep affection"
//                                     ],
//                                     "examples": [
//                                         {
//                                             "text": "babies fill parents with feelings of love"
//                                         },
//                                         {
//                                             "text": "their love for their country"
//                                         }
//                                     ],
//                                     "id": "m_en_gbus0596690.007",
//                                     "shortDefinitions": [
//                                         "strong feeling of affection"
//                                     ],
//                                     "subsenses": [
//                                         {
//                                             "constructions": [
//                                                 {
//                                                     "text": "in love with"
//                                                 }
//                                             ],
//                                             "definitions": [
//                                                 "a strong feeling of affection and sexual attraction for someone"
//                                             ],
//                                             "examples": [
//                                                 {
//                                                     "text": "they were both in love with her"
//                                                 },
//                                                 {
//                                                     "text": "we were slowly falling in love"
//                                                 }
//                                             ],
//                                             "id": "m_en_gbus0596690.009",
//                                             "shortDefinitions": [
//                                                 "strong feeling of affection and sexual attraction"
//                                             ],
//                                             "thesaurusLinks": [
//                                                 {
//                                                     "entry_id": "in_love_with",
//                                                     "sense_id": "t_en_gb0008942.008"
//                                                 }
//                                             ]
//                                         },
//                                         {
//                                             "definitions": [
//                                                 "affectionate greetings conveyed to someone on one's behalf"
//                                             ],
//                                             "examples": [
//                                                 {
//                                                     "text": "give her my love"
//                                                 }
//                                             ],
//                                             "id": "m_en_gbus0596690.010",
//                                             "shortDefinitions": [
//                                                 "affectionate greetings"
//                                             ],
//                                             "thesaurusLinks": [
//                                                 {
//                                                     "entry_id": "love",
//                                                     "sense_id": "t_en_gb0008942.006"
//                                                 }
//                                             ]
//                                         },
//                                         {
//                                             "definitions": [
//                                                 "a formula for ending an affectionate letter"
//                                             ],
//                                             "examples": [
//                                                 {
//                                                     "text": "take care, lots of love, Judy"
//                                                 }
//                                             ],
//                                             "id": "m_en_gbus0596690.011",
//                                             "shortDefinitions": [
//                                                 "formula for ending affectionate letter"
//                                             ]
//                                         },
//                                         {
//                                             "definitions": [
//                                                 "a personified figure of love, often represented as Cupid."
//                                             ],
//                                             "domains": [
//                                                 {
//                                                     "id": "roman_history",
//                                                     "text": "Roman_History"
//                                                 }
//                                             ],
//                                             "id": "m_en_gbus0596690.012",
//                                             "shortDefinitions": [
//                                                 "personified figure of love"
//                                             ],
//                                             "variantForms": [
//                                                 {
//                                                     "text": "Love"
//                                                 }
//                                             ]
//                                         }
//                                     ],
//                                     "thesaurusLinks": [
//                                         {
//                                             "entry_id": "love",
//                                             "sense_id": "t_en_gb0008942.001"
//                                         },
//                                         {
//                                             "entry_id": "love",
//                                             "sense_id": "t_en_gb0008942.003"
//                                         },
//                                         {
//                                             "entry_id": "love",
//                                             "sense_id": "t_en_gb0008942.005"
//                                         }
//                                     ]
//                                 },
//                                 {
//                                     "constructions": [
//                                         {
//                                             "text": "love for"
//                                         },
//                                         {
//                                             "text": "love of"
//                                         }
//                                     ],
//                                     "definitions": [
//                                         "a great interest and pleasure in something"
//                                     ],
//                                     "examples": [
//                                         {
//                                             "text": "his love for football"
//                                         },
//                                         {
//                                             "text": "we share a love of music"
//                                         }
//                                     ],
//                                     "id": "m_en_gbus0596690.016",
//                                     "shortDefinitions": [
//                                         "great interest and pleasure in something"
//                                     ],
//                                     "thesaurusLinks": [
//                                         {
//                                             "entry_id": "love",
//                                             "sense_id": "t_en_gb0008942.002"
//                                         }
//                                     ]
//                                 },
//                                 {
//                                     "constructions": [
//                                         {
//                                             "text": "the love of [possessive pronoun] life"
//                                         }
//                                     ],
//                                     "definitions": [
//                                         "a person or thing that one loves"
//                                     ],
//                                     "examples": [
//                                         {
//                                             "text": "she was the love of his life"
//                                         },
//                                         {
//                                             "text": "their two great loves are tobacco and whisky"
//                                         }
//                                     ],
//                                     "id": "m_en_gbus0596690.018",
//                                     "notes": [
//                                         {
//                                             "text": "count noun",
//                                             "type": "grammaticalNote"
//                                         }
//                                     ],
//                                     "shortDefinitions": [
//                                         "person or thing that one loves"
//                                     ],
//                                     "subsenses": [
//                                         {
//                                             "definitions": [
//                                                 "a friendly form of address"
//                                             ],
//                                             "examples": [
//                                                 {
//                                                     "text": "it's all right, love"
//                                                 }
//                                             ],
//                                             "id": "m_en_gbus0596690.021",
//                                             "regions": [
//                                                 {
//                                                     "id": "british",
//                                                     "text": "British"
//                                                 }
//                                             ],
//                                             "registers": [
//                                                 {
//                                                     "id": "informal",
//                                                     "text": "Informal"
//                                                 }
//                                             ],
//                                             "shortDefinitions": [
//                                                 "friendly form of address"
//                                             ]
//                                         },
//                                         {
//                                             "definitions": [
//                                                 "used in affectionate requests"
//                                             ],
//                                             "examples": [
//                                                 {
//                                                     "text": "don't fret, there's a love"
//                                                 }
//                                             ],
//                                             "id": "m_en_gbus0596690.022",
//                                             "notes": [
//                                                 {
//                                                     "text": "\"a love\"",
//                                                     "type": "wordFormNote"
//                                                 }
//                                             ],
//                                             "registers": [
//                                                 {
//                                                     "id": "informal",
//                                                     "text": "Informal"
//                                                 }
//                                             ],
//                                             "shortDefinitions": [
//                                                 "used in affectionate requests"
//                                             ]
//                                         }
//                                     ],
//                                     "thesaurusLinks": [
//                                         {
//                                             "entry_id": "love",
//                                             "sense_id": "t_en_gb0008942.004"
//                                         }
//                                     ]
//                                 },
//                                 {
//                                     "definitions": [
//                                         "(in tennis, squash, and some other sports) a score of zero; nil"
//                                     ],
//                                     "domains": [
//                                         {
//                                             "id": "tennis",
//                                             "text": "Tennis"
//                                         }
//                                     ],
//                                     "etymologies": [
//                                         "apparently from the phrase play for love (i.e. the love of the game, not for money); folk etymology has connected the word with French l'oeuf‘egg’, from the resemblance in shape between an egg and a zero"
//                                     ],
//                                     "examples": [
//                                         {
//                                             "text": "love fifteen"
//                                         }
//                                     ],
//                                     "id": "m_en_gbus0596690.024",
//                                     "shortDefinitions": [
//                                         "score of zero"
//                                     ]
//                                 }
//                             ]
//                         }
//                     ],
//                     "language": "en-gb",
//                     "lexicalCategory": {
//                         "id": "noun",
//                         "text": "Noun"
//                     },
//                     "pronunciations": [
//                         {
//                             "audioFile": "http://audio.oxforddictionaries.com/en/mp3/love_gb_1.mp3",
//                             "dialects": [
//                                 "British English"
//                             ],
//                             "phoneticNotation": "IPA",
//                             "phoneticSpelling": "lʌv"
//                         }
//                     ],
//                     "text": "love"
//                 },
//                 {
//                     "derivatives": [
//                         {
//                             "id": "loveworthy",
//                             "text": "loveworthy"
//                         }
//                     ],
//                     "entries": [
//                         {
//                             "grammaticalFeatures": [
//                                 {
//                                     "id": "transitive",
//                                     "text": "Transitive",
//                                     "type": "Subcategorization"
//                                 }
//                             ],
//                             "senses": [
//                                 {
//                                     "definitions": [
//                                         "feel deep affection for (someone)"
//                                     ],
//                                     "examples": [
//                                         {
//                                             "text": "he loved his sister dearly"
//                                         },
//                                         {
//                                             "text": "there were four memorial pages set up by her friends in honour of Phoebe, saying how much they loved and missed her"
//                                         }
//                                     ],
//                                     "id": "m_en_gbus0596690.026",
//                                     "shortDefinitions": [
//                                         "feel love for"
//                                     ],
//                                     "subsenses": [
//                                         {
//                                             "definitions": [
//                                                 "feel a deep romantic or sexual attachment to (someone)"
//                                             ],
//                                             "examples": [
//                                                 {
//                                                     "text": "she really loved him"
//                                                 },
//                                                 {
//                                                     "text": "I do realize that people get married because they love each other"
//                                                 }
//                                             ],
//                                             "id": "m_en_gbus0596690.085",
//                                             "shortDefinitions": [
//                                                 "feel romantic or sexual attachment to"
//                                             ],
//                                             "thesaurusLinks": [
//                                                 {
//                                                     "entry_id": "love",
//                                                     "sense_id": "t_en_gb0008942.009"
//                                                 }
//                                             ]
//                                         }
//                                     ],
//                                     "thesaurusLinks": [
//                                         {
//                                             "entry_id": "love",
//                                             "sense_id": "t_en_gb0008942.009"
//                                         }
//                                     ]
//                                 },
//                                 {
//                                     "definitions": [
//                                         "like or enjoy very much"
//                                     ],
//                                     "examples": [
//                                         {
//                                             "text": "I just love dancing"
//                                         },
//                                         {
//                                             "text": "I'd love a cup of tea"
//                                         },
//                                         {
//                                             "text": "I love this job"
//                                         },
//                                         {
//                                             "notes": [
//                                                 {
//                                                     "text": "with infinitive",
//                                                     "type": "grammaticalNote"
//                                                 }
//                                             ],
//                                             "text": "they love to play golf"
//                                         }
//                                     ],
//                                     "id": "m_en_gbus0596690.032",
//                                     "shortDefinitions": [
//                                         "like or enjoy very much"
//                                     ],
//                                     "thesaurusLinks": [
//                                         {
//                                             "entry_id": "love",
//                                             "sense_id": "t_en_gb0008942.010"
//                                         }
//                                     ]
//                                 }
//                             ]
//                         }
//                     ],
//                     "language": "en-gb",
//                     "lexicalCategory": {
//                         "id": "verb",
//                         "text": "Verb"
//                     },
//                     "pronunciations": [
//                         {
//                             "audioFile": "http://audio.oxforddictionaries.com/en/mp3/love_gb_1.mp3",
//                             "dialects": [
//                                 "British English"
//                             ],
//                             "phoneticNotation": "IPA",
//                             "phoneticSpelling": "lʌv"
//                         }
//                     ],
//                     "text": "love"
//                 }
//             ],
//             "type": "headword",
//             "word": "love"
//         }
//     ],
//         "word": "love"
// }