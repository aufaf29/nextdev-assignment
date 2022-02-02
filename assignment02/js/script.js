

function make_card(number, name, email, contact, city, state, advice) {
    return (
    `
    <div class="custom-card">
        <table width="100%">
            <col style="width:25%">
            <col style="width:75%">
            <tr>
                <td colspan="2"><h3><strong>${number}.</strong></h3></td>
            </tr>
            <tr>
              <td><strong>Name</strong></td>
              <td>${name}</td>
            </tr>
            <tr>
              <td><strong>Email</strong></td>
              <td>${email}</td>
            </tr>
            <tr>
              <td><strong>Contact</strong></td>
              <td>${contact}</td>
            </tr>
            <tr>
              <td><strong>Location</strong></td>
              <td>${city}, ${state}</td>
            </tr>
            <tr>
              <td colspan="2">${advice}</td>
            </tr>
        </table>
    </div>
    `
    )
}

let cards = [
    {
        name: "Diri Sendiri",
        email: "aufafadhlurohman@gmail.com",
        contact: "+62 813 2912 1999",
        city: "Depok",
        state: "Indonesia",
        advice: "Yok bisa yok jadi lebih baik terus. Semangat jangan kalah sama rasa malas. Masih banyak impian yang menunggu dicapai."
    },
    {
        name: "Hati",
        email: "aufafadhlurohman@gmail.com",
        contact: "+62 813 2912 1999",
        city: "Bandung",
        state: "Indonesia",
        advice: "Gerak terus bro, jangan kasih kendor!!!."
    }
]

let cards_container = document.getElementById("advice-cards")

for(i=0; i<cards.length; i++) {
    cards_container.innerHTML += make_card(i+1, cards[i].name, cards[i].email, cards[i].contact, cards[i].city, cards[i].state, cards[i].advice)
}

function add_advice(e) {
    e.preventDefault();
    
    cards.push(     
        {
            name: document.getElementById("form-name").value,
            email: document.getElementById("form-email").value,
            contact: document.getElementById("form-contact").value,
            city: document.getElementById("form-city").value,
            state: document.getElementById("form-state").value,
            advice: document.getElementById("form-interest").value
        }
    )

    cards_container.innerHTML += make_card(cards.length, cards[cards.length-1].name, cards[cards.length-1].email, cards[cards.length-1].contact, cards[cards.length-1].city, cards[cards.length-1].state, cards[cards.length-1].advice)

    document.getElementById("form-name").value = ""
    document.getElementById("form-email").value = ""
    document.getElementById("form-contact").value = ""
    document.getElementById("form-city").value = ""
    document.getElementById("form-state").value = ""
    document.getElementById("form-interest").value = ""

    return false
}