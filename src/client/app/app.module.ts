import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HiveModule } from './beekeeper/beekeeper.module';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';
import { AppRouting } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, AppRouting, HiveModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
