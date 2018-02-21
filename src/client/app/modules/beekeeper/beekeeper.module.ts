import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import { UtilsModule } from '../utils/utils.module';

import { CollectionComponent } from './components/collection/collection.component';
import { HiveComponent } from './components/hive/hive.component';
import { ApiariesComponent } from './components/apiaries/apiaries.component';
import { ApiaryEntryComponent } from './components/apiaries/components/apiaryentry/apiaryentry.component';
import { CollectionInfoComponent } from './components/collection/components/collectioninfo/collectioninfo.component';
import { HiveListComponent } from './components/collection/components/hivelist/hivelist.component';
import { HiveInfoComponent } from './components/hive/components/hiveinfo/hiveinfo.component';
import { SuperListComponent } from './components/hive/components/superlist/superlist.component';
import { EditCollectionComponent } from './components/collection/components/editcollection/editcollection.component';

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
      CollectionComponent, 
      HiveComponent, 
      ApiariesComponent, 
      ApiaryEntryComponent,
      HiveListComponent,
      CollectionInfoComponent,
      HiveInfoComponent,
      SuperListComponent,
      EditCollectionComponent,
      HiveMapComponent
    ],
  providers: [HiveService, ApiaryService, UiService],
  entryComponents: [EditCollectionComponent]
})
export class HiveModule { }
