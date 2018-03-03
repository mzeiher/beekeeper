import { Frame } from "./frame";
import { Activity, ActivityMap } from "./activity";

export type HiveType = "DADANT" | "DADANT_US" | "LANGSTROTH" | "ZANDER"
/**
 * Hive representation (Aggregate)
 */
export interface Hive {

    /** GUID of hive */
    id: string;

    name: string;
    description: string;
    type: HiveType;

    apiary: string;

    created: number;
    lastChanged: number;

    /** access control list */
    owner: string;
    admin: string[];
    user: string[];

    /** reference to image */
    image: string;

    currentSubjectiveMeekness: number;
    currentSubjectiveHealth: number;

    currentVarroaLevelGramms: number;
    currentVarroaLevelDays: number;

    currentWeight: number;

    position: {
        lan: number;
        lon: number;
        orientation: number;
    }

    dimensions: {
        width: number;
        depth: number;
    }

    /**
     * current frames
     */
    hiveSupers: HiveSuper<keyof HiveSuperEntryMap>[]; // zargen
    history: HiveHistoryEntry<keyof HiveHistoryEntryMap>[];
}

export interface HiveSuperEntryMap {
    "roof": {};
    "insulation": {};
    "brood-super": {
        type: string;
        maxFrameCount: number;
        frames: Frame[],
        content: {
            brood: number,
            drones: number,
            pollen: number,
            honey: number;
        }
    };
    "honey-super": {
        type: string;
        maxFrameCount: number;
        frames: Frame[]
    };
    "feeder": {
        capacity: number;
        currentLoad: number;
    };
    "cover": {};
    "queen-excluder": {};
    "bottom-board": {
        type: string;
    };
    "beeflight": {};
}

export interface HiveSuper<K extends keyof HiveSuperEntryMap> {
    id: string;

    created: number;
    lastChanged: number;

    type: K;

    dimensions?: {
        height: number;
        width: number;
        depth: number;
    }

    options: HiveSuperEntryMap[K];
}

export interface HiveHistoryEntryMap {
    "create": null;
    "change-name": string;
    "add-group": string;
    "remove-group": string;
    "add-frame": string;
    "remove-frame": string;
    "change-frame-order": string[];
}

export interface HiveHistoryEntry<K extends keyof HiveHistoryEntryMap> {
    timestamp: number;
    hiveId: string;
    command: K;
    arguments: HiveHistoryEntryMap[K];
}