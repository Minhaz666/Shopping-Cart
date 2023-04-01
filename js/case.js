function updatecasenum(isincrease)
{
    const casefield=document.getElementById('casenumberfield');
    const casefieldstring = casefield.value ; 
    const previouscasefield=parseInt(casefieldstring);
    let newcasenum;
    if(isincrease===true)
    {
         newcasenum=previouscasefield+1;
    }
    else{  newcasenum=previouscasefield-1;
    }
    
    casefield.value=newcasenum;
    return newcasenum;
}

function updatecasetotalprice (newcasenum)
{
    const casetotalprice=newcasenum*59;
    const casetotalelement=document.getElementById('case-total-price');
    casetotalelement.innerText=casetotalprice;
}


document.getElementById('btn-case-plus').addEventListener('click',function(){
   
    const totalprice = updatecasenum(true);
    updatecasetotalprice(totalprice);
    totaprice();
    
})

// I tried by my own concept bt didn,t work 

// document.getElementById('btn-case-plus').addEventListener('click',function(){
   
//     updatecasenum(true);
//     // const casenum=updatecasenum(true);
//     const casepricetotal=59*updatecasenum(true);
//     const casetotalprice=document.getElementById('case-total-price');
//     casetotalprice.innerText=casepricetotal;
// })

document.getElementById('btn-case-minus').addEventListener('click',function(){
    
    const totalprice=updatecasenum(false);
    updatecasetotalprice(totalprice);
    totaprice();

})