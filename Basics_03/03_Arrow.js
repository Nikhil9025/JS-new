// Arrow functions .

const User = {

    UserName: "Nikhil",
    Price: 999,
    WelcomeMessage: function () {

        console.log(`${this.UserName} , Welcome to websit`);
        console.log(this); 

    }

}

// Object.freeze(User); ues to freez all value . now no chages will happend in original object .
User.WelcomeMessage();
User.UserName = "Raajkumaar";
User.WelcomeMessage();

