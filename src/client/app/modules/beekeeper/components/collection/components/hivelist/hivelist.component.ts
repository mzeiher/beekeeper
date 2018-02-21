import { Component, Input } from "@angular/core";
import { Hive } from "../../../../../../../../shared/model/hive";
import { Apiary } from "../../../../../../../../shared/model/apiary";

@Component({
    selector: 'beekeeper-hivelist',
    styleUrls: ['./hivelist.component.scss'],
    templateUrl: './hivelist.component.html'
})
export class HiveListComponent {

    @Input() hiveList:Hive[];
    @Input() currentApiary: Apiary;
}