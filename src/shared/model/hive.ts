import { Frame } from "./frame";
import { Activity, ActivityMap } from "./activity";

/**
 * Hive representation (Aggregate)
 */
export interface Hive {

    /** GUID of hive */
    id: string;

    name: string;
    description: string;

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

    /**
     * current frames
     */
    hiveSupers: HiveSuper[]; // zargen
    history: HiveHistoryEntry<keyof HiveHistoryEntryMap>[];
    activity: Activity<keyof ActivityMap>[];
}

export interface HiveSuper {
    id: string;

    type: string;
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