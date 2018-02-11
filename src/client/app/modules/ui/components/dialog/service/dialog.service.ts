import { Injectable, Type, Component, ViewChild, ViewContainerRef } from "@angular/core";
import { UiService } from "../../../../utils/services/uiservice.service";
import { DialogServiceComponent } from "./dialogservice.component";

export class Dialog<T> {
    open(): void {
        
    }

    close(): void {

    }

    addClickListener(listener: (id:string) => void) {

    }
}

export interface Button {
    label:string;
    id:string;
}

@Injectable()
export class DialogService {

    constructor(private uiService: UiService) {
        debugger;
    }

    createDialog<T>(component: Type<T>, buttons: Button[]):Dialog<T> {
        const comp = this.uiService.createDynamicComponent(DialogServiceComponent);
        return null;
    }
}