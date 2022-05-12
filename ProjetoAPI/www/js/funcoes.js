function FatoAleatorio() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.chucknorris.io/jokes/random";
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4  &&  this.status == 200) {
        var json = JSON.parse(this.responseText);
        // We parse the JSON response
        parseJson(json);
      }		
    };
  
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }