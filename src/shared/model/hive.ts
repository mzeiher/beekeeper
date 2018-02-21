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
    hiveSupers: HiveSuper[]; // zargen
    history: HiveHistoryEntry<keyof HiveHistoryEntryMap>[];
}

export type HiveSuperType = "ROOF" | "BROOD_SUPER" | "HONEY_SUPER" | "FEEDER" | "COVER" | "QUEEN_EXCLUDER" | "HIGH_BOTTOM_BOARD" | "LOW_BOTTOM_BOARD" | "BIENENFLUCHT"

export interface HiveSuper {
    id: string;

    type: HiveSuperType;
    subtype: string;

    maxFrameCount: number;
    frames: Frame[];
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