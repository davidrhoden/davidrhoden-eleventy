if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

$(document).on('click','.next', function(){
	var painting = $(this).val();
	console.log(painting);
	$.get('/paintings/'+ painting +'/index.html', function( data ) {
	    $('#results').html(data); 
	});
});