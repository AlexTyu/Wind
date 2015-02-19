
var $log = document.querySelector("#log");
var theater = new TheaterJS();
theater
  .describe("tagline", { speed: .8, accuracy: .6, invincibility: 4 }, "#tagline")
theater
  .on("*", function (eventName, originalEvent, sceneName, arg) {
    var args  = Array.prototype.splice.apply(arguments, [3]),
        log   = '{\n      name: "' + sceneName + '"';

    if (args.length > 0) log += ",\n      args: " + JSON.stringify(args).split(",").join(", ");
    log += "\n    }";

    $log.innerHTML = log;
  })
  .on("say:start, erase:start", function (eventName) {
 
    var self    = this,
        
        current = self.current.voice;

    self.utils.addClass(current, "saying");
  })
  .on("say:end, erase:end", function (eventName) {
    var self    = this,
        current = self.current.voice;

    self.utils.removeClass(current, "saying");
  });

theater

  .write("tagline:Hello!")
  .write(400)
  .write("tagline:Hello! We are the wind") 
  .write("!!! ", 400, "No! ", 400)
  .write("tagline:Search your feelings.", 1600)
  .write("tagline:Luke.", 800)
  .write("tagline:You can destroy the Emperor.", 1600)
  .write("tagline:He has foreseen this. ", 800)
  .write("tagline:It is your destiny.", 1600)
  .write("tagline:Join me.", 800)
  .write("tagline:Together we can rule the galaxy.", 800)
  .write("tagline:As father and son.", 1600)
  .write("tagline:Come with me. ", 800)
  .write("tagline:It is the only way.", 2000)
  .write(function () { theater.play(true); });


