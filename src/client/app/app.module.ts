import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HiveModule } from './hive/hive.module';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';
import { HivelistComponent } from './hive/components/hivelist/hivelist.component';
import { HiveComponent } from './hive/components/hive/hive.component';
import { AppRouting } from './app-routing.module';
import { CollectionModule } from './collection/collection.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, AppRouting, HiveModule, CollectionModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
