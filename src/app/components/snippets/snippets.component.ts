import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
})
export class SnippetsComponent implements OnInit {
  snippets: string[] = [];
  newSnippet: string = '';
  showError: boolean = false;

  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    this.snippets = this.storage.getItem('snippets') || [];
  }

  addSnippet() {
    if (this.newSnippet.trim()) {
      this.snippets.push(this.newSnippet.trim());
      this.storage.setItem('snippets', this.snippets);
      this.newSnippet = '';
      this.showError = false;

    }
    else
    {
      this.showError = true;
    }

  }

  deleteSnippet(index: number) {
    this.snippets.splice(index, 1);
    this.storage.setItem('snippets', this.snippets);
  }
  handleKeyDown(event: KeyboardEvent)
  {
    if(event.key === 'Enter')
    {
      this.addSnippet();
    }
  }
  onInputChange(){
    if(this.showError)
    {
      this.showError = false;
    }
  }

}
