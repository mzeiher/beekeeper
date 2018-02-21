import { Component, Input } from "@angular/core";
import { Apiary } from "../../../../../../../../shared/model/apiary";
import { DialogService } from "../../../../../ui/components/dialog/service/dialog.service";
import { EditCollectionComponent } from "../editcollection/editcollection.component";
import { ApiaryService } from "../../../../service/apiary.service";

@Component({
    selector: 'beekeeper-collectioninfo',
    styleUrls: ['./collectioninfo.component.scss'],
    templateUrl: './collectioninfo.component.html',
    providers: [DialogService, ApiaryService]
})
export class CollectionInfoComponent {
    @Input() apiary: Apiary;

    constructor(private dialogService: DialogService, private collectionService: ApiaryService) { }

    editClick() {
        const dialog = this.dialogService.createDialog(EditCollectionComponent, [{ id: 'ok', label: 'OK' }, { id: 'cancel', label: 'CANCEL' }]);
        dialog.getComponent().apiary = JSON.parse(JSON.stringify(this.apiary));
        dialog.open();
        dialog.addClickListener((id, dlg) => {
            if (id === 'ok') {
                this.collectionService.updateApiary(dialog.getComponent().apiary).then((coll) => {
                    this.apiary = coll;
                });
            }
            dialog.close();
        });
    }
}