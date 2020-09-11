function Worker(){
    this.name=name;
    this.phone=phone;
    this.service=service;
}
var wk1=new Worker();
var wk2=new Worker();
var wk3=new Worker();

$(document).ready(function(){
    $("#search").click(function(){
        $("#jobs").css("display","block");
        var x=$("#searchText").val();
        if(x=="jua-kali"){
        wk1.name="John Paul"; 
        wk2.name="Peter Mureithi";
        wk3.name="susan Kimani";
        wk1.phone="0741231213";
        wk2.phone="0110252525"; 
        wk3.phone="01102897895";
        wk1.service="Electrician";
        wk2.service="Welder";
        wk3.service="Beautician";

        $("#name").text(wk1.name);
        $("#phone").text(wk1.phone);
        $("#service").text(wk1.service);
        $("#name2").text(wk2.name);
        $("#phone2").text(wk2.phone);
        $("#service2").text(wk2.service);
        $("#name3").text(wk3.name);
        $("#phone3").text(wk3.phone);
        $("#service3").text(wk3.service);

        }

        if(x=="teaching"){
            wk1.name="Chris Paul"; 
            wk2.name="Antony Mureithi";
            wk3.name="Dennis Wangu";
            wk1.phone="0741231213";
            wk2.phone="0110252525"; 
            wk3.phone="01102897895";
            wk1.service="English";
            wk2.service="Biology";
            wk3.service="Science";
    
            $("#name").text(wk1.name);
            $("#phone").text(wk1.phone);
            $("#service").text(wk1.service);
            $("#name2").text(wk2.name);
            $("#phone2").text(wk2.phone);
            $("#service2").text(wk2.service);
            $("#name3").text(wk3.name);
            $("#phone3").text(wk3.phone);
            $("#service3").text(wk3.service);
    
            }
            if(x=="office"){
                wk1.name="Maurice Paul"; 
                wk2.name="Wallace Mureithi";
                wk3.name="Beatrice Kimani";
                wk1.phone="0741231213";
                wk2.phone="0110252525"; 
                wk3.phone="01102897895";
                wk1.service="Accountant";
                wk2.service="Clerk";
                wk3.service="Receptionist";
        
                $("#name").text(wk1.name);
                $("#phone").text(wk1.phone);
                $("#service").text(wk1.service);
                $("#name2").text(wk2.name);
                $("#phone2").text(wk2.phone);
                $("#service2").text(wk2.service);
                $("#name3").text(wk3.name);
                $("#phone3").text(wk3.phone);
                $("#service3").text(wk3.service);
        
                }
    })
})
