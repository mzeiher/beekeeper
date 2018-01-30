export interface FrameHistoryEntryMap {
    "create": string;
    "move-frame": {
        fromHiveId: string;
        fromSuperId: string;
        toHiveId: string;
        toSuperId: string;
    };
    "remove-frame": {
        fromHiveId: string;
        fromSuperId: string;
    };
    "add-frame": {
        toHiveId: string;
        toSuperId: string;
    }
}

export interface FrameHistoryEntry<K extends keyof FrameHistoryEntryMap> {
    timestamp: number;
    hiveId: string;
    command: K;
    arguments: FrameHistoryEntryMap[K];
}

export interface Frame {
    id: string;

    type: "brood" | "honey" | "drone";

    honeyPercent: number;
    pollenPercent: number;
    broodPercent: number;
    dronePercent: number;
    buildPercent: number;

    history: FrameHistoryEntry<keyof FrameHistoryEntryMap>[];
}