export class MyColor {
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
        this.red = Number(value)
        break
      case 'green':
        this.green = Number(value)
        break
      case 'blue':
        this.blue = Number(value)
        break
      case 'opacity':
        this.opacity = Number(value)
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

  get colorOpposite(): string {
    const r = Number(this.red + (122.5 % 255))
    const g = Number(this.green + (122.5 % 255))
    const b = Number(this.blue + (122.5 % 255))
    const o = this.opacity / 1000 // Taking into account of slider tick numbers.
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + o + ')'
  }
}
