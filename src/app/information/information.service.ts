interface User {
  firstName: string,
  lastName: string,
  about: string,
  birthDate: {
      year: number,
      month: number
  },
  status: Status,
}
enum Status {
  delete = "deleted",
  active = "active",
  inactive = "inactive"
}

export class informationService  {
  firstUser: User = {
      firstName: "George",
      lastName: "Bazera",
      about: "Genius Programmer & Famous Footballer",
      birthDate: {
          year: 1997,
          month: 12
      },
      status: Status.active,
  }
  secondUser: User = {
      firstName: "Kote",
      lastName: "Kirkita",
      about: "Great Programmer & Just 'გენიალური კაცი' ",
      birthDate: {
          year: 2000,
          month: 12
      },
      status: Status.inactive,
  }
  thirdUser: User = {
      firstName: "Levan",
      lastName: "Begi-Tanjula",
      about: "Owner of a Difficult Past",
      birthDate: {
          year: 1999,
          month: 7
      },
      status: Status.delete,
  }

  users: Array<User> = [this.firstUser,this.secondUser,this.thirdUser]
  click() {
      setTimeout(() => console.log('Second'), 2000);
  }
}
