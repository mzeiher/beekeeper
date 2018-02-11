import { Injectable, Type, Component, ViewChild, ViewContainerRef } from "@angular/core";

@Component({
    template: `
    <ui-dialog>
    <template #content>
    </template>
    <ui-dialog-footer #footer>
    </ui-dialog-footer>
    </ui-dialog>
    `
})
export class DialogServiceComponent {
    @ViewChild('content') content: ViewContainerRef;
    @ViewChild('footer') footer: ViewContainerRef;
}