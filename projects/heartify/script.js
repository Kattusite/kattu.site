let heart = "%E2%9D%A4";

function submit() {
  let textarea = document.getElementById('fetcharea');
  let text = textarea.value;

  // increment mutation id
  let mut_re = /client_mutation_id%22%3A%22(\d+)%/
  let seq = text.match(mut_re);

  if (!seq || seq.length < 2) return;

  let seqnum = parseInt(seq[1]) + 1
  text = text.replace(mut_re, "client_mutation_id%22%3A%22" + seqnum + "%");

  // change emoji
  text = text.replace(
    /reaction%22%3A%22(%[0-9A-F][0-9A-F])+%22%7D%7D/,
    "reaction%22%3A%22" + heart + "%22%7D%7D"
  )

  textarea.value = text;

  // copy to clipboard
  textarea.select();
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}
