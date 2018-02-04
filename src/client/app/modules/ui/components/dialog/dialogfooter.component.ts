import { Component } from "@angular/core";

@Component({
    selector: 'ui-dialog-footer',
    styleUrls: ['./dialogfooter.component.scss'],
    template: `
        <ng-content></ng-content>
    `
})
export class DialogFooterComponent {

}