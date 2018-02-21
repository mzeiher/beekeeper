import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import { UtilsModule } from '../utils/utils.module';

import { ApiaryComponent } from './components/apiary/apiary.component';
import { HiveComponent } from './components/hive/hive.component';
import { ApiariesComponent } from './components/apiaries/apiaries.component';
import { ApiaryEntryComponent } from './components/apiaries/components/apiaryentry/apiaryentry.component';
import { ApiaryInfoComponent } from './components/apiary/components/apiaryinfo/apiaryinfo.component';
import { HiveListComponent } from './components/apiary/components/hivelist/hivelist.component';
import { HiveInfoComponent } from './components/hive/components/hiveinfo/hiveinfo.component';
import { SuperListComponent } from './components/hive/components/superlist/superlist.component';
import { EditApiaryComponent } from './components/apiary/components/editapiary/editapiary.component';

import { ApiaryService } from './service/apiary.service';
import { HiveService } from './service/hive.service';
import { UiService } from '../utils/services/uiservice.service';
import { HiveMapComponent } from './components/hivemap/hivemap.component';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule, 
    UtilsModule, 
    UIModule
  ],
  declarations: [
      ApiaryComponent, 
      HiveComponent, 
      ApiariesComponent, 
      ApiaryEntryComponent,
      HiveListComponent,
      ApiaryInfoComponent,
      HiveInfoComponent,
      SuperListComponent,
      EditApiaryComponent,
      HiveMapComponent
    ],
  providers: [HiveService, ApiaryService, UiService],
  entryComponents: [EditApiaryComponent]
})
export class HiveModule { }
