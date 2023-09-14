const menuBtn=document.querySelector("#openmenu-btn");
const closeBtn=document.querySelector("#closemenu-btn");
const menu=document.querySelector(".navmeni");

//open menu
menuBtn.addEventListener("click", ()=>{
    menu.style.display='block';
    menuBtn.style.display='none';
    closeBtn.style.display='inline-block';
})

//close menu
closeBtn.addEventListener("click", ()=>
{
    menu.style.display='none';
    menuBtn.style.display='inline-block';
    closeBtn.style.display='none';
})

//faq
const faqs=document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');
        const icon=faq.querySelector('.faqicon i');
        if(icon.className==='uil uil-plus'){
            icon.className='uil uil-minus'
        }
        else{
            icon.className='uil uil-plus'
        }
    })
})

//kontakt
function validanEmail(email) {
    var emailProvera = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailProvera.test(email);
}

function validanTelefon(mobilniBroj) {
    var mobilni = /^\d{10}$/;
    return mobilni.test(mobilniBroj);
}

document.querySelector("form").addEventListener("submit", function (event) {
    var ime = document.getElementById("ime").value;
    var email = document.getElementById("email").value;
    var telefon = document.getElementById("telefon").value;
    var poruka = document.getElementById("poruka").value;

    // Provera unosa
    if (ime === "" || email === "" || telefon === "" || poruka === "") {
        alert("Sva polja moraju biti popunjena");
        event.preventDefault();
        return;
    }

    // Provera e-mail adrese
    if (!validanEmail(email)) {
        alert("Unesite validan E-mail");
        event.preventDefault();
        return;
    }

    // Provera broja telefona
    if (!validanTelefon(telefon)) {
        alert("Unesite validan broj telefona sa tačno 10 cifara");
        event.preventDefault();
        return;
    }
    //localstorage
    localStorage.setItem("ime", ime);
    localStorage.setItem("email", email);
    localStorage.setItem("telefon", telefon);
    localStorage.setItem("poruka", poruka);

    alert("Podaci su sačuvani u LocalStorage.");

    document.querySelector("form").reset();
});






