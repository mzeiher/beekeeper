import { Hive } from "./hive";

export interface CollectionHistoryEntryTypeMap {
    "add-hive": string;
    "remove-hive": string;
    "change-name": string;
    "decomission": null;
    "reactivate": null;
    "delete": null;
}

export interface CollectionHistoryEntry<K extends keyof CollectionHistoryEntryTypeMap> {
    timestamp: number;
    collectionId: string;
    type: K;
    arguments: CollectionHistoryEntryTypeMap[K];
}

export interface Collection {
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
    history: CollectionHistoryEntry<keyof CollectionHistoryEntryTypeMap>[];
}