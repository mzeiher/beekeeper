import { Component, Input, Output } from "@angular/core";
import { Hive } from "../../../../../../../../shared/model/hive";
import { Collection } from "../../../../../../../../shared/model/collection";

@Component({
    selector: 'beekeeper-hiveinfo',
    styleUrls: ['./hiveinfo.component.scss'],
    templateUrl: './hiveinfo.component.html'
})
export class HiveInfoComponent {

    @Input() currentCollection: Collection 

}