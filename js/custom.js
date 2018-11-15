var customFrom = document.getElementsByClassName('customForm')[0],
	customWidth = customFrom.offsetWidth;

function customResize() {
	if (customWidth >= 1599) {
  		customFrom.classList.remove("customForm__md", "customForm__sm");
		customFrom.classList.add("customForm__lg");
	} else if (customWidth >= 640 && customWidth <= 1023) {
		customFrom.classList.remove("customForm__lg", "customForm__sm");
		customFrom.classList.add("customForm__md");
	} else if (customWidth <= 639) {
		customFrom.classList.remove("customForm__lg", "customForm__md");
		customFrom.classList.add("customForm__sm");
	} else {
		customFrom.classList.remove("customForm__lg", "customForm__md", "customForm__sm");
	}
}
customResize()

customFormResize.addEventListener('resize', function(event){
	customWidth = customFrom.offsetWidth;
  	customResize()
});