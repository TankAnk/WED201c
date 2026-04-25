/*Name this external file gallery.js*/
const target = document.querySelector("#image_content");
const default_msg = target.innerText;

function initialize()
{
	const images = document.querySelectorAll("#grid_img img");
	for (let i = 0; i < images.length; i++)
	{
		images[i].tabIndex = 0;		
		images[i].addEventListener("focus", function() {upDate(this)});
		images[i].addEventListener("blur", function() {unDo()});
	}	
}

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
	target.style.backgroundImage = "url(" + previewPic.src + ")";
	target.className = "img_hovered";
	target.innerText = previewPic.alt;
}

	function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
	target.style.backgroundImage = "url('')";
	target.innerText = default_msg;
}