var slowo, slowa=[], dl, odpowiedzi=[], bledy=0, strzal, obraz;
var trafienie=false;

function start(){
    slowa=["mops", "komputer", "dwuipółmiesięczny", "informatyka"];
    slowo = slowa[Math.floor(Math.random()*slowa.length)];
    dl= slowo.length;

    for(var i=0; i<dl; i++){
        odpowiedzi[i] = "_";
    }

    document.getElementById("haslo").innerHTML = odpowiedzi.join(" ");
      

}

function sprawdz(){
    trafienie=false;

    strzal = document.getElementById("znak").value;

    for(var j=0; j<slowo.length; j++){
        if(slowo[j] == strzal && odpowiedzi[j]=="_"){
            odpowiedzi[j]= strzal;
            dl--;
            trafienie=true;
        }
        document.getElementById("haslo").innerHTML= odpowiedzi.join(" ");
    }
    document.getElementById("znak").value="";

    if(trafienie==false && bledy<9){
        bledy++;
        obraz = "w" + bledy + ".jpg"; 
        document.getElementById("szubienica").innerHTML= '<img src=" ' + obraz +'">';

    }
    if(dl==0 && bledy <9){
        document.getElementById("wynik").innerHTML="WYGRANA";
        document.getElementById("wynik").style.backgroundColor="green";
    }
    if(bledy ==9){
        document.getElementById("wynik").innerHTML="PRZEGRANA";
        document.getElementById("wynik").style.backgroundColor="red";
    }
}

