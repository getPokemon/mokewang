  const background = document.querySelector(".bannerback");
  document.addEventListener('scroll', () => {
	  const scrollY = window.scrollY
	  if(scrollY !== 0){
		  background.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`
	  }else{
		  background.style.backgroundPosition = ''
	  }
  })