import { Component } from "@angular/core";

@Component({
    selector: 'ui-card-header',
    styleUrls: ['./cardheader.component.scss'],
    template: `
    <ng-content></ng-content>
    `
})
export class CardHeaderComponent {

}