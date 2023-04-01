
function updatephonenumbyid(increase)
{
   const phonenumberfield=document.getElementById('phone-number-field');
   const phonenumberinstring= phonenumberfield.value;
   const phonenumber=parseInt(phonenumberinstring);
   let newphonenumber;
   if(increase===true)
   {
       newphonenumber=phonenumber+1;
   }
   else{ newphonenumber=phonenumber-1;}
   phonenumberfield.value=newphonenumber;
   return newphonenumber;
}

function updatephoneprice(phonenumber)
{
   const newphonetotalprice=1219 * phonenumber;
   const previousphnprice=document.getElementById('phoneprice')
   previousphnprice.innerText=newphonetotalprice;
}

document.getElementById('btn-phone-plus').addEventListener('click',function(){
 
   const phonenumber=updatephonenumbyid(true);
   updatephoneprice(phonenumber);
   totaprice();
   
})

document.getElementById('btn-phone-minus').addEventListener('click',function(){
 
   const phonenumber= updatephonenumbyid(false);
   updatephoneprice(phonenumber);
   totaprice();
})

