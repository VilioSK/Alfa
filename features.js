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

function js_form_validate()
{
    const form_html = document.forms['formular'];
    let result = true;

    for(i=0 ; i < form_html.length; i++)
    {
      if(form_html[i].name == "submit")
        continue;
      if(form_html[i].value == "")
      {
        // nevyplnena polozka formularu
        result = false;
        form_html[i].style.border = "2px solid red";

        // pridaj poznamku k policku
        const html_span = document.createElement('span');
        const html_text = document.createTextNode('nevyplnena polozka');
        html_span.appendChild(html_text);

        html_final = form_html[i].parentNode.appendChild(html_span);
        html_final.style.color = "red";
      }
    }

    return result;
}

function js_show_form_items()
{
    const form_dom = document.forms['formular'];
    let output_html = "";

    for(i=0 ; i<form_dom.length; i++)
    {
      if(form_dom[i].name == "submit")
        continue;
      output_html += form_dom[i].value + "</br>";
    }

    document.getElementById("js_output").innerHTML = output_html;

}

function js_fill_form()
{
  const form_defaults = {"meno":"Jozef Mak", "vyska":"180", "vaha":"80", "vek":"35", "email":"jozef.mak@gmail.com"};
  const form_obj = JSON.parse(form_defaults);
  const form_dom = document.forms["formular"];

  for(i=0; i<form_dom.length; i++)
  {
    let form_name = form_dom[i].name;
    if(form_defaults[form_name] !== undefined )
    {
      form_dom[i].value = form_defaults[form_name];
    }
    else{
      console.log("Ignorujem:" + form_name);
    }
  }
}
