import { Injectable, Type, Component, ViewChild, ViewContainerRef, ElementRef, Input, Output, EventEmitter } from "@angular/core";
import { Button } from "./dialog.service";
import { Subject } from "rxjs/Subject";

@Component({
    templateUrl: './dialogservice.component.html'
})
export class DialogServiceComponent {

    @Input() type:string = "dialog";
    @Input() buttons:Button[] = [];
    @Output() click:Subject<string> = new Subject<string>();

    @ViewChild('content', { read: ViewContainerRef }) container: ViewContainerRef;

    buttonClick(button:Button) {
        this.click.next(button.id);
    }

}