const cookie = {
  name: "",
  isGlutenFree: false,
  eatCookie: function () {
    console.log("I am eating " + this.name);
  },
};

cookie.name = "new Cookie";
console.log(cookie);
cookie.eatCookie();
// console.log(cookie.name);
// console.log(cookie.isGlutenFree);
// console.log(cookie["shape"]);

class Cookie {
  constructor(name, isGlutenFree) {
    this.name = name;
    this.isGlutenFree = isGlutenFree;
  }

  eatCookie() {
    console.log("Did I eat my " + this.name);
  }
}
const abc_cookie = new Cookie("iceCookie", true);
console.log(abc_cookie.name);
abc_cookie.eatCookie();
