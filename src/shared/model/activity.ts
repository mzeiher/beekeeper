export interface ActivityMap {
    "checkup" : {
        meekness: number;
        health: number;
        notes: string;
    }
    "harvest" : {
        honeyInKg: number;
    },
    "varroa-control-powder" : {
        beeMassInGramms: number;
        numberVarroa: number;
    },
    "varroa-control-added-slider": null;
    "varroa-control-checked-slider" : {
        days: number;
        numberOfVarroa: number;
    },
    "added-frame" : string;
    "removed-frame" : string;
    "reordered-frame" : {
        oldOrder: string[];
        newOrder: string[];
    },
    "added-queen" : {
        fromHive: string;
    },
    "cutout-drones" : {
        affectedFrames: string[];
    },
    "varroa-treatment-general" : {
        remedy: string;
        appliance: string;
        quantityInMl: string;
    },
    "varroa-treatmend-vaporizer-start" : {
        quantityInMl: number;
        wickSize: "small" | "medium" | "large";
    }
    "varroa-treatmend-vaporizer-end" : {

    }
}

export interface Activity<K extends keyof ActivityMap> {

    id: string;
    hiveId: string;

    owner: string;
    timestamp: number;

    type: K;
    data: ActivityMap[K];

}