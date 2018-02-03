import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HiveModule } from './modules/beekeeper/beekeeper.module';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';
import { AppRouting } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule, AppRouting, HiveModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
