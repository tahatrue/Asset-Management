/**
 * Created by thrinay on 11/24/2015.
 */
function submitFunction()
{
    var x=document.forms["myForm"]["username"].value;
    var y=document.forms["myForm"]["password"].value;
    if(x==null ||x=="" ||y==null ||y=="")
    {
        alert("Both fields cannot be emplty.");
    }
    else {
        if (x=="admin" && y== "admin")
        {
            alert("You re logged in");
                    }
        else {
            alert("Username or password is incorrect");
        }
    }
}
