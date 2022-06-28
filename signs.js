// variables
var yourName;
var yourSign;

// listen for click of the start button. Get user data and display first page
document.getElementById("start-btn").addEventListener("click", function() {
  getName();
  getSign();
  console.log(yourName, yourSign);
  hideWelcomePage();
  unhideFirstPage();
  loadImage();
  announceSign();
  signDescription();
});

// functions
function getName() {
  // get userName and capitalise first letters
  const userName = document.getElementById("yourName").value;
  const words = userName.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1)
  }
  yourName = words.join(" ");
  return yourName;
}

function getSign() {
  // get the users day of birth
  const date = document.getElementById("date").value;
  const day = Number(date.slice(-2));
  // get month of birth
  const month = date.substring(5, 7);
  // get users starSign
  if (month === "01") {
    yourSign = (day < 20) ? "Capricorn" : "Aquarius";
  } else if (month === "02") {
    yourSign = (day < 19) ? "Aquarius" : "Pisces";
  } else if (month === "03") {
    yourSign = (day < 21) ? "Pisces" : "Aries";
  } else if (month === "04") {
    yourSign = (day < 20) ? "Aries" : "Taurus";
  } else if (month === "05") {
    yourSign = (day < 21) ? "Taurus" : "Gemini";
  } else if (month === "06") {
    yourSign = (day < 21) ? "Gemini" : "Cancer";
  } else if (month === "07") {
    yourSign = (day < 23) ? "Cancer" : "Leo";
  } else if (month === "08") {
    yourSign = (day < 23) ? "Leo" : "Virgo";
  } else if (month === "09") {
    yourSign = (day < 23) ? "Virgo" : "Libra";
  } else if (month === "10") {
    yourSign = (day < 24) ? "Libra" : "Scorpio";
  } else if (month === "11") {
    yourSign = (day < 22) ? "Scorpio" : "Sagittarius";
  } else if (month === "12") {
    yourSign = (day < 22) ? "Sagittarius" : "Capricorn";
  }
  return yourSign;
}

function hideWelcomePage() {
  var hideItemsWelcomePage = document.getElementsByClassName("welcome");
  for (let i = 0; i < hideItemsWelcomePage.length; i++) {
    hideItemsWelcomePage[i].classList.add("hide-me");
  };
}

function unhideFirstPage() {
  var firstPage = document.getElementsByClassName("first-page");
  for (let i = 0; i < firstPage.length; i++) {
    firstPage[i].classList.remove("hide-first-page");
  };
}

function loadImage() {
  // move viewer to top of the firstPage
  window.scrollTo(0, 0);
  // choose image based on starsign
  document.getElementById("symbol").src = "images/" + yourSign + ".png";
  //fade in
  setTimeout(function() {
    document.getElementById("symbol").classList.add("visible");
  }, 500);
}

function announceSign() {
  if (yourSign === undefined) {
    document.location.reload();
  } else {
    document.getElementById("answer").innerHTML = yourName + ", your zodiac is " + yourSign;
  }
}

function signDescription() {
  const signDesc = yourSign === 'Capricorn' ? "Known to be the most ambitious, tenacious, and goaty signs of the zodiac. These earth signs are blunt, grounded, and loyal as hell making them great friends who aren't afraid to tell you the hard truths. Aptly symbolized by the sea-goat, a mythological creature with the body of a goat and tail of a fish, it is believed that for these headstrong creatures there is, baby, ain't no mountain high enough, ain't no valley low enough, and ain't no river wide enough." :
    yourSign === 'Aquarius' ? "Aquarius natives are very independent and are constantly in search of freedom; so much so that they reject a conventional lifestyle and pursue their own path. As the penultimate zodiac sign, these natives are real chameleons thanks to their adaptability and creativity. They shine thanks to their originality, curiosity, and unpredictability. Their characters are truly captivating, which is why we've chosen to reveal everything you need to know about their personality traits." :
    yourSign === 'Pisces' ? "Pisces' natives are sweet dreamers who live in their own bubbles. They are best described as hypersensitive emotional sponges, who are selfless and caring. In short, this personality is creative, sensual, and imaginative and these folks aspire to achieve total emotional and spiritual harmony, and this is demonstrated daily through their generosity and kind attitudes. This personality is at times inhibited and at others stimulated by intense emotional turmoil, which explains why these folks are so inspired, sensual, receptive, and imaginative." :
    yourSign === "Aries" ? "As an Aries, you're a fire sign with an explosive temperament. You're a stubborn person and often do as you please. That said, your courage and your determination are exemplarycan be quite stubborn and rigid at times. They can be impulsive, self-centered, and controlling, which can make their friends feel ignored and sidelined.." :
    yourSign === "Taurus" ? "Taurus natives aspire above all to live quiet lives, although, it’s fair to say they do like having their material comforts. Their personalities are most succinctly described as unassuming and natural. Indeed, this loyal earth sign enjoys the simple pleasures of life. As a sentimental, faithful, conservative, devoted and slightly egocentric person, the second zodiac sign shuns complications and agitation. Learn more about this zodiac sign and discover all of their secrets. good at making friends, but they can lack social skills. They need alone time to recharge and introspect, which can lead to miscommunication with others." :
    yourSign === "Gemini" ? "Natives of the Gemini personality are known for their quick thinking and their expressive nature. These folks are animated by an intense curiosity that takes them to new and unchartered horizons. Their traits include being sympathetic, sociable, intelligent and adaptable in every type of situation. They are perceptive and understanding of other people's ideas, but have a biased and narcissistic streak too. Susan Taylor reveals everything you must know about the third zodiac sign!" :
    yourSign === "Cancer" ? "Cancer natives are reputed for their tender, intuitive, loving and sweet personalities and these qualities really do help them stand out from the crowd. They crave being surrounded, protected and need to feel safe at all times. The expression; appearances can be misleading has never been more accurate than when talking about these folks. There is lots more to them than just being cute, because they also have a tougher side. Get all the astrology insights you need into these receptive and sensitive characters. Cancers can be moody, overly sensitive, and impulsive. They are easily hurt and may have a different sense of humor." :
    yourSign === "Leo" ? "If you are a native of this sign, you'll understand that it's your need to be loved, respected and admired that drives forward. Your personality traits include being generous, warm, authoritative, yet sometimes uncompromising. Indeed, a Leo personality loves being the center of attention, but can also be very self-conscious at times, especially when they are in love. It's time for this sign to step into the spotlight once again, because Susan Taylor reveals the astrology insights you need on this charismatic character. After all, when your ruling planet is the sun, it's tough to be discreet! Leos can be self-centered, self-obsessed, and selfish. They can have a hard time putting someone’s interests above their own." :
    yourSign === "Virgo" ? "Virgo natives, you are reputed for being very analytical and systematic; a real mixture of intelligence and logic. You love studying, evaluating and methodically weighing up everything you do. You are obsessed with perfection and always pay attention to detail, because with you, failure just isn't an option! This sign is very intriguing yet fairly difficult to understand, especially when it comes to love. Due to the complexity of the sixth zodiac sign, here are all the insights into this personality that you need." :
    yourSign === "Libra" ? "Libra natives are in constant search of peace, fairness, and balance. If this is your sign, you are known for being kind, understanding, and compassionate with everyone you meet. Above all, you crave partnership and hate being alone for long periods of time, which explains why your greatest wish is to establish serene relationships with those around you! Get more astrology insights into the Libra personality and learn about some of your best kept secrets. You have lots of amazing qualities to offer" :
    yourSign === "Scorpio" ? "If you are a native of this sign, you deserve to know that you are one of the most complex and mysterious characters of the zodiac. Your personality is like no other and is extremely decisive and emotive. Passionately expressive, strong, intense, and rebellious are amongst some of the best adjectives to describe you. The Scorpio personality is so rich and deeply interesting, that there is always something new to learn about them. Indeed, you are both passionate and cool-headed, yet your quest for anti-conformity drives you forward." :
    yourSign === "Sagittarius" ? "These natives are naturally enthusiastic, curious, fun-loving, and energetic. There's no question about it, this sign is one of the biggest wanderers of the zodiac and its natives are on a constant quest for happiness. They are enthusiastic, cheerful, optimistic, warm and generous, plus they need to let their joyful personality blossom in serene, optimistic, and adventurous environments. With their jovial and naïve nature, as well as their love for travel and exploration, they tend to head for the hills when drama arises. Here's what you need to know about the Sagittarius personality." :
    "Error - please refresh";
  document.querySelector("#yourSignIntro p").innerHTML = signDesc;
}


// next section - choose work / relationships / other...
// variables
var relationships = document.getElementById("relationships");
var other = document.getElementById("other");
var work = document.getElementById("work");
var back = document.getElementById("back");

// if topic relationship / other / work is clicked, the clicked section will expand and the others will collapse
var topicBtns = document.querySelectorAll(".realms button");
for (i = 0; i < topicBtns.length; i++) {
  topicBtns[i].addEventListener("click", function() {
    const selectedTopic = (this.id).slice(0, -4);
    const getSelectedTopic = document.getElementById(selectedTopic);
    //toggle showing selected topic and hiding everything else
    getSelectedTopic.classList.toggle("hide-me");
    hideEverything();
    // continue to choices...
    getSelectedTopic.scrollIntoView();
    if (selectedTopic != "relationships") {
      relationships.classList.add("hide-me");
    }
    if (selectedTopic != "other") {
      other.classList.add("hide-me");
    }
    if (selectedTopic != "work") {
      work.classList.add("hide-me");
    }
  });
}

function hideEverything() {
  back.classList.add("hide-me");
  theirSignDiv.classList.add("hide-me");
  document.getElementById("relationships-answer").classList.add("hide-me");
  document.querySelector("#relationships-answer p").classList.add("hide-me");

};

// relationships is selected
var relationshipTypeBtns = document.querySelectorAll("#relationships button");
var theirSignDiv = document.getElementById("relationships-their-sign");
var relationshipCombo = document.getElementById("relationships-answer");
var relationshipAdvice = document.querySelector("#relationships-answer p");

// choose what kind of relationship fma, lover, friend, acquaintence
for (i = 0; i < relationshipTypeBtns.length; i++) {
  relationshipTypeBtns[i].addEventListener("click", function() {
    var thisID = this.id;
    if (thisID === "fam") {
      getTheirSign(thisID)
    } else if (thisID === "lover") {
      getTheirSign(thisID)
    } else if (thisID === "friend") {
      getTheirSign(thisID)
    } else if (thisID === "acqu") {
      theirSignDiv.classList.add("hide-me");
      relationshipCombo.classList.remove("hide-me");
      relationshipAdvice.classList.remove("hide-me");
      relationshipCombo.scrollIntoView();
      relationshipAdvice.innerHTML = "For Christs sake! Stop giving a shit about what these people think! You dont even know them. Save the cosmic energy for more important problems";
      showBackButton();
    };
  });
}

// choose theirSign - sign of their friend/fam
function getTheirSign(thisID) {
  const whatKind = thisID;
  const theirSignDiv = document.getElementById("relationships-their-sign");
  const theirSignBtns = document.querySelectorAll("#relationships-their-sign button");
  theirSignDiv.classList.toggle("hide-me");
  theirSignDiv.scrollIntoView();
  for (i = 0; i < theirSignBtns.length; i++) {
  theirSignBtns[i].addEventListener("click", function() {
  theirSignDiv.classList.add("hide-me");
  document.getElementById("relationships").classList.add("hide-me");
  var theirSign = this.classList.value;
  showAnswerDivRelationship()
  getRelationshipAdvice(whatKind, theirSign)
      });
    };
  };

  function showAnswerDivRelationship() {
    relationshipCombo.classList.remove("hide-me");
    relationshipAdvice.classList.remove("hide-me");
    relationshipCombo.scrollIntoView();
  };

  // shows the last div with answers:
  function getRelationshipAdvice(whatKind, theirSign) {
    console.log(yourSign, theirSign)
    const yourType = signType(yourSign);
    const theirType = signType(theirSign);
    const types = [yourType, theirType];
    console.log(types);
    var advice;
    if (whatKind === 'fam') {
      if (types.includes('fire')) {
        if (types.includes('earth')) {
          advice = "fire and earth fam. Fire heats up earth, exciting the earth person both sexually and in terms of productivity. With a fire person by their side, earth has the power to accomplish a lot. And the same goes for the fire person. Fire is a powerful doer but has the tendency to get ahead of itself. Earth slows fire down and helps them successfully execute. Like molten lava, they get each other moving, and if they can respect each other’s boundaries (and the fire person doesn’t steamroll the earth), then this combination has the potential to solidify and last a lifetime."
        } else if (types.includes('air')) {
          advice = "fire and air. fire signs, like Aries, and air signs, like Libra, tend to get along well as they both have a way of helping each other grow. When two earth signs come together, they form even more earth. Fire is ready to get things done, and air is full of ideas. Together, they are a powerful, unstoppable force of activity. Air’s ideas excite fire, and air loves watching fire manifest everything they’re imagining. But this combination is sensitive and can get out of control if not kept in check. Air has the ability to fuel fire, but it can also blow it out. The fire person can burn out by being overstimulated or by feeling trapped in conversation. Boundaries are important. The relationship is ruled by practical concerns "
        } else if (types.includes('water')) {
          advice = "fire and water fam. Fire and water tempt each other, but they will quickly feel like they’ve entered enemy territory. Fire gets water boiling, and water signs are intensely sexually attracted to fire. The passion here is incredible, but it’s also unsustainable. With that much heat, water eventually boils over. On the other side of the relationship, water cools fire and extinguishes its passion. The attraction here is magnetic, but often, the fire person will feel smothered and want distance while the water person is left wondering what happened to all of the early passion."
        } else {
          advice = "fire fire fam. Two Fire signs compatibility tends to share the same energy and enthusiasm but often finds it difficult to compromise when it comes to making major decisions. Two fire signs are ready to go out into the world and adventure! This relationship is passionate and exciting, but it can lack direction and purpose. You may find yourself doing a lot of fun things, but in the end, you probably won’t have accomplished a lot other than simply experiencing. And for you, fire sign, that may very well be enough! What is life but one big experience? You both understand this. You fuel each other, and if you can decide on a mutual course of action, you’ll be forging a path together in no time."
        }
      } else if (types.includes('water')) {
        if (types.includes('earth')) {
          advice = "water and earth fam. Earth and water give each other stability, and like mud, their bond is strong. Water needs earth in order to address practical concerns and get things done, and earth needs water in order to connect to their emotional depths. The earth person is very much the water person’s rock, which water needs given all of its intense feelings. You see the world from opposite ends, but if you can appreciate how this expands your awareness, then this combination has real staying power."
        } else if (types.includes('air')) {
          advice = "water and air fam. Air and water can float up like mist or grow volatile like a hurricane. Either way, this combination struggles to stay together. Water brings feeling to air. Air brings intellectualism to water. They love and enjoy each other. The beginning is often fun and passionate. But air struggles to understand water, and water grows impatient with air’s insensitivity. This combination creates a revolution in their lives, leaving them both deeply changed, but often, water has to cycle back down to earth while air moves along."
        } else {
          advice = "water water famTwo water signs have a deep appreciation for each other’s emotional sensitivity. They are both deeply compassionate and spiritually inclined, but in order for this relationship to work, there needs to be plenty of space! Space to feel, and space to be. Water plus water creates more water, so you better make sure you create a container big enough to hold all of that. Otherwise, the water can spill over and become destructive. For this to work, both people need to be firmly grounded in themselves and the earth."
        }
      } else if (types.includes('air')) {
        if (types.includes('earth')) {
          advice = "air and earth fam. Air stimulate earth’s creative thinking, and earth helps air get out of their head. They challenge each other in a productive way, but the relationship risks become exhausting. Earth doesn’t enjoy getting all caught up in thoughts and long talks. At the same time, air needs mental excitement and conversation and may find earth’s taciturn nature frustrating."
        } else {
          advice = "air air fam Two air signs are going to have a blast talking to each other. This relationship is all about long conversations and mental stimulation. Neither sign gets too bogged down in emotion, so together, they are great problem solvers. But the relationship can also tend toward complete fantasy. There’s a lot of thinking about things and not a lot of doing or feeling or being. This dynamic feels secure and comfortable, but together, it’s also easy to become complacent and unproductive. You may wake up one day and wonder what the heck you did with your life, but with you air partner by your side, you’ll easily be able to answer “I loved my best friend.”"
        }
      } else if (types.includes('earth')) {
        advice = "earth earhh fam Two Earth signs in the zodiac tend to appreciate each other’s need for stability and routine"
      }
    } else if (whatKind === 'lover') {
      if (types.includes('fire')) {
        if (types.includes('earth')) {
          advice = "fire and earth Earth feels Fire will scorch them.  Fire element is operating at a high level, they have a tendency to be hasty, impulsive, and self-centered, which can obviously cause problems in relationships. Fire heats up earth, exciting the earth person both sexually and in terms of productivity. With a fire person by their side, earth has the power to accomplish a lot. And the same goes for the fire person. Fire is a powerful doer but has the tendency to get ahead of itself. Earth slows fire down and helps them successfully execute. Like molten lava, they get each other moving, and if they can respect each other’s boundaries (and the fire person doesn’t steamroll the earth), then this combination has the potential to solidify and last a lifetime."
        } else if (types.includes('air')) {
          advice = "fire and air lover. Fire is ready to get things done, and air is full of ideas. Together, they are a powerful, unstoppable force of activity. Air’s ideas excite fire, and air loves watching fire manifest everything they’re imagining. But this combination is sensitive and can get out of control if not kept in check. Air has the ability to fuel fire, but it can also blow it out. The fire person can burn out by being overstimulated or by feeling trapped in conversation. Boundaries are important. Fire element is operating at a high level, they have a tendency to be hasty, impulsive, and self-centered, which can obviously cause problems in relationships"
        } else if (types.includes('water')) {
          advice = "Fire and water - Fire and water tempt each other, but they will quickly feel like they’ve entered enemy territory. Fire gets water boiling, and water signs are intensely sexually attracted to fire. The passion here is incredible, but it’s also unsustainable. With that much heat, water eventually boils over. On the other side of the relationship, water cools fire and extinguishes its passion. The attraction here is magnetic, but often, the fire person will feel smothered and want distance while the water person is left wondering what happened to all of the early passion. fire feels water-logged or hemmed in. Water feels Fire is too hot to handle.  Fire element is operating at a high level, they have a tendency to be hasty, impulsive, and self-centered, which can obviously cause problems in relationships"
        } else {
          advice = "fire fire lover.Two Fire signs compatibility tends to share the same energy and enthusiasm but often finds it difficult to compromise when it comes to making major decisions.  Two fire signs are ready to go out into the world and adventure! This relationship is passionate and exciting, but it can lack direction and purpose. You may find yourself doing a lot of fun things, but in the end, you probably won’t have accomplished a lot other than simply experiencing. And for you, fire sign, that may very well be enough! What is life but one big experience? You both understand this. You fuel each other, and if you can decide on a mutual course of action, you’ll be forging a path together in no time. Fire element is operating at a high level, they have a tendency to be hasty, impulsive, and self-centered, which can obviously cause problems in relationships"
        }
      } else if (types.includes('water')) {
        if (types.includes('earth')) {
          advice = "water and earth lover. Earth and water give each other stability, and like mud, their bond is strong. Water needs earth in order to address practical concerns and get things done, and earth needs water in order to connect to their emotional depths. The earth person is very much the water person’s rock, which water needs given all of its intense feelings. You see the world from opposite ends, but if you can appreciate how this expands your awareness, then this combination has real staying power."
        } else if (types.includes('air')) {
          advice = "water and air - Air drives Water crazy with their refusal to say how they feel and Air feels Water is over-sensitive. Air and water can float up like mist or grow volatile like a hurricane. Either way, this combination struggles to stay together. Water brings feeling to air. Air brings intellectualism to water. They love and enjoy each other. The beginning is often fun and passionate. But air struggles to understand water, and water grows impatient with air’s insensitivity. This combination creates a revolution in their lives, leaving them both deeply changed, but often, water has to cycle back down to earth while air moves along."
        } else {
          advice = "water water lover. The combination of two Water signs tends to be very sensitive to each other’s needs but finds it difficult when there is any sort of emotional upheaval.Two water signs have a deep appreciation for each other’s emotional sensitivity. They are both deeply compassionate and spiritually inclined, but in order for this relationship to work, there needs to be plenty of space! Space to feel, and space to be. Water plus water creates more water, so you better make sure you create a container big enough to hold all of that. Otherwise, the water can spill over and become destructive. For this to work, both people need to be firmly grounded in themselves and the earth."
        }
      } else if (types.includes('air')) {
        if (types.includes('earth')) {
          advice = "air and earth -  Air dislikes the rules that come with the Earth signs. Meanwhile, Earth is ruffled by Air.Air stimulate earth’s creative thinking, and earth helps air get out of their head. They challenge each other in a productive way, but the relationship risks become exhausting. Earth doesn’t enjoy getting all caught up in thoughts and long talks. At the same time, air needs mental excitement and conversation and may find earth’s taciturn nature frustrating."
        } else {
          advice = "air air lover Two air signs are going to have a blast talking to each other. This relationship is all about long conversations and mental stimulation. Neither sign gets too bogged down in emotion, so together, they are great problem solvers. But the relationship can also tend toward complete fantasy. There’s a lot of thinking about things and not a lot of doing or feeling or being. This dynamic feels secure and comfortable, but together, it’s also easy to become complacent and unproductive. You may wake up one day and wonder what the heck you did with your life, but with you air partner by your side, you’ll easily be able to answer “I loved my best friend.”"
        }
      } else if (types.includes('earth')) {
        advice = "earth earhh lover Two Earth signs in the zodiac tend to appreciate each other’s need for stability and routine. The relationship is ruled by practical concerns and sensual experiences.They understand each other, and the relationship feels incredibly secure and supportive, but it also may lack the excitement and growth that comes from having a partner whose worldview challenges your own"
      }

    } else if (whatKind === 'friend') {
      if (types.includes('fire')) {
        if (types.includes('earth')) {
          advice = "fire and earth friend. Fire heats up earth, exciting the earth person both sexually and in terms of productivity. With a fire person by their side, earth has the power to accomplish a lot. And the same goes for the fire person. Fire is a powerful doer but has the tendency to get ahead of itself. Earth slows fire down and helps them successfully execute. Like molten lava, they get each other moving, and if they can respect each other’s boundaries (and the fire person doesn’t steamroll the earth), then this combination has the potential to solidify and last a lifetime."
        } else if (types.includes('air')) {
          advice = "The Fire and Air signs. Fire is ready to get things done, and air is full of ideas. Together, they are a powerful, unstoppable force of activity. Air’s ideas excite fire, and air loves watching fire manifest everything they’re imagining. But this combination is sensitive and can get out of control if not kept in check. Air has the ability to fuel fire, but it can also blow it out. The fire person can burn out by being overstimulated or by feeling trapped in conversation. Boundaries are important. fire signs, like Aries, and air signs, like Libra, tend to get along well as they both have a way of helping each other grow. zodiac compatibility, as in nature, is considered a perfect combo. The energetic, enthusiastic, and competitive traits of Fire signs complement Air preferences’ of changeable, expedient, and versatile attributes.fire and air share an outgoing energy that keeps the relationship lively."
        } else if (types.includes('water')) {
          advice = "fire and water friend. Fire and water tempt each other, but they will quickly feel like they’ve entered enemy territory. Fire gets water boiling, and water signs are intensely sexually attracted to fire. The passion here is incredible, but it’s also unsustainable. With that much heat, water eventually boils over. On the other side of the relationship, water cools fire and extinguishes its passion. The attraction here is magnetic, but often, the fire person will feel smothered and want distance while the water person is left wondering what happened to all of the early passion."
        } else {
          advice = "fire fire friend. Two fire signs are ready to go out into the world and adventure! This relationship is passionate and exciting, but it can lack direction and purpose. You may find yourself doing a lot of fun things, but in the end, you probably won’t have accomplished a lot other than simply experiencing. And for you, fire sign, that may very well be enough! What is life but one big experience? You both understand this. You fuel each other, and if you can decide on a mutual course of action, you’ll be forging a path together in no time. Two Fire signs compatibility tends to share the same energy and enthusiasm but often finds it difficult to compromise when it comes to making major decisions."
        }
      } else if (types.includes('water')) {
        if (types.includes('earth')) {
          advice = "water and earth friend. Earth and water give each other stability, and like mud, their bond is strong. Water needs earth in order to address practical concerns and get things done, and earth needs water in order to connect to their emotional depths. The earth person is very much the water person’s rock, which water needs given all of its intense feelings. You see the world from opposite ends, but if you can appreciate how this expands your awareness, then this combination has real staying power. Earth and Water elements are, like the environment, considered compatible. The deliberate, stable, and dependable traits of Earth signs complement the sensitive, intuitive, emotional traits of Water signs."
        } else if (types.includes('air')) {
          advice = "water and air friend. Air and water can float up like mist or grow volatile like a hurricane. Either way, this combination struggles to stay together. Water brings feeling to air. Air brings intellectualism to water. They love and enjoy each other. The beginning is often fun and passionate. But air struggles to understand water, and water grows impatient with air’s insensitivity. This combination creates a revolution in their lives, leaving them both deeply changed, but often, water has to cycle back down to earth while air moves along."
        } else {
          advice = "water water friend.Fellow water element signs such as Cancer and Pisces won't need you to explain that to them and will understand how you feel.Two water signs have a deep appreciation for each other’s emotional sensitivity. They are both deeply compassionate and spiritually inclined, but in order for this relationship to work, there needs to be plenty of space! Space to feel, and space to be. Water plus water creates more water, so you better make sure you create a container big enough to hold all of that. Otherwise, the water can spill over and become destructive. For this to work, both people need to be firmly grounded in themselves and the earth. "
        }
      } else if (types.includes('air')) {
        if (types.includes('earth')) {
          advice = "air and earth friend. Air stimulate earth’s creative thinking, and earth helps air get out of their head. They challenge each other in a productive way, but the relationship risks become exhausting. Earth doesn’t enjoy getting all caught up in thoughts and long talks. At the same time, air needs mental excitement and conversation and may find earth’s taciturn nature frustrating."
        } else {
          advice = "air air friend. Two air signs are going to have a blast talking to each other. This relationship is all about long conversations and mental stimulation. Neither sign gets too bogged down in emotion, so together, they are great problem solvers. But the relationship can also tend toward complete fantasy. There’s a lot of thinking about things and not a lot of doing or feeling or being. This dynamic feels secure and comfortable, but together, it’s also easy to become complacent and unproductive. You may wake up one day and wonder what the heck you did with your life, but with you air partner by your side, you’ll easily be able to answer “I loved my best friend.” As an air element, communication is essential for you, so other air signs such as Libra and Aquarius are going to keep the conversations, thoughts, and ideas flowing in your friendships with them"
        }
      } else if (types.includes('earth')) {
        advice = "earth earhh friend .They understand each other, and the relationship feels incredibly secure and supportive, but it also may lack the excitement and growth that comes from having a partner whose worldview challenges your own. Two Earth signs in the zodiac tend to appreciate each other’s need for stability and routine. As an earth sign who enjoys stability and routine, Virgo typically goes well with their fellow earth sign"
      };
    }
    document.querySelector("#relationships-answer h4").innerHTML = "When your sign is " + yourSign + " and theirs is " + theirSign + "...";
    relationshipAdvice.innerHTML = advice;
    showBackButton();
  }

  function signType(zodiac) {
    if (zodiac === "Aries" || zodiac === "Leo" || zodiac === "Sagittarius") {
      return "fire"
    } else if (zodiac === "Cancer" || zodiac === "Pisces"  || zodiac === "Scorpio") {
      return "water"
    } else if (zodiac === "Gemini" || zodiac === "Libra" || zodiac === "Aquarius") {
      return "air"
    } else if (zodiac === "Taurus" || zodiac === "Virgo" || zodiac === "Capricorn") {
      return "earth"
    }
  }









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
    var thanksUniverse = document.getElementsByClassName("hide");
    for (let i = 0; i < thanksUniverse.length; i++) {
      thanksUniverse[i].classList.add("hide-me");
      document.getElementById("guidance").scrollIntoView();
    };
  };

  // other advice
  function catAdvice() {
    const catAdvice = yourSign === 'Capricorn' ? "Capricorns and cats actually have a lot in common. They wont open up to just anyone and they're smart enough to decide who deserves their loyalty. Get a cat, you guys are perfect for each other!" :
      yourSign === 'Aquarius' ? "For sure, you should get a cat! As an Aquarius , you can surely identify with and respect the little guys independance and free spirit. Together you will curiously and harmoniously make your way through this crazy world." :
      yourSign === 'Pisces' ? "With cats around, processing your highly emotional state has never been easier!" :
      yourSign === "Aries" ? "A cat will be better equipt to put up with your shit than anyone" :
      yourSign === "Taurus" ? "Yes, get one. A cat will be the perfect loyal companion for any Taurus" :
      yourSign === "Gemini" ? "Don't you want a pet that reflects your intensely curious yet crazy nature? Get a cat friend!" :
      yourSign === "Cancer" ? "Yes, a cat would be perfect for you to direct your tender, loving and caring nature towards." :
      yourSign === "Leo" ? "It doesn't take a genius to figure this one out... You're a damn lion and those little dudes are practically your minions. Don't just stop at one cat, build an army! " :
      yourSign === "Virgo" ? "As a Virgo, you are the perfect cat owner. Caring for a cat will be a piece of cake! You will go above and beyond when catering for all of the cats needs and he's gonna love you for it!" :
      yourSign === "Libra" ? "We all know how much Libra's hate being alone. Well, a cat will be a more loyal companion that any dumb human." :
      yourSign === "Scorpio" ? "Cats don't give a shit what anyone things. they dont owe you anything. I think Scorpios can appreciate this and get along aazingly with cats" :
      yourSign === "Sagittarius" ? "A cat will perfectly complement your energetic and free-spirited nature." :
      "Error - please refresh";
    document.querySelector("#other p").innerHTML = catAdvice;
  };

  function otherAdvice() {
    const otherAdvice = yourSign === 'Capricorn' ? "It's party time! The stakes might be high but its time to make those risky choices with no looking back!" :
      yourSign === 'Aquarius' ? "Find your courage and advocate for yourself. Whatever this might mean for you." :
      yourSign === 'Pisces' ? "Everything is meaningless. We are but insignificant specks in an vast, ever-expanding universe. What you do really doesn't matter" :
      yourSign === "Aries" ? "Just chill the floop out. It's about time you rested up and recovered. Exciting times are on their way but until then just take some naps, read a book, eat some cheese. " :
      yourSign === "Taurus" ? "Bloody go for it, whatever 'it' may be. The stars are giving you the green light to make some changes, take the plunge or risk it all" :
      yourSign === "Gemini" ? "Focus on getting over that baggage from the past and open yourself up to the oportunities coming your way" :
      yourSign === "Cancer" ? "Don't lose sight of what you're working towards. Now is not the time to take a break or pussy out. Be fierce and ambitious" :
      yourSign === "Leo" ? "You're on the right track. Don't over think things and just trust in yourself to make good decisions." :
      yourSign === "Virgo" ? "Let go of your ego. Make mistakes. Be silly. It can be freeing to not take yourself so seriously all the time" :
      yourSign === "Libra" ? "Watch out for signs that you're heading towards burnout. It's time to focus on yourself for a while" :
      yourSign === "Scorpio" ? "Embrace your inner child. Be creative and sporadic when aproaching all aspects of life!" :
      yourSign === "Sagittarius" ? "Things could be feeling a bit confused and disloged at the moment, glide though it and you'll find your feet effortlessly when the time is right." :
      "Error - please refresh";
    document.querySelector("#other p").innerHTML = otherAdvice;
  };
  // work advice
  function careerAdvice() {
    const careerAdvice = yourSign === 'Capricorn' ? "If you're wondering if now is the time to take risks and make big changes, it certainly is. Particulary career-wise. You will be better off for it! " :
      yourSign === 'Aquarius' ? "Figure out what you want, let it be known and go for it! Now is not the time to stay humble or underestimated. Make sure you are heard and push to have your vision shared byt those who matter in your workplace!" :
      yourSign === 'Pisces' ? "Is it possible that you've been focusing a bit too much on you career and neglecting your self? Its time to focus first on your physical and mental health, so you can be in prime condition to kick arse career-wise when the time comes." :
      yourSign === "Aries" ? "Now is the time to ease into routine and prove yourself consistant and capable. Theres no need to push yourself or exceed expectations, just coast for a while and save that bad ass energy for later." :
      yourSign === "Taurus" ? "You can probably feel that something is just over the horizon. Prepare yourself, whether this means making yourself more employable, upskilling or opening your schedule to accomodate future oportunities." :
      yourSign === "Gemini" ? "If you've been working hard lately, nows the time to reap those rewards. Get the recognition you deserve, ask for that promotion, advocate for yourself." :
      yourSign === "Cancer" ? "It looks like you need to figure some shit out. Are you on the right path? What are your next steps and whats your end goal? Maybe you need to sit under a tree and have a good think." :
      yourSign === "Leo" ? "You know what to do. If youre fed up with the status quo, change it. If you hate your job, quit. Sure, you're resiliant but its time to stop putting up with the BS." :
      yourSign === "Virgo" ? "Its time to make some serious assessments. Are you meeting your own goals and expectations? Is your workplace supporting you? Is someone else reaping the benefits of your hard work?" :
      yourSign === "Libra" ? "Try to find some higher meaning in your work. Or if your job is truely meaningless, use it as a catalyst to better yourself - learn some new skills, become more efficiant, you can definitely get something out of this!" :
      yourSign === "Scorpio" ? "You're probably about to encounter new oportunities for career growth through unexpected. These might be anything - relationships, extracurricular activities or hobbies so leave yourself open to these experinces." :
      yourSign === "Sagittarius" ? "Lately, there has been a lot of change in the world, your surroundings and also within you. Things may not be sitting the same way. Priorities might have changed. How about reassessing your goals, workplace or career path and making some changes that will benefit you." :
      "Error - please refresh";
    document.querySelector("#work p").innerHTML = careerAdvice
  };

  function bossAdvice() {
    const bossAdvice = yourSign === 'Capricorn' ? "Try to focus on the positives. Sure, this person is being a dick, but what have they got to offer you? Are they serving you in some way? If so, lean into that. But if its a hard no... well its time to stir some shit." :
      yourSign === 'Aquarius' ? "Confrontation. Do it! Have the courage to ask for what you want. Ensure that your needs are met and don't let your shitty boss or colleages get in your way." :
      yourSign === 'Pisces' ? "It might be that your boss/colleage is a total douche, but is he really worth your time and effort right now? It's probably best to fly under the radar for a while, recharge your shields and wait until the oportune moment to make some changes." :
      yourSign === "Aries" ? "Use lateral thinking to approach this dilemma. This person may be acting like a douche bag but its rarely as straight forward as you think." :
      yourSign === "Taurus" ? "Maybe this is an oportunity to work on being the bigger person? Work through this issue with empathy and an open mind. Figure out all sides of the story before pushing proceeding. Confrontation could have consequences, so its got to be worth it." :
      yourSign === "Gemini" ? "Pick your battles. If it really matters, then fight for yourself. Don't let these assholes get away with rubbing you the wrong way." :
      yourSign === "Cancer" ? "In this situation, you'll probably get the best outcome by talking things through with your annoying boss or colleague. Use logic, empathy and diplocay and you will most likely be able to come to an agreement that suits everyone." :
      yourSign === "Leo" ? "Any issue you have with someone can be solved. Tune in to your inner preditor, use your logic and calcuated timing to launch an epic surprise attach on any idiot who has undermined you." :
      yourSign === "Virgo" ? "It's probably time to let go of diplomacy and strongly advocate for yourself. You usually know best anyway so stop putting up with other peoples shit." :
      yourSign === "Libra" ? "If you're not content with a workplace relationship, now is the time to work on it. But Be calculated and attentive. You're smart and diplomatic enough to deal with this in a way that will ensure the best possible outcome for you." :
      yourSign === "Scorpio" ? "It's time to stop putting up with workplace agressions or passive agressive behaviour. Air out your worplace issues and confront these poeple." :
      yourSign === "Sagittarius" ? "Stand up for yourself, especially if someone is doubting you, making you feel unwelcome or underappreciated. You are your #1 advocate!" :
      "Error - please refresh";
    document.querySelector("#work p").innerHTML = bossAdvice
  };
