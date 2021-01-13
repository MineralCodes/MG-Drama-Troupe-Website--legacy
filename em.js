
//this function is to reverse the text string
function stringReverse(textString) {
   if (!textString) return '';
   var revString='';
   for (i = textString.length-1; i>=0; i--)
       revString+=textString.charAt(i)
   return revString;
}

//this function constructs the email link
function eMail(name, server) {

	name = stringReverse(name);
	server = stringReverse(server)


	var emLink = name + "&#64;" + server;
	document.write("<a href='mailto:" + emLink + "'>");
	document.write("E-mail us at: ");
	document.write(emLink);
	document.write("</a>");
}



	eMail("epuortamardalmis", "moc.liamg");