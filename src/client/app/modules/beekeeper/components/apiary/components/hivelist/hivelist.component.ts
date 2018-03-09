import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Hive } from "../../../../../../../../shared/model/hive";
import { Apiary } from "../../../../../../../../shared/model/apiary";
import { DialogService } from "../../../../../ui/components/dialog/service/dialog.service";
import { EditHiveComponent } from "../../../hive/components/edithive/edithive.component";
import { HiveService } from "../../../../service/hive.service";

@Component({
    selector: 'beekeeper-hivelist',
    styleUrls: ['./hivelist.component.scss'],
    templateUrl: './hivelist.component.html',
    providers: [DialogService, HiveService]
})
export class HiveListComponent {

    @Input() hiveList:Hive[];
    @Input() currentApiary: Apiary;

    @Output() refresh: EventEmitter<Hive> = new EventEmitter();
    constructor(private dialogService:DialogService, private hiveService:HiveService) {

    }

    editHive(hive:Hive) {
        const currentHiveEdit = JSON.parse(JSON.stringify(hive));
        const dialog = this.dialogService.createDialog(EditHiveComponent, [{id: 'cancel', label: 'Cancel'},{id: 'save', label: 'Save'}]);
        dialog.getComponent().hive = currentHiveEdit;
        dialog.addClickListener((id, dialog) => {
            if(id === 'save') {
                this.hiveService.updateHive(currentHiveEdit).then((value) => {
                    this.refresh.emit(value);
                });
            }
            dialog.close();
        });
        this
        dialog.open();
    }
}