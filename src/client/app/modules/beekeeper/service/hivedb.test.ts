import { Collection } from "../../../../../shared/model/collection";
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

            collections: [],
            
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
                width: 550,
                depth: 550
            },

            hiveSupers: [{
                type: "COVER",
                frames: [],
                id: null,
                maxFrameCount: 0,
                subtype: ''
            },{
                type: "BROOD_SUPER",
                frames: [],
                id: null,
                maxFrameCount: 12,
                subtype: ""
            },{
                type: "LOW_BOTTOM_BOARD",
                frames: [],
                id: null,
                maxFrameCount: 0,
                subtype: ""
            }],
            history: [],
            activity: []
        }
    ]
}

try {
    Object.assign(hiveDataBase, JSON.parse(window.localStorage.getItem('hiveDataBase')));
} catch(e) {}

window['hiveDataBase'] = hiveDataBase;