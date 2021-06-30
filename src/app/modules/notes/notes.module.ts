import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NoteListingComponent } from './note-listing/note-listing.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NoteListingComponent,
    NoteDetailsComponent,
    AddNoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NotesRoutingModule,
    CKEditorModule
  ]
})
export class NotesModule { }
