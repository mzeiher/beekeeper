import { Hive } from "./hive";

export interface ApiaryHistoryEntryTypeMap {
    "add-hive": string;
    "remove-hive": string;
    "change-name": string;
    "decomission": null;
    "reactivate": null;
    "delete": null;
}

export interface ApiaryHistoryEntry<K extends keyof ApiaryHistoryEntryTypeMap> {
    timestamp: number;
    apiaryId: string;
    type: K;
    arguments: ApiaryHistoryEntryTypeMap[K];
}

export interface Apiary {
    id: string;
    name: string;

    description: string;

    position: {
        lon: number;
        lat: number;
    }
    
    owner: string;
    read: string[];
    write: string[];

    hives: string[];
    history: ApiaryHistoryEntry<keyof ApiaryHistoryEntryTypeMap>[];
}