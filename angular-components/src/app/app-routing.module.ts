import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { BoardsComponent } from './boards/boards.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'workspace', component: WorkspaceComponent},
  {path: 'boards', component: BoardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
