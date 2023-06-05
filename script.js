function check()
{
    let email = document.f1.mail.value;
    let maillen = email.length;
    let firstdot = email.indexOf(".");
    let lastdot = email.lastIndexOf(".");
    let fristat = email.indexOf("@");
    let lastat = email.lastIndexOf("@");
if(maillen>=6)
{
    if(firstdot == lastdot && fristat == lastat)
    {
        if(lastat - lastdot != 1)
        {
            window.open("thanks.html");
        }
        else
        {
            document.getElementById("#mail").style.border=" 1px solid red";
        }
    }
    else
    {
    document.getElementById("#mail").style.border=" 1px solid red";
}
}
else
{
    document.getElementById("#mail").style.border=" 1px solid red";
}
}