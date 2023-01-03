export class User {
  constructor(private name: string, private age: number) {
    if (this.age <= 0) {
      throw new Error('0 以上の数値を入れて下さい');
    }
  }
}
