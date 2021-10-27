 /* On recupère les id dans le document HTML */ 
 const nom = document.getElementById("name");
 const mail =document.getElementById("email");
 const objet = document.getElementById("subject");
 const message = document.getElementById("message");
 const fbutton = document.getElementById("submit");
 const form = document.getElementById("myForm");
 const success = document.getElementById("success");
 
 /* création une fonction pour desactiver la soumission du bouton coté HTML */
 const disableSubmit = (disabled) => {
     if (disabled) {
         fbutton.setAttribute("disabled", true);
     } else {
         fbutton.removeAttribute("disabled");
     }
 };
 
 /* On teste le champs Nom */
 nom.addEventListener("input", (event) => {
     let value = event.target.value;
     /* Si le champ contient uniquement des caractères alphanuméric */
     if (!/[^0-9]+/.test(value)) {
         nom.setAttribute("class", "form-control is-invalid");
         disableSubmit(true);
         /* Si le champ a une longueur inférieur à 3 ou supérieur à 25 */
     } else if (value.length < 3 || value.length > 25) {
         nom.setAttribute("class", "form-control is-invalid");
         disableSubmit(true);
         /* Sinon c'est qu'il n'y a aucune erreur */
     } else {
         nom.setAttribute("class", "form-control is-valid");
         disableSubmit(false);
     }
 });
 
 /* On teste le champs objet */
 objet.addEventListener("input", (event) => {
     let value = event.target.value;
     /* Si le champ contient uniquement des caractères alphanuméric */
     if (!/[^0-9]+/.test(value)) {
         objet.setAttribute("class", "form-control is-invalid");
         disableSubmit(true);
         /* Si le champ a une longueur inférieur à 10 ou supérieur à 100 */
     } else if (value.length < 10 || value.length > 100) {
         objet.setAttribute("class", "form-control is-invalid");
         disableSubmit(true);
         /* Sinon c'est qu'il n'y a aucune erreur */
     } else {
         objet.setAttribute("class", "form-control is-valid");
         disableSubmit(false);
     }
 });
 
 /* On teste le champs message */
 message.addEventListener("input", (event) => {
     let value = event.target.value;
     /* Si le champ contient uniquement des caractères alphanuméric */
     if (!/[^0-9]+/.test(value)) {
         message.setAttribute("class", "form-control is-invalid");
         disableSubmit(true);
         /* Si le champ a une longueur inférieur à 15 ou supérieur à 500 */
     } else if (value.length < 15 || value.length > 500) {
         message.setAttribute("class", "form-control is-invalid");
         disableSubmit(true);
         /* Sinon c'est qu'il n'y a aucune erreur */
     } else {
         message.setAttribute("class", "form-control is-valid");
         disableSubmit(false);
     }
 
     /* Si tous les champs du formulaire sont bien remplis, on active le bouton sinon on le laisse desactiver */
     if (
         nom.getAttribute("class") === "form-control is-valid" &&
         objet.getAttribute("class") === "form-control is-valid" &&
         message.getAttribute("class") === "form-control is-valid" &&
     ) {
         disableSubmit(false);
     } else {
         disableSubmit(true);
     }
 });
 
 /* A la soumission du formulaire, on affiche un message de succès */
 form.addEventListener("submit", (event) => {
     event.preventDefault();
     success.innerHTML =
         '<div class="alert alert-success alert-dismissible fade show" role="alert">Formulaire envoyé avec succès !</div>';
 });
 



