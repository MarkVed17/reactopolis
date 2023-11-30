const macbookUsers = users => 
  users.filter((user) => user.device.toLowerCase().includes('macbook')).map(({user}) => user)

  const users = [
    {
      user: "Lindsay",
      device: "MacBook Pro 13",
    },
    {
      user: "Peter",
      device: "MacBook",
    },
      {
      user: "Victoria",
      device: "MacBook Pro 15",
    },
    {
      user: "Erica",
      device: "Dell",
    },
    {
      user: "Clark",
      device: "macbook pro 13",
    }
  ];

  console.log(macbookUsers(users))