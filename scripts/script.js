const seats =document.querySelectorAll("#seat");
console.log(seats);

for (const seat of seats) {
    seat.addEventListener("click",function(event){
        seat.classList.add("change_after_seat_click")
        console.log(seat.innerHTML);

        const addSeatPrice=document.getElementById("addSeatPrice");
        const p=document.createElement("p");
        p.innerHTML=seat.innerHTML;
        addSeatPrice.appendChild(p);
        const p1=document.createElement("p");
        p1.innerHTML="Economoy";
        addSeatPrice.appendChild(p1);
        const p2=document.createElement("p");
        p2.innerHTML="550";
        addSeatPrice.appendChild(p2);


    })
}

function setInnerText(id,text){
    
}