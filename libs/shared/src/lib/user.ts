export class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public role: string,
  ) {
    this.id = id
    this.name = name
    this.email = email
    this.role = role
  }
}
