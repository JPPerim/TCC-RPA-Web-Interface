function consomeAPI(){
    var xhttp = new XMLHttpRequest();
    const obj =  
    {
        "id_bot": document.getElementById("fbot_id").value,
        "nome": document.getElementById("fnome").value,
        "id_num": document.getElementById("fid_num").value,
        "data_nasc": document.getElementById("fdata_nasc").value,
        "id2_num_char": document.getElementById("fid2_num_char").value,
        "genero": document.querySelector('input[name="genero"]:checked').value
    }    
    const json = JSON.stringify(getJson(obj));
    console.log(json)
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 201) {
            alert('Salvo com sucesso!')
            location.href = "index.html";
        }
   };
   xhttp.open("POST", "http://127.0.0.1:5000/post", true);
   xhttp.setRequestHeader("Content-type", "application/json");
   xhttp.send(json);   
}
function goHome(){

}
function getJson(){
    var id_bot = (document.getElementById("fbot_id").value);
    var nome = (document.getElementById("fnome").value);
    var id_num = (document.getElementById("fid_num").value);
    var data_nasc = (document.getElementById("fdata_nasc").value);
    var id2_num_char = (document.getElementById("fid2_num_char").value);
    var genero = (document.querySelector('input[name="genero"]:checked').value);
    var response = {
            "id_bot": id_bot,
            "nome": nome,
            "id_num":id_num,
            "data_nasc":data_nasc,
            "id2_num_char":id2_num_char,
            "genero":genero
            }
    return response
}