import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TopNavBarComponent } from './shared/top-nav-bar/top-nav-bar.component';
import { LeftNavBarComponent } from './workspace/left-nav-bar/left-nav-bar.component';
import { MainComponent } from './workspace/main/main.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { ToolBarComponent } from './workspace/main/tool-bar/tool-bar.component';
import { CardComponent } from './workspace/main/card/card.component';
import { LoginComponent } from './login/login.component';
import { BoardsComponent } from './boards/boards.component';
import { LeftNavBar2Component } from './boards/left-nav-bar/left-nav-bar.component';
import { Main2Component } from './boards/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    LeftNavBarComponent,
    MainComponent,
    WorkspaceComponent,
    ToolBarComponent,
    CardComponent,
    LoginComponent,
    BoardsComponent,
    LeftNavBar2Component,
    Main2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
