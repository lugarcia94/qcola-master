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