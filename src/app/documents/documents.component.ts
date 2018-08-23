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
      image_url: 'https://blog.freelance.com/wp-content/uploads/2016/03/compétences-freelance.jpg'
    },
    {
      title: 'My Second Doc',
      description: 'First Description',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'https://www.yolancer.com/wp-content/uploads/2016/11/Freelancing-1.jpg'
    },
    {
      title: 'My Third Doc',
      description: 'First Description',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'http://youngtopublishing.com/wp-content/uploads/2017/02/Freelancer-Fair-couple.jpg'
    }
  ]
}
