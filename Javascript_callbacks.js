
function sum1(a,b,c)
{
    setTimeout(() => {
        let d = a +b ;
        c(d);
    }, 5000);

}

function display(p){
    console.log(p)
}


sum1(10,20,display);
