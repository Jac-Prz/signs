// get variables yourName (visitors name) and yourStarSign (visitors star sign) and store them as constants
// hide the welcome page
// unide the first page
// direct user to the top of the first page

// variables
var yourName;
var yourStarSign;

// add event listener for click of the submit/start button
document.getElementById("start-btn").addEventListener("click", function() {
  getData();
  console.log(yourName, yourStarSign);
  hideWelcomePage();
  unhideFirstPage();
  image();
  announceSign();
  whatMean();
  });

// functions
function getData() {
  yourName = document.getElementById("yourName").value;
  // get date
  var date = document.getElementById("date").value;
  var dayValue = date.slice(-2);
  var day = Number(dayValue);
  // get month
  var month = date.substring(5, 7);
  // if clause:
  var yourSign;
  if (month === "01") {
    if (day < 20) {
      yourSign = "Capricorn"
    } else if (day > 19) {
      yourSign = "Acquarius"
    }
  } else if (month === "02") {
    if (day < 19) {
      yourSign = "Acquarius"
    } else if (day > 18) {
      yourSign = "Pisces"
    }
  } else if (month === "03") {
    if (day < 21) {
      yourSign = "Pisces"
    } else if (day > 20) {
      yourSign = "Aries"
    }
  } else if (month === "04") {
    if (day < 20) {
      yourSign = "Aries"
    } else if (day > 19) {
      yourSign = "Taurus"
    }
  } else if (month === "05") {
    if (day < 21) {
      yourSign = "Taurus"
    } else if (day > 20) {
      yourSign = "Gemini"
    }
  } else if (month === "06") {
    if (day < 21) {
      yourSign = "Gemini"
    } else if (day > 20) {
      yourSign = "Cancer"
    }
  } else if (month === "07") {
    if (day < 23) {
      yourSign = "Cancer"
    } else if (day > 22) {
      yourSign = "Leo"
    }
  } else if (month === "08") {
    if (day < 23) {
      yourSign = "Leo"
    } else if (day > 22) {
      yourSign = "Virgo"
    }
  } else if (month === "09") {
    if (day < 23) {
      yourSign = "Virgo"
    } else if (day > 22) {
      yourSign = "Libra"
    }
  } else if (month === "10") {
    if (day < 24) {
      yourSign = "Libra"
    } else if (day > 23) {
      yourSign = "Scorpio"
    }
  } else if (month === "11") {
    if (day < 22) {
      yourSign = "Scorpio"
    } else if (day > 21) {
      yourSign = "Sagittarius"
    }
  } else if (month === "12") {
    if (day < 22) {
      yourSign = "Sagittarius"
    } else if (day > 21) {
      yourSign = "Capricorn"
    }
  }
  yourStarSign = yourSign
}

function unhideFirstPage() {
  var firstPage = document.getElementsByClassName("first-page");
  for (let i = 0; i < firstPage.length; i++) {
    firstPage[i].classList.remove("hide-first-page");
  };
}

function hideWelcomePage() {
  var hideItemsWelcomePage = document.getElementsByClassName("welcome");
  for (let s = 0; s < hideItemsWelcomePage.length; s++) {
    hideItemsWelcomePage[s].classList.add("hide-me");
  };
}

function image() {
  // move viewer to top of the firstPage
  window.scrollTo(0, 0);
  // will choose image based on starsign
  document.getElementById("sun").src = "images/" + yourStarSign + ".png";
  //will fade in -  and eventually make it move up
  setTimeout(function() {
    document.getElementById("sun").classList.add("visible");
  }, 100);
}

function announceSign() {
  if (yourStarSign === undefined) {
    document.location.reload();
  } else {
    document.getElementById("answer").innerHTML = yourName + ", your Zodiac is " + yourStarSign;
  }
}

function whatMean() {
  var signDesc
  if (yourStarSign === "Capricorn") {
    signDesc = "Known as one of the most intellectual and determined signs of the zodiac, these folks are also great at establishing relationships with people. Their traits include being attentive, brave, patient, and resistant. When they fall in love, they often have a hard time opening up and trusting people, which is why they often come across as cold."
  } else if (yourStarSign === "Acquarius") {
    signDesc = "Aquarius natives are very independent and are constantly in search of freedom; so much so that they reject a conventional lifestyle and pursue their own path. As the penultimate zodiac sign, these natives are real chameleons thanks to their adaptability and creativity. They shine thanks to their originality, curiosity, and unpredictability. Their characters are truly captivating, which is why we've chosen to reveal everything you need to know about their personality traits. Read Susan Taylor's report and learn more about these folks."
  } else if (yourStarSign === "Pisces") {
    signDesc = "Pisces' natives are sweet dreamers who live in their own bubbles. They are best described as hypersensitive emotional sponges, who are selfless and caring. In short, this personality is creative, sensual, and imaginative and these folks aspire to achieve total emotional and spiritual harmony, and this is demonstrated daily through their generosity and kind attitudes. This personality is at times inhibited and at others stimulated by intense emotional turmoil, which explains why these folks are so inspired, sensual, receptive, and imaginative. Read Susan Taylor's report on the 12th sign for more insights into what they're like."
  } else if (yourStarSign === "Aries") {
    signDesc = "As an Aries, you're a fire sign with an explosive temperament. You're a stubborn person and often do as you please. That said, your courage and your determination are exemplary."
  } else if (yourStarSign === "Taurus") {
    signDesc = "Taurus natives aspire above all to live quiet lives, although, it’s fair to say they do like having their material comforts. Their personalities are most succinctly described as unassuming and natural. Indeed, this loyal earth sign enjoys the simple pleasures of life. As a sentimental, faithful, conservative, devoted and slightly egocentric person, the second zodiac sign shuns complications and agitation. Learn more about this zodiac sign and discover all of their secrets."
  } else if (yourStarSign === "Gemini") {
    signDesc = "Natives of the Gemini personality are known for their quick thinking and their expressive nature. These folks are animated by an intense curiosity that takes them to new and unchartered horizons. Their traits include being sympathetic, sociable, intelligent and adaptable in every type of situation. They are perceptive and understanding of other people's ideas, but have a biased and narcissistic streak too. Susan Taylor reveals everything you must know about the third zodiac sign!"
  } else if (yourStarSign === "Cancer") {
    signDesc = "Cancer natives are reputed for their tender, intuitive, loving and sweet personalities and these qualities really do help them stand out from the crowd. They crave being surrounded, protected and need to feel safe at all times. The expression; appearances can be misleading has never been more accurate than when talking about these folks. There is lots more to them than just being cute, because they also have a tougher side. Get all the astrology insights you need into these receptive and sensitive characters."
  } else if (yourStarSign === "Leo") {
    signDesc = "If you are a native of this sign, you'll understand that it's your need to be loved, respected and admired that drives forward. Your personality traits include being generous, warm, authoritative, yet sometimes uncompromising. Indeed, a Leo personality loves being the center of attention, but can also be very self-conscious at times, especially when they are in love. It's time for this sign to step into the spotlight once again, because Susan Taylor reveals the astrology insights you need on this charismatic character. After all, when your ruling planet is the sun, it's tough to be discreet!"
  } else if (yourStarSign === "Virgo") {
    signDesc = "Virgo natives, you are reputed for being very analytical and systematic; a real mixture of intelligence and logic. You love studying, evaluating and methodically weighing up everything you do. You are obsessed with perfection and always pay attention to detail, because with you, failure just isn't an option! This sign is very intriguing yet fairly difficult to understand, especially when it comes to love. Due to the complexity of the sixth zodiac sign, here are all the insights into this personality that you need."
  } else if (yourStarSign === "Libra") {
    signDesc = "Libra natives are in constant search of peace, fairness, and balance. If this is your sign, you are known for being kind, understanding, and compassionate with everyone you meet. Above all, you crave partnership and hate being alone for long periods of time, which explains why your greatest wish is to establish serene relationships with those around you! Get more astrology insights into the Libra personality and learn about some of your best kept secrets. You have lots of amazing qualities to offer, let's discover them here with Susan Taylor!"
  } else if (yourStarSign === "Scorpio") {
    signDesc = "If you are a native of this sign, you deserve to know that you are one of the most complex and mysterious characters of the zodiac. Your personality is like no other and is extremely decisive and emotive. Passionately expressive, strong, intense, and rebellious are amongst some of the best adjectives to describe you. The Scorpio personality is so rich and deeply interesting, that there is always something new to learn about them. Indeed, you are both passionate and cool-headed, yet your quest for anti-conformity drives you forward."
  } else if (yourStarSign === "Sagittarius") {
    signDesc = "These natives are naturally enthusiastic, curious, fun-loving, and energetic. There's no question about it, this sign is one of the biggest wanderers of the zodiac and its natives are on a constant quest for happiness. They are enthusiastic, cheerful, optimistic, warm and generous, plus they need to let their joyful personality blossom in serene, optimistic, and adventurous environments. With their jovial and naïve nature, as well as their love for travel and exploration, they tend to head for the hills when drama arises. Here's what you need to know about the Sagittarius personality."
  };
  document.querySelector("#yourSignIntro p").innerHTML = signDesc;
}

// next section - work or relationships or other...
// choose between work/relationship/other
// if relationship, choose between which type of relationship then chose their starsign (three tiers)- advice paragraph will be selected based on This
// if other, choose between cat, feelings or otheradvice (one tier)
// if work, chose between type of work problem (one tier)

// variables global
var work = document.getElementById("work");
var relationships = document.getElementById("relationships");
var other = document.getElementById("other");
var back = document.getElementById("back");
// relationships variables
var relAdvices = document.querySelectorAll("#relationships button");
var chooseTheirSign = document.getElementById("relationships-their-sign");

//when  relationship or other or work is clicked, the clicked section will expand and the others will collapse
var chooseROW = document.querySelectorAll(".realms button");
for (i = 0; i < chooseROW.length; i++) {
  chooseROW[i].addEventListener("click", function() {
    let selectedROW = (this.id).slice(0, -4);
    let getSelectedRow = document.getElementById(selectedROW);
    //toggle relationghips
    getSelectedRow.classList.toggle("hide-me");
    // hide everything else
    hideEverything();
    // continue to choices...
    getSelectedRow.scrollIntoView();
    if (selectedROW != "relationships") {
      relationships.classList.add("hide-me");
    }
    if (selectedROW != "other") {
      other.classList.add("hide-me");
    }
    if (selectedROW != "work") {
      work.classList.add("hide-me");
    }
    });
}
function hideEverything(){
  back.classList.add("hide-me");
  chooseTheirSign.classList.add("hide-me");
  document.getElementById("relationships-answer").classList.add("hide-me");
  document.querySelector("#relationships-answer p").classList.add("hide-me");

};
// relationships is selected
for (i = 0; i < relAdvices.length; i++) {

  relAdvices[i].addEventListener("click", function() {

    var thisID = this.id;
    console.log(thisID);

    if (thisID === "fam") {
      chooseTheirSignRelationship();
    } else if (thisID === "lover") {
      chooseTheirSignRelationship();
    } else if (thisID === "friend") {
      chooseTheirSignRelationship();
    } else if (thisID === "acqu") {
      document.getElementById("relationships-their-sign").classList.add("hide-me");
      document.getElementById("relationships-answer").classList.remove("hide-me");
      document.querySelector("#relationships-answer p").classList.remove("hide-me");
      document.getElementById("relationships-answer").scrollIntoView();
      document.querySelector("#relationships-answer p").innerHTML = "For Christs sake! Stop giving a shit about what these people think! You dont even know them. Save the cosmic energy for more important problems";
      showBackButton();
    };

    function chooseTheirSignRelationship() {
      var selectRelsSign = document.querySelectorAll("#relationships-their-sign button");
      document.getElementById("relationships-their-sign").classList.toggle("hide-me");
      document.getElementById("relationships-their-sign").scrollIntoView();
      for (i = 0; i < selectRelsSign.length; i++) {
          selectRelsSign[i].addEventListener("click", function() {
          var relsId = this.classList;
          document.getElementById("relationships-their-sign").classList.add("hide-me");
          showAnswerDivWithRel(relsId);
        })
      };
    };

    function showAnswerDivWithRel(x) {
      document.getElementById("relationships-answer").classList.remove("hide-me");
      document.querySelector("#relationships-answer p").classList.remove("hide-me");
      document.getElementById("relationships-answer").scrollIntoView();
      document.querySelector("#relationships-answer h4").innerHTML = "When your sign is " + yourStarSign + " and theirs is " + x + "...";
      document.querySelector("#relationships-answer p").innerHTML = "hello poppet";
      showBackButton();
    };

  });
};

// other is selected -
var otherAdvices = document.querySelectorAll("#other button");
for (i = 0; i < otherAdvices.length; i++) {
  otherAdvices[i].addEventListener("click", function() {
    if (this.id === "cat-advice") {
      catAdvice();
      } else if (this.id === "other-advice") {
      otherAdvice();
      }
    document.querySelector("#other p").scrollIntoView();
    showBackButton();
  });
};

// work is selected -
var workAdvices = document.querySelectorAll("#work button");
for (i = 0; i < workAdvices.length; i++) {
  workAdvices[i].addEventListener("click", function() {
    if (this.id === "career-advice") {
      careerAdvice();
    } else if (this.id === "boss-advice") {
      bossAdvice();
    }
    // else if (this.id === "work-advice") {
    //   miscWorkAdvice();
    // }
    document.querySelector("#work p").scrollIntoView();
    showBackButton();
  });
};

//back button
//back button functions
function showBackButton() {
  //show back button...
  back.classList.remove("hide-me");
  // add event listener to back button so when is clicked...hide back button + clear paragraph + hide sections
  back.addEventListener("click", function() {
    back.classList.add("hide-me");
    backButtonClearParagraph();
    backThanksUniverse();
  });
};

function backButtonClearParagraph() {
  // remove text from the advice-paragraphs
  var adviceParagraph = document.getElementsByClassName("advice-paragraph")
  for (let i = 0; i < adviceParagraph.length; i++) {
    adviceParagraph[i].innerHTML = "";
  };
}

function backThanksUniverse() {
  var thanksUniverse = document.getElementsByClassName("thanks-universe");
  for (let i = 0; i < thanksUniverse.length; i++) {
    thanksUniverse[i].classList.add("hide-me");
    document.getElementById("guidance").scrollIntoView();
  };

};

// other advice
function catAdvice(){
  var catAdvice
  if (yourStarSign === "Capricorn") {
    catAdvice =  "Capricorns and cats actually have a lot in common. They wont open up to just anyone and they're smart enough to decide who deserves their loyalty. Get a cat, you guys are perfect for each other!";
  } else if (yourStarSign === "Acquarius") {
    catAdvice = "For sure, you should get a cat! As an Acquarius, you can surely identify with and respect the little guys independance and free spirit. Together you will curiously and harmoniously make your way through this crazy world.";
  } else if (yourStarSign === "Pisces") {
    catAdvice = "With cats around, processing your highly emotional state has never been easier!"
  } else if (yourStarSign === "Aries") {
    catAdvice = "A cat will be better equipt to put up with your shit than anyone"
  } else if (yourStarSign === "Taurus") {
    catAdvice = "Yes, get one. A cat will be the perfect loyal companion for any Taurus"
  } else if (yourStarSign === "Gemini") {
    catAdvice = "Don't you want a pet that reflects your intensely curious yet crazy nature? Get a cat friend!"
  } else if (yourStarSign === "Cancer") {
    catAdvice = "Yes, a cat would be perfect for you to direct your tender, loving and caring nature towards."
  } else if (yourStarSign === "Leo") {
    catAdvice = "It doesn't take a genius to figure this one out... You're a damn lion and those little dudes are practically your minions. Don't just stop at one cat, build an army! ";
  } else if (yourStarSign === "Virgo") {
    catAdvice = "As a Virgo, you are the perfect cat owner. Caring for a cat will be a piece of cake! You will go above and beyond when catering for all of the cats needs and he's gonna love you for it!";
  } else if (yourStarSign === "Libra") {
    catAdvice = "We all know how much Libra's hate being alone. Well, a cat will be a more loyal companion that any dumb human."
  } else if (yourStarSign === "Scorpio") {
    catAdvice = "Cats don't give a shit what anyone things. they dont owe you anything. I think Scorpios can appreciate this and get along aazingly with cats"
  } else if (yourStarSign === "Sagittarius") {
    catAdvice = "A cat will perfectly complement your energetic and free-spirited nature."
  };
  document.querySelector("#other p").innerHTML = catAdvice;
};
function otherAdvice(){
  var otherAdvice
  if (yourStarSign === "Capricorn") {
    otherAdvice =  "It's party time! The stakes might be high but its time to make those risky choices with no looking back!";
  } else if (yourStarSign === "Acquarius") {
    otherAdvice = "Find your courage and advocate for yourself. Whatever this might mean for you.";
  } else if (yourStarSign === "Pisces") {
    otherAdvice = "With cats around, processing your highly emotional state has never been easier!"
  } else if (yourStarSign === "Aries") {
    otherAdvice = "Just chill the floop out. It's about time you rested up and recovered. Exciting times are on their way but until then just take some naps, read a book, eat some cheese. "
  } else if (yourStarSign === "Taurus") {
    otherAdvice = "Bloody go for it, whatever 'it' may be. The stars are giving you the green light to make some changes, take the plunge or risk it all"
  } else if (yourStarSign === "Gemini") {
    otherAdvice = "Focus on getting over that baggage from the past and open yourself up to the oportunities coming your way"
  } else if (yourStarSign === "Cancer") {
    otherAdvice = "Don't lose sight of what you're working towards. Now is not the time to take a break or pussy out. Be fierce and ambitious"
  } else if (yourStarSign === "Leo") {
    otherAdvice = "You're on the right track. Don't over think things and just trust in yourself to make good decisions.";
  } else if (yourStarSign === "Virgo") {
    otherAdvice = "Let go of your ego. Make mistakes. Be silly. It can be freeing to not take yourself so seriously all the time";
  } else if (yourStarSign === "Libra") {
    otherAdvice = "Watch out for signs that you're heading towards burnout. It's time to focus on yourself for a while"
  } else if (yourStarSign === "Scorpio") {
    otherAdvice = "Embrace your inner child. Be creative and sporadic when aproaching all aspects of life!"
  } else if (yourStarSign === "Sagittarius") {
    otherAdvice = "Things could be feeling a bit confused and disloged at the moment, glide though it and you'll find your feet effortlessly when the time is right."
  };
  document.querySelector("#other p").innerHTML = otherAdvice;
};
// work advice
function careerAdvice(){
  var careerAdvice
  if (yourStarSign === "Capricorn") {
    careerAdvice =  "If you're wondering if now is the time to take risks and make big changes, it certainly is. Particulary career-wise. You will be better off for it! ";
  } else if (yourStarSign === "Acquarius") {
    careerAdvice =  "Figure out what you want, let it be known and go for it! Now is not the time to stay humble or underestimated. Make sure you are heard and push to have your vision shared byt those who matter in your workplace!";
  } else if (yourStarSign === "Pisces") {
    careerAdvice =  "Is it possible that you've been focusing a bit too much on you career and neglecting your self? Its time to focus first on your physical and mental health, so you can be in prime condition to kick arse career-wise when the time comes.";
  } else if (yourStarSign === "Aries") {
    careerAdvice =  "Now is the time to ease into routine and prove yourself consistant and capable. Theres no need to push yourself or exceed expectations, just coast for a while and save that bad ass energy for later.";
  } else if (yourStarSign === "Taurus") {
    careerAdvice =  "You can probably feel that something is just over the horizon. Prepare yourself, whether this means making yourself more employable, upskilling or opening your schedule to accomodate future oportunities.";
  } else if (yourStarSign === "Gemini") {
    careerAdvice =  "If you've been working hard lately, nows the time to reap those rewards. Get the recognition you deserve, ask for that promotion, advocate for yourself.";
  } else if (yourStarSign === "Cancer") {
    careerAdvice =  "It looks like you need to figure some shit out. Are you on the right path? What are your next steps and whats your end goal? Maybe you need to sit under a tree and have a good think.";
  } else if (yourStarSign === "Leo") {
    careerAdvice =  "You know what to do. If youre fed up with the status quo, change it. If you hate your job, quit. Sure, you're resiliant but its time to stop putting up with the BS.";
  } else if (yourStarSign === "Virgo") {
    careerAdvice =  "Its time to make some serious assessments. Are you meeting your own goals and expectations? Is your workplace supporting you? Is someone else reaping the benefits of your hard work?";
  } else if (yourStarSign === "Libra") {
    careerAdvice =  "Try to find some higher meaning in your work. Or if your job is truely meaningless, use it as a catalyst to better yourself - learn some new skills, become more efficiant, you can definitely get something out of this!";
  } else if (yourStarSign === "Scorpio") {
    careerAdvice =  "You're probably about to encounter new oportunities for career growth through unexpected. These might be anything - relationships, extracurricular activities or hobbies so leave yourself open to these experinces.";
  } else if (yourStarSign === "Sagittarius") {
    careerAdvice =  "Lately, there has been a lot of change in the world, your surroundings and also within you. Things may not be sitting the same way. Priorities might have changed. How about reassessing your goals, workplace or career path and making some changes that will benefit you.";
  };
  document.querySelector("#work p").innerHTML = careerAdvice
};
function bossAdvice(){
  var bossAdvice
  if (yourStarSign === "Capricorn") {
    bossAdvice =  "Try to focus on the positives. Sure, this person is being a dick, but what have they got to offer you? Are they serving you in some way? If so, lean into that. But if its a hard no... well its time to stir some shit.";
  } else if (yourStarSign === "Acquarius") {
    bossAdvice =  "Confrontation. Do it! Have the courage to ask for what you want. Ensure that your needs are met and don't let your shitty boss or colleages get in your way.";
  } else if (yourStarSign === "Pisces") {
    bossAdvice =  "It might be that your boss/colleage is a total douche, but is he really worth your time and effort right now? It's probably best to fly under the radar for a while, recharge your shields and wait until the oportune moment to make some changes.";
  } else if (yourStarSign === "Aries") {
    bossAdvice =  "Use lateral thinking to approach this dilemma. This person may be acting like a douche bag but its rarely as straight forward as you think.";
  } else if (yourStarSign === "Taurus") {
    bossAdvice =  "Maybe this is an oportunity to work on being the bigger person? Work through this issue with empathy and an open mind. Figure out all sides of the story before pushing proceeding. Confrontation could have consequences, so its got to be worth it.";
  } else if (yourStarSign === "Gemini") {
    bossAdvice =  "Pick your battles. If it really matters, then fight for yourself. Don't let these assholes get away with rubbing you the wrong way.";
  } else if (yourStarSign === "Cancer") {
    bossAdvice =  "In this situation, you'll probably get the best outcome by talking things through with your annoying boss or colleague. Use logic, empathy and diplocay and you will most likely be able to come to an agreement that suits everyone.";
  } else if (yourStarSign === "Leo") {
    bossAdvice =  "Any issue you have with someone can be solved. Tune in to your inner preditor, use your logic and calcuated timing to launch an epic surprise attach on any idiot who has undermined you.";
  } else if (yourStarSign === "Virgo") {
    bossAdvice =  "It's probably time to let go of diplomacy and strongly advocate for yourself. You usually know best anyway so stop putting up with other peoples shit.";
  } else if (yourStarSign === "Libra") {
    bossAdvice =  "If you're not content with a workplace relationship, now is the time to work on it. But Be calculated and attentive. You're smart and diplomatic enough to deal with this in a way that will ensure the best possible outcome for you.";
  } else if (yourStarSign === "Scorpio") {
    bossAdvice =  "It's time to stop putting up with workplace agressions or passive agressive behaviour. Air out your worplace issues and confront these poeple.";
  } else if (yourStarSign === "Sagittarius") {
    bossAdvice =  "Stand up for yourself, especially if someone is doubting you, making you feel unwelcome or underappreciated. You are your #1 advocate!";
  };
  document.querySelector("#work p").innerHTML = bossAdvice
};
// function miscWorkAdvice(){
//   var miscWorkAdvice
//   if (yourStarSign === "Capricorn") {
//     miscWorkAdvice =  "";
//   } else if (yourStarSign === "Acquarius") {
//     miscWorkAdvice =  "";
//   } else if (yourStarSign === "Pisces") {
//     miscWorkAdvice =  "";
//   } else if (yourStarSign === "Aries") {
//     miscWorkAdvice =  "";
//   } else if (yourStarSign === "Taurus") {
//     miscWorkAdvice =  "";
//   } else if (yourStarSign === "Gemini") {
//     miscWorkAdvice =  "";
//   } else if (yourStarSign === "Cancer") {
//     miscWorkAdvice =  "";
//   } else if (yourStarSign === "Leo") {
//     miscWorkAdvice =  "";
//   } else if (yourStarSign === "Virgo") {
//     miscWorkAdvice =  "";
//   } else if (yourStarSign === "Libra") {
//     miscWorkAdvice =  "";
//   } else if (yourStarSign === "Scorpio") {
//     miscWorkAdvice =  "";
//   } else if (yourStarSign === "Sagittarius") {
//     miscWorkAdvice =  "";
//   };
//   document.querySelector("#work p").innerHTML = miscWorkAdvice
// };
