/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NxWelcomeComponent } from './nx-welcome.component'
import { User, Game, Item } from '@angular-nativescript-workspace/shared'

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'web-app'

  user: User = new User(1, 'Frankie Teardrop', 'frankie@gmail.com', 'consumer')
  game: any = new Game(1, 'Monopoly')
  item: any = new Item(1, 'Glass of Water')
}
