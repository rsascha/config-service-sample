import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieEditorComponent } from './movie-editor/movie-editor.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        component: MovieEditorComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
