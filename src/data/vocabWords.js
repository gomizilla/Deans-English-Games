
export const getRandomEnglishWord = (list) => {
    const randomNum = Math.floor(Math.random() * list.length);
    return list[randomNum].en;
};

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
                    japanese_vocab: "...を（ ～と ）呼ぶ、名づける", // 動
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
                    japanese_vocab: "そこに［ で、へ ］", // 副
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
                    japanese_vocab: "トランペット", // 名
                },
                // {
                //     english_vocab: "brass band", // need to fix
                //     japanese_vocab: "",
                // },
                {
                    english_vocab: "before",
                    japanese_vocab: "・・・の前に［ の ］", // 前
                },
                {
                    english_vocab: "concert",
                    japanese_vocab: "演奏会、コンサート", // 名
                },
                {
                    english_vocab: "next",
                    japanese_vocab: "次の、今度の、となりの", // 形
                },
                {
                    english_vocab: "fifth",
                    japanese_vocab: "５日、５番目 ( の )", // 名　形
                },
                {
                    english_vocab: "hall",
                    japanese_vocab: "会館、ホール", // 名
                },
                {
                    english_vocab: "near",
                    japanese_vocab: "・・・の近くに [ で ]", // 前
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
                    japanese_vocab: "今日(は)、現在 ( では )", // 名　副
                },
                {
                    english_vocab: "yeah",
                    japanese_vocab: "うん、そう ( =yes )", // 副
                },
                {
                    english_vocab: "win",
                    japanese_vocab: "・・・に勝つ", // 動
                },
                {
                    english_vocab: "someday",
                    japanese_vocab: "いつか", // 副
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
                    japanese_vocab: "( ～に )・・・をもってくる、・・・を連れてくる", // 動
                },
                {
                    english_vocab: "shoe",
                    english_plural: "shoes",
                    japanese_vocab: "くつ", // 名
                },
                {
                    english_vocab: "towel",
                    english_plural: "towels",
                    japanese_vocab: "タオル、手拭い", // 名
                },
                {
                    english_vocab: "bottle",
                    japanese_vocab: "びん、ボトル", // 名
                },
                {
                    english_vocab: "week",
                    japanese_vocab: "週、１週間",  //　名
                },
                {
                    english_vocab: "off",
                    japanese_vocab: "休んで", // 副
                },
                {
                    english_vocab: "those",
                    japanese_vocab: "あれらの、それらの", // 形
                },
                {
                    english_vocab: "man",
                    english_plural: "men",
                    japanese_vocab: "男性、男の人", // 名
                },
                {
                    english_vocab: "woman",
                    english_plural: "women",
                    japanese_vocab: "女性、女の人", // 名
                },
                {
                    english_vocab: "they",
                    japanese_vocab: "彼らは [ が ]、彼女らは [ が ]、それらは [ が ]", // 代
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
                    japanese_vocab: "緊張して", // 形
                },
                {
                    english_vocab: "worry",
                    japanese_vocab: "心配する、悩む", // 動
                },
                {
                    english_vocab: "yourself",
                    japanese_vocab: "あなた自身を [ に ]", //　代
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
                    japanese_vocab: "今、現在は、今では、今すぐ", // 副
                },
                {
                    english_vocab: "noon",
                    japanese_vocab: "正午、真昼", // 名
                },
                {
                    english_vocab: "break",
                    japanese_vocab: "休憩", // 名
                },
                {
                    english_vocab: "after",
                    japanese_vocab: "・・・のあとに［ で ］", // 前
                },
                {
                    english_vocab: "period",
                    japanese_vocab: "( 授業の ) 時間、時限", // 名
                },
                {
                    english_vocab: "some",
                    japanese_vocab: "いくつかの、いくらかの、少しの", // 形
                },
                {
                    english_vocab: "or",
                    japanese_vocab: "・・・かまたは～、・・・や～", // 接
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
                    japanese_vocab: "キーウィ", // 名
                },
                {
                    english_vocab: "right",
                    japanese_vocab: "正しい、正確な", // 形
                },
                {
                    english_vocab: "round",
                    japanese_vocab: "丸い、球形の", // 形
                },
                {
                    english_vocab: "like",
                    japanese_vocab: "・・・を好む、・・・が好きである", // 前
                },
                {
                    english_vocab: "national",
                    japanese_vocab: "国の、国家の", // 形
                },
                {
                    english_vocab: "mean",
                    japanese_vocab: "・・・を意味する、・・・のことを言う", // 動
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
                    japanese_vocab: "静かな", // 形
                },
                {
                    english_vocab: "jog",
                    japanese_vocab: "ゆっくり走る、ジョギングする", // 動
                },
                {
                    english_vocab: "pond",
                    japanese_vocab: "池", // 名
                },
                {
                    english_vocab: "bench",
                    japanese_vocab: "ベンチ", // 名
                },
                {
                    english_vocab: "over",
                    japanese_vocab: "向こうへ、あちらへ、こちらへ", // 副
                },
                {
                    english_vocab: "hair",
                    japanese_vocab: "髪", // 名
                },
                {
                    english_vocab: "people",
                    japanese_vocab: "人々", // 名
                },
                {
                    english_vocab: "stage",
                    japanese_vocab: "舞台、ステージ", // 名
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
                    japanese_vocab: "( ためらいを表して ）ううん、ええ", // 間
                },
                {
                    english_vocab: "shy",
                    japanese_vocab: "内気な、恥ずかしがりの", // 形
                },
                {
                    english_vocab: "something",
                    japanese_vocab: "何か、あるもの", // 代
                },
                {
                    english_vocab: "idea",
                    japanese_vocab: "考え、アイディア", // 名
                },
                {
                    english_vocab: "thirsty",
                    japanese_vocab: "のどのかわいた", // 形
                },
                {
                    english_vocab: "need",
                    japanese_vocab: "・・・を必要とする", // 動
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
                    japanese_vocab: "昨日 ( は )", // 名　副
                },
                {
                    english_vocab: "went",
                    japanese_vocab: "goの過去形", // 動
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
                    japanese_vocab: "( 期間、行為などの ) 終わり、最後", // 名
                },
                {
                    english_vocab: "saw",
                    japanese_vocab: "seeの過去形", // 動
                },
                {
                    english_vocab: "lot",
                    japanese_vocab: "a _ _ _ または _ _ _s, たくさん",
                },
                {
                    english_vocab: "had",
                    japanese_vocab: "haveの過去形", // 動
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
                    japanese_vocab: "言語、言葉", // 名
                },
                {
                    english_vocab: "Asian", //needed?
                    japanese_vocab: "アジア ( 人 ) の", // 形
                },
                {
                    english_vocab: "student",
                    japanese_vocab: "学生、生徒", // 名
                },
                {
                    english_vocab: "weekday",
                    japanese_vocab: "平日", // 名
                },
                {
                    english_vocab: "weekend",
                    japanese_vocab: "週末", // 名
                },
                // {
                //     english_vocab: "scuba diving", // space, remove from wordle
                //     japanese_vocab: "",
                // },
                {
                    english_vocab: "has",
                    japanese_vocab: "haveの三人称単数現在形", // 動
                },
                {
                    english_vocab: "his",
                    japanese_vocab: "彼の", // 代
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
                    japanese_vocab: "( ある ) 地方の、地元の", // 形
                },
                {
                    english_vocab: "spot",
                    japanese_vocab: "地点、場所", // 名
                },
                {
                    english_vocab: "does",
                    japanese_vocab: "①[ 否定文を作る ] ②[ 疑問文や応答を作る ]", // 助
                },
                {
                    english_vocab: "comment",
                    japanese_vocab: "批評、コメント", // 名
                },
                {
                    english_vocab: "post",
                    japanese_vocab: "( インターネットで情報など ) を掲示する", // 動
                },
                {
                    english_vocab: "waterproof",
                    japanese_vocab: "防水の", // 形
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
                    japanese_vocab: "だれか、だれも ( ・・・ない )", // 代
                },
                {
                    english_vocab: "any",
                    japanese_vocab: "いくらかの、何らかの、少しの・・・も ( ～ない )", // 形
                },
                {
                    english_vocab: "question",
                    japanese_vocab: "質問", // 名
                },
                {
                    english_vocab: "mix",
                    japanese_vocab: "混合", // 名
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
                    japanese_vocab: "彼を［ に ］", // 代
                },
                {
                    english_vocab: "pottery",
                    japanese_vocab: "陶器、陶芸", // 名
                },
                {
                    english_vocab: "piece",
                    japanese_vocab: "作品", // 名
                },
                {
                    english_vocab: "useful",
                    japanese_vocab: "役に立つ、有用な", // 形
                },
                {
                    english_vocab: "them",
                    japanese_vocab: "彼ら [ 彼女ら、それら ] を [ に ]", // 代
                },
                {
                    english_vocab: "performer",
                    japanese_vocab: "演技者", // 名
                },
                {
                    english_vocab: "perform",
                    japanese_vocab: "演じる、演奏する", // 動
                },
                {
                    english_vocab: "her",
                    japanese_vocab: "彼女の、彼女を [ に ]", // 代
                },
                {
                    english_vocab: "show",
                    japanese_vocab: "( 名 ) ショー、( 動 )・・・を見せる、示す", // 名　動
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
                    japanese_vocab: "役、役割", // 名
                },
                {
                    english_vocab: "only",
                    japanese_vocab: "ただ・・・だけ", // 副
                },
                {
                    english_vocab: "prop",
                    japanese_vocab: "小道具", // 名
                },
                {
                    english_vocab: "which",
                    japanese_vocab: "どちら、どれ、どちらの人 [ もの ] ", // 代
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
                    japanese_vocab: "( 時間の単位の ) 分", // 名
                },
                {
                    english_vocab: "wait",
                    japanese_vocab: "待つ", // 動
                },
                {
                    english_vocab: "whose",
                    japanese_vocab: "だれの、だれのもの", // 代
                },
                {
                    english_vocab: "ticket",
                    japanese_vocab: "切符、チケット", // 名
                },
                {
                    english_vocab: "yours",
                    japanese_vocab: "あなた ( たち ) のもの", // 代
                },
                {
                    english_vocab: "mine",
                    japanese_vocab: "私のもの", // 代
                },
                {
                    english_vocab: "maybe",
                    japanese_vocab: "たぶん、もしかすると", // 副
                },
                {
                    english_vocab: "oops",
                    japanese_vocab: "おっと、うわっ、しまった", // 間
                },
                {
                    english_vocab: "careful",
                    japanese_vocab: "注意深い", // 形
                },
                {
                    english_vocab: "history",
                    japanese_vocab: "歴史", // 名
                },
                {
                    english_vocab: "still",
                    japanese_vocab: "まだ、今でも", // 副
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
                    japanese_vocab: "明日（ は ）", // 名　副
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
                    japanese_vocab: "look _______ to ・・・を楽しみに待つ", // 副
                },
                {
                    english_vocab: "then",
                    japanese_vocab: "そのとき（ に ）", // 副
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
                    japanese_vocab: "( ・・・の ) 準備をする、備える", // 動
                },
                {
                    english_vocab: "say",
                    japanese_vocab: "( ・・・を ) 言う、・・・だと言う", // 動
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
                    japanese_vocab: "速く、すぐに、急いで", // 副
                },
                {
                    english_vocab: "happen",
                    japanese_vocab: "起こる、生じる", // 動
                },
                {
                    english_vocab: "goodness",
                    japanese_vocab: "善良さ、やさしさ", // 名
                },
                {
                    english_vocab: "forget",
                    japanese_vocab: "( ・・・を ) 忘れる", // 動
                },
                {
                    english_vocab: "course",
                    japanese_vocab: "of _____ / もちろん", // 名
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
                    japanese_vocab: "働く、作業をする", // 動
                },
                {
                    english_vocab: "as",
                    japanese_vocab: "・・・として", // 前
                },
                {
                    english_vocab: "sick",
                    japanese_vocab: "病気の", // 形
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
                    japanese_vocab: "発表、プレゼンテーション", // 名
                },
                {
                    english_vocab: "main",
                    japanese_vocab: "主な、主票な", // 形
                },
                {
                    english_vocab: "later",
                    japanese_vocab: "もっと遅く、あとで", // 副
                },
                {
                    english_vocab: "ethnic",
                    japanese_vocab: "民族 ( 特有 ) の", // 形
                },
                {
                    english_vocab: "line",
                    japanese_vocab: "列、並び", // 副
                },
                {
                    english_vocab: "late",
                    japanese_vocab: "おくれた、遅刻した", // 形
                },
                {
                    english_vocab: "understand",
                    japanese_vocab: "（ ・・・を ）理解する、わかる", // 動
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
                    japanese_vocab: "井戸", // 名
                },
                {
                    english_vocab: "village",
                    japanese_vocab: "村", // 名
                },
                {
                    english_vocab: "collect",
                    japanese_vocab: "・・・を集める", // 動
                },
                {
                    english_vocab: "volunteer",
                    japanese_vocab: "ボランティア", // 名
                },
                {
                    english_vocab: "build",
                    japanese_vocab: "・・・を建てる", // 動
                },
                {
                    english_vocab: "money",
                    japanese_vocab: "金、通貨", // 名
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
                    japanese_vocab: "もの、こと", // 名
                },
                {
                    english_vocab: "musical",
                    japanese_vocab: "ミュージカル", // 名
                },
                {
                    english_vocab: "theater",
                    japanese_vocab: "劇場、映画館", // 名
                },
                {
                    english_vocab: "actor",
                    japanese_vocab: "( 女性を含む ) 俳優", // 名
                },
                {
                    english_vocab: "leading",
                    japanese_vocab: "主要", // 形
                },
                {
                    english_vocab: "part",
                    japanese_vocab: "( 芝居などの ) 役、( 仕事の ) 役目", // 名
                },
                {
                    english_vocab: "performance",
                    japanese_vocab: "演技、演奏、公演", // 名
                },
                {
                    english_vocab: "last",
                    japanese_vocab: "この前の、昨・・・、先・・・", // 形
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
                    japanese_vocab: "spendの過去形", // 動
                },
                {
                    english_vocab: "took",
                    japanese_vocab: "takeの過去形", // 動
                },
                {
                    english_vocab: "came",
                    japanese_vocab: "comeの過去形", // 動
                },
                {
                    english_vocab: "stood",
                    japanese_vocab: "standの過去形", // 動
                },
                {
                    english_vocab: "count",
                    japanese_vocab: "(・・・を) 数える", // 動
                },
                {
                    english_vocab: "midnight",
                    japanese_vocab: "夜の１２時、真夜中", // 名
                },
                {
                    english_vocab: "said",
                    japanese_vocab: "sayの過去形", //　動
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
                    japanese_vocab: "getの過去形", // 動
                },
                {
                    english_vocab: "early",
                    japanese_vocab: "早く", // 副
                },
                {
                    english_vocab: "traditional",
                    japanese_vocab: "伝統的な", // 形
                },
                {
                    english_vocab: "parent",
                    japanese_vocab: "親、[ _____sで ] 両親", // 名
                },
                {
                    english_vocab: "made",
                    japanese_vocab: "makeの過去形", //　動
                },
                {
                    english_vocab: "brought",
                    japanese_vocab: "bringの過去形", // 動
                },
                {
                    english_vocab: "nothing",
                    japanese_vocab: "何も・・・ない", // 代
                },
                {
                    english_vocab: "special",
                    japanese_vocab: "特別の", // 形
                },
                {
                    english_vocab: "anywhere",
                    japanese_vocab: "どこにも (・・・ない)", // 副
                },
                {
                    english_vocab: "relax",
                    japanese_vocab: "くつろぐ", // 動
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
                    japanese_vocab: "ルーキー、新人", // 名
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
                    japanese_vocab: "areの過去形", // 動　助
                },
                {
                    english_vocab: "half",
                    japanese_vocab: "半分、２分の１", // 名
                },
                {
                    english_vocab: "lost",
                    japanese_vocab: "loseの過去形", // 動
                },
                {
                    english_vocab: "hope",
                    japanese_vocab: "(・・・を) 望む、・・・だとよいと思う", // 動
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
                    japanese_vocab: "シャワー", // 名
                },
                {
                    english_vocab: "outdoor",
                    japanese_vocab: "屋外の、野外の", // 形
                },
                {
                    english_vocab: "kitchen",
                    japanese_vocab: "台所、調理場",  // 名
                },
                {
                    english_vocab: "set",
                    japanese_vocab: "・・・を準備する", // 動詞
                },
                {
                    english_vocab: "tent",
                    japanese_vocab: "テント", // 名
                },
                {
                    english_vocab: "trash",
                    japanese_vocab: "ごみ、くず", // 名
                },
                {
                    english_vocab: "pick",
                    japanese_vocab: "・・・をつむ、もぐ", // 動
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
                    japanese_vocab: "写真 [ _____graphを短縮したの語 ]", // 名
                },
                {
                    english_vocab: "album",
                    japanese_vocab: "アルバム", // 名
                },
                {
                    english_vocab: "these",
                    japanese_vocab: "これらの", // 形
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
                japanese_vocab: "金色の、すばらしい", // 形
               },
               {
                english_vocab: "holiday",
                japanese_vocab: "休日、休暇", // 名
               },
               {
                english_vocab: "abroad",
                japanese_vocab: "外国に[へ、で]、海外に[へ、で]、", // 副
               },
               {
                english_vocab: "aunt",
                japanese_vocab: "おば、おばさん", // 名
               },
               {
                english_vocab: "uncle",
                japanese_vocab: "おじ、おじさん", // 名
               },
               {
                english_vocab: "husband",
                japanese_vocab: "夫", // 名
               },
               {
                english_vocab: "wife",
                japanese_vocab: "妻", // 名
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
                    japanese_vocab: "遠くに[へ]", // 副
                },
                {
                    english_vocab: "will",
                    japanese_vocab: "①[単なる未来]・・・でしょう、・・・だろう ②[意志]・・・するつもりだ", //　助
                },
                {
                    english_vocab: "seafood",
                    japanese_vocab: "シーフード", // 名
                },
                {
                    english_vocab: "reservation",
                    japanese_vocab: "予約", // 名
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
                    japanese_vocab: "メーテル", // 名
                },
                {
                    english_vocab: "tall",
                    japanese_vocab: "身長[高さ]が・・・ある", // 形 maybe come back for longer definition
                },
                {
                    english_vocab: "weigh",
                    japanese_vocab: "・・・の重さがある", // 動
                },
                {
                    english_vocab: "ton",
                    japanese_vocab: "トン", // 名
                },
                {
                    english_vocab: "gift",
                    japanese_vocab: "贈り物", // 名
                },
                {
                    english_vocab: "cookie",
                    japanese_vocab: "クッキー", // 名
                },
                {
                    english_vocab: "rode",
                    japanese_vocab: "rideの過去形", // 動
                },
                {
                    english_vocab: "scary",
                    japanese_vocab: "恐ろしい, こわい", // 形
                },
                {
                    english_vocab: "communicate",
                    japanese_vocab: "連絡する、意思の疎通をする", // 助
                },
                {
                    english_vocab: "culture",
                    japanese_vocab: "文化",  // 名
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
                    japanese_vocab: "当てはまる", // 動詞
                },
                {
                    english_vocab: "Paralympic",
                    japanese_vocab: "パラリンピック", // 名
                },
                {
                    english_vocab: "somewhere",
                    japanese_vocab: "どこかに[へ、で]",
                },
                {
                    english_vocab: "below",
                    japanese_vocab: "下に、下記に[の]", // 副
                },
                {
                    english_vocab: "above",
                    japanese_vocab: "上に、上記に[の]", // 副
                },
                // {
                //     english_vocab: "sitting volleyball",
                //     japanese_vocab: "",
                // },
                {
                    english_vocab: "triathlon",
                    japanese_vocab: "トライアスロン", // 名
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
                    japanese_vocab: "[疑問文で]今まで、かつて", // 副
                },
                {
                    english_vocab: "been",
                    japanese_vocab: "beの過去分詞", // 動、助
                },
                {
                    english_vocab: "match",
                    japanese_vocab: "試合、競技", // 名
                },
                {
                    english_vocab: "athlete",
                    japanese_vocab: "運動選手、アスリート", // 名
                },
                {
                    english_vocab: "internet",
                    japanese_vocab: "インターネット", // 名
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
                    japanese_vocab: "選手権、優勝", // 名
                },
                {
                    english_vocab: "amaze",
                    japanese_vocab: "・・・をびっくりさせる", // 動
                },
                {
                    english_vocab: "speed",
                    japanese_vocab: "スピード、速度", // 動
                },
                {
                    english_vocab: "amazing",
                    japanese_vocab: "驚くべき", // 形
                },
                {
                    english_vocab: "uncomfortable",
                    japanese_vocab: "心地よくない", // 形
                },
                // {
                //     english_vocab: "well-known",
                //     japanese_vocab: "",
                // },
                {
                    english_vocab: "winner",
                    japanese_vocab: "勝者、受賞者", // 名
                },
                {
                    english_vocab: "positive",
                    japanese_vocab: "肯定の、前向きな", // 形
                },
                {
                    english_vocab: "possible",
                    japanese_vocab: "(物事が)可能な、できる", // 形
                },
                {
                    english_vocab: "establish",
                    japanese_vocab: "・・・を設立する", // 動
                },
                {
                    english_vocab: "user",
                    japanese_vocab: "使用[利用]者、ユーザー", // 名
                },
                {
                    english_vocab: "satisfy",
                    japanese_vocab: "・・・を満足させる", // 動
                },
                {
                    english_vocab: "ordinary",
                    japanese_vocab: "ふつうの", // 形
                },
                // {
                //     english_vocab: "custom-made",
                //     japanese_vocab: "",
                // },
                {
                    english_vocab: "sporty",
                    japanese_vocab: "スポーティーな、走りの軽快な", // 形
                },
                {
                    english_vocab: "functional",
                    japanese_vocab: "実用的な",  // 形
                },
                {
                    english_vocab: "stylish",
                    japanese_vocab: "おしゃれな、センスのよい", // 形
                },
                {
                    english_vocab: "opinion",
                    japanese_vocab: "意見、考え", // 名
                },
                {
                    english_vocab: "support",
                    japanese_vocab: "・・・を支援する、応援する", // 動
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
                    japanese_vocab: "①[疑問文で]もう、すでに ②[否定文で]まだ、いまのところは", // 副
                },
                {
                    english_vocab: "read",
                    japanese_vocab: "(・・・を)読む、読んで知る", // 動
                },
                {
                    english_vocab: "sleep",
                    japanese_vocab: "眠る、寝ている", // 動
                },
                {
                    english_vocab: "already",
                    japanese_vocab: "すでに、もう", // 副
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
                    japanese_vocab: "詩人", // 名
                },
                {
                    english_vocab: "since",
                    japanese_vocab: "・・・(して)以来", // 前、接
                },
                {
                    english_vocab: "image",
                    japanese_vocab: "像、肖像、印象", // 名
                },
                {
                    english_vocab: "curious",
                    japanese_vocab: "好奇心の強い", // 形
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
                    japanese_vocab: "詩", // 名
                },
                {
                    english_vocab: "written",
                    japanese_vocab: "writeの過去分詞", // 動
                },
                {
                    english_vocab: "rhyme",
                    japanese_vocab: "韻をふむ", // 動
                },
                {
                    english_vocab: "seasonal",
                    japanese_vocab: "季節の", // 形
                },
                {
                    english_vocab: "include",
                    japanese_vocab: "・・・を含む、含める", //　動
                },
                {
                    english_vocab: "rhythm",
                    japanese_vocab: "リズム、調子", // 名
                },
                {
                    english_vocab: "syllable",
                    japanese_vocab: "音節、シラブル", // 名
                },
                {
                    english_vocab: "become",
                    japanese_vocab: "becomeの過去分詞", // 動
                },
                {
                    english_vocab: "quite",
                    japanese_vocab: "かなり、相当", // 副
                },
                {
                    english_vocab: "less",
                    japanese_vocab: "もっと少なく、より・・・でなく", // 副
                },
                {
                    english_vocab: "strict",
                    japanese_vocab: "厳しい", // 形
                },
                {
                    english_vocab: "either",
                    japanese_vocab: "[否定文の文末に用いて]・・・もまた(～ない)", // 副
                },
                {
                    english_vocab: "actually",
                    japanese_vocab: "実は、本当は", // 副
                },
                {
                    english_vocab: "website",
                    japanese_vocab: "ウェブサイト", // 名
                },
                {
                    english_vocab: "pop",
                    japanese_vocab: "大衆的な", // 形
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
                    japanese_vocab: "危険(性)", // 名
                },
                {
                    english_vocab: "extinction",
                    japanese_vocab: "絶滅", // 名
                },
                {
                    english_vocab: "climate",
                    japanese_vocab: "気候", // 名
                },
                {
                    english_vocab: "survive",
                    japanese_vocab: "生き残る", // 動
                },
                {
                    english_vocab: "condition",
                    japanese_vocab: "状況", // 名
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
                    japanese_vocab: "チーター", // 名
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
                    japanese_vocab: "(人)に・・・させる", // 動
                },
                {
                    english_vocab: "until",
                    japanese_vocab: "・・・まで(ずっと)、[否定文で]・・・までは(～しない)", // 前
                },
                {
                    english_vocab: "era",
                    japanese_vocab: "時代、年代", // 名
                },
                {
                    english_vocab: "population",
                    japanese_vocab: "人口、(動物の)個体数", // 名
                },
                {
                    english_vocab: "rapidly",
                    japanese_vocab: "速く、急速に", // 副
                },
                {
                    english_vocab: "feather",
                    japanese_vocab: "羽", // 名
                },
                {
                    english_vocab: "development",
                    japanese_vocab: "開発", // 名
                },
                {
                    english_vocab: "destroy",
                    japanese_vocab: "・・・を破壊する", // 動
                },
                {
                    english_vocab: "environment",
                    japanese_vocab: "環境", // 名
                },
                {
                    english_vocab: "capture",
                    japanese_vocab: "・・・を捕まえる", // 動
                },
                {
                    english_vocab: "breed",
                    japanese_vocab: "・・・を飼育する、繁殖する", // 動
                },
                {
                    english_vocab: "safely",
                    japanese_vocab: "安全に", // 副
                },
                {
                    english_vocab: "die",
                    japanese_vocab: "死ぬ", // 動
                },
                {
                    english_vocab: "government",
                    japanese_vocab: "政府", // 名
                },
                {
                    english_vocab: "fly",
                    japanese_vocab: "飛ぶ", // 動
                },
                {
                    english_vocab: "logging",
                    japanese_vocab: "伐採", // 名
                },
                {
                    english_vocab: "mining",
                    japanese_vocab: "採鉱、採掘", // 名
                },
                {
                    english_vocab: "surprisingly",
                    japanese_vocab: "驚いたことには",  // 副
                },
                {
                    english_vocab: "electornic",
                    japanese_vocab: "電子の", // 形
                },
                {
                    english_vocab: "device",
                    japanese_vocab: "装置", // 名
                },
                {
                    english_vocab: "metal",
                    japanese_vocab: "金属", // 名
                },
                {
                    english_vocab: "ecosystem",
                    japanese_vocab: "生態系", // 名
                },
                {
                    english_vocab: "species",
                    japanese_vocab: "(生物学上の)種", // 名
                },
                {
                    english_vocab: "affect",
                    japanese_vocab: "・・・に影響を与える", // 動
                },
                // {
                //     english_vocab: "human being",
                //     japanese_vocab: "",
                // },
                {
                    english_vocab: "relate",
                    japanese_vocab: "・・・を(～に)関係させる", // 動
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
                    japanese_vocab: "避難所", // 名
                },
                {
                    english_vocab: "store",
                    japanese_vocab: "・・・を蓄える", // 動
                },
                {
                    english_vocab: "extinguisher",
                    japanese_vocab: "消火器", // 名
                },
                {
                    english_vocab: "survey",
                    japanese_vocab: "調査", // 名
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
                    japanese_vocab: "doの過去分詞", // 動
                },
                {
                    english_vocab: "emergency",
                    japanese_vocab: "緊急事態", // 名
                },
                {
                    english_vocab: "kit",
                    japanese_vocab: "道具[用具]一式", // 名
                },
                {
                    english_vocab: "link",
                    japanese_vocab: "リンク、接続", // 名
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
                    japanese_vocab: "地震", // 名
                },
                {
                    english_vocab: "terrible",
                    japanese_vocab: "ひどい", // 形
                },
                {
                    english_vocab: "shaking",
                    japanese_vocab: "揺れ", // 名
                },
                {
                    english_vocab: "drove",
                    japanese_vocab: "driveの過去形", // 動
                },
                // {
                //     english_vocab: "parking lot",
                //     japanese_vocab: "",
                // },
                {
                    english_vocab: "scared",
                    japanese_vocab: "(・・・を)こわがって", // 形
                },
                {
                    english_vocab: "finally",
                    japanese_vocab: "ついに、やっと", // 副
                },
                {
                    english_vocab: "announcement",
                    japanese_vocab: "アナウンス、発表", // 名
                },
                {
                    english_vocab: "latest",
                    japanese_vocab: "最近の、最新の", // 形
                },
                {
                    english_vocab: "fortunately",
                    japanese_vocab: "幸運にも", // 副
                },
                {
                    english_vocab: "traveler",
                    japanese_vocab: "旅行者", // 名
                },
                {
                    english_vocab: "evacuation",
                    japanese_vocab: "避難", // 名
                },
                {
                    english_vocab: "drill",
                    japanese_vocab: "訓練、ドリル", // 名
                },
                {
                    english_vocab: "resident",
                    japanese_vocab: "住民、居住者", // 名
                },
                {
                    english_vocab: "visitor",
                    japanese_vocab: "観光客", // 名
                },
                {
                    english_vocab: "simulation",
                    japanese_vocab: "シミュレーション", // 名
                },
                {
                    english_vocab: "themselves",
                    japanese_vocab: "彼ら[彼女ら、それら]自身を[に]", // 代
                },
                {
                    english_vocab: "instruction",
                    japanese_vocab: "指示", // 名
                },
                {
                    english_vocab: "given",
                    japanese_vocab: "giveの過去分詞", // 動
                },
                {
                    english_vocab: "simple",
                    japanese_vocab: "単純な、簡単な", // 形
                },
                {
                    english_vocab: "interview",
                    japanese_vocab: "・・・にインタビューする", // 動
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
                    japanese_vocab: "人、個人", // 名
                },
                {
                    english_vocab: "respect",
                    japanese_vocab: "・・・を尊敬する、尊重する", // 動
                },
                {
                    english_vocab: "greatly",
                    japanese_vocab: "おおいに、非常に", // 副
                },
                {
                    english_vocab: "born",
                    japanese_vocab: "生まれる", // 動
                },
                {
                    english_vocab: "international",
                    japanese_vocab: "国際的な", // 形
                },
                // {
                //     english_vocab: "non-violence",
                //     japanese_vocab: "",
                // },
                {
                    english_vocab: "Mahatma",
                    japanese_vocab: "マハトマ[敬称]", // 名
                },
                {
                    english_vocab: "Indian",
                    japanese_vocab: "インドの、インド人の、インド人", // 形、形、名
                },
                {
                    english_vocab: "rupee",
                    japanese_vocab: "ルピー", // 名
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
                    japanese_vocab: "独立", // 名
                },
                {
                    english_vocab: "violence",
                    japanese_vocab: "暴力", // 名
                },
                {
                    english_vocab: "fight",
                    japanese_vocab: "たたかう、たたかい", // たたかう＝動詞　たたかい＝名詞
                },
                {
                    english_vocab: "protest",
                    japanese_vocab: "抗議する/抗議(運動)", // 動　名
                },
                {
                    english_vocab: "tough",
                    japanese_vocab: "難な、難しい", // 形
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
                    japanese_vocab: "弁護士", // 名
                },
                {
                    english_vocab: "discrimination",
                    japanese_vocab: "差別", // 名
                },
                {
                    english_vocab: "freely",
                    japanese_vocab: "自由に", // 副
                },
                {
                    english_vocab: "sidewalk",
                    japanese_vocab: "歩道", // 名
                },
                {
                    english_vocab: "accept",
                    japanese_vocab: "・・・を受け入れる", // 動
                },
                {
                    english_vocab: "unfair",
                    japanese_vocab: "不公平な、不当な", // 形
                },
                {
                    english_vocab: "angry",
                    japanese_vocab: "怒った、腹を立てた",  // 形
                },
                {
                    english_vocab: "lead",
                    japanese_vocab: "・・・を導く、・・・を先導する", // 動
                },
                {
                    english_vocab: "movement",
                    japanese_vocab: "(政治的・社会的な)運動", // 名
                },
                {
                    english_vocab: "arrest",
                    japanese_vocab: "・・・を逮捕する", // 動
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
                    japanese_vocab: "植民地", // 名
                },
                {
                    english_vocab: "salt",
                    japanese_vocab: "塩、食塩", // 名
                },
                {
                    english_vocab: "tax",
                    japanese_vocab: "税、税金", // 名
                },
                {
                    english_vocab: "expensive",
                    japanese_vocab: "高価な、費用のかかる", // 形
                },
                {
                    english_vocab: "follower",
                    japanese_vocab: "信奉者、支持者", // 名
                },
                {
                    english_vocab: "almost",
                    japanese_vocab: "ほとんど",  // 副
                },
                {
                    english_vocab: "kilometer",
                    japanese_vocab: "キロメートル", // 名
                },
                {
                    english_vocab: "reach",
                    japanese_vocab: "・・・を着く、到着する", // 動
                },
                {
                    english_vocab: "march",
                    japanese_vocab: "行進、マーチ", // 名
                },
                {
                    english_vocab: "news",
                    japanese_vocab: "ニュース、知らせ", // 名
                },
                {
                    english_vocab: "peaceful",
                    japanese_vocab: "平和な", // 形
                },
                {
                    english_vocab: "leader",
                    japanese_vocab: "指導者、リーダー", // 名
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
                    japanese_vocab: "バックパック",  // 名
                },
                {
                    english_vocab: "campaign",
                    japanese_vocab: "キャンペーン", // 名
                },
                {
                    english_vocab: "unused",
                    japanese_vocab: "未使用の", // 形
                },
                {
                    english_vocab: "supply",
                    japanese_vocab: "[suppliesで]必需品", // 名
                },
                {
                    english_vocab: "donate",
                    japanese_vocab: "・・・を寄付する", // 動
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
                    japanese_vocab: "もちろん、確かに", // 副
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
                    japanese_vocab: "・・・を想像する", // 動
                },
                {
                    english_vocab: "illiterate",
                    japanese_vocab: "読み書きのできない", // 形
                },
                {
                    english_vocab: "receive",
                    japanese_vocab: "・・・を受け取る", // 動
                },
                {
                    english_vocab: "encourage",
                    japanese_vocab: "・・・を勇気づける、励ます", // 動
                },
                {
                    english_vocab: "son",
                    japanese_vocab: "息子", // 名
                },
                {
                    english_vocab: "daughter",
                    japanese_vocab: "娘", // 名
                },
                {
                    english_vocab: "ready",
                    japanese_vocab: "用意ができて", // 形
                },
                {
                    english_vocab: "building",
                    japanese_vocab: "建物、ビル", // 名
                },
                {
                    english_vocab: "air",
                    japanese_vocab: "空気、空中",  // 名
                },
                {
                    english_vocab: "service",
                    japanese_vocab: "サービス、公的事業", // 名
                },
                {
                    english_vocab: "globe",
                    japanese_vocab: "地球", // 名
                },
                {
                    english_vocab: "exchange",
                    japanese_vocab: "交流、やりとり", // 名
                },
                {
                    english_vocab: "depend",
                    japanese_vocab: "頼る", // 動
                },
                {
                    english_vocab: "trade",
                    japanese_vocab: "貿易", // 名
                },
                {
                    english_vocab: "survival",
                    japanese_vocab: "存続、生き残ること", // 名
                },
                {
                    english_vocab: "import",
                    japanese_vocab: "・・・輸入する", // 動
                },
                {
                    english_vocab: "pork",
                    japanese_vocab: "豚肉", // 名
                },
                {
                    english_vocab: "coat",
                    japanese_vocab: "上着、コート", // 名
                },
                {
                    english_vocab: "sold",
                    japanese_vocab: "sellの過去分詞", // 動
                },
                {
                    english_vocab: "exception",
                    japanese_vocab: "例外", // 名
                },
                {
                    english_vocab: "surround",
                    japanese_vocab: "・・・を囲む", // 動
                },
                {
                    english_vocab: "daily",
                    japanese_vocab: "日常の", // 形
                },
                {
                    english_vocab: "interdependent",
                    japanese_vocab: "相互に依存している", // 形
                },
            ]
        },
    },
};
