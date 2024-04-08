export class Item {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id: number
  description: string
  constructor(id: number, description: string) {
    // eslint-disable-next-line no-console
    console.log('Item created')
    this.id = id
    this.description = description
  }
}
