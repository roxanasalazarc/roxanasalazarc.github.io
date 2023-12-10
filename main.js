let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #ef233c;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #ef233c;">Estoy aprendiedo programación y tecnología.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
 