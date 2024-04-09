/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core'
import { setStatusBarColor } from '../../../utils'
import { User, MyColor } from '@angular-nativescript-workspace/shared'

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  myColor: MyColor

  user: User
  loading = false

  public checkStatus = false
  public switchStat = 'not checked'

  ngOnInit(): void {
    setStatusBarColor('dark', '#fae13acf')
    this.myColor = new MyColor(255 / 2, 255 / 2, 255 / 2, 1000 / 2)
  }

  public onButtonTap(): void {
    this.loading = !this.loading
  }

  public onCheckedChange(value: boolean): void {
    console.log('switch ' + value)
    if (value) {
      this.switchStat = 'checked'
    } else {
      this.switchStat = 'not checked'
    }
  }

  onSliderValueChanged(color: string, value: number): void {
    console.log(color, value)
    this.myColor.setColor(color, value)
  }

  /* 
  onCheckedChange(): void {
    const obj = args.object as Switch

    const { oldValue, propertyName, value } = args

    this.loading = !this.loading
    alert(
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
    ) 
    alert('Toggled' + sw._getValue.toString())
  }*/
}
