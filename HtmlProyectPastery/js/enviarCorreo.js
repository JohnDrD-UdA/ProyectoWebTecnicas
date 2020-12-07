function enviarCorreos(){
    var name=document.getElementsByName("Nombre")[0].value;
    var id=document.getElementsByName("Id")[0].value;
    var correo=document.getElementsByName("email")[0].value;
    var mensajee=document.getElementsByName("mensaje")[0].value;
    var td=document.getElementsByName("Tipo Documento")[0].value;
    var mensaje="";
    if (name=="" || id=="" || correo=="" || mensajee==""|| td==11)
    {mensaje="Por favor rellene los datos"}
    else{mensaje="Se ha enviado el mensaje exitosamente"}
    alert(mensaje)
//simula la comprobacion para enviar un correo.
}