// const readMoreButton= document.querySelector('.read');
// const more= document.querySelector('.more');

// readMoreButton.addEventListener('click',(e)=>(
// 	more.classList.toggle('.show-more')
// 	));
function myFunction() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "See more";
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "See less";
	  moreText.style.display = "inline";
	}
  }
  