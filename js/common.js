// function elementtotalprice (elementid)
// {
//     const elementtotal=document.getElementById('elementid');
//     const elementtotalbystring=elementtotal.innerText;
//     const elementtotalbynum=parseInt(elementtotalbystring);
//     return elementtotalbynum;
    
// }


function totaprice()
{
        // subtotal
   
        const phonetotal=document.getElementById('phoneprice');
        const phonetotalstring=phonetotal.innerText;
        const phonetotalnumber=parseInt(phonetotalstring);
        
        const casetotal=document.getElementById('case-total-price');
        const casetotalstring=casetotal.innerText;
        const casetotalnumber=parseInt(casetotalstring);
     
        const newtotal=phonetotalnumber+casetotalnumber;
     
        const subtotal=document.getElementById('sub-total');
        const subtotalstring=subtotal.innerText;
        subtotal.innerText=newtotal;
        
        const tax=document.getElementById('tax-total');
        const taxamountstring=tax.innerText;
        const taxtamount= newtotal*0.1;
        tax.innerText=taxtamount.toFixed(2);
        // final total
        const finaltotalcalculate=newtotal+taxtamount;
        const finaltotal=document.getElementById('final-total');
        const finaltotalstring=finaltotal.innerText;
        finaltotal.innerText=finaltotalcalculate.toFixed(2);


     
}

