import { Component } from "@angular/core";

@Component({
    selector: 'ui-dialog-header',
    styleUrls: ['./dialogheader.component.scss'],
    template: `
        <ng-content></ng-content>
    `
})
export class DialogHeaderComponent {

}