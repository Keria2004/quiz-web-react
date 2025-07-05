let user = {};

console.log(user?.address?.street ?? "not fount user");

let userAdmin = {
  admin() {
    alert("I am Son");
  },
};

let userGuest = {};

//userAdmin.admin();

userGuest.admin?.() ?? alert("Không phải admin");
