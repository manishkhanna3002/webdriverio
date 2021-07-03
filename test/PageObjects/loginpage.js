class LoginPage
{

get username()
{
 return $("input[name='username']")
}

get password()
{
 return $("//input[@type='password']")
}

get alert()
{
 return $(".alert-danger")
}

get signin()
{
 return $($signIn8tn)
}

get textinfo()
{
    return $("p")
}

Login(username, password)
{
    this.username.setValue(username)
    this.password.setValue(password)
    this.signin.click()
}

}

module.exports = new LoginPage()