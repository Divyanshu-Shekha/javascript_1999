const user = {
    username : "Divyanshu",
    price : 500,

    WelcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
    }
}

user.WelcomeMessage()