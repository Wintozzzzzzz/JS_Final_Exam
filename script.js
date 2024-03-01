var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000);
 }

const slides = document.querySelectorAll('.slide');

slides.forEach((slide) => {
    slide.classList.add('slide-enter');
});

setTimeout(() => {
    slides.forEach((slide) => {
        slide.classList.add('slide-enter-active');
    });
}, 100);

    // ოთახის რეზერვაციის ფუნქცია
function reserveRoom(roomType, price) {
    var name = prompt("Enter your name:");
    var email = prompt("Enter your email:");
    var checkInDate = prompt("Enter your check-in date (YYYY-MM-DD):");
    var checkOutDate = prompt("Enter your check-out date (YYYY-MM-DD):");

    if(!name || !email || !checkInDate || !checkOutDate) {
        alert("Please enter all required information.");
        return
    }
    else ("Booking confirm successful")

    // ფუნქცია ითვლის რამდენი ღამე სტუმარი ჩერდება სატუმროში
    var startDate = new Date(checkInDate);
    var endDate = new Date(checkOutDate);
    var timeDifference = endDate.getTime() - startDate.getTime();
    var nightCount = Math.ceil(timeDifference / (1000 * 3600 * 24));

    // ჯამური ფასის კალკულაცია
    var totalPrice = price * nightCount;

    
    console.log("Room Type:", roomType);
    console.log("Price per night:", price);
    console.log("Number of nights:", nightCount);
    console.log("Total Price:", totalPrice);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Check-in Date:", checkInDate);
    console.log("Check-out Date:", checkOutDate);

    

    alert("Total Price: $" + totalPrice.toFixed(2));
}

function returnHome() {
    window.location.href = "/HotelPage/hotel.html"; 
}

    // მანქანის ჯავშნის ფუნქციონალი
function showPopup(price) {
    document.getElementById('price').textContent = 'Price: $' + price;
    document.getElementById('popup').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';

    // თარიღის არჩევა, ვერ ირჩევ წინა დღეებს
    var today = new Date().toISOString().split('T')[0]; 
    document.getElementById('date').setAttribute('min', today);
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}


function confirmBooking() {
    var selectedDate = document.getElementById('date').value;
    var price = parseInt(document.getElementById('price').textContent.split('$')[1]);
    var bookingPrice = calculatePrice(selectedDate, price);
    alert('Booking confirmed! Total price: $' + bookingPrice);
    closePopup();
}
// დაჯავშნის ფასის ლოგიკა გამოანგარიშებისთვის თარიღისა და ფასის მიხედვით დღეში
function calculatePrice(selectedDate, price) { 
    return price; // აბრუნებს ერთი დღის ჯავშნის საფასურს
}

function calculatePrice(selectedDate, price) {
    
    var startDate = new Date(selectedDate);
    var today = new Date();

    // თარიღებს შორი მილიწამების სხვაობა
    var timeDiff = Math.abs(startDate.getTime() - today.getTime());

    // დღეების სხვაობა
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    // ჯავშნის ჯამური ფასი
    var totalPrice = price * diffDays;

    return totalPrice;
}

 


