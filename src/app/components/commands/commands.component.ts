import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
})
export class CommandsComponent implements OnInit {
  commands: string[] = [];
  newCommand: string = '';

  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    this.commands = this.storage.getItem('commands') || [];
  }

  addCommand() {
    if (this.newCommand.trim()) {
      this.commands.push(this.newCommand.trim());
      this.storage.setItem('commands', this.commands);
      this.newCommand = '';
    }
  }

  deleteCommand(index: number) {
    this.commands.splice(index, 1);
    this.storage.setItem('commands', this.commands);
  }
  handleKeyDown(event: KeyboardEvent)
  {
    if(event.key === 'Enter')
    {
      if(event.key === 'Enter')
      {
        this.addCommand()
      }
    }
  }
}
