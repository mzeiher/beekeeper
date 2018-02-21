import { Component, Input, Output } from "@angular/core";
import { Hive } from "../../../../../../../../shared/model/hive";
import { Apiary } from "../../../../../../../../shared/model/apiary";

@Component({
    selector: 'beekeeper-hiveinfo',
    styleUrls: ['./hiveinfo.component.scss'],
    templateUrl: './hiveinfo.component.html'
})
export class HiveInfoComponent {

    @Input() currentApiary: Apiary

}