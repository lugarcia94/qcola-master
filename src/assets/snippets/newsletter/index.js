import './style.styl';

$(".newsletter__form").submit(function(e){
		
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action");
    console.log(formData, url);
    var link = "form/insert";
    $.ajax({
        type: 'POST',
        url: url,
        data: formData ,
        processData: false,
        contentType: false
    }).done(function (data) {
        var htmlReturn = "<p>Cadastro Efetuado com Sucesso!</p>";
        $(".return__json").append(htmlReturn);
    });
    $(this)[0].reset();
    $(".conteudo-light-textos").addClass("hide");
    
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') { c = c.substring(1); }
        if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
    }

    return "";
} 

if ($('.lightbox-out').length > 0) {

    var lightboxtrue = Cookies.get('lightbox-out');
    Cookies.set('lightbox-out', 'false');

    $('.lightbox__close').click(function () {
            $('.lightbox-out').addClass("hidden");
            $('body').removeClass('news-on');
            Cookies.set('lightbox-out', 'true', { expires: 30 });
    });

    if (!lightboxtrue) {
        $('.lightbox-out').removeClass("hidden");
    }
}