$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const NomeTarefa = $('input').val();
        const novaTarefa = $(`<li>${NomeTarefa}</li>`);

        $(novaTarefa).appendTo('ul');
        $('input').val('');
    })

    $('ul').on('click', 'li', function(e){
        e.preventDefault();
        $(this).toggleClass('completo')
    })
})