function Number(input)
{
    document.getElementById("Input").value=document.getElementById("Input").value+input;
}

function Operator(input)
{
    document.getElementById("Input").value=document.getElementById("Input").value+input;
}

function Egal()
{
try
{
    document.getElementById("Input").value=eval( document.getElementById("Input").value);
}
catch(error)
{
    document.getElementById("Input").value="ERROR";
}

}

function Clear()
{
    document.getElementById("Input").value="";
}