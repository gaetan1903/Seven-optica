function ajout(){
  eel.ajouter_verre(document.getElementById('atype').value, document.getElementById('atraitement').value, document.getElementById('adegre').value, document.getElementById('anombre').value , document.getElementById('aachat').value, document.getElementById('avente').value )(feed_ajout);
}


function feed_ajout(response){
  if (response == true){
     alert('success');
  }
  else {
    alert("erreur s'est produit");
    window.location ="#"
  }
}