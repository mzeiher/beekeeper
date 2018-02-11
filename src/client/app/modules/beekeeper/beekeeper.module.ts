import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import { UtilsModule } from '../utils/utils.module';

import { CollectionComponent } from './components/collection/collection.component';
import { HiveComponent } from './components/hive/hive.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { CollectionListEntryComponent } from './components/collections/components/collectionlistentry/collectionlistentry.component';
import { CollectionInfoComponent } from './components/collection/components/collectioninfo/collectioninfo.component';
import { HiveListComponent } from './components/collection/components/hivelist/hivelist.component';
import { HiveInfoComponent } from './components/hive/components/hiveinfo/hiveinfo.component';
import { SuperListComponent } from './components/hive/components/superlist/superlist.component';
import { EditCollectionComponent } from './components/collection/components/editcollection/editcollection.component';

import { CollectionService } from './service/collection.service';
import { HiveService } from './service/hive.service';
import { UiService } from '../utils/services/uiservice.service';

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
      CollectionsComponent, 
      CollectionListEntryComponent,
      HiveListComponent,
      CollectionInfoComponent,
      HiveInfoComponent,
      SuperListComponent,
      EditCollectionComponent
    ],
  providers: [HiveService, CollectionService, UiService],
  entryComponents: [EditCollectionComponent]
})
export class HiveModule { }
