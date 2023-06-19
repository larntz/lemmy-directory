function copyBang(t, e) {
  navigator.clipboard.writeText(t, e).then(
    () => {
      /* clipboard successfully set */
      clipper = document.getElementById(e);
      clipper.style.backgroundColor = "yellow";
      setTransparent(100, e)


      console.log("copied succesfully")
      
      /*alert("Copied the text: " + bangText);*/
    },
    () => {
      /* clipboard write failed */
      alert("Copy failed");
    }
  );
} 

function setTransparent(ms, e) {
  setTimeout(
    function() {
      clipper = document.getElementById(e);
      clipper.style.backgroundColor = "transparent";
    }, ms)
}

