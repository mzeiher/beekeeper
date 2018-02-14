import { Injectable, Type, Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from "@angular/core";
import { UiService, DynamicComponent } from "../../../../utils/services/uiservice.service";
import { DialogServiceComponent } from "./dialogservice.component";

export class Dialog<T> {

    listener: ((id:string, dialog: Dialog<T>) => void)[] = [];

    constructor(private dialog: DynamicComponent<DialogServiceComponent>, private component: ComponentRef<T>, private buttons:Button[]) {
        dialog.component.buttons = buttons;
        dialog.component.click.subscribe((id:string) => {
            this.listener.forEach((value) => {
                value(id, this);
            });
        });
    }

    open(): void {
        document.querySelector('body').appendChild(this.dialog.rootNode);
    }

    close(): void {
        this.component.destroy();
        this.dialog.destroy();
    }

    getComponent(): T {
        return this.component.instance;
    }

    addClickListener(listener: (id:string, dialog:Dialog<T>) => void) {
        this.listener.push(listener);
    }
}

export interface Button {
    label:string;
    id:string;
}

@Injectable()
export class DialogService {

    constructor(private uiService: UiService, private componentFactoryResolver: ComponentFactoryResolver) {
    }

    createDialog<T>(component: Type<T>, buttons: Button[]):Dialog<T> {
        const dialog = this.uiService.createDynamicComponent(DialogServiceComponent);
        const componentRef = dialog.component.container.createComponent(this.componentFactoryResolver.resolveComponentFactory(component));
        
        return new Dialog<T>(dialog, componentRef, buttons);
    }
}