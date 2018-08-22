import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard";
  documents: Document[] = [
    {
      title: 'My First Doc',
      description: 'First Description',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'http://google.com'
    },
    {
      title: 'My Second Doc',
      description: 'First Description',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'http://google.com'
    },
    {
      title: 'My Third Doc',
      description: 'First Description',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'http://google.com'
    }
  ]
}
