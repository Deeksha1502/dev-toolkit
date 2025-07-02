import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
})
export class CommandsComponent implements OnInit {
  commands: string[] = [];
  newCommand: string = '';
  showError: boolean = false;

  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    this.commands = this.storage.getItem('commands') || [];
  }

  addCommand() {
    if (this.newCommand.trim()) {
      this.commands.push(this.newCommand.trim());
      this.storage.setItem('commands', this.commands);
      this.newCommand = '';
      this.showError = false;
    }
    else{
      this.showError = true;
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
     
        this.addCommand()
      
    }
  }
  onInputChange(){
    if(this.showError)
    {
      this.showError = false;
    }
  }

}
