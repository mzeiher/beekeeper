import { Component, Input } from "@angular/core";
import { HiveSuper, HiveSuperEntryMap } from "../../../../../../../../shared/model/hive";

@Component({
    selector: 'beekeeper-superlist',
    styleUrls: ['./superlist.component.scss'],
    templateUrl: './superlist.component.html'
})
export class SuperListComponent {

    @Input() hiveSupers:HiveSuper<keyof HiveSuperEntryMap>[]
}