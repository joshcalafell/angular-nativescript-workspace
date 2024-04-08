export class Game {
  id: number
  title: string
  constructor(id: number, title: string) {
    console.log('Game created')
    this.id = id
    this.title = title
  }
}
