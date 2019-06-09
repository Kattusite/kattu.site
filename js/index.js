const interval  = 750;
const maxSparks = 80;
const avgDur    = 4;
const varDur    = avgDur * 0.25;
const height    = 110;
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
  let rnd = Math.random();
  let rndTime = varDur * rnd - (varDur/2);
  let dur = avgDur + rndTime;
  spark.css("animation-duration", `${dur}s`);

  // experimental: make slower sparks appear further away
  let scale;
  if      (rnd < 0.33)    scale = 1.2;
  else if (rnd < 0.66)    scale = 1.0;
  else /* (rnd < 1.00) */ scale = 0.8;
  let w = width * scale;
  let h = height * scale;
  spark.css("width", `${w}px`);
  spark.css("height", `${h}px`);

  return spark;
}

function div(cls) {
  let div = document.createElement("div");
  $(div).addClass(cls);
  return $(div);
}
