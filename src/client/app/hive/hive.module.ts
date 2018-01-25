import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HivelistComponent } from './components/hivelist/hivelist.component';
import { HiveComponent } from './components/hive/hive.component';
import { HiveService } from './service/hive.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HivelistComponent, HiveComponent],
  providers: [HiveService]
})
export class HiveModule { }
