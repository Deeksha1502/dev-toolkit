import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
})
export class SnippetsComponent implements OnInit {
  snippets: string[] = [];
  newSnippet: string = '';

  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    this.snippets = this.storage.getItem('snippets') || [];
  }

  addSnippet() {
    if (this.newSnippet.trim()) {
      this.snippets.push(this.newSnippet.trim());
      this.storage.setItem('snippets', this.snippets);
      this.newSnippet = '';
    }
  }

  deleteSnippet(index: number) {
    this.snippets.splice(index, 1);
    this.storage.setItem('snippets', this.snippets);
  }
}
