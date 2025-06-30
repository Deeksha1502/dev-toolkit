import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
})
export class LinksComponent implements OnInit {
  links: { label: string, url: string }[] = [];
  label: string = '';
  url: string = '';

  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    this.links = this.storage.getItem('links') || [];
  }

  addLink() {
    if (this.label.trim() && this.url.trim()) {
      this.links.push({ label: this.label.trim(), url: this.url.trim() });
      this.storage.setItem('links', this.links);
      this.label = '';
      this.url = '';
    }
  }

  deleteLink(index: number) {
    this.links.splice(index, 1);
    this.storage.setItem('links', this.links);
  }

  handleKeyDown(event: KeyboardEvent)
  {
    if(event.key === 'Enter')
    {
    this.addLink();
    }
  }
}
