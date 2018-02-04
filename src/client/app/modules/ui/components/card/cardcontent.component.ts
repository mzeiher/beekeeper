import { Component } from "@angular/core";

@Component({
    selector: 'ui-card-content',
    styleUrls: ['./cardcontent.component.scss'],
    template: `
    <ng-content></ng-content>
    `
})
export class CardContentComponent {

}