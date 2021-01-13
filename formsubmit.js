window.onload = setForm;

function setForm() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("We are currently having trouble with our servers. Please try again soon.");
      return false;
   }
}
