const card = $(".card");
const dabberColor = $("#dabberColor");

const mansplainerArray = [
  "I haven't insulted anyone",
  "repeats self",
  "endless stream of useless facts",
  "Ignores all of victim(s)'s points",
  "tone policing",
  "gaslighting",
  "You're being ridiculous",
  "Your personal experience isn't relevant",
  "logic driven",
  "Assumes victim is uneducated",
  "Now I'm the bad guy",
  "Didn't mean it that way",
  "well actually",
  "You're just wrong",
  "SJW",
  "You hate anyone who disagrees with you!",
  "Calm down",
  "You don't get it",
  "I was just making a point!",
  "Not all men",
  "What you're trying to say is",
  "I'm neutral",
  "Devil's Advocate",
  "You're being mean",
  "Ok, so I guess wild exaggeration is what you want?"
]

var used = [];

function addCell() {
  var randomNumber = Math.floor(Math.random()*mansplainerArray.length);
  var found = used.find( function(x) {
    return x == randomNumber;
  });
  if (found) {
    addCell();
  } else {
    used.push(randomNumber);
  var cell = "<button class='cell'>" + mansplainerArray[randomNumber] + "</button>";
  card.append(cell);
  }
}

function fillCard() {
  
  for (var i = 0; i < 25; i++) {
    if (i == 12) {
      card.append("<button class='cell'>FREE SPACE</button>")
    } else {
      addCell();
    }
  }
}

fillCard();

$(".cell").click(function() {
  $(this).toggleClass("checked");
});

$("#clear").click(function() {
  $(".cell").removeClass("checked");
  used = [];
})

$("#dabberColor").change(function(e) {
  document.documentElement.style.setProperty('--dabber-color', this.value);
})