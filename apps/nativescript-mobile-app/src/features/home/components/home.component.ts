/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core'
import { setStatusBarColor } from '../../../utils'
import { User, Game, Item } from '@angular-nativescript-workspace/shared'
@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  user: User = new User(1, 'Frankie Teardrop', 'frankie@gmail.com', 'consumer')
  game: any = new Game(1, 'Monopoly')
  item: any = new Item(1, 'Glass of Water')

  ngOnInit() {
    setStatusBarColor('dark', '#97d9e9')
  }

  onTap() {
    console.log('onTap')
  }
}
