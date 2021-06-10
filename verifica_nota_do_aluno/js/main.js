$(function(){

    //verifica se houve o scroll

    window.onscroll=function(){

        if(window.pageYOffset > 140 ){ //verificamos se rolamos a pagina até "n°.pxs",neste caso, o n° é 140px

               // alert("Desci na pagina....");   
                $("#header").addClass("menu-fixed");
        }else{

            $("#header").removeClass("menu-fixed");
        }
    }

    window.onresize = function(){
        var largura = window.innerWidth;

        //alert("A largura da pagina eh:"+largura);

        if(largura <=767){
            $("#servico-conteudo ").css("flex-direction", "row");
        }
     };
});