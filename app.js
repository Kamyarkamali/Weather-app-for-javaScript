// `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
// api.openweathermap.org/data/2.5/weather?q=tehran&appid=3e1d1194ea3cf297e78cc150dab88d61&units=metric

const input=document.querySelector("input");

 const notification=document.querySelector(".notification");

const Wicon=document.querySelector(".weather-Icon");

 const form=document.querySelector("form");

 const temperatore=document.querySelector(".temperatore-Value");

 const description=document.querySelector(".temperatore-description");

 const locationn=document.querySelector(".location");

 const span=document.querySelector(".span");

 const apiKey="3e1d1194ea3cf297e78cc150dab88d61";

const Clear=document.querySelector(".clear");

 form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let inputValue=input.value;

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response=>response.json())
        .then(data=>{
        const{main,sys,weather,name}=data;
        const icon=`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
            Wicon.innerHTML=`
            <figure>
            <img src='${icon}'>
             </figure>
            `
        temperatore.innerHTML=`<p> <span>${Math.round(main.temp)}</span> </p>`;
        
        description.innerHTML=`<figurecaption><p>${weather[0]['description']}</p> </figurecaption>`;
        locationn.innerHTML=`${name},<span class='span'>${sys.country}</span>`
        notification.style.display="none"
        notification.innerHTML="";
  
       
        })
        .catch(()=>{
            notification.style.display="block";
            notification.innerHTML="لطفا نام شهر را درست وارد کنید"
        })
 })

Clear.addEventListener("click",e=>{
    notification.style.display="none"
    notification.innerHTML="";

    input.value="";
    locationn.innerText="";
    description.innerText="";
    temperatore.innerText="";
    Wicon.innerText="";
})
