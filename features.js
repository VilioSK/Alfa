function js_show_alert()
{
  alert("Toto je alert funkcia");
}

function js_change_body_color()
{
  let custom_color = document.getElementById("body_color").value;
  document.body.style.background = custom_color;
  document.getElementById("js_output").innerHTML = "Farba bola zmenena na " + custom_color;
}
