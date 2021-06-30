import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { NoteListingComponent } from './note-listing/note-listing.component';

const routes: Routes = [{ path: '', component: NoteListingComponent },
{ path: 'note1', component: NoteDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
