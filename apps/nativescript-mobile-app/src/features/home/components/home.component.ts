/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core'
import { setStatusBarColor } from '../../../utils'
import { User } from '@angular-nativescript-workspace/shared'
import {
  Observable,
  Page,
  PropertyChangeData,
  Slider,
  StackLayout,
  Switch,
} from '@nativescript/core'
@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: User
  loading = false

  public checkStatus = false
  public switchStat = 'not checked'

  ngOnInit() {
    setStatusBarColor('dark', '#97d9e9')
  }

  onTap() {
    this.loading = !this.loading
  }

  public onChange(value) {
    console.log('switch ' + value)
    if (value) {
      this.switchStat = 'checked'
    } else {
      this.switchStat = 'not checked'
    }
  }

  onCheckedChange(): void {
    /* const obj = args.object as Switch

    const { oldValue, propertyName, value } = args */

    this.loading = !this.loading
    /* alert(
      'Context: ' +
        obj.toString() +
        '\n\n' +
        'Value: ' +
        value +
        ' \n\n' +
        'Old Value: ' +
        oldValue +
        '\n\n' +
        'Property Name: ' +
        propertyName,
    ) */
    alert('Toggled' + sw._getValue.toString())
  }
}
