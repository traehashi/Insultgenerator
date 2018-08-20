//create an array of adjectives
var insults=["stupid person","nathan","mikey","you"];
//ask the user for his or her name
var fName=prompt("What is your name");
//create a random number
var choose=(Math.floor(Math.random()*insults.length));
//tell the user that he or she is followed by the adjective
window.alert(fName+", You"+" are"+" such"+" a "+insults[choose])
