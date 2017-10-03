

function outSide(){
	document.body.style.background = "url('outside.jpg')"
	document.body.style.backgroundSize="cover";
	document.getElementById('upStairs').style.display = "none";
	document.getElementById('cel').style.display = "none";
	document.getElementById('terug').style.display="block";
	document.getElementById('hoofdtekst').innerHTML ="Try to avoid cameras and lights"
	document.getElementById("terug").style.marginTop = "350px";
	document.getElementById('helikopter').style.display="none";


	


	console.log("level 1")


}

//heeft te maken met de pagina van de cell.

function cellRoom(){
	document.body.style.background = "url('jaill.jpg')"
	document.body.style.backgroundSize="cover";
	document.getElementById('upStairs').style.display = "none";
	document.getElementById('cel').style.display = "none";
	document.getElementById('upStairs').style.display = "none";
	document.getElementById("terug").style.display = "block";
	document.getElementById('hoofdtekst').innerHTML = "Find the key!"
	document.getElementById('sleutel').style.display="block";
	document.getElementById("terug").style.marginTop = "-500";

	document.getElementById('helikopter').style.display="none";
	

	console.log("level 2")

	

	 
}
//door de button gaat hij terug naar de hoofdpagina
function goBack(){
	window.history.go();
}

function sleutel(){
	alert("The security guard is waiting for you, bring the keys to the desk.")
	document.getElementById('bringKey').style.display="block";
	document.getElementById('sleutel').style.display="none";
	document.getElementById('hoofdtekst').innerHTML = "You have found the key!"

}

function bringtheKeys(){
	document.body.style.background = "url('balie.jpg')"
	document.getElementById('upStairs').style.display = "none";
	document.body.style.backgroundSize="cover";
	document.getElementById('cel').style.display = "none";
	document.getElementById('upStairs').style.display = "none";
	document.getElementById('hoofdtekst').innerHTML = "Deliver it off!"
	document.getElementById('sleutel').style.display="block";
	document.getElementById("bringKey").style.display = "none"
	document.getElementById("sleutel").style.display = "none";
	document.getElementById('terug').style.display ="none";
	document.getElementById('tekstwolk').style.display="block";
	document.getElementById('next').style.display="none";

document.getElementById('card').style.display="block";




	

	


var msg = new SpeechSynthesisUtterance("Welkom ik heb een ontsnappingsplan. Pak de card en probeer de code te kraken.");
window.speechSynthesis.speak(msg);
	
	console.log("level 3")

}


function boat(){

	var audio = new Audio('police.mp3');
		audio.play();


	document.body.style.background = "url('boat.jpg')"
	document.body.style.backgroundSize="cover";
	document.getElementById('boat').style.display="none";
	document.getElementById('hoofdtekst').innerHTML ="Go to the helicopter";
	document.getElementById('hoofdtekst').innerHTML ="Try to escape the police!";
	

	document.getElementById('helikopter').style.display="block";
	
	console.log('level 5');
	

}

function helikopter(){

	document.body.style.background = "url('helikopter.jpg')"
	document.body.style.backgroundSize="cover";
	document.getElementById('helikopter').style.display="none";

	var audio = new Audio('helikopter.mp3');
		audio.play();

document.getElementById('hoofdtekst').innerHTML ="Get in the chopper";
document.getElementById('theImage').style.display="block";
document.getElementById('wolk').style.display="block";


console.log('level 6');
}

function character(){
	document.body.style.background = "url('sea.jpg')"
	document.body.style.backgroundSize="cover";
	document.getElementById('theImage').style.display="none";
	document.getElementById('hoofdtekst').innerHTML ="Fly as high as possible and jump down";
	document.getElementById('parachute').style.display="block";
	document.getElementById('card').style.display="none";
		var audio = new Audio('helikopter.mp3');
		audio.play();

	console.log('level 7');
	
}


function parachute(){

	document.body.style.background = "url('parachute.jpg')"
	document.body.style.backgroundSize="cover";
	document.getElementById('hoofdtekst').innerHTML ="take the route to the beach"
	document.getElementById('parachute').style.display="none";
	document.getElementById('left').style.display="block";

	console.log('level 7');
}

function left(){

document.body.style.background = "url('parachutee.jpg')"
document.getElementById('left').style.display="none";
document.body.style.backgroundSize="cover";
document.getElementById('koprol').style.display="block";
document.getElementById('feet').style.display="block";
document.getElementById('hoofdtekst').innerHTML ="land next to the flag";
console.log("level 8");


}

function landFeet(){

	document.body.style.background = "url('victory.jpg')"
	document.body.style.backgroundSize="cover";
var audio = new Audio('trumpet.mp3');
		audio.play();
		document.getElementById('koprol').style.display="none";

		document.getElementById('feet').style.display="none";
document.getElementById('hoofdtekst').innerHTML ="You are pretty well done!";	
	

 var vid = document.getElementById("autoplay");
    vid.autoplay = false;
    vid.load();

}

function somerSault(){
var audio = new Audio('failed.mp3');
		audio.play();
		document.body.style.background = "url('parachutee.gif')";
		document.getElementById('hoofdtekst').innerHTML ="";
		document.body.style.backgroundSize="cover";
		document.getElementById('koprol').style.display="none";

		document.getElementById('feet').style.display="none";
		document.getElementById('hoofdtekst').innerHTML ="Game over, press restart the game if you want to play again";


 var vid = document.getElementById("autoplay");
    vid.autoplay = false;
    vid.load();

    window.history.back();
    document.getElementById('restart').style.display="block";

}

function restart(){

	 window.history.go();
}

function card(){
	var answer = prompt('Crack the code, tip: 9656,9657,9658')

if (answer === '9657') {
		var audio = new Audio('electronic.mp3');
		audio.play();

    console.log('You have choose the right answer!');
    
document.body.style.background = "url('plan.jpg')"
	document.body.style.backgroundSize="cover";
	document.getElementById('tekstwolk').style.display="none";
	document.getElementById('hoofdtekst').innerHTML ="Escape Plan";
	document.getElementById('next').style.display="none";
	document.getElementById('boat').style.display="block";
	document.getElementById('card').style.display="none";
} 

else if (answer=== '9656'){
    console.log("Focus yourself you almost guessed it.");
    var audio = new Audio('wrong1.mp3');
		audio.play()
			
}
else{
    console.log('Come on, you do not have much time');
var audio = new Audio('wrong1.mp3');
		audio.play()

} 

}

