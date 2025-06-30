import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SnippetsComponent } from './components/snippets/snippets.component';
import { LinksComponent } from './components/links/links.component';
import { CommandsComponent } from './components/commands/commands.component';

@NgModule({
  declarations: [
    AppComponent,
    SnippetsComponent,
    LinksComponent,
    CommandsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
