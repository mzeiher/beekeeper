import { Component, Input } from "@angular/core";
import { Apiary } from "../../../../../../../../shared/model/apiary";
import { DialogService } from "../../../../../ui/components/dialog/service/dialog.service";
import { EditApiaryComponent } from "../editapiary/editapiary.component";
import { ApiaryService } from "../../../../service/apiary.service";

@Component({
    selector: 'beekeeper-apiaryinfo',
    styleUrls: ['./apiaryinfo.component.scss'],
    templateUrl: './apiaryinfo.component.html',
    providers: [DialogService, ApiaryService]
})
export class ApiaryInfoComponent {
    @Input() apiary: Apiary;

    constructor(private dialogService: DialogService, private apiaryService: ApiaryService) { }

    editClick() {
        const dialog = this.dialogService.createDialog(EditApiaryComponent, [{ id: 'ok', label: 'OK' }, { id: 'cancel', label: 'CANCEL' }]);
        dialog.getComponent().apiary = JSON.parse(JSON.stringify(this.apiary));
        dialog.open();
        dialog.addClickListener((id, dlg) => {
            if (id === 'ok') {
                this.apiaryService.updateApiary(dialog.getComponent().apiary).then((coll) => {
                    this.apiary = coll;
                });
            }
            dialog.close();
        });
    }
}