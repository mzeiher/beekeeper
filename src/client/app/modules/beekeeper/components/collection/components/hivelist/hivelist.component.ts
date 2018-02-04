import { Component, Input } from "@angular/core";
import { Hive } from "../../../../../../../../shared/model/hive";

@Component({
    selector: 'beekeeper-hivelist',
    styleUrls: ['./hivelist.component.scss'],
    templateUrl: './hivelist.component.html'
})
export class HiveListComponent {

    @Input() hiveList:Hive[];
}