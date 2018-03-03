import { Apiary } from "../../../../../shared/model/apiary";
import { Hive } from "../../../../../shared/model/hive";

interface DataBase {
    "hives": Hive[];
    "templates": Hive[];
}

export const hiveDataBase: DataBase = {
    "hives": [

    ],
    "templates": [
        {
            id: null,
            name: "DADANT US",
            description: "",
            type: "DADANT_US",

            apiary: null,

            created: 0,
            lastChanged: 0,

            owner: "0",
            admin: [],
            user: [],

            image: null,

            currentSubjectiveMeekness: 0,
            currentSubjectiveHealth: 0,

            currentVarroaLevelGramms: 0,
            currentVarroaLevelDays: 0,

            currentWeight: 0,

            position: {
                lan: 0,
                lon: 0,
                orientation: 0
            },

            dimensions: {
                width: 509,
                depth: 509
            },

            hiveSupers: [{
                id: null,
                type: "roof",
                dimensions: {
                    depth: 600,
                    height: 10,
                    width: 600
                },
                options : null,
                created: 0,
                lastChanged: 0
            },{
                id: null,
                type: "cover",
                dimensions: {
                    depth: 550,
                    height: 100,
                    width: 550
                },
                options : null,
                created: 0,
                lastChanged: 0
            }, {
                id: null,
                type: "brood-super",
                dimensions: {
                    depth: 509,
                    height: 305,
                    width: 509
                },
                options: {
                    maxFrameCount: 12,
                    frames: [],
                    type: null
                },
                created: 0,
                lastChanged: 0
            }, {
                id: null,
                type: "bottom-board",
                dimensions: {
                    depth: 495,
                    height: 50,
                    width: 495
                },
                options: null,
                created: 0,
                lastChanged: 0
            }],
            history: []
        }
    ]
}

try {
    Object.assign(hiveDataBase, JSON.parse(window.localStorage.getItem('hiveDataBase')));
} catch (e) { }

window['hiveDataBase'] = hiveDataBase;