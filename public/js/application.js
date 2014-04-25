$(document).ready(function() {
  $('form').on("submit", function(e) {
    e.preventDefault();

    var posting = $.post('/', $(this).serialize());

    posting.done(function(data) {
      var score = parseInt(data)

      if (score >= 5 && score <= 15) {
        var image = "fiddlercrab.jpg";
        var text = "You are found in mangroves, salt marshes, muddy beaches in West Africa, the Western Atlantic, the Eastern Pacific and the Indo-Pacific. You communicate mostly by a sequence of waves an gestures. You usually don't live more than two years. Male fiddler crabs use the major claw to perform a waving display as a form of female courtship. Females choose their mate based on claw size and also quality of the waving display."
        var h2 = "You're a Fiddler Crab!"
      }
      else if (score >= 16 && score <= 25 ) {
        var image = "spring.png";
        var text = "You are a small chorus frog. If you're from Martha's Vineyard people call you 'pinkletinks', however if you're from New Brunswick, Canada people call you 'tinkletoes'. Either way, you love nicknames. You prefer forests and/or regenerating woodlands for a nice living situation. You're also a nocturnal carnivore, and unfortunately, chipotle is usually closed at that time. Sorry."
        var h2 = "You're a Spring Peeper!"
      }
      else if (score > 25) {
        var image = "cicada.png";
        var text = "You are loud, obnoxious and commonly eaten by birds. Sometimes squirrels."
        var h2 = "You're a Cicada!"
      }

     $("#answer img").attr("src", image)
     $("#answer-text h2").empty().append(h2)
     $("#answer-text p").empty().append(text)
    });  
  });
});
