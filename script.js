

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const toggleSwitch = document.getElementById('toggle');
toggleSwitch.checked = prefersDarkMode;

toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) { //needed some cool looking code, didnt find any.
    document.body.classList.add('dark-mode'); //you read this?
  } else {  //its the actual JS code for this portfolio
    document.body.classList.remove('dark-mode'); 
  }
});
