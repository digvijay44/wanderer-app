import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NoteListingComponent } from './note-listing/note-listing.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { AddNoteComponent } from './add-note/add-note.component';


@NgModule({
  declarations: [
    NoteListingComponent,
    NoteDetailsComponent,
    AddNoteComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }
