import { Component, Input } from "@angular/core";
import { HiveSuper, HiveSuperEntryMap, Hive } from "../../../../../../../../shared/model/hive";

@Component({
    template: `<div></div>`,
    styles: [
        `
        
        `
    ]
})
export class SuperBaseComponent {

    @Input() hiveSuper: HiveSuper<keyof HiveSuperEntryMap>;
    @Input() hive: Hive;

}