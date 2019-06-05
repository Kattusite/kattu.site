const interval  = 750;
const maxSparks = 80;
const avgDur    = 4;
const varDur    = avgDur * 0.25;
const height    = 80;
const width     = 4;


function init() {
  let nt = setInterval(function() { $("body").append(spark()); }, interval);
  setTimeout(function() { clearInterval(nt); }, maxSparks * interval);
}

function spark() {
  let spark = div("outer-spark")
    .css("width",  `${width}px`)
    .css("height", `${height}px`)
    .append(div("inner-spark")
      .append(div("trail"))
      .append(div("ember"))
  );

  // Randomly position
  let x = 100 * Math.random();
  spark.css("left", `${x}%`);

  // Randomly time
  let dur = avgDur + varDur * Math.random() - (varDur/2);
  spark.css("animation-duration", `${dur}s`);

  return spark;
}

function div(cls) {
  let div = document.createElement("div");
  $(div).addClass(cls);
  return $(div);
}
