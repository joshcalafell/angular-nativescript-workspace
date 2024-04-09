/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core'
import { setStatusBarColor } from '../../../utils'
import { User } from '@angular-nativescript-workspace/shared'
@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user

  loading = false

  ngOnInit() {
    setStatusBarColor('dark', '#97d9e9')
  }

  onTap() {
    this.loading = !this.loading
    this.user = new User(
      1,
      'Josh Calafell',
      'joshcalafell@gmail.com',
      'consumer',
    )
  }
}
