
export const getRandomEnglishWord = (list) => {
    const randomNum = Math.floor(Math.random() * list.length);
    return list[randomNum].english_vocab;
};

/* template

unit1: {
        part1KeySentence: {
            1: "",
        },
        part1Vocab: [
            {
                english_vocab: "",
                japanese_vocab: "",
            },
        ],
        part2KeySentence: {

        },
        part2Vocab: [
            {
                english_vocab: "",
                japanese_vocab: "",
            },
        ],
        part3KeySentence: {

        },
        part3Vocab: [
            {
                english_vocab: "",
                japanese_vocab: "",
            },
        ]
    },

*/

export const nhYear1 = {
    unit1: {
        part1KeySentence: {
            1: "I am Meg Brown.",
            2: "I like Japanese Food.",
        },
        part1Vocab: [
            {
                english_vocab: "call",
                japanese_vocab: "...を（～と）呼ぶ、名づける",
            },
            {
                english_vocab: "often",
                japanese_vocab: "",
            },
            
        ],
        part2KeySentence: {
            1: "Are you fromt Sydney? --Yes, I am. [No, I am not.]",
            2: "Do you play cricket? --Yes, I do. [No, I do not. I do not play cricket.]",
        },
        part2Vocab: [
            {
                english_vocab: "so",
                japanese_vocab: "",
            },
            {
                english_vocab: "fan",
                japanese_vocab: "",
            },
            {
                english_vocab: "cricket",
                japanese_vocab: "",
            },
            {
                english_vocab: "just",
                japanese_vocab: "",
            },
        ],
        part3KeySentence: {
            1: "I can read hiragana. I cannot read kanji.",
            2: "Can you read kanji? --Yes, I can. [No, I cannot].",
        },
        part3Vocab: [
            {
                english_vocab: "there",
                japanese_vocab: "",
            },
            {
                english_vocab: "little",
                japanese_vocab: "",
            },
            {
                english_vocab: "every",
                japanese_vocab: "",
            },
            {
                english_vocab: "but",
                japanese_vocab: "",
            },
            {
                english_vocab: "cannot",
                japanese_vocab: "",
            },
        ],  
    },
    unit2: {
        part1KeySentence: {
            1: "This is Kaito. He is in Class1B. He is not in Class 1A.",
            2: "This is Ms. Cook. She is our teacher. She is not from Australia.",
            3: "Is that a fish market? --Yes, it is. [No, it is not.]",
        },
        part1Vocab: [
            {
                english_vocab: "America", // not sure if needed
                japanese_vocab: "",
            },
            {
                english_vocab: "market",
                japanese_vocab: "",
            },
            {
                english_vocab: "wow",
                japanese_vocab: "",
            },
            {
                english_vocab: "popular",
                japanese_vocab: "",
            },
            {
                english_vocab: "crowded",
                japanese_vocab: "",
            },
        ],
        part2KeySentence: {
            1: 'What is this? --It is the symbol for "school".',
            2: "Whos is that? --That is Josh.",
        },
        part2Vocab: [
            {
                english_vocab: "symbol",
                japanese_vocab: "",
            },
            {
                english_vocab: "picnic",
                japanese_vocab: "",
            },
            {
                english_vocab: "area",
                japanese_vocab: "",
            },
            {
                english_vocab: "hey",
                japanese_vocab: "",
            },
        ],
        part3KeySentence: {
            1: "How do you come to school? --I walk to school.",
            2: "What do you have for breakfast? --I have toast."
        },
        part3Vocab: [
            {
                english_vocab: "around",
                japanese_vocab: "",
            },
            {
                english_vocab: "come",
                japanese_vocab: "",
            },
            {
                english_vocab: "toast",
                japanese_vocab: "",
            },
            {
                english_vocab: "yogurt",
                japanese_vocab: "",
            },
            {
                english_vocab: "also",
                japanese_vocab: "",
            },
            {
                english_vocab: "an",
                japanese_vocab: "",
            },
            {
                english_vocab: "sound",
                japanese_vocab: "",
            },
        ]
    },
    unit3: {
        part1KeySentence: {
            1: "Where do you practice? --We practice in the music room.",
            2: "Where is Midori Hall? --It is near the station.",
            3: "When is the next concert? --It is on July 5.",
        },
        part1Vocab: [
            {
                english_vocab: "trumpet",
                japanese_vocab: "",
            },
            {
                english_vocab: "brass band",
                japanese_vocab: "",
            },
            {
                english_vocab: "before",
                japanese_vocab: "",
            },
            {
                english_vocab: "concert",
                japanese_vocab: "",
            },
            {
                english_vocab: "next",
                japanese_vocab: "",
            },
            {
                english_vocab: "fifth",
                japanese_vocab: "",
            },
            {
                english_vocab: "hall",
                japanese_vocab: "",
            },
            {
                english_vocab: "near",
                japanese_vocab: "",
            },
        ],
        part2KeySentence: {
            1: "I want to win the game.",
            2: "I want to be a good soccer player.",
        },
        part2Vocab: [
            {
                english_vocab: "excited",
                japanese_vocab: "",
            },
            {
                english_vocab: "today",
                japanese_vocab: "",
            },
            {
                english_vocab: "yeah",
                japanese_vocab: "",
            },
            {
                english_vocab: "win",
                japanese_vocab: "",
            },
            {
                english_vocab: "someday",
                japanese_vocab: "",
            },
        ],
        part3KeySentence: {
            1: "How many rackets do you have? --I have two rackets.",
        },
        part3Vocab: [
            {
                english_vocab: "bring",
                japanese_vocab: "",
            },
            {
                english_vocab: "shoe",
                english_plural: "shoes",
                japanese_vocab: "",
            },
            {
                english_vocab: "towel",
                english_plural: "towels",
                japanese_vocab: "",
            },
            {
                english_vocab: "bottle",
                japanese_vocab: "",
            },
            {
                english_vocab: "week",
                japanese_vocab: "",
            },
            {
                english_vocab: "off",
                japanese_vocab: "",
            },
            {
                english_vocab: "those",
                japanese_vocab: "",
            },
            {
                english_vocab: "man",
                english_plural: "men",
                japanese_vocab: "",
            },
            {
                english_vocab: "woman",
                english_plural: "women",
                japanese_vocab: "",
            },
            {
                english_vocab: "they",
                japanese_vocab: "",
            },
            {
                english_vocab: "coach",
                english_plural: "coaches",
                japanese_vocab: "",
            },
        ]
    },
    unit4: {
        part1KeySentence: {
            1: "Come to the front.",
            2: "Be brave.",
            3: "Don't worry.",
        },
        part1Vocab: [
            {
                english_vocab: "front",
                japanese_vocab: "",
            },
            {
                english_vocab: "nervous",
                japanese_vocab: "",
            },
            {
                english_vocab: "worry",
                japanese_vocab: "",
            },
            {
                english_vocab: "yourself",
                japanese_vocab: "",
            },
        ],
        part2KeySentence: {
            1: "What time is it? --It is noon. [It is twelve (o'clock).]",
            2: "What time do you have lunch? --At one. [We have lunch at one.]",
        },
        part2Vocab: [
            {
                english_vocab: "now",
                japanese_vocab: "",
            },
            {
                english_vocab: "noon",
                japanese_vocab: "",
            },
            {
                english_vocab: "break",
                japanese_vocab: "",
            },
            {
                english_vocab: "after",
                japanese_vocab: "",
            },
            {
                english_vocab: "period",
                japanese_vocab: "",
            },
            {
                english_vocab: "some",
                japanese_vocab: "",
            },
            {
                english_vocab: "or",
                japanese_vocab: "",
            },
            {
                english_vocab: "during",
                japanese_vocab: "",
            },
            {
                english_vocab: "o'clock", // figure out how to remove this from wordle
                japanese_vocab: "",
            },
        ],
        part3KeySentence: {
            1: "What animals can we see in New Zealand? --You can see sheep and kiwis.",
            2: "What sport do you like? --I like netball.",
        },
        part3Vocab: [
            {
                english_vocab: "kiwi",
                japanese_vocab: "",
            },
            {
                english_vocab: "right",
                japanese_vocab: "",
            },
            {
                english_vocab: "round",
                japanese_vocab: "",
            },
            {
                english_vocab: "like",
                japanese_vocab: "",
            },
            {
                english_vocab: "national",
                japanese_vocab: "",
            },
            {
                english_vocab: "mean",
                japanese_vocab: "",
            },
        ]
    },
    unit5: {
        part1KeySentence: {
            1: "Meg is by the bench.",
            2: "Look at the bench under the tree.",
            3: "Look at the people on the stage.",
        },
        part1Vocab: [
            {
                english_vocab: "quiet",
                japanese_vocab: "",
            },
            {
                english_vocab: "jog",
                japanese_vocab: "",
            },
            {
                english_vocab: "pond",
                japanese_vocab: "",
            },
            {
                english_vocab: "bench",
                japanese_vocab: "",
            },
            {
                english_vocab: "over",
                japanese_vocab: "",
            },
            {
                english_vocab: "hair",
                japanese_vocab: "",
            },
            {
                english_vocab: "people",
                japanese_vocab: "",
            },
            {
                english_vocab: "stage",
                japanese_vocab: "",
            },
        ],
        part2KeySentence: {
            1: "I like dancing.",
            2: "I am good at dancing.",
        },
        part2Vocab: [
            {
                english_vocab: "dancing",
                japanese_vocab: "",
            },
            {
                english_vocab: "umm",
                japanese_vocab: "",
            },
            {
                english_vocab: "shy",
                japanese_vocab: "",
            },
            {
                english_vocab: "something",
                japanese_vocab: "",
            },
            {
                english_vocab: "idea",
                japanese_vocab: "",
            },
            {
                english_vocab: "thirsty",
                japanese_vocab: "",
            },
            {
                english_vocab: "need",
                japanese_vocab: "",
            },
        ],
        part3KeySentence: {
            1: "I went to the summer festival yesterday.",
        },
        part3Vocab: [
            {
                english_vocab: "yesterday",
                japanese_vocab: "",
            },
            {
                english_vocab: "went",
                japanese_vocab: "",
            },
            {
                english_vocab: "ate",
                japanese_vocab: "",
            },
            {
                english_vocab: "candy",
                japanese_vocab: "",
            },
            {
                english_vocab: "end",
                japanese_vocab: "",
            },
            {
                english_vocab: "saw",
                japanese_vocab: "",
            },
            {
                english_vocab: "lot",
                japanese_vocab: "",
            },
            {
                english_vocab: "had",
                japanese_vocab: "",
            },
        ]
    },
    unit6: {
        part1KeySentence: {
            1: "I live in Cebu.",
            2: "Takuya lives in Cebu.",
        },
        part1Vocab: [
            {
                english_vocab: "language",
                japanese_vocab: "",
            },
            {
                english_vocab: "Asian", //needed?
                japanese_vocab: "",
            },
            {
                english_vocab: "student",
                japanese_vocab: "",
            },
            {
                english_vocab: "weekday",
                japanese_vocab: "",
            },
            {
                english_vocab: "weekend",
                japanese_vocab: "",
            },
            {
                english_vocab: "scuba diving", // space, remove from wordle
                japanese_vocab: "",
            },
            {
                english_vocab: "has",
                japanese_vocab: "",
            },
            {
                english_vocab: "his",
                japanese_vocab: "",
            },
            {
                english_vocab: "dive",
                japanese_vocab: "",
            },
        ],
        part2KeySentence: {
            1: "Takuya wrties a blog.",
            2: "Takuya does not write a blog.",
        },
        part2Vocab: [
            {
                english_vocab: "blog",
                japanese_vocab: "",
            },
            {
                english_vocab: "local",
                japanese_vocab: "",
            },
            {
                english_vocab: "spot",
                japanese_vocab: "",
            },
            {
                english_vocab: "does",
                japanese_vocab: "",
            },
            {
                english_vocab: "comment",
                japanese_vocab: "",
            },
            {
                english_vocab: "post",
                japanese_vocab: "",
            },
            {
                english_vocab: "waterproof",
                japanese_vocab: "",
            },
            {
                english_vocab: "camera",
                japanese_vocab: "",
            },
        ],
        part3KeySentence: {
            1: "Does Takuya like Filipino food? --Yes, he does. [No, he does not.]",
        },
        part3Vocab: [
            {
                english_vocab: "anyone",
                japanese_vocab: "",
            },
            {
                english_vocab: "any",
                japanese_vocab: "",
            },
            {
                english_vocab: "question",
                japanese_vocab: "",
            },
            {
                english_vocab: "mix",
                japanese_vocab: "",
            },
        ]
    },
    unit7: {
        part1KeySentence: {
            1: "That is Kaito. Do you know him?",
            2: "That is Meg. Do you know her?",
        },
        part1Vocab: [
            {
                english_vocab: "him",
                japanese_vocab: "",
            },
            {
                english_vocab: "pottery",
                japanese_vocab: "",
            },
            {
                english_vocab: "piece",
                japanese_vocab: "",
            },
            {
                english_vocab: "useful",
                japanese_vocab: "",
            },
            {
                english_vocab: "them",
                japanese_vocab: "",
            },
            {
                english_vocab: "performer",
                japanese_vocab: "",
            },
            {
                english_vocab: "perform",
                japanese_vocab: "",
            },
            {
                english_vocab: "her",
                japanese_vocab: "",
            },
            {
                english_vocab: "show",
                japanese_vocab: "",
            },
        ],
        part2KeySentence: {
            1: "Which does she speak, English or Japanese? --She speaks English.",
        },
        part2Vocab: [
            {
                english_vocab: "cushion",
                japanese_vocab: "",
            },
            {
                english_vocab: "role",
                japanese_vocab: "",
            },
            {
                english_vocab: "only",
                japanese_vocab: "",
            },
            {
                english_vocab: "prop",
                japanese_vocab: "",
            },
            {
                english_vocab: "which",
                japanese_vocab: "",
            },
        ],
        part3KeySentence: {
            1: "Whose ticket is this? --It is mine.",
        },
        part3Vocab: [
            {
                english_vocab: "minute",
                japanese_vocab: "",
            },
            {
                english_vocab: "wait",
                japanese_vocab: "",
            },
            {
                english_vocab: "whose",
                japanese_vocab: "",
            },
            {
                english_vocab: "ticket",
                japanese_vocab: "",
            },
            {
                english_vocab: "yours",
                japanese_vocab: "",
            },
            {
                english_vocab: "mine",
                japanese_vocab: "",
            },
            {
                english_vocab: "maybe",
                japanese_vocab: "",
            },
            {
                english_vocab: "oops",
                japanese_vocab: "",
            },
            {
                english_vocab: "careful",
                japanese_vocab: "",
            },
            {
                english_vocab: "history",
                japanese_vocab: "",
            },
            {
                english_vocab: "still",
                japanese_vocab: "",
            },
        ]
    },
    unit8: {
        part1KeySentence: {
            1: "I watch TV every day.",
            2: "I am watching TV now.",
        },
        part1Vocab: [
            {
                english_vocab: "tomorrow",
                japanese_vocab: "",
            },
            {
                english_vocab: "free",
                japanese_vocab: "",
            },
            {
                english_vocab: "video game", // remove, wordle
                japanese_vocab: "",
            },
            {
                english_vocab: "forward",
                japanese_vocab: "",
            },
            {
                english_vocab: "then",
                japanese_vocab: "",
            },
            {
                english_vocab: "bye",
                japanese_vocab: "",
            },
        ],
        part2KeySentence: {
            1: "Are you taking a picture? --Yes, I am. [No, I am not.]",
            2: "What are you doing? --I am writing a birthday card.",
        },
        part2Vocab: [
            {
                english_vocab: "decorate",
                japanese_vocab: "",
            },
            {
                english_vocab: "prepare",
                japanese_vocab: "",
            },
            {
                english_vocab: "say",
                japanese_vocab: "",
            },
            {
                english_vocab: "forever",
                japanese_vocab: "",
            },
        ],
        part3KeySentence: {
            1: "How nice!",
            2: "What a cute bag!",
        },
        part3Vocab: [
            {
                english_vocab: "quickly",
                japanese_vocab: "",
            },
            {
                english_vocab: "happen",
                japanese_vocab: "",
            },
            {
                english_vocab: "goodness",
                japanese_vocab: "",
            },
            {
                english_vocab: "forget",
                japanese_vocab: "",
            },
            {
                english_vocab: "course",
                japanese_vocab: "",
            },
        ]
    },
    unit9: {
        part1KeySentence: {
            1: "She wants to help people in need.",
            2: "She tries to do her best.",
        },
        part1Vocab: [
            {
                english_vocab: "cousin",
                japanese_vocab: "",
            },
            {
                english_vocab: "work",
                japanese_vocab: "",
            },
            {
                english_vocab: "as",
                japanese_vocab: "",
            },
            {
                english_vocab: "sick",
                japanese_vocab: "",
            },
        ],
        part2KeySentence: {
            1: "What do you want to do? --I want to try some ethnic food.",
        },
        part2Vocab: [
            {
                english_vocab: "presentation",
                japanese_vocab: "",
            },
            {
                english_vocab: "main",
                japanese_vocab: "",
            },
            {
                english_vocab: "later",
                japanese_vocab: "",
            },
            {
                english_vocab: "ethnic",
                japanese_vocab: "",
            },
            {
                english_vocab: "line",
                japanese_vocab: "",
            },
            {
                english_vocab: "late",
                japanese_vocab: "",
            },
            {
                english_vocab: "understand",
                japanese_vocab: "",
            },
        ],
        part3KeySentence: {
            1: "The children are happy.",
            2: "The children look happy.",
        },
        part3Vocab: [
            {
                english_vocab: "children",
                japanese_vocab: "",
            },
            {
                english_vocab: "well",
                japanese_vocab: "",
            },
            {
                english_vocab: "village",
                japanese_vocab: "",
            },
            {
                english_vocab: "collect",
                japanese_vocab: "",
            },
            {
                english_vocab: "volunteer",
                japanese_vocab: "",
            },
            {
                english_vocab: "build",
                japanese_vocab: "",
            },
            {
                english_vocab: "money",
                japanese_vocab: "",
            },
        ]
    },
    unit10: {
        part1KeySentence: {
            1: "I visit the museum every Sunday.",
            2: "I visited the museum last Sunday.",
        },
        part1Vocab: [
            {
                english_vocab: "full",
                japanese_vocab: "",
            },
            {
                english_vocab: "thing",
                japanese_vocab: "",
            },
            {
                english_vocab: "musical",
                japanese_vocab: "",
            },
            {
                english_vocab: "theater",
                japanese_vocab: "",
            },
            {
                english_vocab: "actor",
                japanese_vocab: "",
            },
            {
                english_vocab: "leading",
                japanese_vocab: "",
            },
            {
                english_vocab: "part",
                japanese_vocab: "",
            },
            {
                english_vocab: "performance",
                japanese_vocab: "",
            },
            {
                english_vocab: "last",
                japanese_vocab: "",
            },
        ],
        part2KeySentence: {
            1: "I see fireworks every summer.",
            2: "I saw fireworks that night.",
        },
        part2Vocab: [
            {
                english_vocab: "spent",
                japanese_vocab: "",
            },
            {
                english_vocab: "took",
                japanese_vocab: "",
            },
            {
                english_vocab: "came",
                japanese_vocab: "",
            },
            {
                english_vocab: "stood",
                japanese_vocab: "",
            },
            {
                english_vocab: "count",
                japanese_vocab: "",
            },
            {
                english_vocab: "midnight",
                japanese_vocab: "",
            },
            {
                english_vocab: "said",
                japanese_vocab: "",
            },
            {
                english_vocab: "each",
                japanese_vocab: "",
            },
            {
                english_vocab: "felt",
                japanese_vocab: "",
            },
        ],
        part3KeySentence: {
            1: "Did you get up early yesterday? --Yes, I did. [No, I did not.]",
        },
        part3Vocab: [
            {
                english_vocab: "did",
                japanese_vocab: "",
            },
            {
                english_vocab: "got",
                japanese_vocab: "",
            },
            {
                english_vocab: "early",
                japanese_vocab: "",
            },
            {
                english_vocab: "traditional",
                japanese_vocab: "",
            },
            {
                english_vocab: "parent",
                japanese_vocab: "",
            },
            {
                english_vocab: "made",
                japanese_vocab: "",
            },
            {
                english_vocab: "brought",
                japanese_vocab: "",
            },
            {
                english_vocab: "nothing",
                japanese_vocab: "",
            },
            {
                english_vocab: "special",
                japanese_vocab: "",
            },
            {
                english_vocab: "anywhere",
                japanese_vocab: "",
            },
            {
                english_vocab: "relax",
                japanese_vocab: "",
            },
        ]
    },
    unit11: {
        part1KeySentence: {
            1: "Were you a starter in the last game? --Yes, I was. [No, I was not.]",
        },
        part1Vocab: [
            {
                english_vocab: "rookie",
                japanese_vocab: "",
            },
            {
                english_vocab: "against",
                japanese_vocab: "",
            },
            {
                english_vocab: "another",
                japanese_vocab: "",
            },
            {
                english_vocab: "were",
                japanese_vocab: "",
            },
            {
                english_vocab: "half",
                japanese_vocab: "",
            },
            {
                english_vocab: "lost",
                japanese_vocab: "",
            },
            {
                english_vocab: "hope",
                japanese_vocab: "",
            },
        ],
        part2KeySentence: {
            1: "Is there a campground near the lake? --Yes, there is. [No, there is not.]",
            2: "There are outdoor kitchens, too.",
        },
        part2Vocab: [
            {
                english_vocab: "campground",
                japanese_vocab: "",
            },
            {
                english_vocab: "shower",
                japanese_vocab: "",
            },
            {
                english_vocab: "outdoor",
                japanese_vocab: "",
            },
            {
                english_vocab: "kitchen",
                japanese_vocab: "",
            },
            {
                english_vocab: "set",
                japanese_vocab: "",
            },
            {
                english_vocab: "tent",
                japanese_vocab: "",
            },
            {
                english_vocab: "trash",
                japanese_vocab: "",
            },
            {
                english_vocab: "pick",
                japanese_vocab: "",
            },
        ],
        part3KeySentence: {
            1: "I am playing soccer now.",
            2: "I was playing soccer then.",
        },
        part3Vocab: [
            {
                english_vocab: "photo",
                japanese_vocab: "",
            },
            {
                english_vocab: "album",
                japanese_vocab: "",
            },
            {
                english_vocab: "these",
                japanese_vocab: "",
            },
            {
                english_vocab: "back",
                japanese_vocab: "",
            },
            {
                english_vocab: "beat",
                japanese_vocab: "",
            },
        ]
    },
};

export const nh1Vocab = [
    {
        english_vocab: "call",
    },
    {
        english_vocab: "often",
    },
    {
        english_vocab: "so",
    },
    {
        english_vocab: "fan",
    },
    {
        english_vocab: "cricket",
    },
    {
        english_vocab: "just",
    },
    {
        english_vocab: "there",
    },
    {
        english_vocab: "little",
    },
    {
        english_vocab: "every",
    },
    {
        english_vocab: "but",
    },
    {
        english_vocab: "cannot",
    },
    {
        english_vocab: "market",
    },
    {
        english_vocab: "wow",
    },
    {
        english_vocab: "popular",
    },
    {
        english_vocab: "crowded",
    },
    {
        english_vocab: "symbol",
    },
    {
        english_vocab: "picnic",
    },
    {
        english_vocab: "area",
    },
    {
        english_vocab: "hey",
    },
    {
        english_vocab: "around",
    },
    {
        english_vocab: "come",
    },
    {
        english_vocab: "toast",
    },
    {
        english_vocab: "yogurt",
    },
    {
        english_vocab: "also",
    },
    {
        english_vocab: "sounds",
    },
    {
        english_vocab: "sausage",
    },
];

export const nh2Vocab = [
    {
        english_vocab: "",
    },
];

export const nh3Vocab = [
    {
        english_vocab: "",
    }
]
