// script.js
document.querySelectorAll('.skill').forEach(skill => {
  skill.addEventListener('mouseover', () => {
    skill.style.backgroundColor = '#5bc0de';
  });

  skill.addEventListener('mouseout', () => {
    skill.style.backgroundColor = '#0275d8';
  });
});
