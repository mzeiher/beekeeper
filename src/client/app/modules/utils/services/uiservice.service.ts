import { Injectable, Injector, ComponentFactoryResolver, EmbeddedViewRef, ApplicationRef, Type, ComponentRef } from '@angular/core';

export class DynamicComponent<T> {

    rootNode: HTMLElement;
    component: T;

    private componentRef: ComponentRef<T>

    constructor(component: Type<T>, private appRef: ApplicationRef, private injector: Injector, private componentFactoryResolver: ComponentFactoryResolver) {
        this.componentRef = this.componentFactoryResolver.resolveComponentFactory(component).create(this.injector);
        this.appRef.attachView(this.componentRef.hostView);
        this.rootNode = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0];
        this.component = this.componentRef.instance;
    }

    destroy() {
        this.appRef.detachView(this.componentRef.hostView);
        this.componentRef.destroy();
    }

}

@Injectable()
export class UiService {

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private appRef: ApplicationRef, private injector: Injector) { }

    createDynamicComponent<T>(component: Type<T>): DynamicComponent<T> {
        debugger;
        return new DynamicComponent<T>(component, this.appRef, this.injector, this.componentFactoryResolver);
    }
}