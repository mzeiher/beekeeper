import { Component } from "@angular/core";

@Component({
    selector: 'ui-dialog',
    styleUrls: ['./dialog.component.scss'],
    template: `
        <div id="content">
            <ng-content></ng-content>
        </div>
        <div id="backdrop"></div>
    `
})
export class DialogComponent {

}