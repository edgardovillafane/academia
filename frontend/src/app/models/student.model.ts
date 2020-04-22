export class Student {

  constructor(_id = '', name = '', surname = '', phone = '') {
      this._id = _id;
      this.name = name;
      this.surname= surname;
      this.phone = phone;

  }

  _id: string;
  name: string;
  surname: string;
  phone: string;
}
