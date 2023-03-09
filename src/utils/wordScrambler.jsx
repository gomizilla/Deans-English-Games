import {nhYear1} from "../data/vocabWords"; // not needed?

// const scramblerOG = () => {
//     let nh1VocabArray = nh1Vocab.map((word) => {
//         return word.english_vocab;
//     });
//     // console.log("vocab array check: ", nh1VocabArray);
//     let nh1VocabScrambled = nh1VocabArray.map((word) => {
//         return scrambleWord(word);
//     });
//     // console.log("scramble check: ", nh1VocabScrambled);
//     setNh1VocabScrambleArr(nh1VocabScrambled);

//     //test

//     let newWordsTest = nh1Vocab.map((word) => {
//         return {
//             en: word.english_vocab,
//             scrambled: scrambleWord(word.english_vocab),
//             jp: "",
//             toggled: false
//         }
//     });
//     setNh1VocabTest(newWordsTest);
//     // setToggled(true);
// };

const scrambler = (vocabArr) => {

    let newWords = vocabArr.map((word) => {
        return {
            en: word.english_vocab,
            scrambled: scrambleWord(word.english_vocab),
            jp: "",
            toggled: false
        }
    });
    return newWords;
};

const scrambleWord = (word) => {
    let scramble = [];
    let newWord = [];
    for (let i = 0; i < word.length; i++) {
        scramble.push(word[i]);
    }
    let wordLength = word.length;
    let j = 0;
    let temp;

    while (wordLength--) {
        j = Math.floor(Math.random() * (wordLength + 1));
        temp = scramble[wordLength];
        newWord[wordLength] = scramble[j];
        scramble[j] = temp;
    }
    let scrambledWord = newWord.join("");
    return scrambledWord;
};