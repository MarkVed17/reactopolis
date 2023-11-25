const solveJumbledWords = ({ word, sampleDictionary }) => {
    const sortedInputWord = sortWord(word);
    return sampleDictionary.reduce((resultantWord, dictWord) => {
      if (sortWord(dictWord) === sortedInputWord) return dictWord;
      else return resultantWord
    }, false);
  };
  
  const sortWord = (word) => word.toLowerCase().split("").sort().join("");
  
  const word = "AEBUMRCNSSL";
  const sampleDictionary = [
    "Personality",
    "Quadrillion",
    "Abandonedly",
    "Unscrambles",
    "Abashedness",
  ];
  
  console.log(solveJumbledWords({ word, sampleDictionary }));
  