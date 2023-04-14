
export const getRandomEnglishWord = (list) => {
    // console.log("list check: ", list);
    const randomNum = Math.floor(Math.random() * list.length);
    // return list[randomNum].english_vocab;
    return list[randomNum].en;
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
        part1: {
            keySentence: {
                1: "I am Meg Brown.",
                2: "I like Japanese Food.",
            },
            vocab: [
                {
                    english_vocab: "call",
                    japanese_vocab: "...を（～と）呼ぶ、名づける", // 動
                },
                {
                    english_vocab: "often",
                    japanese_vocab: "しばしば、よく", // 副
                },
            ]
        },
        part2: {
            keySentence: {
                1: "Are you fromt Sydney? --Yes, I am. [No, I am not.]",
                2: "Do you play cricket? --Yes, I do. [No, I do not. I do not play cricket.]",
            },
            vocab: [
                {
                    english_vocab: "so",
                    japanese_vocab: "だから、それで、では", // 接
                },
                {
                    english_vocab: "fan",
                    japanese_vocab: "ファン", // 名
                },
                {
                    english_vocab: "cricket",
                    japanese_vocab: "クリケット", // 名
                },
                {
                    english_vocab: "just",
                    japanese_vocab: "ただ・・・だけ、ほんの、ちょっと", // 副
                },
            ]
        },
        part3: {
            keySentence: {
                1: "I can read hiragana. I cannot read kanji.",
                2: "Can you read kanji? --Yes, I can. [No, I cannot].",
            },
            vocab: [
                {
                    english_vocab: "there",
                    japanese_vocab: "そこに［で、へ］", // 副
                },
                {
                    english_vocab: "little",
                    japanese_vocab: "少し", // 副
                },
                {
                    english_vocab: "every",
                    japanese_vocab: "毎・・・、・・・ごとに", // 形
                },
                {
                    english_vocab: "but",
                    japanese_vocab: "しかし、けれども", // 接
                },
                {
                    english_vocab: "cannot",
                    japanese_vocab: "・・・できない", // 助
                },
            ]
        },
    },
    unit2: {
        part1: {
            keySentence: {
                1: "This is Kaito. He is in Class1B. He is not in Class 1A.",
                2: "This is Ms. Cook. She is our teacher. She is not from Australia.",
                3: "Is that a fish market? --Yes, it is. [No, it is not.]",
            },
            vocab: [
                {
                    english_vocab: "America", // not sure if needed
                    japanese_vocab: "アメリカ", // 名
                },
                {
                    english_vocab: "market",
                    japanese_vocab: "市場", // 名
                },
                {
                    english_vocab: "wow",
                    japanese_vocab: "うわあ、わあ", // 間
                },
                {
                    english_vocab: "popular",
                    japanese_vocab: "人気のある", // 形
                },
                {
                    english_vocab: "crowded",
                    japanese_vocab: "こみ合った、満員の", // 形
                },
            ]
        },
        part2: {
            keySentence: {
                1: 'What is this? --It is the symbol for "school".',
                2: "Whos is that? --That is Josh.",
            },
            vocab: [
                {
                    english_vocab: "symbol",
                    japanese_vocab: "シンボル、象徴、記号", // 名
                },
                {
                    english_vocab: "picnic",
                    japanese_vocab: "ピクニック、遠足", // 名
                },
                {
                    english_vocab: "area",
                    japanese_vocab: "区域、場所、地域", // 名
                },
                {
                    english_vocab: "hey",
                    japanese_vocab: "やあ、おい、ちょっと", // 間
                },
            ],

        },
        part3: {
            keySentence: {
                1: "How do you come to school? --I walk to school.",
                2: "What do you have for breakfast? --I have toast."
            },
            vocab: [
                {
                    english_vocab: "around",
                    japanese_vocab: "・・・の近く", // 前
                },
                {
                    english_vocab: "come",
                    japanese_vocab: "来る", // 動
                },
                {
                    english_vocab: "toast",
                    japanese_vocab: "トースト", // 名
                },
                {
                    english_vocab: "yogurt",
                    japanese_vocab: "ヨーグルト", // 名
                },
                {
                    english_vocab: "also",
                    japanese_vocab: "・・・もまた、そのうえ", // 副
                },
                {
                    english_vocab: "an",
                    japanese_vocab: "１つの", // 冠
                },
                {
                    english_vocab: "sound",
                    japanese_vocab: "・・・に聞こえる、思える", // 動
                },
            ]
        },
    },
    unit3: {
        part1: {
            keySentence: {
                1: "Where do you practice? --We practice in the music room.",
                2: "Where is Midori Hall? --It is near the station.",
                3: "When is the next concert? --It is on July 5.",
            },
            vocab: [
                {
                    english_vocab: "trumpet",
                    japanese_vocab: "",
                },
                // {
                //     english_vocab: "brass band", // need to fix
                //     japanese_vocab: "",
                // },
                {
                    english_vocab: "before",
                    japanese_vocab: "・・・の前に［の］", // 前
                },
                {
                    english_vocab: "concert",
                    japanese_vocab: "演奏会、コンサート", // 名
                },
                {
                    english_vocab: "next",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "fifth",
                    japanese_vocab: "５日、５番目(の)", // 名　形
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
        },
        part2: {
            keySentence: {
                1: "I want to win the game.",
                2: "I want to be a good soccer player.",
            },
            vocab: [
                {
                    english_vocab: "excited",
                    japanese_vocab: "わくわくした", // 形
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
        },
        part3: {
            keySentence: {
                1: "How many rackets do you have? --I have two rackets.",
            },
            vocab: [
                {
                    english_vocab: "bring",
                    japanese_vocab: "(～に)・・・をもってくる、・・・を連れてくる", // 動
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
                    japanese_vocab: "びん、ボトル", // 名
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
                    japanese_vocab: "コーチ", // 名
                },
            ]
        },
    },
    unit4: {
        part1: {
            keySentence: {
                1: "Come to the front.",
                2: "Be brave.",
                3: "Don't worry.",
            },
            vocab: [
                {
                    english_vocab: "front",
                    japanese_vocab: "前、正面", // 名
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
        },
        part2: {
            keySentence: {
                1: "What time is it? --It is noon. [It is twelve (o'clock).]",
                2: "What time do you have lunch? --At one. [We have lunch at one.]",
            },
            vocab: [
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
                    japanese_vocab: "休憩", // 名
                },
                {
                    english_vocab: "after",
                    japanese_vocab: "・・・のあとに［で］", // 前
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
                    japanese_vocab: "・・・の間ずっと、・・・の間に", // 前
                },
                // {
                //     english_vocab: "o'clock", // figure out how to remove this from wordle
                //     japanese_vocab: "",
                // },
            ],
        },
        part3: {
            keySentence: {
                1: "What animals can we see in New Zealand? --You can see sheep and kiwis.",
                2: "What sport do you like? --I like netball.",
            },
            vocab: [
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
    },
    unit5: {
        part1: {
            keySentence: {
                1: "Meg is by the bench.",
                2: "Look at the bench under the tree.",
                3: "Look at the people on the stage.",
            },
            vocab: [
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
                    japanese_vocab: "ベンチ", // 名
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
        },
        part2: {
            keySentence: {
                1: "I like dancing.",
                2: "I am good at dancing.",
            },
            vocab: [
                {
                    english_vocab: "dancing",
                    japanese_vocab: "おどり、ダンス", // 名
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
        },
        part3: {
            keySentence: {
                1: "I went to the summer festival yesterday.",
            },
            vocab: [
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
                    japanese_vocab: "eatの過去形", // 動
                },
                {
                    english_vocab: "candy",
                    japanese_vocab: "キャンディー、砂糖菓子", // 名
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
    },
    unit6: {
        part1: {
            keySentence: {
                1: "I live in Cebu.",
                2: "Takuya lives in Cebu.",
            },
            vocab: [
                {
                    english_vocab: "language",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "Asian", //needed?
                    japanese_vocab: "アジア(人)の", // 形
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
                // {
                //     english_vocab: "scuba diving", // space, remove from wordle
                //     japanese_vocab: "",
                // },
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
                    japanese_vocab: "もぐる、ダイビングをする", // 動
                },
            ],
        },
        part2: {
            keySentence: {
                1: "Takuya wrties a blog.",
                2: "Takuya does not write a blog.",
            },
            vocab: [
                {
                    english_vocab: "blog",
                    japanese_vocab: "ブログ", // 名
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
                    japanese_vocab: "①[否定文を作る] ②[疑問文や応答を作る]", // 助
                },
                {
                    english_vocab: "comment",
                    japanese_vocab: "批評、コメント", // 名
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
                    japanese_vocab: "カメラ", // 名
                },
            ],
        },
        part3: {
            keySentence: {
                1: "Does Takuya like Filipino food? --Yes, he does. [No, he does not.]",
            },
            vocab: [
                {
                    english_vocab: "anyone",
                    japanese_vocab: "だれか、だれも(・・・ない)", // 代
                },
                {
                    english_vocab: "any",
                    japanese_vocab: "いくらかの、何らかの、少しの・・・も(～ない)", // 形
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
    },
    unit7: {
        part1: {
            keySentence: {
                1: "That is Kaito. Do you know him?",
                2: "That is Meg. Do you know her?",
            },
            vocab: [
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
        },
        part2: {
            keySentence: {
                1: "Which does she speak, English or Japanese? --She speaks English.",
            },
            vocab: [
                {
                    english_vocab: "cushion",
                    japanese_vocab: "クッション、ざぶとん", // 名
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
        },
        part3: {
            keySentence: {
                1: "Whose ticket is this? --It is mine.",
            },
            vocab: [
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
                    japanese_vocab: "注意深い", // 形
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
    },
    unit8: {
        part1: {
            keySentence: {
                1: "I watch TV every day.",
                2: "I am watching TV now.",
            },
            vocab: [
                {
                    english_vocab: "tomorrow",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "free",
                    japanese_vocab: "ひまな", // 形
                },
                // {
                //     english_vocab: "video game", // remove, wordle
                //     japanese_vocab: "",
                // },
                {
                    english_vocab: "forward",
                    japanese_vocab: "look forward to ・・・を楽しみに待つ", // 副
                },
                {
                    english_vocab: "then",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "bye",
                    japanese_vocab: "さよなら、バイバイ", // 間
                },
            ],
        },
        part2: {
            keySentence: {
                1: "Are you taking a picture? --Yes, I am. [No, I am not.]",
                2: "What are you doing? --I am writing a birthday card.",
            },
            vocab: [
                {
                    english_vocab: "decorate",
                    japanese_vocab: "・・・を飾る", // 動
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
                    japanese_vocab: "永久に、永遠に", // 副
                },
            ],
        },
        part3: {
            keySentence: {
                1: "How nice!",
                2: "What a cute bag!",
            },
            vocab: [
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
                    japanese_vocab: "(・・・を)忘れる", // 動
                },
                {
                    english_vocab: "course",
                    japanese_vocab: "もちろん", // 名
                },
            ]
        },
    },
    unit9: {
        part1: {
            keySentence: {
                1: "She wants to help people in need.",
                2: "She tries to do her best.",
            },
            vocab: [
                {
                    english_vocab: "cousin",
                    japanese_vocab: "いとこ", // 名
                },
                {
                    english_vocab: "work",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "as",
                    japanese_vocab: "・・・として", // 前
                },
                {
                    english_vocab: "sick",
                    japanese_vocab: "",
                },
            ],
        },
        part2: {
            keySentence: {
                1: "What do you want to do? --I want to try some ethnic food.",
            },
            vocab: [
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
                    japanese_vocab: "民族(特有)の", // 形
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
        },
        part3: {
            keySentence: {
                1: "The children are happy.",
                2: "The children look happy.",
            },
            vocab: [
                {
                    english_vocab: "children",
                    japanese_vocab: "childの複数形", // 名
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
                    japanese_vocab: "・・・を集める", // 動
                },
                {
                    english_vocab: "volunteer",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "build",
                    japanese_vocab: "・・・を建てる", // 動
                },
                {
                    english_vocab: "money",
                    japanese_vocab: "",
                },
            ]
        },
    },
    unit10: {
        part1: {
            keySentence: {
                1: "I visit the museum every Sunday.",
                2: "I visited the museum last Sunday.",
            },
            vocab: [
                {
                    english_vocab: "full",
                    japanese_vocab: "いっぱいの、満腹の", // 形
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
                    japanese_vocab: "(女性を含む)俳優", // 名
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
        },
        part2: {
            keySentence: {
                1: "I see fireworks every summer.",
                2: "I saw fireworks that night.",
            },
            vocab: [
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
                    japanese_vocab: "comeの過去形", // 動
                },
                {
                    english_vocab: "stood",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "count",
                    japanese_vocab: "(・・・を)数える", // 動
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
                    japanese_vocab: "それぞれの、各自の", // 形
                },
                {
                    english_vocab: "felt",
                    japanese_vocab: "feelの過去形", // 動
                },
            ],
        },
        part3: {
            keySentence: {
                1: "Did you get up early yesterday? --Yes, I did. [No, I did not.]",
            },
            vocab: [
                {
                    english_vocab: "did",
                    japanese_vocab: "doの過去形", // 助 動
                },
                {
                    english_vocab: "got",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "early",
                    japanese_vocab: "早く", // 副
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
                    japanese_vocab: "bringの過去形", // 動
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
                    japanese_vocab: "どこにも(・・・ない)", // 副
                },
                {
                    english_vocab: "relax",
                    japanese_vocab: "",
                },
            ]
        },
    },
    unit11: {
        part1: {
            keySentence: {
                1: "Were you a starter in the last game? --Yes, I was. [No, I was not.]",
            },
            vocab: [
                {
                    english_vocab: "rookie",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "against",
                    japanese_vocab: "・・・に対抗して、反対して", // 前
                },
                {
                    english_vocab: "another",
                    japanese_vocab: "ほかの、別の、ちがった", // 形
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
        },
        part2: {
            keySentence: {
                1: "Is there a campground near the lake? --Yes, there is. [No, there is not.]",
                2: "There are outdoor kitchens, too.",
            },
            vocab: [
                {
                    english_vocab: "campground",
                    japanese_vocab: "キャンプ場", // 名
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
        },
        part3: {
            keySentence: {
                1: "I am playing soccer now.",
                2: "I was playing soccer then.",
            },
            vocab: [
                {
                    english_vocab: "photo",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "album",
                    japanese_vocab: "アルバム", // 名
                },
                {
                    english_vocab: "these",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "back",
                    japanese_vocab: "戻って、返して", // 副
                },
                {
                    english_vocab: "beat",
                    japanese_vocab: "どきどきする", // 動
                },
            ]
        },
    },
};

export const nhYear2 = {
    unit1: {
        part1: {
            keySentence: {
                1: "I am going to visit Singapore next week.",
                2: "Are you going to visit Singapore next week?"
            },
            vocab: [
               {
                english_vocab: "golden",
                japanese_vocab: "",
               },
               {
                english_vocab: "holiday",
                japanese_vocab: "",
               },
               {
                english_vocab: "abroad",
                japanese_vocab: "",
               },
               {
                english_vocab: "aunt",
                japanese_vocab: "",
               },
               {
                english_vocab: "uncle",
                japanese_vocab: "",
               },
               {
                english_vocab: "husband",
                japanese_vocab: "",
               },
               {
                english_vocab: "wife",
                japanese_vocab: "",
               },
            ]
        },
        part2: {
            keySentence: {
                1: "I will make a reservation."
            },
            vocab: [
                {
                    english_vocab: "far",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "will",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "seafood",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "reservation",
                    japanese_vocab: "",
                },
            ]
        },
        part3: {
            keySentence: {
                1: "I will show you the Merlion.",
                2: "People call it the Singapore Flyer."
            },
            vocab: [
                {
                    english_vocab: "meter",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "tall",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "weigh",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "ton",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "gift",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "cookie",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "rode",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "scary",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "communicate",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "culture",
                    japanese_vocab: "",
                },
            ]
        },
    },
    unit2: {
        part1: {
            keySentence: {
                1: "When I watch TV, I see many interesting dishes."
            },
            vocab: [
                {
                    english_vocab: "kind",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "recipe",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "pilaf",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "even",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "heard",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "hear",
                    japanese_vocab: "",
                },
            ]
        },
        part2: {
            keySentence: {
                1: "If you have time, we can go.",
            },
            vocab: [
                {
                    english_vocab: "sometime",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "if",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "originally",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "India",
                    japanese_vocab: "",
                },
            ]
        },
        part3: {
            keySentence: {
                1: "I think (that) curry came to Japan from India.",
                2: "I do not eat sushi because I do not like raw fish.",
            },
            vocab: [
                {
                    english_vocab: "directly",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "century",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "spice",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "British",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "company",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "produce",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "powder",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "sale",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "chef",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "flour",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "thick",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "blend",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "create",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "sauce",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "roll",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "because",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "raw",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "avocado",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "wrap",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "seaweed",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "Italy",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "Naples",
                    japanese_vocab: "",
                },
            ]
        },
    },
    unit3: {
        part1: {
            keySentence: {
                1: "We use computers to do many things.",
            },
            vocab: [
                {
                    english_vocab: "learn",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "progress",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "lives",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "disappear",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "appear",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "should",
                    japanese_vocab: "",
                },
            ]
        },
        part2: {
            keySentence: {
                1: "I am surprised to see this",
            },
            vocab: [
                {
                    english_vocab: "article",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "translator",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "surprised",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "according",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "translation",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "career",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "advice",
                    japanese_vocab: "",
                },
            ]
        },
        part3: {
            keySentence: {
                1: "We have various things to translate.",
                2: "It is important to use AI effectively.",
            },
            vocab: [
                {
                    english_vocab: "explain",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "translate",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "sentence",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "knew",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "deep",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "knowledge",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "develop",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "sense",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "various",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "general",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "specific",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "continue",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "strength",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "misunderstand",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "meaning",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "moreover",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "writer",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "feeling",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "catch",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "human",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "necessary",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "effectively",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "relationship",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "connect",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "everything",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "reason",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "between",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "through",
                    japanese_vocab: "",
                },
            ]
        },
    },
    unit4: {
        part1: {
            keySentence: {
                1: "You have to speak English.",
                2: "You do not have to speak perfect English.",
            },
            vocab: [
                {
                    english_vocab: "member",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "follow",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "rule",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "host",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "perfect",
                    japanese_vocab: "",
                },
            ]
        },
        part2: {
            keySentence: {
                1: "You must come home early.",
                2: "You must not go out alone.",
            },
            vocab: [
                {
                    english_vocab: "must",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "alone",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "safe",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "young",
                    japanese_vocab: "",
                },
            ]
        },
        part3: {
            keySentence: {
                1: "I finished using the bathroom.",
                2: "Playing games was fun.",
            },
            vocab: [
                {
                    english_vocab: "case",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "finish",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "bathroom",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "such",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "save",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "plate",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "hurt",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "elderly",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "couple",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "bored",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "hobby",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "hobbies",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "kept",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "keep",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "carefully",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "both",
                    japanese_vocab: "",
                },
            ]
        },
    },
    unit5: {
        part1: {
            keySentence: {
                1: "I know how to use these products.",
            },
            vocab: [
                {
                    english_vocab: "product",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "exhibition",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "facility",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "facilities",
                    japanese_vocab: "",
                },
            ]
        },
        part2: {
            keySentence: {
                1: "I can show you how to use these products.",
            },
            vocab: [
                {
                    english_vocab: "staff",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "jar",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "bump",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "braille",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "helpful",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "feature",
                    japanese_vocab: "",
                },
            ]
        },
        part3: {
            keySentence: {
                1: "I am sure that these ideas help many people.",
            },
            vocab: [
                {
                    english_vocab: "plastic",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "hold",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "common",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "glad",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "handrail",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "finger",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "ramp",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "stair",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "pull",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "luggage",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "baby",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "babies",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "American",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "professor",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "childhood",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "better",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "society",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "disabled",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "remove",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "barrier",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "found",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "center",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "spread",
                    japanese_vocab: "",
                },
            ]
        },
    },
    unit6: {
        part1: {
            keySentence: {
                1: "This movie is older than that one.",
                2: "This movie is the oldest of the three.",
            },
            vocab: [
                {
                    english_vocab: "trivia",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "quiz",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "than",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "neighbor",
                    japanese_vocab: "",
                },
            ]
        },
        part2: {
            keySentence: {
                1: "This movie is more interesting than that one.",
                2: "This movie is the most interesting this year.",
            },
            vocab: [
                {
                    english_vocab: "action",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "comedy",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "animated",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "fiction",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "more",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "most",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "answer",
                    japanese_vocab: "",
                },
            ]
        },
        part3: {
            keySentence: {
                1: "I like animated movies the best of all.",
                2: "This movie is as popular as that one.",
            },
            vocab: [
                {
                    english_vocab: "graph",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "percent",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "story",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "stories",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "horror",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "feedback",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "speaker",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "content",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "delivery",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "contact",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "spoke",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "clearly",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "data",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "slide",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "letter",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "row",
                    japanese_vocab: "",
                },
            ]
        },
    },
    unit7: {
        part1: {
            keySentence: {
                1: "This place is selected as a World Heritage site.",
            },
            vocab: [
                {
                    english_vocab: "unique",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "precious",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "select",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "own",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "type",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "natural",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "cultural",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "mixed",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "selection",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "standard",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "decide",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "conference",
                    japanese_vocab: "",
                },
            ]
        },
        part2: {
            keySentence: {
                1: "The mountains are listed as a natural heritage site.",
                2: "Are the mountains listed as a natural heritage site?"
            },
            vocab: [
                {
                    english_vocab: "list",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "oily",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "mist",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "leaves",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "leaf",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "forest",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "beauty",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "preserved",
                    japanese_vocab: "",
                },
            ]
        },
        part3: {
            keySentence: {
                1: "The city is visited by too many tourists.",
                2: "Mt. Fuji can be sen from different angles.",
            },
            vocab: [
                {
                    english_vocab: "canal",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "gondola",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "built",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "across",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "grand",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "sight",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "attractive",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "serious",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "citizen",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "sink",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "cruise",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "wave",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "damage",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "known",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "worldwide",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "similar",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "sacred",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "inspiration",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "print",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "influence",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "seen",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "angle",
                    japanese_vocab: "",
                },
            ]
        },
    },
};

export const nhYear3 = {
    unit1: {
        part1: {
            keySentence: {
                1: "I saw wheelchair tennis last year.",
                2: "I have seen wheelchair tennis once.",
                3: "Josh has seen wheelchair tennis many times.",
                4: "Asami has never seen wheelchair tennis."
            },
            vocab: [
                {
                    english_vocab: "apply",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "Paralympic",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "somewhere",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "below",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "above",
                    japanese_vocab: "",
                },
                // {
                //     english_vocab: "sitting volleyball",
                //     japanese_vocab: "",
                // },
                {
                    english_vocab: "triathlon",
                    japanese_vocab: "",
                },
            ]
        },
        part2: {
            keySentence: {
                1: "I have seen the Paralympic Games once.",
                2: "Have you ever seen the Paralympic Games?",
            },
            vocab: [
                {
                    english_vocab: "ever",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "been",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "match",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "athlete",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "internet",
                    japanese_vocab: "",
                },
            ]
        },
        part3: {
            keySentence: {
                1: "Playing sports makes me happy.",
                2: "Athletes show us great performances.",
                3: "Athletes show us that anything is possible."
            },
            vocab: [
                {
                    english_vocab: "championship",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "amazed",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "speed",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "amazing",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "uncomfortable",
                    japanese_vocab: "",
                },
                // {
                //     english_vocab: "well-known",
                //     japanese_vocab: "",
                // },
                {
                    english_vocab: "winner",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "positive",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "possible",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "establish",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "user",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "satisfy",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "ordinary",
                    japanese_vocab: "",
                },
                // {
                //     english_vocab: "custom-made",
                //     japanese_vocab: "",
                // },
                {
                    english_vocab: "sporty",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "functional",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "stylish",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "opinion",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "support",
                    japanese_vocab: "",
                },
            ]
        },
    },
    unit2: {
        part1: {
            keySentence: {
                1: "I have just finished my homework.",
                2: "Have you finished your homework yet?",
                3: "Yes, I have. I have already finished it."
            },
            vocab: [
                {
                    english_vocab: "yet",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "read",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "sleep",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "already",
                    japanese_vocab: "",
                },
            ]
        },
        part2: {
            keySentence: {
                1: "I have lived in Japan for five years.",
                2: "How long have you lived in Japan? -For five years."
            },
            vocab: [
                {
                    english_vocab: "poet",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "since",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "image",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "curious",
                    japanese_vocab: "",
                },
            ]
        },
        part3: {
            keySentence: {
                1: "I am reading a book now.",
                2: "I have been reading a book since 10 a.m.",
            },
            vocab: [
                {
                    english_vocab: "poem",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "written",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "rhyme",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "seasonal",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "include",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "rhythm",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "syllable",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "become",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "quite",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "less",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "strict",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "either",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "actually",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "website",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "pop",
                    japanese_vocab: "",
                },
            ]
        },
    },
    unit3: {
        part1: {
            keySentence: {
                1: "It is important for us to understand the problem.",
            },
            vocab: [
                {
                    english_vocab: "danger",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "extinction",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "climate",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "survive",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "condition",
                    japanese_vocab: "",
                },
               
            ]
        },
        part2: {
            keySentence: {
                1: "I want everyone to know this fact.",
            },
            vocab: [
                {
                    english_vocab: "cheetah",
                    japanese_vocab: "",
                },
            ]
        },
        part3: {
            keySentence: {
                1: "Let us give you one example.",
                2: "People helped toki live safely.",
            },
            vocab: [
                {
                    english_vocab: "let",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "until",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "era",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "population",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "rapidly",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "feather",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "development",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "destroy",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "environment",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "capture",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "breed",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "safely",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "die",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "government",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "fly",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "logging",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "mining",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "surprisingly",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "electornic",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "device",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "mental",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "ecosystem",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "species",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "affect",
                    japanese_vocab: "",
                },
                // {
                //     english_vocab: "human being",
                //     japanese_vocab: "",
                // },
                {
                    english_vocab: "relate",
                    japanese_vocab: "",
                },
                
            ]
        },
    },
    unit4: {
        part1: {
            keySentence: {
                1: "Where is the local shelter?",
                2: "I know where the local shelter is.",
            },
            vocab: [
                {
                    english_vocab: "shelter",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "store",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "extinguisher",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "survey",
                    japanese_vocab: "",
                },
            ]
        },
        part2: {
            keySentence: {
                1: "What have you dont?",
                2: "Tell me what you have done.",
            },
            vocab: [
                {
                    english_vocab: "done",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "emergency",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "kit",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "link",
                    japanese_vocab: "",
                },
            ]
        },
        part3: {
            keySentence: {
                1: "We spoke to a police officer passing by.",
                2: "They followed instructions given in English.",
            },
            vocab: [
                {
                    english_vocab: "earthquake",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "terrible",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "shaking",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "drove",
                    japanese_vocab: "",
                },
                // {
                //     english_vocab: "parking lot",
                //     japanese_vocab: "",
                // },
                {
                    english_vocab: "scared",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "finally",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "announcement",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "latest",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "fortunately",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "traveler",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "evacuation",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "drill",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "resident",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "visitor",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "simulation",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "themselves",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "instruction",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "given",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "simple",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "interview",
                    japanese_vocab: "",
                },
            ]
        },
    },
    unit5: {
        part1: {
            keySentence: {
                1: "I found a picture on the internet.",
                2: "This is a picture I found on the internet.",
            },
            vocab: [
                {
                    english_vocab: "person",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "respect",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "greatly",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "born",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "international",
                    japanese_vocab: "",
                },
                // {
                //     english_vocab: "non-violence",
                //     japanese_vocab: "",
                // },
                {
                    english_vocab: "Mahatma",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "Indian",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "rupee",
                    japanese_vocab: "",
                },
            ]
        },
        part2: {
            keySentence: {
                1: "Gandhi is a man who has influenced a lot of people.",
            },
            vocab: [
                {
                    english_vocab: "independence",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "violence",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "fight",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "protest",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "tough",
                    japanese_vocab: "",
                },
                
            ]
        },
        part3: {
            keySentence: {
                1: "This is a movie that [which] makes people happy.",
                2: "This is a picture that [which] I found on the internet.",
            },
            vocab: [
                {
                    english_vocab: "lawyer",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "discrimination",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "freely",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "sidewalk",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "accept",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "unfair",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "angry",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "lead",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "movement",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "arrest",
                    japanese_vocab: "",
                },
                // {
                //     english_vocab: "non-violent",
                //     japanese_vocab: "",
                // },
                // {
                //     english_vocab: "South Africa",
                //     japanese_vocab: "",
                // },
                {
                    english_vocab: "colony",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "salt",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "tax",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "expensive",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "follower",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "almost",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "kilometer",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "reach",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "march",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "news",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "peaceful",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "leader",
                    japanese_vocab: "",
                },
            ]
        },
    },
    unit6: {
        part1: {
            keySentence: {
                1: "I can't go to school.",
                2: "I wish I could go to school.",
                3: "I don't have pens and notebooks.",
                4: "I wish I had pens and notebooks.",
            },
            vocab: [
                {
                    english_vocab: "backpack",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "campaign",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "unused",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "supply",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "donate",
                    japanese_vocab: "",
                },
            ]
        },
        part2: {
            keySentence: {
                1: "If I were you, I would ask my friends for help.",
            },
            vocab: [
                {
                    english_vocab: "definitely",
                    japanese_vocab: "",
                },
            ]
        },
        part3: {
            keySentence: {
                1: "If I had a school backpack, I would donate it.",
                2: "Many things that we see every day come from overseas."
            },
            vocab: [
                {
                    english_vocab: "imagine",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "illiterate",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "receive",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "encourage",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "son",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "daughter",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "ready",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "building",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "air",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "service",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "globe",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "exchange",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "depend",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "trade",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "survival",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "import",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "pork",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "coat",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "sold",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "exception",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "surround",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "daily",
                    japanese_vocab: "",
                },
                {
                    english_vocab: "interdependent",
                    japanese_vocab: "",
                },
            ]
        },
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
