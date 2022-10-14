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

function js_show_form_items()
{
    const form_html = document.forms['formular'];
    let output_html = "";

    for(i=0 ; i < form_html.length; i++)
    {
      if(form_html[i].name == "submit")
        continue;
      output_html += form_html[i].value + "</br>";
    }

    document.getElementById("js_output").innerHTML = output_html;

}
