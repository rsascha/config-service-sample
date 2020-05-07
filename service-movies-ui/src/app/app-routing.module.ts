import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieEditorComponent } from './movie-editor/movie-editor.component';


const routes: Routes = [
    {
        path: '',
        component: MovieEditorComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
