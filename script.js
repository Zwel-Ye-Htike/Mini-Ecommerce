// Hero Slider
let slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide() {
    slides.forEach((s) => s.classList.remove('active'));
    slides[current].classList.add('active');
    current = (current + 1) % slides.length;
}

setInterval(showSlide, 3000);

// Product Data
const products = [
    { name: 'Premium Floor Tile', price: 45 },
    { name: 'Modern Toilet Set', price: 120 },
    { name: 'LED Ceiling Light', price: 35 },
    { name: 'Kitchen Sink', price: 80 },
    { name: 'Wall Paint Bucket', price: 25 },
    { name: 'Bathroom Basin', price: 60 },
];

const grid = document.getElementById('product-grid');

grid.innerHTML = products
    .map(
        (p) => `
  <div class="card">
    <h3>${p.name}</h3>
    <p>$${p.price}</p>
    <button>View Details</button>
  </div>
`
    )
    .join('');
