this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "You showed up into my life so unexpectedly (when I didnt even plan any relationship), and the blissfulness in my heart ❤ knew no damn boundaries, girl. Every moment we share is both 'sensational' and sweet 😊. You have filled the incomplete part of me, that emptiness and lack of intimacy 🙃.. You are the love of my life, and one person that loves me despite my oddness. I love you beyond words because you have given me the best of love in the world. Thank you for loving me when no one else would. You’re a diamond, a fantastic lover and I will treasure you forever, Lucy (^^). \n Only if you know how much you’ve impacted my life. Then you’d understand why you’re my Queen ( back to the old names, heh.. hellishly ✨special✨ roots ). To this day despite being an atheist, I still can’t thank God enough for bringing you my way, Luce. With the happiness in my heart and the tenderness of your far, distant touch.. I can’t explain it. So please forgive my rude attitude and bitchy mood today, it's just a chain of cringe events that got the better of me shortly all of a sudden :( \n I love you ❣, and I promise to give you the best of me. \n Believe me when I say ‘I love you’ because no matter what life throws at us, I will always be by your side to warm up your ❄️ heart.. That's a promise!";  // MESSAGE AREA, THIS CAN BE PERSONALIZED :)
this.$dom.container = document.getElementById('container');
this.$dom.container.appendChild(this.$dom.animatedText);
animateText();
function animateText(){
	var arrayOfLetters = this.text.split("");
	var animatedSpan = [];
	arrayOfLetters.forEach(function(item){
		var span = document.createElement('span');
		span.innerHTML = item;
		animatedSpan.push(span);
		span.style.opacity = 0;
		span.style.color = 'white';
		this.$dom.animatedText.appendChild(span);
	});
	TweenMax.staggerTo(animatedSpan, .2,{
		opacity : 1,
		delay : 1
	},0.05);
}

// VV (OLD TEXT WITH COMMENTED CSS STYLES) VV
// this.text = "🎂 🎈 Og igen.. Tillykke med fødselsdagen! 🎈 🎂 \n You honestly have become so ✨special✨ in my life since the end of last year, not only for being my lovely moon 🌙 during lonely nights, but also for being one of my closest distant friends to laugh with 😊, have fun 🙃, ❣get naughty❣  and just overall communicate 📱💬 with on these boring quarantine days!\n And I am saying all this sincerely, which may kinda seem a little cringe I guess, heheh.. ►► Now, our exchange may have become weaker ↓ lately .. we may have slowed down ↓ on the dynamic interactions & fun-times recently.. there may have been some communication issues 🗯️☍🗮 between us and we also may have grown colder ❄️ to each other in the matter of last few months 📉💔...\nBut!.. Deep down, through anger 💢 and boredom 🗯️, we obviously still enjoy talking to each other! And so without further ado.. on your special day, I wish you only ❤❤ smiles and lots of joy ❤❤ May each minute of your life be filled with happiness and may this birthday be just perfect for you!.. despite terrible exam timing ;) || My wish for you on your birthday is firstly ofc getting the best results ✔ today (since you are a top of your class girl, aye), receiving them sweet golden giftos 🎁 from close people, maybe even a package with PS5 📦.. whatever you wish may it just be fulfilled very soon on your b-day and.. always really! Hopefully this text dump wasn't that boring)) \n✨★🍾Once again Happy birthday Luna Krügel...!🍾★✨";  // MESSAGE AREA, THIS CAN BE PERSONALIZED :)
