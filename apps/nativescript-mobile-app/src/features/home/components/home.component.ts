/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnDestroy, OnInit } from '@angular/core'
import { setStatusBarColor } from '../../../utils'
import { User, RGBAColor } from '@angular-nativescript-workspace/shared'

import {
  LoadingIndicator,
  Mode,
  OptionsCommon,
} from '@nstudio/nativescript-loading-indicator';
import { BehaviorSubject } from 'rxjs';


const options: OptionsCommon = {
  message: 'Loading...',
  details: 'We appreciate your patience!',
  progress: 0.65,
  margin: 10,
  dimBackground: true,
  color: 'white', // color of indicator and labels
  // background box around indicator
  // hideBezel will override this if true
  backgroundColor: '#333',
  userInteractionEnabled: false, // default true. Set false so that the touches will fall through it.
  hideBezel: false, // default false, can hide the surrounding bezel
  mode: Mode.Indeterminate, // see options below
  android: {
    cancelable: true,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    cancelListener: function(dialog: any /* android.app.ProgressDialog */) {
      console.log('Loading cancelled');
    },
  },
  ios: {
    square: false,
  },
}
@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  rgbaColor: RGBAColor
  popupOptions: OptionsCommon = options
  indicator = new LoadingIndicator();

  ngOnInit(): void {
    setStatusBarColor('dark', '#fae13acf')

    this.rgbaColor = new RGBAColor(254 / 2, 254 /2,  254 / 2, 1000 / 2)

    this.loading$.subscribe((loading) => {
      if (loading)
        this.indicator.show(options)
      else 
        this.indicator.hide()
    })
  }

  ngOnDestroy(): void {
    this.loading$.unsubscribe()
  }

  onButtonTap(): void {
    this.loading$.next(!this.loading$.value)
  }

  onSliderValueChanged(color: string, value: number): void {
    console.log(color, value)
    this.rgbaColor.setColor(color, value)
  }

}
