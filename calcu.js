function calc(){
    document.getElementById('input').value=eval(document.getElementById('input').value);
}
    let Result =document.getElementById('input'); 
function deleteResult()
{
    Result.value=Result.value.slice(0,-1);

}