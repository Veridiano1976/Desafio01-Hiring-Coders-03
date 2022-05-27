
function xpto ( ) {
let n = 0;
return {next:
function ( )
{
if (n < 10) {
n += 2;
return {value:n/2, done:false}}
else {
return {value: -1, done: true}}
}
}
}
let print = xpto()
let prossegue = true
while (prossegue) {
    let valor = print.next()
    if(valor.done){
        prossegue = false
        break
    }
    console.log(valor.value)
}