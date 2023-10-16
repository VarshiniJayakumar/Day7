const json = {
    name: "John",
    age: 30,
    city: "New York"
  };
//for in
  for (let key in json) {
    if (json.hasOwnProperty(key)) {
      console.log(key + ": " + json[key]);
    }
  }

  //for of

  for (const [key, value] of Object.entries(json)) {
    console.log(key + ": " + value);
  }

  //Object.keys
  Object.keys(json).forEach((key) => {
    console.log(key + ": " + json[key]);
  });

   //Object.values
  Object.values(json).forEach((value) => {
    console.log(value);
  });
  