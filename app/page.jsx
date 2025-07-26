'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card } from 'components/card';

const manaSymbols = {
    "w": "/images/mana/w.png",
    "u": "/images/mana/u.png",
    "b": "/images/mana/b.png",
    "r": "/images/mana/r.png",
    "g": "/images/mana/g.png"
};

const decks= [
    {
        name: "Mono Green Poison",
        commanders: [
            {
                name: "Fynn, the Fangbearer",
                url: "https://scryfall.com/card/fdn/637/fynn-the-fangbearer",
                image: {
                    url: "https://cards.scryfall.io/large/front/6/9/699efb9e-2649-432b-8b2d-10775114c314.jpg?1730491013",
                    width: "w-80",
                    left: "left-11/25",
                    translateX: "-translate-x-11/25",
                    top: "top-1/6",
                    translateY: "-translate-y-1/6",
                },
                is_face: 1,
                is_partner: 0,
            }
        ],
        description: "Beat your opponents with deathtouch and poison counters.",
        url: "https://moxfield.com/decks/BG8jvOsPQk-ihvGMNpYk7A",
        photo: "",
        colors: ['g'],
        availability: ['digital']
    },
    {
        name: "Azorious Mill",
        commanders: [
            {
                name: "Hope Estheim",
                url: "https://scryfall.com/card/fin/396/hope-estheim",
                image: {
                    url: "https://cards.scryfall.io/large/front/5/b/5b1fd4c8-7de6-47cb-916a-513d04774f01.jpg?1748707320",
                    width: "w-36",
                    left: "left-33/100",
                    translateX: "-translate-x-33/100",
                    top: "top-1/9",
                    translateY: "-translate-y-1/9",
                },
                is_face: 1,
                is_partner: 0,
            }
        ],
        description: "Gain a lot of life while milling everybody out.",
        url: "https://moxfield.com/decks/veOFmHPTAUagvM03jBOsHQ",
        photo: "",
        colors: ['w', 'u'],
        availability: ['paper', 'digital']
    },
    {
        name: "Orzhov Sacrifice",
        commanders: [
            {
                name: "Athreos, God of Passage",
                url: "https://scryfall.com/card/jou/146/athreos-god-of-passage",
                image: {
                    url: "https://cards.scryfall.io/large/front/5/2/52705c53-883e-4b6a-9c08-3fa35f6f17d5.jpg?1593096375",
                    width: "w-50",
                    left: "left-1/2",
                    translateX: "-translate-x-1/2",
                    top: "top-1/5",
                    translateY: "-translate-y-1/5",
                },
                is_face: 1,
                is_partner: 0,
            },
            {
                name: "Bartolomé del Presidio",
                url: "https://scryfall.com/card/lci/224/bartolom%C3%A9-del-presidio",
                image: {
                    url: "https://cards.scryfall.io/large/front/6/9/690ccdc7-6c43-4902-9d11-2f07b7a36b11.jpg?1699044523",
                    width: "w-40",
                    left: "left-1/2",
                    translateX: "-translate-x-1/2",
                    top: "top-1/5",
                    translateY: "-translate-y-1/5",
                },
                is_face: 0,
                is_partner: 0,
            },
            {
                name: "Kambal, Profiteering Mayor",
                url: "https://scryfall.com/card/otj/211/kambal-profiteering-mayor",
                image: {
                    url: "https://cards.scryfall.io/large/front/d/5/d53a775d-5898-41a8-b404-9b7d4721c6ba.jpg?1712356126",
                    width: "w-36",
                    left: "left-1/2",
                    translateX: "-translate-x-1/2",
                    top: "top-1/5",
                    translateY: "-translate-y-1/5",
                },
                is_face: 0,
                is_partner: 0,
            },
        ],
        description: "Classic Orzhov aristocrats. Kill 'em slowly.",
        url: "https://moxfield.com/decks/pDQst7COakW0sxD7-aJ0IA",
        photo: "",
        colors: ['w', 'b'],
        availability: ['digital']
    },
    {
        name: "Orzhov Vampires",
        commanders: [
            {
                name: "Clavileño, First of the Blessed",
                url: "https://scryfall.com/card/lcc/2/clavile%C3%B1o-first-of-the-blessed",
                image: {
                    url: "https://cards.scryfall.io/large/front/9/f/9f55b648-b1ec-407a-a0c7-7647755793d1.jpg?1699972735",
                    width: "w-50",
                    left: "left-1/2",
                    translateX: "-translate-x-1/2",
                    top: "top-1/6",
                    translateY: "-translate-y-1/6",
                },
                is_face: 1,
                is_partner: 0,
            },
            {
                name: "Bartolomé del Presidio",
                url: "https://scryfall.com/card/lci/224/bartolom%C3%A9-del-presidio",
                image: {
                    url: "https://cards.scryfall.io/large/front/6/9/690ccdc7-6c43-4902-9d11-2f07b7a36b11.jpg?1699044523",
                    width: "w-40",
                    left: "left-1/2",
                    translateX: "-translate-x-1/2",
                    top: "top-1/5",
                    translateY: "-translate-y-1/5",
                },
                is_face: 0,
                is_partner: 0,
            }
        ],
        description: "Vampire Tribal!",
        url: "https://moxfield.com/decks/cq8Efqrb3U28DUnJJdi0zg",
        photo: "",
        colors: ['w', 'b'],
        availability: ['paper', 'digital']
    },
    {
        name: "Boros Tokens",
        commanders: [
            {
                name: "Arabella, Abandoned Doll",
                url: "https://scryfall.com/card/dsk/208/arabella-abandoned-doll",
                image: {
                    url: "https://cards.scryfall.io/large/front/f/6/f683d5a1-b8bf-446f-9fe3-88a4398bf3cf.jpg?1726286645",
                    width: "w-40",
                    left: "left-3/5",
                    translateX: "-translate-x-3/5",
                    top: "top-1/5",
                    translateY: "-translate-y-1/5",
                },
                is_face: 1,
                is_partner: 0,
            }
        ],
        description: "Go wide and swing with small creatures.",
        url: "https://moxfield.com/decks/q9xAPXE2T0mKBn_dbKyVbQ",
        photo: "",
        colors: ['w', 'r'],
        availability: ['paper', 'digital']
    },
    {
        name: "Selesnya Counters",
        commanders: [
            {
                name: "Kutzil, Malamet Exemplar",
                url: "https://scryfall.com/card/lci/304/kutzil-malamet-exemplar",
                image: {
                    url: "https://cards.scryfall.io/large/front/1/2/12fede45-8c95-45eb-915c-c3ee5101dfcc.jpg?1699044769",
                    width: "w-40",
                    left: "left-3/5",
                    translateX: "-translate-x-3/5",
                    top: "top-1/7",
                    translateY: "-translate-y-1/7",
                },
                is_face: 1,
                is_partner: 0,
            },
            {
                name: "Gluntch, the Bestower",
                url: "https://scryfall.com/card/clb/275/gluntch-the-bestower",
                image: {
                    url: "https://cards.scryfall.io/large/front/3/b/3b3e889a-5865-4464-9923-bffa25c50cd2.jpg?1674137513",
                    width: "w-36",
                    left: "left-1/2",
                    translateX: "-translate-x-1/2",
                    top: "top-1/5",
                    translateY: "-translate-y-1/5",
                },
                is_face: 0,
                is_partner: 0,
            }
        ],
        description: "Slowly but surely grow your creatures and trample over your opponents.",
        url: "https://moxfield.com/decks/eAJeVN7jMUq4A_jX2XgIxw",
        photo: "",
        colors: ['w', 'g'],
        availability: ['paper', 'digital']
    },
    {
        name: "Selesnya Hug",
        commanders: [
            {
                name: "Gluntch, the Bestower",
                url: "https://scryfall.com/card/clb/275/gluntch-the-bestower",
                image: {
                    url: "https://cards.scryfall.io/large/front/3/b/3b3e889a-5865-4464-9923-bffa25c50cd2.jpg?1674137513",
                    width: "w-50",
                    left: "left-1/2",
                    translateX: "-translate-x-1/2",
                    top: "top-1/5",
                    translateY: "-translate-y-1/5",
                },
                is_face: 1,
                is_partner: 0,
            }
        ],
        description: "Help some opponents in need and create temporary alliances to benefit your own cause or maybe just kingmake all the way?",
        url: "https://moxfield.com/decks/pnLdg_wIqE-dSCCPJ14b9Q",
        photo: "",
        colors: ['w', 'g'],
        availability: ['digital']
    },
    {
        name: "Dimir Faeries",
        commanders: [
            {
                name: "Obyra, Dreaming Duelist",
                url: "https://scryfall.com/card/woe/210/obyra-dreaming-duelist",
                image: {
                    url: "https://cards.scryfall.io/large/front/6/3/63ce03ee-279b-4955-98e3-9ce1990f8b7b.jpg?1692939395",
                    width: "w-50",
                    left: "left-1/2",
                    translateX: "-translate-x-1/2",
                    top: "top-1/6",
                    translateY: "-translate-y-1/6",
                },
                is_face: 1,
                is_partner: 0,
            }
        ],
        description: "Control the board with your spells and slowly chip away at everyone with tiny faeries.",
        url: "https://moxfield.com/decks/rqcjvj-5ZE6qrLbvMkD3mw",
        photo: "",
        colors: ['u', 'b'],
        availability: ['paper']
    },
    {
        name: "Dimir Ninjas",
        commanders: [
            {
                name: "Yuriko, the Tiger's Shadow",
                url: "https://scryfall.com/card/cmm/690/yuriko-the-tigers-shadow",
                image: {
                    url: "https://cards.scryfall.io/large/front/f/4/f43fe61f-513e-4308-8194-99f73c6fa972.jpg?1719466636",
                    width: "w-32",
                    left: "left-1/4",
                    translateX: "-translate-x-1/4",
                    top: "top-1/5",
                    translateY: "-translate-y-1/5",
                },
                is_face: 1,
                is_partner: 0,
            },
            {
                name: "Satoru, the Infiltrator",
                url: "https://scryfall.com/card/otj/230/satoru-the-infiltrator",
                image: {
                    url: "https://cards.scryfall.io/large/front/a/c/acc9a5cc-2b3c-4c2f-8176-4a2d86265cc5.jpg?1712356202",
                    width: "w-36",
                    left: "left-1/2",
                    translateX: "-translate-x-1/2",
                    top: "top-1/5",
                    translateY: "-translate-y-1/5",
                },
                is_face: 0,
                is_partner: 0,
            },
            {
                name: "Nashi, Searcher in the Dark",
                url: "https://scryfall.com/card/dsk/223/nashi-searcher-in-the-dark",
                image: {
                    url: "https://cards.scryfall.io/large/front/0/f/0fbf9e1e-43f2-499e-844d-22fc10dbad06.jpg?1726286698",
                    width: "w-36",
                    left: "left-1/2",
                    translateX: "-translate-x-1/2",
                    top: "top-1/5",
                    translateY: "-translate-y-1/5",
                },
                is_face: 0,
                is_partner: 0,
            },
        ],
        description: "Be stealthy and lethal.",
        url: "https://moxfield.com/decks/VWWRqqHR2EeyXZkvCOIwgg",
        photo: "",
        colors: ['u', 'b'],
        availability: ['paper', 'digital']
    },
    {
        name: "Izzet Aggro",
        commanders: [
            {
                name: "Balmor, Battlemage Captain",
                url: "https://scryfall.com/card/fdn/237/balmor-battlemage-captain",
                image: {
                    url: "https://cards.scryfall.io/large/front/0/b/0b45ab13-9bb6-48af-8b37-d97b25801ac8.jpg?1730489487",
                    width: "w-60",
                    left: "left-1/2",
                    translateX: "-translate-x-1/2",
                    top: "top-1/6",
                    translateY: "-translate-y-1/6",
                },
                is_face: 1,
                is_partner: 0,
            },
            {
                name: "Aegar, the Freezing Flame",
                url: "https://scryfall.com/card/mul/31/aegar-the-freezing-flame",
                image: {
                    url: "https://cards.scryfall.io/large/front/0/a/0a0d2ebd-99ba-4968-a79e-68288626bed1.jpg?1682720485",
                    width: "w-36",
                    left: "left-1/2",
                    translateX: "-translate-x-1/2",
                    top: "top-1/5",
                    translateY: "-translate-y-1/5",
                },
                is_face: 0,
                is_partner: 0,
            }
        ],
        description: "Sling spells and press the attack, all while maintaining card advantage.",
        url: "https://moxfield.com/decks/31bhJl-z5kG_EpTOHahCng",
        photo: "",
        colors: ['u', 'r'],
        availability: ['paper', 'digital']
    },
    {
        name: "Izzet Group Slug",
        commanders: [
            {
                name: "Ghyrson Starn, Kelermorph",
                url: "https://scryfall.com/card/40k/124/ghyrson-starn-kelermorph",
                image: {
                    url: "https://cards.scryfall.io/large/front/f/a/fa7349d9-c82f-4cf8-a852-92168d1f4966.jpg?1673309394",
                    width: "w-40",
                    left: "left-3/5",
                    translateX: "-translate-x-3/5",
                    top: "top-1/4",
                    translateY: "-translate-y-1/4",
                },
                is_face: 1,
                is_partner: 0,
            },
            {
                name: "Breeches, the Blastmaker",
                url: "https://scryfall.com/card/otj/197/breeches-the-blastmaker",
                image: {
                    url: "https://cards.scryfall.io/large/front/c/f/cf3bda9e-42af-4f99-a504-c96c25c2794b.jpg?1712356062",
                    width: "w-40",
                    left: "left-1/2",
                    translateX: "-translate-x-1/2",
                    top: "top-1/3",
                    translateY: "-translate-y-1/3",
                },
                is_face: 0,
                is_partner: 0,
            },
            {
                name: "Malcolm, the Eyes",
                url: "https://scryfall.com/card/otj/219/malcolm-the-eyes",
                image: {
                    url: "https://cards.scryfall.io/large/front/5/2/521dffaa-813b-41e4-b7c2-a8c407167875.jpg?1712356159",
                    width: "w-40",
                    left: "left-1/2",
                    translateX: "-translate-x-1/2",
                    top: "top-1/5",
                    translateY: "-translate-y-1/5",
                },
                is_face: 0,
                is_partner: 0,
            },
        ],
        description: "Feel bad going for individual opponents? Hit them all at once then, no favorites.",
        url: "https://moxfield.com/decks/vdSECIIpg0qqn-s52qpkFg",
        photo: "",
        colors: ['u', 'r'],
        availability: ['digital']
    },
    {
        name: "Simic Shenanigans",
        commanders: [
            {
                name: "Troyan, Gutsy Explorer",
                url: "https://scryfall.com/card/woe/217/troyan-gutsy-explorer",
                image: {
                    url: "https://cards.scryfall.io/large/front/e/a/eadd2a1a-93a0-4257-897d-1aaee279449f.jpg?1692939496",
                    width: "w-36",
                    left: "left-3/5",
                    translateX: "-translate-x-3/5",
                    top: "top-1/5",
                    translateY: "-translate-y-1/5",
                },
                is_face: 1,
                is_partner: 0,
            }
        ],
        description: "Win by casting massive X spells or get a spicy win with the <a href='https://scryfall.com/card/gtc/146/biovisionary' target='_blank'>Biovisionary</a>.",
        url: "https://moxfield.com/decks/A6I3NmDrJkS8tC49Qu0vSw",
        photo: "",
        colors: ['u', 'g'],
        availability: ['paper', 'digital']
    },
    {
        name: "Rakdos Aggro",
        commanders: [
            {
                name: "Alesha, Who Laughs at Fate",
                url: "https://scryfall.com/card/fdn/115/alesha-who-laughs-at-fate",
                image: {
                    url: "https://cards.scryfall.io/large/front/a/9/a93e3406-4e29-4bc0-ae52-cbd2ac1f99a4.jpg?1730489026",
                    width: "w-60",
                    left: "left-1/2",
                    translateX: "-translate-x-1/2",
                    top: "top-1/5",
                    translateY: "-translate-y-1/5",
                },
                is_face: 1,
                is_partner: 0,
            },
            {
                name: "Lagomos, Hand of Hatred",
                url: "https://scryfall.com/card/dmu/205/lagomos-hand-of-hatred",
                image: {
                    url: "https://cards.scryfall.io/large/front/1/a/1a6bb0c2-1e3c-48cd-8f10-49f047e0514c.jpg?1673307989",
                    width: "w-60",
                    left: "left-9/20",
                    translateX: "-translate-x-9/20",
                    top: "top-1/8",
                    translateY: "-translate-y-1/8",
                },
                is_face: 0,
                is_partner: 0,
            },
            {
                name: "Zoyowa Lava-Tongue",
                url: "https://scryfall.com/card/lci/312/zoyowa-lava-tongue",
                image: {
                    url: "https://cards.scryfall.io/large/front/2/c/2cfd2cf8-95e4-4df5-a803-66e7c4eb065a.jpg?1699044792",
                    width: "w-32",
                    left: "left-1/2",
                    translateX: "-translate-x-1/2",
                    top: "top-1/5",
                    translateY: "-translate-y-1/5",
                },
                is_face: 0,
                is_partner: 0,
            },
        ],
        description: "Go ham with shamans and elementals knowing that you can consistently bring them back from the dead.",
        url: "https://moxfield.com/decks/7A21ZRh3y0Cj_b3vMMIaAQ",
        photo: "",
        colors: ['b', 'r'],
        availability: ['paper', 'digital']
    },
    {
        name: "Rakdos Outlaws",
        commanders: [
            {
                name: "Vial Smasher, Gleeful Grenadier",
                url: "https://scryfall.com/card/otj/235/vial-smasher-gleeful-grenadier",
                image: {
                    url: "https://cards.scryfall.io/large/front/3/a/3afce4e6-ac59-4fba-b63a-8fed96bbdc4a.jpg?1712356228",
                    width: "w-40",
                    left: "left-1/2",
                    translateX: "-translate-x-1/2",
                    top: "top-1/5",
                    translateY: "-translate-y-1/5",
                },
                is_face: 1,
                is_partner: 0,
            },
            {
                name: "Alesha, Who Laughs at Fate",
                url: "https://scryfall.com/card/fdn/115/alesha-who-laughs-at-fate",
                image: {
                    url: "https://cards.scryfall.io/large/front/a/9/a93e3406-4e29-4bc0-ae52-cbd2ac1f99a4.jpg?1730489026",
                    width: "w-60",
                    left: "left-1/2",
                    translateX: "-translate-x-1/2",
                    top: "top-1/5",
                    translateY: "-translate-y-1/5",
                },
                is_face: 0,
                is_partner: 0,
            },
            {
                name: "Zoyowa Lava-Tongue",
                url: "https://scryfall.com/card/lci/312/zoyowa-lava-tongue",
                image: {
                    url: "https://cards.scryfall.io/large/front/2/c/2cfd2cf8-95e4-4df5-a803-66e7c4eb065a.jpg?1699044792",
                    width: "w-32",
                    left: "left-1/2",
                    translateX: "-translate-x-1/2",
                    top: "top-1/5",
                    translateY: "-translate-y-1/5",
                },
                is_face: 0,
                is_partner: 0,
            },
        ],
        description: "This is the wild west, go do crimes, murder their commanders. Yeehaw!",
        url: "https://moxfield.com/decks/K5LTRNZkjEaIhRtS9X3Ygw",
        photo: "",
        colors: ['b', 'r'],
        availability: ['digital']
    },
    {
        name: "Golgari Food Time",
        commanders: [
            {
                name: "Chatterfang, Squirrel General",
                url: "https://scryfall.com/card/mh2/151/chatterfang-squirrel-general",
                image: {
                    url: "https://cards.scryfall.io/large/front/1/7/1785cf85-1ac0-4246-9b89-1a8221a8e1b2.jpg?1626097239",
                    width: "w-50",
                    left: "left-1/2",
                    translateX: "-translate-x-1/2",
                    top: "top-1/4",
                    translateY: "-translate-y-1/4",
                },
                is_face: 1,
                is_partner: 0,
            },
            {
                name: "Camellia, the Seedmiser",
                url: "https://scryfall.com/card/blb/207/camellia-the-seedmiser",
                image: {
                    url: "https://cards.scryfall.io/large/front/2/c/2c16eaec-924c-42f6-9fea-07edd7ed93b9.jpg?1721933903",
                    width: "w-60",
                    left: "left-3/5",
                    translateX: "-translate-x-3/5",
                    top: "top-1/6",
                    translateY: "-translate-y-1/6",
                },
                is_face: 0,
                is_partner: 0,
            },
            {
                name: "Greta, Sweettooth Scourge",
                url: "https://scryfall.com/card/woe/205/greta-sweettooth-scourge",
                image: {
                    url: "https://cards.scryfall.io/large/front/2/c/2cfd365e-34d1-4224-b925-119000311934.jpg?1692939325",
                    width: "w-40",
                    left: "left-1/2",
                    translateX: "-translate-x-1/2",
                    top: "top-1/5",
                    translateY: "-translate-y-1/5",
                },
                is_face: 0,
                is_partner: 0,
            },
        ],
        description: "Create tons of food and squirrel tokens. Go nuts!",
        url: "https://moxfield.com/decks/n9pVp-nRu0uIWSZRbsAWpw",
        photo: "",
        colors: ['b', 'g'],
        availability: ['paper', 'digital']
    },
    {
        name: "Golgari Elves",
        commanders: [
            {
                name: "Miara, Thorn of the Glade",
                url: "https://scryfall.com/card/khc/51/miara-thorn-of-the-glade",
                image: {
                    url: "https://cards.scryfall.io/large/front/7/b/7bdb9bfe-5e56-429d-af23-7548532e2406.jpg?1631234662",
                    width: "w-40",
                    left: "left-1/2",
                    translateX: "-translate-x-1/2",
                    top: "top-1/5",
                    translateY: "-translate-y-1/5",
                },
                is_face: 1,
                is_partner: 1,
            },
            {
                name: "Numa, Joraga Chieftain",
                url: "https://scryfall.com/card/khc/71/numa-joraga-chieftain",
                image: {
                    url: "https://cards.scryfall.io/large/front/6/a/6ac36353-6bf7-46b1-85cb-87d389138d32.jpg?1631235102",
                    width: "w-36",
                    left: "left-1/2",
                    translateX: "-translate-x-1/2",
                    top: "top-1/5",
                    translateY: "-translate-y-1/5",
                },
                is_face: 1,
                is_partner: 1,
            },
            {
                name: "Abomination of Llanowar",
                url: "https://scryfall.com/card/khc/81/abomination-of-llanowar",
                image: {
                    url: "https://cards.scryfall.io/large/front/4/b/4b68bc46-5591-44dd-becc-eca154066925.jpg?1631235320",
                    width: "w-36",
                    left: "left-1/2",
                    translateX: "-translate-x-1/2",
                    top: "top-1/5",
                    translateY: "-translate-y-1/5",
                },
                is_face: 0,
                is_partner: 0,
            },
        ],
        description: "Elf tribal. Nothing more, nothing less.",
        url: "https://moxfield.com/decks/n_F7brXblk6D5uHZsdDrJA",
        photo: "",
        colors: ['b', 'g'],
        availability: ['digital']
    },
    {
        name: "Gruul Stompy",
        commanders: [
            {
                name: "Ruby, Daring Tracker",
                url: "https://scryfall.com/card/fdn/245/ruby-daring-tracker",
                image: {
                    url: "https://cards.scryfall.io/large/front/f/e/fe3e7dd2-b66d-4218-9fde-f84bec26b7bf.jpg?1730489519",
                    width: "w-60",
                    left: "left-1/3",
                    translateX: "-translate-x-1/3",
                    top: "top-1/5",
                    translateY: "-translate-y-1/5",
                },
                is_face: 1,
                is_partner: 0,
            },
            {
                name: "Jolene, Plundering Pugilist",
                url: "https://scryfall.com/card/otj/210/jolene-plundering-pugilist",
                image: {
                    url: "https://cards.scryfall.io/large/front/f/e/fe30b5c8-4889-4350-bb1d-3e2a67d9dfb2.jpg?1712356118",
                    width: "w-50",
                    left: "left-3/5",
                    translateX: "-translate-x-3/5",
                    top: "top-1/5",
                    translateY: "-translate-y-1/5",
                },
                is_face: 0,
                is_partner: 0,
            },
            {
                name: "Muerra, Trash Tactician",
                url: "https://scryfall.com/card/blb/227/muerra-trash-tactician",
                image: {
                    url: "https://cards.scryfall.io/large/front/b/4/b40e4658-fd68-46d0-9a89-25570a023d19.jpg?1721427159",
                    width: "w-50",
                    left: "left-3/5",
                    translateX: "-translate-x-3/5",
                    top: "top-1/5",
                    translateY: "-translate-y-1/5",
                },
                is_face: 0,
                is_partner: 0,
            },
            {
                name: "Itzquinth, Firstborn of Gishath",
                url: "https://scryfall.com/card/lci/230/itzquinth-firstborn-of-gishath",
                image: {
                    url: "https://cards.scryfall.io/large/front/7/1/7112c366-b36a-4bc8-aa64-6bad16bebc39.jpg?1699044540",
                    width: "w-44",
                    left: "left-7/10",
                    translateX: "-translate-x-7/10",
                    top: "top-1/5",
                    translateY: "-translate-y-1/5",
                },
                is_face: 0,
                is_partner: 0,
            },
        ],
        description: "Go big, fast.",
        url: "https://moxfield.com/decks/WhtKvR--fU-U5zCTLcjEZg",
        photo: "",
        colors: ['r', 'g'],
        availability: ['paper', 'digital']
    },
    {
        name: "Flubs",
        commanders: [
            {
                name: "Flubs, the Fool",
                url: "https://scryfall.com/card/blc/356/flubs-the-fool",
                image: {
                    url: "https://cards.scryfall.io/large/front/4/1/41e58eb8-e5b9-4ef6-be1f-00e28cebb998.jpg?1722441006",
                    width: "w-48",
                    left: "left-1/4",
                    translateX: "-translate-x-1/4",
                    top: "top-1/6",
                    translateY: "-translate-y-1/6",
                },
                is_face: 1,
                is_partner: 0,
            }
        ],
        description: "Go be a goofy frog. Then win, right?",
        url: "https://moxfield.com/decks/Z7y7KcLbJ0CVzNjIFV2b-w",
        photo: "",
        colors: ['u', 'r', 'g'],
        availability: ['digital']
    },
    // Deck Template
    // {
    //     name: "",
    //     commanders: [
    //         {
    //             name: "",
    //             url: "",
    //             image: {
    //                 url: "",
    //                 width: "w-40",
    //                 left: "left-1/2",
    //                 translateX: "-translate-x-1/2",
    //                 top: "top-1/5",
    //                 translateY: "-translate-y-1/5",
    //             },
    //             is_face: 1,
    //             is_partner: 0,
    //         },
    //         {
    //             name: "",
    //             url: "",
    //             image: {
    //                 url: "",
    //                 width: "w-40",
    //                 left: "left-1/2",
    //                 translateX: "-translate-x-1/2",
    //                 top: "top-1/5",
    //                 translateY: "-translate-y-1/5",
    //             },
    //             is_face: 1,
    //             is_partner: 0,
    //         }
    //     ],
    //     description: "",
    //     url: "",
    //     photo: "",
    //     colors: [],
    //     availability: ['paper']
    // },
];

const upcoming = [
    {
        name: "",
        url: "",
        image: ""
    }
];

export default function Page() {
    function copyLink(e) {
        const btn = e.currentTarget;
        const { name, link } = btn.dataset;
        
        let tempText = document.createElement("input");
        tempText.value = link;
        document.body.appendChild(tempText);
        
        tempText.select();
        document.execCommand("copy");
        document.body.removeChild(tempText);
        
        alert(`Copied Moxfield link for ${name}`);
    }
    
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            
            <h1>Tiny Leaders</h1>
            
            <section>
                
                <div className="flex flex-wrap w-full">
                    {!!decks?.length && (
                        decks.map((deck, index) => {
                            const commanders = deck.commanders;
                            
                            return (
                            <div key={index} className={"w-full md:w-1/2 self-stretch py-2 " + (index % 2 == 0 ? "md:pr-2" : "md:pl-2")}>
                                
                                <Card className="h-full relative">
                                    <div className="deck-colors flex absolute top-1/50 right-1/100">
                                        {
                                            deck.colors.map((color, i) => {
                                                return (
                                                    <div key={i} className="w-[24px] h-[24px] rounded-full border-2 mr-1">
                                                        <Image src={manaSymbols[color]} width="24" height="24" alt={color}></Image>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                    
                                    <div className="deck-availability absolute top-1/50">
                                        <div className="flex">
                                            {
                                                deck.availability.map((item, i) => {
                                                    return (
                                                        <span key={i}  className="bg-purple-500 text-white text-sm uppercase font-semibold rounded-full py-1 px-2 mr-1">{item}</span>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-wrap items-end justify-center">
                                        
                                        <div className="flex flex-wrap mb-2 w-full justify-center">
                                        {
                                            commanders.filter((commander => commander.is_face)).map((commander, i) => {
                                                
                                                const image = commander.image;
                                                
                                                return (
                                                    <div key={i} className={`relative w-20 h-20 mr-2 overflow-hidden border-solid border-red-400 rounded-full`}>
                                                        <a href={commander.url} target="_blank" title={commander.name}>
                                                            <img
                                                                src={image.url}
                                                                alt={commander.name}
                                                                className={`absolute ${image.width} max-w-none ${image.left} ${image.top} ${image.translateX} ${image.translateY}`}
                                                            >
                                                            </img>
                                                        </a>
                                                    </div>
                                                );
                                                
                                            })
                                        }
                                        </div>
                                        
                                        { commanders.filter((commander => !commander.is_face)).length > 0 && (
                                            <div className="flex flex-wrap">
                                            {commanders.filter((commander => !commander.is_face)).map((commander, i) => {
                                            
                                                const image = commander.image;

                                                return (
                                                    <div key={i} className={`relative w-12 h-12 mr-2 overflow-hidden border-solid border-red-400 rounded-full`}>
                                                        <a href={commander.url} target="_blank" title={commander.name}>
                                                            <img
                                                                src={image.url}
                                                                alt={commander.name}
                                                                className={`absolute ${image.width} max-w-none ${image.left} ${image.top} ${image.translateX} ${image.translateY}`}
                                                            >
                                                            </img>
                                                        </a>
                                                    </div>
                                                );
                                                
                                            })}
                                            </div>
                                        )}
                                        
                                    </div>
                                    
                                    <h3 className="font-semibold text-center">{deck.name}</h3>
                                    
                                    <p className="text-center" dangerouslySetInnerHTML={{ __html: deck.description }} />
                                    
                                    <Link 
                                        href={deck.url} 
                                        className="text-center mt-auto py-1 sm:py-2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Moxfield
                                    </Link>
                                    
                                    <button 
                                        type="button" 
                                        className="copy-deck-link text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-auto mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-max-content cursor-pointer"
                                        onClick={copyLink}
                                        data-name={deck.name}
                                        data-link={deck.url}
                                    >
                                        Copy Link
                                    </button>
                                    
                                </Card>
                                
                            </div>
                            )
                        })
                    )}
                </div>
            </section>
            
            <section>
                upcoming decks/commanders here...
            </section>
            
        </div>
    );
}