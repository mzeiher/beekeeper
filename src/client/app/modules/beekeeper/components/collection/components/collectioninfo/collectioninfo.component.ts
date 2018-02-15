import { Component, Input } from "@angular/core";
import { Collection } from "../../../../../../../../shared/model/collection";
import { DialogService } from "../../../../../ui/components/dialog/service/dialog.service";
import { EditCollectionComponent } from "../editcollection/editcollection.component";
import { CollectionService } from "../../../../service/collection.service";

@Component({
    selector: 'beekeeper-collectioninfo',
    styleUrls: ['./collectioninfo.component.scss'],
    templateUrl: './collectioninfo.component.html',
    providers: [DialogService, CollectionService]
})
export class CollectionInfoComponent {
    @Input() collection: Collection;

    constructor(private dialogService: DialogService, private collectionService: CollectionService) { }

    editClick() {
        const dialog = this.dialogService.createDialog(EditCollectionComponent, [{ id: 'ok', label: 'OK' }, { id: 'cancel', label: 'CANCEL' }]);
        dialog.getComponent().collection = JSON.parse(JSON.stringify(this.collection));
        dialog.open();
        dialog.addClickListener((id, dlg) => {
            if (id === 'ok') {
                this.collectionService.updateCollection(dialog.getComponent().collection).then((coll) => {
                    this.collection = coll;
                });
            }
            dialog.close();
        });
    }
}