import { NgModule } from "@angular/core";
import { CardComponent } from "./components/card/card.component";
import { CardHeaderComponent } from "./components/card/cardheader.component";
import { CardContentComponent } from "./components/card/cardcontent.component";
import { CardActionComponent } from "./components/card/cardaction.component";
import { CardSubHeadingComponent } from "./components/card/cardsubheading.component";
import { DialogComponent } from "./components/dialog/dialog.component";
import { DialogContentComponent } from "./components/dialog/dialogcontent.component";
import { DialogFooterComponent } from "./components/dialog/dialogfooter.component";
import { DialogHeaderComponent } from "./components/dialog/dialogheader.component";
import { CardDividerComponent } from "./components/card/carddivider.component";
import { DialogServiceComponent } from "./components/dialog/service/dialogservice.component";

import { UiService } from "../utils/services/uiservice.service";
import { DialogService } from "./components/dialog/service/dialog.service";

@NgModule({
    declarations: [
        CardComponent,
        CardHeaderComponent,
        CardContentComponent,
        CardActionComponent,
        CardSubHeadingComponent,
        DialogComponent,
        DialogContentComponent,
        DialogFooterComponent,
        DialogHeaderComponent,
        CardDividerComponent,
        DialogServiceComponent
    ],
    providers: [DialogService, UiService],
    imports: [],
    exports: [
        CardComponent,
        CardHeaderComponent,
        CardContentComponent,
        CardActionComponent,
        CardSubHeadingComponent,
        DialogComponent,
        DialogContentComponent,
        DialogFooterComponent,
        DialogHeaderComponent,
        CardDividerComponent
    ],
    entryComponents: [
        DialogServiceComponent
    ]
})
export class UIModule {}