import { Component, OnInit, Input, ViewContainerRef, ViewChild, ComponentFactoryResolver, OnDestroy, ComponentRef, Type } from "@angular/core";
import { HiveSuper, HiveSuperEntryMap, Hive } from "../../../../../../../../shared/model/hive";
import { SuperBaseComponent } from "./superbase.component";
import { RoofComponent } from "./roof/roof.component";

const referenceMap = {
    'roof' : RoofComponent
}

@Component({
    selector: 'beekeeper-super',
    template: `
    <div>{{hiveSuper?.type}}</div>
    <div #placeholder></div>
    
    `,
    styleUrls: ['super.component.scss'],
    providers: []
})
export class SuperComponent implements OnInit, OnDestroy {

    @Input() set hiveSuper(hiveSuper: HiveSuper<keyof HiveSuperEntryMap>) {
        if(this.dynamicComponent !== null) {
            this.dynamicComponent.instance.hiveSuper = hiveSuper;
        }
        this.hiveSuperRefernce = hiveSuper;
    };
    get hiveSuper(): HiveSuper<keyof HiveSuperEntryMap> {
        return this.hiveSuperRefernce;
    }

    @Input() set hive(hive: Hive) {
        if(this.dynamicComponent !== null) {
            this.dynamicComponent.instance.hive = hive;
        }
        this.hiveReference = hive;
    };
    get hive(): Hive {
        return this.hiveReference;
    }
    
    @ViewChild('placeholder', { read: ViewContainerRef }) container: ViewContainerRef;
    
    private hiveSuperRefernce : HiveSuper<keyof HiveSuperEntryMap> = null;
    private hiveReference : Hive = null;
    private dynamicComponent: ComponentRef<SuperBaseComponent> = null;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {

    }

    ngOnInit() {
        const component:Type<SuperBaseComponent> = referenceMap[this.hiveSuper.type] || SuperBaseComponent;
        console.log(component);
        this.dynamicComponent = this.container.createComponent(this.componentFactoryResolver.resolveComponentFactory(component));
        this.dynamicComponent.instance.hiveSuper = this.hiveSuper;
        this.dynamicComponent.instance.hive = this.hive;
    }

    ngOnDestroy() {
        if(this.dynamicComponent !== null) {
            this.dynamicComponent.destroy();
        }
    }

}