import { Component, Input } from "@angular/core";
import { Hive } from "../../../../../../../../shared/model/hive";

@Component({
    styleUrls: [],
    templateUrl: 'edithive.component.html'
})
export class EditHiveComponent {

    @Input() hive:Hive;
}