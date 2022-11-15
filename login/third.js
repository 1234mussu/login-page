function validate()
{
    var username=document.getElementById("username").Value;
    var password=document.getElementById("password").Value;
    if(username.equals("admin")&&password.equals("user"))
    {
        alert("Login successfully");
        return false;
    }
    else
    {
        alert("Login failed");
    }
}

