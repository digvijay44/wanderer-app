import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {
  public model = {
    editorData: '<p>Hello, world!</p>'
};
htmlSnippet:string='';
  public editorData = '<p>This is a CKEditor 4 WYSIWYG editor instance created with Angular.</p>';
  constructor(private sanitizer: DomSanitizer) { // javascript: URLs are dangerous if attacker controlled.
    // Angular sanitizes them in data binding, but you can
    // explicitly tell Angular to trust this value:
    debugger;
    var dangerousUrl = 'javascript:alert("Hi there")';
    var hhtmlSnippet = this.sanitizer.bypassSecurityTrustUrl(dangerousUrl);
  }
  ngOnInit(): void {
  }
  GetCkeditorHtml(){
    console.log(this.model.editorData);
    debugger
    this.htmlSnippet = this.model.editorData;
    // this.htmlSnippet = this.sanitizer.bypassSecurityTrustUrl(this.model.editorData)["changingThisBreaksApplicationSecurity"];
  }
}
