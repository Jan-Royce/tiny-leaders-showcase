import Link from 'next/link';
import { Card } from 'components/card';

const decks= [
    {
        name: "Mono Green Poison",
        commanders: [
            {
                name: "Fynn, the Fangbearer",
                url: "https://scryfall.com/card/fdn/637/fynn-the-fangbearer",
                image: "https://cards.scryfall.io/large/front/6/9/699efb9e-2649-432b-8b2d-10775114c314.jpg?1730491013",
                is_face: 1,
                is_partner: 0,
            }
        ],
        description: "Beat your opponents with deathtouch and poison counters.",
        url: "https://moxfield.com/decks/BG8jvOsPQk-ihvGMNpYk7A",
        photo: "",
        colors: ['g']
    },
    {
        name: "Azorious Mill",
        commanders: [
            {
                name: "Hope Estheim",
                url: "https://scryfall.com/card/fin/396/hope-estheim",
                image: "https://cards.scryfall.io/large/front/5/b/5b1fd4c8-7de6-47cb-916a-513d04774f01.jpg?1748707320",
                is_face: 1,
                is_partner: 0,
            }
        ],
        description: "Gain a lot of life while milling everybody out.",
        url: "https://moxfield.com/decks/veOFmHPTAUagvM03jBOsHQ",
        photo: "",
        colors: ['w', 'u']
    },
    {
        name: "Orzhov Sacrifice",
        commanders: [
            {
                name: "Athreos, God of Passage",
                url: "https://scryfall.com/card/jou/146/athreos-god-of-passage",
                image: "https://cards.scryfall.io/large/front/5/2/52705c53-883e-4b6a-9c08-3fa35f6f17d5.jpg?1593096375",
                is_face: 1,
                is_partner: 0,
            },
            {
                name: "Bartolomé del Presidio",
                url: "https://scryfall.com/card/lci/224/bartolom%C3%A9-del-presidio",
                image: "https://cards.scryfall.io/large/front/6/9/690ccdc7-6c43-4902-9d11-2f07b7a36b11.jpg?1699044523",
                is_face: 0,
                is_partner: 0,
            },
            {
                name: "Kambal, Profiteering Mayor",
                url: "https://scryfall.com/card/otj/211/kambal-profiteering-mayor",
                image: "https://cards.scryfall.io/large/front/d/5/d53a775d-5898-41a8-b404-9b7d4721c6ba.jpg?1712356126",
                is_face: 0,
                is_partner: 0,
            },
        ],
        description: "Classic Orzhov aristocrats. Kill 'em slowly.",
        url: "https://moxfield.com/decks/pDQst7COakW0sxD7-aJ0IA",
        photo: "",
        colors: ['w', 'b']
    },
    {
        name: "Orzhov Vampires",
        commanders: [
            {
                name: "Clavileño, First of the Blessed",
                url: "https://scryfall.com/card/lcc/2/clavile%C3%B1o-first-of-the-blessed",
                image: "https://cards.scryfall.io/large/front/9/f/9f55b648-b1ec-407a-a0c7-7647755793d1.jpg?1699972735",
                is_face: 1,
                is_partner: 0,
            },
            {
                name: "Bartolomé del Presidio",
                url: "https://scryfall.com/card/lci/224/bartolom%C3%A9-del-presidio",
                image: "https://cards.scryfall.io/large/front/6/9/690ccdc7-6c43-4902-9d11-2f07b7a36b11.jpg?1699044523",
                is_face: 0,
                is_partner: 0,
            }
        ],
        description: "Vampire Tribal!",
        url: "https://moxfield.com/decks/cq8Efqrb3U28DUnJJdi0zg",
        photo: "",
        colors: ['w', 'b']
    },
    {
        name: "Boros Tokens",
        commanders: [
            {
                name: "Arabella, Abandoned Doll",
                url: "https://scryfall.com/card/dsk/208/arabella-abandoned-doll",
                image: "https://cards.scryfall.io/large/front/f/6/f683d5a1-b8bf-446f-9fe3-88a4398bf3cf.jpg?1726286645",
                is_face: 1,
                is_partner: 0,
            }
        ],
        description: "Go wide and swing with small creatures.",
        url: "https://moxfield.com/decks/q9xAPXE2T0mKBn_dbKyVbQ",
        photo: "",
        colors: ['w', 'r']
    },
    {
        name: "Selesnya Counters",
        commanders: [
            {
                name: "Kutzil, Malamet Exemplar",
                url: "https://scryfall.com/card/lci/304/kutzil-malamet-exemplar",
                image: "https://cards.scryfall.io/large/front/1/2/12fede45-8c95-45eb-915c-c3ee5101dfcc.jpg?1699044769",
                is_face: 1,
                is_partner: 0,
            },
            {
                name: "Gluntch, the Bestower",
                url: "https://scryfall.com/card/clb/275/gluntch-the-bestower",
                image: "https://cards.scryfall.io/large/front/3/b/3b3e889a-5865-4464-9923-bffa25c50cd2.jpg?1674137513",
                is_face: 0,
                is_partner: 0,
            }
        ],
        description: "Slowly but surely grow your creatures and trample over your opponents.",
        url: "https://moxfield.com/decks/eAJeVN7jMUq4A_jX2XgIxw",
        photo: "",
        colors: ['w', 'g']
    },
    {
        name: "Selesnya Hug",
        commanders: [
            {
                name: "Gluntch, the Bestower",
                url: "https://scryfall.com/card/clb/275/gluntch-the-bestower",
                image: "https://cards.scryfall.io/large/front/3/b/3b3e889a-5865-4464-9923-bffa25c50cd2.jpg?1674137513",
                is_face: 1,
                is_partner: 0,
            }
        ],
        description: "Help some opponents in need and create temporary alliances to benefit your own cause or maybe just kingmake all the way?",
        url: "https://moxfield.com/decks/pnLdg_wIqE-dSCCPJ14b9Q",
        photo: "",
        colors: ['w', 'g']
    },
    {
        name: "Dimir Faeries",
        commanders: [
            {
                name: "Obyra, Dreaming Duelist",
                url: "https://scryfall.com/card/woe/210/obyra-dreaming-duelist",
                image: "https://cards.scryfall.io/large/front/6/3/63ce03ee-279b-4955-98e3-9ce1990f8b7b.jpg?1692939395",
                is_face: 1,
                is_partner: 0,
            }
        ],
        description: "Control the board with your spells and slowly chip away at everyone with tiny faeries.",
        url: "https://moxfield.com/decks/rqcjvj-5ZE6qrLbvMkD3mw",
        photo: "",
        colors: ['u', 'b']
    },
    {
        name: "Dimir Ninjas",
        commanders: [
            {
                name: "Yuriko, the Tiger's Shadow",
                url: "https://scryfall.com/card/cmm/690/yuriko-the-tigers-shadow",
                image: "https://cards.scryfall.io/large/front/f/4/f43fe61f-513e-4308-8194-99f73c6fa972.jpg?1719466636",
                is_face: 1,
                is_partner: 0,
            },
            {
                name: "Satoru, the Infiltrator",
                url: "https://scryfall.com/card/otj/230/satoru-the-infiltrator",
                image: "https://cards.scryfall.io/large/front/a/c/acc9a5cc-2b3c-4c2f-8176-4a2d86265cc5.jpg?1712356202",
                is_face: 0,
                is_partner: 0,
            },
            {
                name: "Nashi, Searcher in the Dark",
                url: "https://scryfall.com/card/dsk/223/nashi-searcher-in-the-dark",
                image: "https://cards.scryfall.io/large/front/0/f/0fbf9e1e-43f2-499e-844d-22fc10dbad06.jpg?1726286698",
                is_face: 0,
                is_partner: 0,
            },
        ],
        description: "Be stealthy and lethal.",
        url: "https://moxfield.com/decks/VWWRqqHR2EeyXZkvCOIwgg",
        photo: "",
        colors: ['u', 'b']
    },
    {
        name: "Izzet Aggro",
        commanders: [
            {
                name: "Balmor, Battlemage Captain",
                url: "https://scryfall.com/card/fdn/237/balmor-battlemage-captain",
                image: "https://cards.scryfall.io/large/front/0/b/0b45ab13-9bb6-48af-8b37-d97b25801ac8.jpg?1730489487",
                is_face: 1,
                is_partner: 0,
            },
            {
                name: "Aegar, the Freezing Flame",
                url: "https://scryfall.com/card/mul/31/aegar-the-freezing-flame",
                image: "https://cards.scryfall.io/large/front/0/a/0a0d2ebd-99ba-4968-a79e-68288626bed1.jpg?1682720485",
                is_face: 0,
                is_partner: 0,
            }
        ],
        description: "Sling spells and press the attack, all while maintaining card advantage.",
        url: "https://moxfield.com/decks/31bhJl-z5kG_EpTOHahCng",
        photo: "",
        colors: ['u', 'r']
    },
    {
        name: "Izzet Group Slug",
        commanders: [
            {
                name: "Ghyrson Starn, Kelermorph",
                url: "https://scryfall.com/card/40k/124/ghyrson-starn-kelermorph",
                image: "https://cards.scryfall.io/large/front/f/a/fa7349d9-c82f-4cf8-a852-92168d1f4966.jpg?1673309394",
                is_face: 1,
                is_partner: 0,
            },
            {
                name: "Breeches, the Blastmaker",
                url: "https://scryfall.com/card/otj/197/breeches-the-blastmaker",
                image: "https://cards.scryfall.io/large/front/c/f/cf3bda9e-42af-4f99-a504-c96c25c2794b.jpg?1712356062",
                is_face: 0,
                is_partner: 0,
            },
            {
                name: "Malcolm, the Eyes",
                url: "https://scryfall.com/card/otj/219/malcolm-the-eyes",
                image: "https://cards.scryfall.io/large/front/5/2/521dffaa-813b-41e4-b7c2-a8c407167875.jpg?1712356159",
                is_face: 0,
                is_partner: 0,
            },
        ],
        description: "Feel bad going for individual opponents? Hit them all at once then, no favorites.",
        url: "https://moxfield.com/decks/vdSECIIpg0qqn-s52qpkFg",
        photo: "",
        colors: ['u', 'r']
    },
    {
        name: "Simic Shenanigans",
        commanders: [
            {
                name: "Troyan, Gutsy Explorer",
                url: "https://scryfall.com/card/woe/217/troyan-gutsy-explorer",
                image: "https://cards.scryfall.io/large/front/e/a/eadd2a1a-93a0-4257-897d-1aaee279449f.jpg?1692939496",
                is_face: 1,
                is_partner: 0,
            }
        ],
        description: "Win by casting massive X spells or get a spicy win with the <a href='https://scryfall.com/card/gtc/146/biovisionary' target='_blank'>Biovisionary</a>.",
        url: "https://moxfield.com/decks/A6I3NmDrJkS8tC49Qu0vSw",
        photo: "",
        colors: ['u', 'g']
    },
    {
        name: "Rakdos Aggro",
        commanders: [
            {
                name: "Alesha, Who Laughs at Fate",
                url: "https://scryfall.com/card/fdn/115/alesha-who-laughs-at-fate",
                image: "https://cards.scryfall.io/large/front/a/9/a93e3406-4e29-4bc0-ae52-cbd2ac1f99a4.jpg?1730489026",
                is_face: 1,
                is_partner: 0,
            },
            {
                name: "Lagomos, Hand of Hatred",
                url: "https://scryfall.com/card/dmu/205/lagomos-hand-of-hatred",
                image: "https://cards.scryfall.io/large/front/1/a/1a6bb0c2-1e3c-48cd-8f10-49f047e0514c.jpg?1673307989",
                is_face: 0,
                is_partner: 0,
            },
            {
                name: "Zoyowa Lava-Tongue",
                url: "https://scryfall.com/card/lci/312/zoyowa-lava-tongue",
                image: "https://cards.scryfall.io/large/front/2/c/2cfd2cf8-95e4-4df5-a803-66e7c4eb065a.jpg?1699044792",
                is_face: 0,
                is_partner: 0,
            },
        ],
        description: "Go ham with shamans and elementals knowing that you can consistently bring them back from the dead.",
        url: "https://moxfield.com/decks/7A21ZRh3y0Cj_b3vMMIaAQ",
        photo: "",
        colors: ['b', 'r']
    },
    {
        name: "Rakdos Outlaws",
        commanders: [
            {
                name: "Vial Smasher, Gleeful Grenadier",
                url: "https://scryfall.com/card/otj/235/vial-smasher-gleeful-grenadier",
                image: "https://cards.scryfall.io/large/front/3/a/3afce4e6-ac59-4fba-b63a-8fed96bbdc4a.jpg?1712356228",
                is_face: 1,
                is_partner: 0,
            },
            {
                name: "Alesha, Who Laughs at Fate",
                url: "https://scryfall.com/card/fdn/115/alesha-who-laughs-at-fate",
                image: "https://cards.scryfall.io/large/front/a/9/a93e3406-4e29-4bc0-ae52-cbd2ac1f99a4.jpg?1730489026",
                is_face: 0,
                is_partner: 0,
            },
            {
                name: "Zoyowa Lava-Tongue",
                url: "https://scryfall.com/card/lci/312/zoyowa-lava-tongue",
                image: "https://cards.scryfall.io/large/front/2/c/2cfd2cf8-95e4-4df5-a803-66e7c4eb065a.jpg?1699044792",
                is_face: 0,
                is_partner: 0,
            },
        ],
        description: "This is the wild west, go do crimes, murder their commanders. Yeehaw!",
        url: "https://moxfield.com/decks/K5LTRNZkjEaIhRtS9X3Ygw",
        photo: "",
        colors: ['b', 'r']
    },
    {
        name: "Golgari Food Time",
        commanders: [
            {
                name: "Chatterfang, Squirrel General",
                url: "https://scryfall.com/card/mh2/151/chatterfang-squirrel-general",
                image: "https://cards.scryfall.io/large/front/1/7/1785cf85-1ac0-4246-9b89-1a8221a8e1b2.jpg?1626097239",
                is_face: 1,
                is_partner: 0,
            },
            {
                name: "Camellia, the Seedmiser",
                url: "https://scryfall.com/card/blb/207/camellia-the-seedmiser",
                image: "https://cards.scryfall.io/large/front/2/c/2c16eaec-924c-42f6-9fea-07edd7ed93b9.jpg?1721933903",
                is_face: 0,
                is_partner: 0,
            },
            {
                name: "Greta, Sweettooth Scourge",
                url: "https://scryfall.com/card/woe/205/greta-sweettooth-scourge",
                image: "https://cards.scryfall.io/large/front/2/c/2cfd365e-34d1-4224-b925-119000311934.jpg?1692939325",
                is_face: 0,
                is_partner: 0,
            },
        ],
        description: "Create tons of food and squirrel tokens. Go nuts!",
        url: "https://moxfield.com/decks/n9pVp-nRu0uIWSZRbsAWpw",
        photo: "",
        colors: ['b', 'g']
    },
    {
        name: "Golgari Elves",
        commanders: [
            {
                name: "Miara, Thorn of the Glade",
                url: "https://scryfall.com/card/khc/51/miara-thorn-of-the-glade",
                image: "https://cards.scryfall.io/large/front/7/b/7bdb9bfe-5e56-429d-af23-7548532e2406.jpg?1631234662",
                is_face: 1,
                is_partner: 1,
            },
            {
                name: "Numa, Joraga Chieftain",
                url: "https://scryfall.com/card/khc/71/numa-joraga-chieftain",
                image: "https://cards.scryfall.io/large/front/6/a/6ac36353-6bf7-46b1-85cb-87d389138d32.jpg?1631235102",
                is_face: 1,
                is_partner: 1,
            },
            {
                name: "Abomination of Llanowar",
                url: "https://scryfall.com/card/khc/81/abomination-of-llanowar",
                image: "https://cards.scryfall.io/large/front/4/b/4b68bc46-5591-44dd-becc-eca154066925.jpg?1631235320",
                is_face: 0,
                is_partner: 0,
            },
        ],
        description: "Elf tribal. Nothing more, nothing less.",
        url: "https://moxfield.com/decks/n_F7brXblk6D5uHZsdDrJA",
        photo: "",
        colors: ['b', 'g']
    },
    {
        name: "Gruul Stompy",
        commanders: [
            {
                name: "Ruby, Daring Tracker",
                url: "https://scryfall.com/card/fdn/245/ruby-daring-tracker",
                image: "https://cards.scryfall.io/large/front/f/e/fe3e7dd2-b66d-4218-9fde-f84bec26b7bf.jpg?1730489519",
                is_face: 1,
                is_partner: 0,
            },
            {
                name: "Jolene, Plundering Pugilist",
                url: "https://scryfall.com/card/otj/210/jolene-plundering-pugilist",
                image: "https://cards.scryfall.io/large/front/f/e/fe30b5c8-4889-4350-bb1d-3e2a67d9dfb2.jpg?1712356118",
                is_face: 0,
                is_partner: 0,
            },
            {
                name: "Muerra, Trash Tactician",
                url: "https://scryfall.com/card/blb/227/muerra-trash-tactician",
                image: "https://cards.scryfall.io/large/front/b/4/b40e4658-fd68-46d0-9a89-25570a023d19.jpg?1721427159",
                is_face: 0,
                is_partner: 0,
            },
            {
                name: "Itzquinth, Firstborn of Gishath",
                url: "https://scryfall.com/card/lci/230/itzquinth-firstborn-of-gishath",
                image: "https://cards.scryfall.io/large/front/7/1/7112c366-b36a-4bc8-aa64-6bad16bebc39.jpg?1699044540",
                is_face: 0,
                is_partner: 0,
            },
        ],
        description: "Go big, fast.",
        url: "https://moxfield.com/decks/WhtKvR--fU-U5zCTLcjEZg",
        photo: "",
        colors: ['r', 'g']
    },
    {
        name: "Flubs",
        commanders: [
            {
                name: "Flubs, the Fool",
                url: "https://scryfall.com/card/blc/356/flubs-the-fool",
                image: "https://cards.scryfall.io/large/front/4/1/41e58eb8-e5b9-4ef6-be1f-00e28cebb998.jpg?1722441006",
                is_face: 1,
                is_partner: 0,
            }
        ],
        description: "Go be a goofy frog. Then win, right?",
        url: "https://moxfield.com/decks/Z7y7KcLbJ0CVzNjIFV2b-w",
        photo: "",
        colors: ['u', 'r', 'g']
    },
    // {
    //     name: "",
    //     commanders: [
    //         {
    //             name: "",
    //             url: "",
    //             is_face: 1,
    //             is_partner: 0,
    //         },
    //         {
    //             name: "",
    //             url: "",
    //             is_face: 1,
    //             is_partner: 0,
    //         }
    //     ],
    //     description: "",
    //     url: "",
    //     photo: "",
    //     colors: []
    // },
];

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <h1>Tiny Leaders</h1>
            <section>
                <div className="flex flex-wrap w-full">
                    {!!decks?.length && (
                        decks.map((deck, index) => 
                        <div key={index} className={"w-full lg:w-1/2 self-stretch py-2 " + (index % 2 == 0 ? "lg:pr-2" : "lg:pl-2")}>
                            <Card className="h-full">
                                commander photo + backups in small photos 
                                
                                <div className="w-20 h-20 overflow-hidden border-solid border-red-400 rounded-full">
                                    <img 
                                        src={deck.commanders[0].image} 
                                        alt={deck.commanders[0].name}
                                        className="w-300"
                                    >
                                    </img>
                                </div>
                                
                                <h3 className="font-semibold">{deck.name}</h3>
                                
                                <p dangerouslySetInnerHTML={{ __html: deck.description }} />
                                
                                <Link 
                                    href={deck.url} 
                                    className="inline py-1 sm:py-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {deck.url}
                                </Link>
                                
                                [copy url button]
                            </Card>
                        </div>
                        )
                    )}
                </div>
            </section>
            <section>
                upcoming decks/commanders here...
            </section>
        </div>
    );
}