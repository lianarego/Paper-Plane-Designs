console.log('Hello world')

// Toggle hamburger menu
function menuToggle () {
  var myNavToggle = document.getElementById('myNavtoggle')
  if (myNavToggle.className === 'navtoggle') {
    myNavToggle.className += ' responsive'
  } else {
    myNavToggle.className = 'navtoggle'
  }

  var indexOverlay = document.getElementById('index-overlay')
  if (indexOverlay !== null) {
    if (indexOverlay.style.display === 'none' || indexOverlay.style.display === '') {
      indexOverlay.style.display = 'block'
    } else {
      indexOverlay.style.display = 'none'
    }
  }

  var projectOverlay = document.getElementById('project-overlay')
  if (projectOverlay !== null) {
    if (projectOverlay.style.display === 'none' || projectOverlay.style.display === '') {
      projectOverlay.style.display = 'block'
    } else {
      projectOverlay.style.display = 'none'
    }
  }

  var indexHeader = document.getElementById('index-header')
  if (indexHeader !== null) {
    if (indexHeader.style.backgroundColor === 'transparent' || indexHeader.style.backgroundColor === '') {
      indexHeader.style.backgroundColor = '#e0f3ff'
    } else {
      indexHeader.style.backgroundColor = '' // Transparent by default, but allow override by CSS media query
    }
  }

  var projectHeader = document.getElementById('project-header')
  if (projectHeader !== null) {
    if (projectHeader.style.backgroundColor === 'transparent' || projectHeader.style.backgroundColor === '') {
      projectHeader.style.backgroundColor = 'white'
    } else {
      projectHeader.style.backgroundColor = '' // Transparent by default, but allow override by CSS media query
    }
  }
}

// Close hamburger menu
function menuClose () {
  var myNavToggle = document.getElementById('myNavtoggle')
  myNavToggle.className = 'navtoggle'

  /*
  var menuIcon = document.getElementById('menu-icon');
  menuIcon.className = 'fas fa-bars';
  $('.navtoggle li .icon').css("font-size" , "40px");
  */
  if (!menuOpen) {
    menuBtn.classList.add('open')
    menuOpen = true
  } else {
    menuBtn.classList.remove('open')
    menuOpen = false
  }

  var indexOverlay = document.getElementById('index-overlay')
  if (indexOverlay !== null) {
    indexOverlay.style.display = 'none'
  }

  var projectOverlay = document.getElementById('project-overlay')
  if (projectOverlay !== null) {
    projectOverlay.style.display = 'none'
  }

  var indexHeader = document.getElementById('index-header')
  if (indexHeader !== null) {
    indexHeader.style.backgroundColor = '' // Transparent by default, but allow override by CSS media query
  }

  var projectHeader = document.getElementById('project-header')
  if (projectHeader !== null) {
    projectHeader.style.backgroundColor = '' // Transparent by default, but allow override by CSS media query
  }
}

// Scroll smoothly to anchor hyperlinks
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault()

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500)
})

// Unroll "paper plane" covering project image, when first hovered
$(document).ready(function () {

})

// Change header background color depending on scroll position
$(document).on('scroll', function () {
  var indexHeader = document.getElementById('index-header')
  if ((document.documentElement.scrollTop || document.body.scrollTop) > 50) { // If scroll position exceeds 50px
    if (window.innerWidth >= 640) { // If hamburger menu isn't showing
      if (indexHeader !== null) {
        indexHeader.style.backgroundColor = '#e0f3ff' // Set header background to solid light blue
      }
    }
  } else {
    if (window.innerWidth >= 640) { // If hamburger menu isn't showing
      if (indexHeader !== null) {
        indexHeader.style.backgroundColor = '' // Set header background to transparent
      }
    }
  }
})

// Add class when parent (.project) is in viewport
var isInViewport = function (elem) {
  var distance = elem.getBoundingClientRect()
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

var findMe = document.querySelectorAll('.parent')

window.addEventListener('scroll', function (event) {
// add event on scroll
  findMe.forEach(element => {
    // for each .thisisatest
    if (isInViewport(element)) {
      // if in Viewport
      element.classList.add('unroll')
    }
  })
}, false)

// Change opacity of written text
function changeOpacity (elem) {
  elem.style.opacity = 1
}

// Change written text to a list of <span> elements, each with one character
var writtenText = document.getElementById('written-text')
if (writtenText !== null) {
  var writtenTextString = writtenText.innerText
  writtenText.innerHTML = '' // Empty string
  for (var i = 0; i < writtenTextString.length; i++) {
    // Add a <span> with one character, but make it transparent
    writtenText.innerHTML += '<span style="opacity: 0;">' + writtenTextString[i] + '</span>'
  }

  var interval = 25 // Pause between characters (in milliseconds). BEST SPEED IS 26
  for (i = 0; i < writtenText.childElementCount; i++) {
    setTimeout(changeOpacity, i * interval + 500, writtenText.children[i])
  }
}

// Animation for hamburger menu
const menuBtn = document.querySelector('.menu-btn')
let menuOpen = false
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open')
    menuOpen = true
  } else {
    menuBtn.classList.remove('open')
    menuOpen = false
  }
})
