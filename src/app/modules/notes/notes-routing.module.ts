import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteListingComponent } from './note-listing/note-listing.component';

const routes: Routes = [{ path: '', component: NoteListingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
