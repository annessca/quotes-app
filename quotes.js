function qObj(_myQuotes, _quotesAuthor){
	this.myQuotes = _myQuotes;
	this.quotesAuthor = _quotesAuthor;
}

let imageGallery = new Array("images/twilight.jpg", "images/leightonmeester.jpg", "images/JessAlba.jpg", "images/teri hatcher.jpg", "images/payton.jpg", "images/BlakeLively.jpg", "images/burton.jpg", "images/rare.jpg", "images/Russia.jpg", "images/miley-cyrus.jpg", "images/BRITNEY-SPEAR.jpg", "images/lucy.jpg", "images/kendall.jpg", "images/Christina.jpg", "images/JenniferAniston.jpg", "images/kylie.jpg", "images/ariana.jpg", "images/cassiescerbo.jpg", "images/momsen.jpg", "images/kknightly.jpg", "images/annehathaway.jpg", "images/maxresdefault.jpg", "images/maxresdefaults.jpg", "images/riri.jpg", "images/Alicia-Keys.jpg", "images/Angelina Jolie.jpg", "images/scarlett.jpg", "images/selena.jpg", "images/ugoo.jpg");
let quotesMap = new Array();
let imageCounter = 0;
let qCounter = 0;

function start(){
	//document.getElementById("imagecontainer").innerHTML = "<img id='imageSlider-image' src=''/>" ;
	document.getElementById("imageSlider-image").src = imageGallery[imageCounter];
	document.getElementById("quoteline").innerHTML = quotesMap[qCounter].myQuotes;
	document.getElementById("authorname").innerHTML = quotesMap[qCounter].quotesAuthor;
	setInterval(function(){
		document.getElementById("imageSlider-image").src = imageGallery[imageCounter];
		document.getElementById("quoteline").innerHTML = quotesMap[qCounter].myQuotes;
		document.getElementById("authorname").innerHTML = "-- " + quotesMap[qCounter].quotesAuthor + " --";
		imageCounter = (imageCounter + 1) % imageGallery.length;
		qCounter = (qCounter + 1) % quotesMap.length;
	}, 5000);
}

quotesMap.push(new qObj("And if you've never felt your soul being torn apart, you've never loved anyone with all your heart.", "Reginaldo Kilas"));
quotesMap.push(new qObj("On the way to making magic, speed is not always the most important thing", "Chinese Proverbs"));
quotesMap.push(new qObj("Don't tell me the moon is shining; show me the glint of light on a broken glass", "Anton Chekhov"));
quotesMap.push(new qObj("I gotta stop treating people like I owe them", "Tupac"));
quotesMap.push(new qObj("Why worry? If you've done the very best you can, worrying won't make it any better", "Walt Disney"));
quotesMap.push(new qObj("Imperfection is beauty, madness is genius and it's better to to be absolutely ridiculous than to be absolutely boring", "Marilyn Monroe"));

function addQuotes(){
	var writ = document.getElementById("saying").value;
    var auth = document.getElementById("by").value;
	quotesMap.push(new qObj(writ, auth));

	document.getElementById("saying").value = "";
    document.getElementById("by").value = "";
}

function random(){
	var quote = quotesMap[Math.floor(Math.random()*quotesMap.length)];
	document.getElementById("imageSlider-image").src = imageGallery[imageCounter];
	document.getElementById("quoteline").innerHTML = quote.myQuotes
	document.getElementById("authorname").innerHTML = "-- " + quote.quotesAuthor + " --";
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
