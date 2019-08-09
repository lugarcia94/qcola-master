import './style.styl';

$(".newsletter__form").submit(function (e) {

    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action");
    console.log(formData, url);
    var link = "form/insert";
    $.ajax({
        type: 'POST',
        url: url,
        data: formData,
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
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
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

$(".lightbox__form").submit(function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action");
    console.log(formData, url);
    var link = "form/insert";
    $.ajax({
        type: 'POST',
        url: url,
        data: formData,
        processData: false,
        contentType: false
    }).done(function (data) {
        var htmlReturn = "Cadastro Efetuado com Sucesso!";
        var htmlReturn2 = "Utilize o cupom abaixo na finaliza&#231&#227o de seu pedido";
        var htmlReturn3 = "<p>cupom: QCOLA5</p>";

        $('.lightbox__body--header p').html(htmlReturn2);
        $(".lightbox__body--title").html(htmlReturn);
        $('.lightbox__body--footer').html(htmlReturn3);
        $('.lightbox__body--title').addClass('on__cupom');
        $('.advertence').show();
    });
    $(this)[0].reset();
    $(".conteudo-light-textos").addClass("hide");

});

var closeLightbox = function () {
    jQuery(".lightbox__exit").length > 0 && jQuery(".lightbox__close").click(function () {
        jQuery(".lightbox__exit").addClass("hidden");
        var flag = 1;
    })
};

jQuery(closeLightbox);
//lightbox exit
jQuery(function () {
    var flag = 0;
    var a = function () {

        var e = localStorage.getItem("M-IDE");
        "md18" == e ? console.log(e) : (console.log("Não tem cookie"), jQuery(".lightbox__exit").removeClass("hidden"), flag = 1, jQuery("html").addClass("show-idm"));
        var t = jQuery(".btn-close");
        t.attr("href", window.location.href), t.click(function () {
            localStorage.setItem("M-IDE", "md18")
        })
    };
    !function (e, t, a) {
        e.addEventListener ? e.addEventListener(t, a, !1) : e.attachEvent && e.attachEvent("on" + t, a)
    }(document, "mouseout", function (e) {
        var t = (e = e || window.event).relatedTarget || e.toElement;
        (!t || "HTML" == t.nodeName) && e.clientY <= 100 && flag == 0 && jQuery(document).ready(a)
    }), jQuery(".page-loader").addClass("off");
});

//end lightbox exit
