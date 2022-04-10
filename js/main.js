
//navigacija-meni


window.addEventListener("load", popuniNavigaciju);	

function popuniNavigaciju(){

	var nav = ["Početna", "Galerija", "Rezervacije", "O autoru"];
	var putanja=["index.html", "galerija.html", "rezervacije.html", "oautoru.html"];
	var ispis = "<ul>";

	for(var i = 0; i < nav.length; i++){
		ispis += "<li><a href='" + putanja[i] + "'>" + nav[i] +  "</a></li>";
	}
	ispis += "</ul>";
	document.getElementById("meni").innerHTML = ispis;
}


//promo slike


window.addEventListener("load", popuni);

function popuni(){
	var putanja, slike, ispis;
	ispis="";
	putanja = "img/";
	slike=["promo1.jpg", "promo2.jpg", "promo3.jpg"];

	
	for( var i = 0; i<slike.length; i++){
		ispis+= "<img class='dinamickeSlike' src='" + putanja + slike[i] + "'/>";
	}
	if(document.getElementById("promoSlike") != null)
	document.getElementById("promoSlike").innerHTML=ispis;
}


//promena slike prilikom prelaska miša


function promena(kojaSlika){
document.getElementById("slikaSajt").src= kojaSlika + ".jpg";} 


//galerija

var drugii=document.getElementsByClassName("gallery")
for(var d=0;d<drugii.length;d++){
    
  var nizsl=[
      {velika:'img/galv1.jpg',mala:'img/gal1.jpg',alt:"s1"},
      {velika:'img/galv2.jpg',mala:'img/gal2.jpg',alt:"s2"},
      {velika:'img/galv3.jpg',mala:'img/gal3.jpg',alt:"s3"},
      {velika:'img/galv4.jpg',mala:'img/gal4.jpg',alt:"s4"},
      {velika:'img/galv5.jpg',mala:'img/gal5.jpg',alt:"s5"},
      {velika:'img/galv6.jpg',mala:'img/gal6.jpg',alt:"s6"},];

      for(var d=0;d<drugii.length;d++){
        for(var z=0;z<nizsl.length;z++){
            drugii[d].innerHTML+= '<a href="'+nizsl[z].velika+'" class="thumbnail" data-lightbox="mygallery"><img src="'+nizsl[z].mala+'" alt="'+nizsl[z].alt+'/>"</a>'

        }}}

//forma

window.onload = function(){
    BrojLjudi();
    Zona();
    document.getElementById("rez").addEventListener("click", function(){
        var nizGreske = [];
        var nizOk = [];
        var ime = document.getElementById("ime");
        var reIme = /^[A-ZŽĆČŠĐ][a-zžćčšđ]{2,14}(\s[A-ZŽĆČŠĐ][a-zžćčšđ]{2,14})?$/;
        if(!reIme.test(ime.value.trim())){
            nizGreske.push("Ispravite ime");
        }
        else{
            nizOk.push(ime.value);
        }
        var prezime = document.getElementById("prezime");
        var rePrezime = /^[A-ZŽĆČŠĐ][a-zžćčšđ]{2,14}(\s[A-ZŽĆČŠĐ][a-zžćčšđ]{2,14})?$/;
        if(!rePrezime.test(prezime.value.trim())){
            nizGreske.push("Ispravite prezime")
        }
        else{
            nizOk.push(prezime.value)
        }
        var telefon = document.getElementById("telefon");
        var reTelefon = /^06[0-9][0-9]{6,7}$/;
        if(!reTelefon.test(telefon.value.trim())){
            nizGreske.push("Ispravite broj telefona")
        }
        else{
            nizOk.push(telefon.value);
        }
        var email = document.getElementById("email");
        var reEmail = /^([A-Z]|[a-z]|[0-9]|[\_\%\.\+\-])([A-Z]|[a-z]|[0-9]|[\_\%\.\+\-])+\@[a-z]+\.[a-z]{2,4}$/;
        if(!reEmail.test(email.value.trim())){
            nizGreske.push("Ispravite email")
        }
        else{
            nizOk.push(email.value);
        }
        var datum = document.getElementById("datum");
        var reDatum = /^20((1[8-9])|(2[0-9]))\/[0-1][1-12]\/(([0-2][0-9])|(3[0-1]))$/;
        if(!reDatum.test(datum.value.trim())){
            nizGreske.push("Ispravite datum rezervacije");
        }
        else{
            nizOk.push(datum.value)
        }
        var vreme = document.getElementById("vreme");
        var reVreme = /^[1-2][0-1]\:[0-5][0-9]$/;
        if(!reVreme.test(vreme.value.trim())){
            nizGreske.push("Ispravite vreme rezervacije")
        }
        else{
            nizOk.push(vreme.value);
        }

        broj = document.getElementById("ddlBrojLjudi");
	    brojIzbor = broj.options[broj.selectedIndex].value;
        if(brojIzbor == "0"){
            nizGreske.push("Izaberite broj osoba");
        }
        else{
            nizOk.push(brojIzbor);
        }

        var zona = document.getElementsByName("rbZone");
        var izborZona = "";
        for(var i = 0; i < zona.length; i++){

            if(zona[i].checked){
                izborZona = zona[i].value;
                break;
            }   
        }
        if(izborZona == ""){
            nizGreske.push("Izaberite zonu")
        }
        else{
            nizOk.push(izborZona);
        }
        
        var lista = "<ul>";

        if(nizGreske.length != 0){

            for(var i = 0; i < nizGreske.length; i++){
                lista += "<li>" + nizGreske[i]+ "</li>";
            }
        }
        else{
           
            for(var i = 0; i < nizOk.length; i++){
                lista += "<li>" + nizOk[i]+ "</li>";
            }
        }
        lista += "</ul>";
        document.getElementById("rezPoruka").innerHTML = lista;

    })
    document.getElementById("ime").focus();
    document.getElementById("ime").addEventListener("blur", function(){
        var ime = document.getElementById("ime");
        var reIme = /^[A-ZŽĆČŠĐ][a-zžćčšđ]{2,14}(\s[A-ZŽĆČŠĐ][a-zžćčšđ]{2,14})?$/;
        if(!reIme.test(ime.value.trim())){
            document.getElementById("greskaIme").innerHTML = "Pogrešan format imena";
            document.getElementById("greskaIme").style.color = "red";
        }
        else{
            document.getElementById("greskaIme").innerHTML = "";
        }
    })
    document.getElementById("prezime").addEventListener("blur", function(){
        var prezime = document.getElementById("prezime");
        var rePrezime = /^[A-ZŽĆČŠĐ][a-zžćčšđ]{2,14}(\s[A-ZŽĆČŠĐ][a-zžćčšđ]{2,14})?$/;
        if(!rePrezime.test(prezime.value.trim())){
            document.getElementById("greskaPrezime").innerHTML = "Pogrešan format prezimena";
            document.getElementById("greskaPrezime").style.color = "red";
        }
        else{
            document.getElementById("greskaPrezime").innerHTML = "";
        }
    })
    document.getElementById("telefon").addEventListener("blur", function(){
        var telefon = document.getElementById("telefon");
        var reTelefon = /^06[0-9][0-9]{6,7}$/;
        if(!reTelefon.test(telefon.value.trim())){
            document.getElementById("greskaTelefon").innerHTML = "Pogrešan format broja telefona";
            document.getElementById("greskaTelefon").style.color = "red";
        }
        else{
            document.getElementById("greskaTelefon").innerHTML = "";
        }
        
    })
    document.getElementById("email").addEventListener("blur", function(){
        var email = document.getElementById("email");
        var reEmail = /^([A-Z]|[a-z]|[0-9]|[\_\%\.\+\-])([A-Z]|[a-z]|[0-9]|[\_\%\.\+\-])+\@[a-z]+\.[a-z]{2,4}$/;
        if(!reEmail.test(email.value.trim())){
            document.getElementById("greskaEmail").innerHTML = "Pogrešan format email";
            document.getElementById("greskaEmail").style.color = "red";
        }
        else{
            document.getElementById("greskaEmail").innerHTML = "";
        }
    })
    document.getElementById("datum").addEventListener("blur", function(){
        var datum = document.getElementById("datum");
        var reDatum = /^20((1[8-9])|(2[0-9]))\/[0-1][1-12]\/(([0-2][0-9])|(3[0-1]))$/;
        if(!reDatum.test(datum.value.trim())){
            document.getElementById("greskaDatum").innerHTML = "Pogrešan format datuma";
            document.getElementById("greskaDatum").style.color = "red";
        }
        else{
            document.getElementById("greskaDatum").innerHTML = "";
        }
    })
    document.getElementById("vreme").addEventListener("blur", function(){
        var vreme = document.getElementById("vreme");
        var reVreme = /^[1-2][0-1]\:[0-5][0-9]$/;
        if(!reVreme.test(vreme.value.trim())){
            document.getElementById("greskaVreme").innerHTML = "Pogrešan format vremena ili je termin van radnog vremena";
            document.getElementById("greskaVreme").style.color = "red";
        }
        else{
            document.getElementById("greskaVreme").innerHTML = "";
        }
    })
}
window.addEventListener("load", BrojLjudi);
function BrojLjudi(){
    var broj, ispis;
    document.getElementById("brojLjudi").innerHTML = "Broj osoba:";
    broj = ["1", "2", "3", "4", "5", "6"];

    ispis = "<select id='ddlBrojLjudi'>";
    ispis +="<option value='0'>Izaberite</option>";

    for(var i = 0; i < broj.length; i++){
        ispis += "<option value='" + broj[i] + "'>" + broj[i] + "</option>";
    }
    ispis += "</select>";
    document.getElementById("brojLjudi").innerHTML += ispis;
}
window.addEventListener("load", Zona);
function Zona(){
    var ispis, zone;
    document.getElementById("zona").innerHTML = "Izaberite zonu:";
    zone = ["Pušačka", "Nepušačka"];

	ispis = "";

	for(var i = 0; i < zone.length; i++){

		ispis += "<input type='radio' name='rbZone' value='" + zone[i] + "'>" + zone[i] ;

	}
	document.getElementById("zona").innerHTML += ispis;
}