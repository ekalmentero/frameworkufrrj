function login(){
    $.post("http://10.25.0.197:8080/login",{'usuario':$("#matricula").val(),'senha':$("#senha").val()},function(r){
      alert(r);
    });
}
