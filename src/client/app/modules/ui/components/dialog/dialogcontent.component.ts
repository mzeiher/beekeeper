import { Component } from "@angular/core";

@Component({
    selector: 'ui-dialog-content',
    styleUrls: ['./dialogcontent.component.scss'],
    template: `
        <ng-content></ng-content>
    `
})
export class DialogContentComponent {

}