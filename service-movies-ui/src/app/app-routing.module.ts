import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieEditorComponent } from './movie-editor/movie-editor.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
    {
        path: '',
        component: StartComponent
    },
    {
        path: 'movie-editor',
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
