const seats = document.querySelectorAll("#seat");
console.log(seats);
let count = 0;
for (const seat of seats) {
    seat.addEventListener("click", function (event) {
        seat.classList.add("change_after_seat_click")
        console.log(seat.innerHTML);

        const addSeatPrice = document.getElementById("addSeatPrice");
        const p = document.createElement("p");
        p.innerHTML = seat.innerHTML;
        addSeatPrice.appendChild(p);
        const p1 = document.createElement("p");
        p1.innerHTML = "Economoy";
        addSeatPrice.appendChild(p1);
        const p2 = document.createElement("p");
        p2.innerHTML = "550";
        addSeatPrice.appendChild(p2);

        count++;
        console.log(count);


        

        setInnerText('updateTotalPrice', 550 * count);
        setInnerText('updateGrandTotal', 550 * count);
        setInnerText('seatCount', count);
        updateAvailableSeat()

    })
}








const coupon = document.getElementById("coupon");
coupon.addEventListener('keyup', function (e) {
    //console.log(e.target.value);
    if (e.target.value === 'NEW15') {
        const applyBtn = document.getElementById('applyBtn');
        applyBtn.removeAttribute("disabled");
        applyBtn.addEventListener('click', function () {
            let NEW15 = getInnerTextById('updateGrandTotal');
            setInnerText('updateGrandTotal', NEW15-500);
            coupon.value = "";
        })

    }

    if(e.target.value==='Couple 20'){
        const applyBtn = document.getElementById('applyBtn');
        applyBtn.removeAttribute("disabled");
        applyBtn.addEventListener('click' ,function(){
            let couple20=getInnerTextById('updateGrandTotal');
            setInnerText('updateGrandTotal', couple20-500);
            coupon.value = "";
        })
   
    }
    
})









const pNumber=document.getElementById('pNumber');
pNumber.addEventListener('keyup', function(e){
    
    if (e.target.value.length>=2) {
       const submitBtn=document.getElementById("submitBtn");
       submitBtn.removeAttribute("disabled");
    }
} )





function updateAvailableSeat(){
    let available= getInnerTextById('avaiablSeat')
    console.log();
    setInnerText('avaiablSeat', available-1);

}



function setInnerText(id, value) {
    document.getElementById(id).innerHTML = value;

}




function getInnerTextById(id) {
    const InnerText = document.getElementById(id);
    return InnerText.innerHTML;
}
