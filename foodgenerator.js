var adj=["fried","salted","smoked","steamed","raw","baked"];
var food=["meat","vegetables","beef","pork","chicken","potato"];
var first=(Math.floor(Math.random()*adj.length));
var sec=(Math.floor(Math.random()*food.length));
window.alert(adj[first]+" "+food[sec])