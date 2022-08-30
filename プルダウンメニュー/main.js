'use strict'
const lang = document.querySelector('html').lang;

if(lang === 'ja') {
  document.querySelector('option').selected = true;
} else if(lang === 'en') {
  document.querySelector('option').selected = true;
} else if(lang === 'zh') {
  document.querySelector('option').selected = true;
}

document.getElementById('form').select.onchange = function() {
  location.href = document.getElementById('form').select.value;
}