# Introduction

This project was made for Japanese junior high school students who have a hard time learning English.
Through simple gamification, it helps students retain English vocabulary they encounter in school.

## How To Get It Running

 - Clone this repository
 - Open the repo with VSCode
 - Type `npm install` in the console to install all dependencies

# Adding/Removing/Editing Vocabulary
## To add vocabulary
 - Add your desired vocab to the section you feel is most appropriate in the `vocabWords.js` file
 - Use the format: 
    ```
    {
        english_vocab: "ENGLISH_WORD_HERE",
        japanese_vocab: "JAPANESE_TRANSLATION_HERE"
    },
    ```
    and put add after the last listed vocab, for example:
    ```
    unit1: {
        part1: {
            keySentence: {
                1: "I am Meg Brown.",
                2: "I like Japanese Food.",
            },
            vocab: [
                {
                    english_vocab: "call",
                    japanese_vocab: "...を（ ～と ）呼ぶ、名づける",
                },
                {
                    english_vocab: "often",
                    japanese_vocab: "しばしば、よく",
                },
                {
                    english_vocab: "ENGLISH_WORD_HERE",
                    japanese_vocab: "JAPANESE_TRANSLATION_HERE"
                },
            ]
        },
    ```
- Please note that at this time words with **spaces, hypens, and apostrophes** will not work apporpriately.

## To remove/edit vocabulary
 - Simply delete or edit both the English/Japanese vocabulary you want:
    ```
        {
            english_vocab: "DELETE/EDIT_ENGLISH_WORD",
            japanese_vocab: "DELETE/EDIT_JAPANESE_TRANSLATION"
        },
    ```
# Future Features
 - Search functionality for words not included.
 - Dictionary, a view of all vocabulary/sentences included for reference.
 - FAQ page in both English and Japanese.

# Feedback and Questions

If you have any feedback or questions feel free to contact me and let me know!