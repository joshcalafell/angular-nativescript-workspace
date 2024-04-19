export class RGBAColor {
  red: number // 0-255
  green: number // 0-255
  blue: number // 0-255
  opacity: number // 0-1

  constructor(red = 0, green = 0, blue = 0, opacity = 0) {
    this.red = red
    this.green = green
    this.blue = blue
    this.opacity = opacity
  }

  setColor(colorName: string, value: number) {
    switch (colorName) {
      case 'red':
        this.red = Math.round(Number(value.toFixed(0)))
        // .toFixed(0) is used b/c iOS return a long precision floating decimal, where Android send an integer, so other solutions welcome...
        break
      case 'green':
        this.green = Math.round(Number(value.toFixed(0)))
        break
      case 'blue':
        this.blue = Math.round(Number(value.toFixed(0)))
        break
      case 'opacity':
        this.opacity = Math.round(Number(value.toFixed(0)))
        break
    }
  }

  get color(): string {
    const r = Number(this.red)
    const g = Number(this.green)
    const b = Number(this.blue)
    const o = this.opacity / 1000 // Taking into account of slider tick numbers.
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + o + ')'
  }


}
