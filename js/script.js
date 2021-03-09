console.log("Hello world")

function menuToggle() {
  var myNavToggle = document.getElementById('myNavtoggle');
  if (myNavToggle.className === 'navtoggle') {
    myNavToggle.className += ' responsive';
  } else {
    myNavToggle.className = 'navtoggle';
  }

  var menuIcon = document.getElementById('menu-icon');
  if (menuIcon.className === 'fas fa-bars') {
    menuIcon.className = 'fas fa-times';
    $('.navtoggle li .icon').css("font-size" , "50px");
  } else {
    menuIcon.className = 'fas fa-bars';
    $('.navtoggle li .icon').css("font-size" , "40px");
  }
    
  var overlay = document.getElementById('overlay');
  if (overlay.style.display === 'none' || overlay.style.display === '') {
    overlay.style.display = 'block';
  } else {
	overlay.style.display = 'none';
  }
  
  var header = document.getElementById('header');
  if (header.style.backgroundColor === 'transparent' || header.style.backgroundColor === '') {
    header.style.backgroundColor = '#DDF7FB';
  } else {
	header.style.backgroundColor = 'transparent';
  }
	
  var projectHeader = document.getElementById('project-header');
  if (projectHeader.style.backgroundColor === 'transparent' || projectHeader.style.backgroundColor === '') {
    projectHeader.style.backgroundColor = '#FFFFFF';
  } else {
	projectHeader.style.backgroundColor = 'transparent';
  }
}
