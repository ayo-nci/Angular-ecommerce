import { Component } from '@angular/core';
import { AuthorService } from 'app/author.service';


@Component({
  selector: 'authors',
  template: `
  <h2>{{ noOfAuthors }} {{ title }}</h2>
  <ul>
      <li *ngFor="let aut of authors"> 
          {{ aut }}
      </li>    
  </ul>

  `
})


export class AuthorComponent {
    title = 'Authors';
    authors: string[]; 
    noOfAuthors: number;

    constructor (service: AuthorService) {
        this.authors = service.getAuthors();
        this.noOfAuthors = this.authors.length;
    }
}