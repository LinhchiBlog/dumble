'use strict';

const productList = [
  { name: "Áo Thú", image: '/image-product/ao6.png',
   link: 'https://shope.ee/8KNE7YQczs' },
  { name: "Áo Khoác Chống Nước", image: '/image-product/ao1.jpg',
   link: 'https://shope.ee/2L5v5ZtMXM' },
  { name: "Quần Túi Hộp", image: '/image-product/quan1.jpg',
   link: 'https://shope.ee/506hRYN8jo' },
  { name: "Áo len", image: '/image-product/ao2.webp',
   link: 'https://shope.ee/Vdye8IpRw' },
   { name: "Áo Thun", image: '/image-product/ao5.webp',
   link: 'https://shope.ee/1q9RFGl9vz' },
   { name: "Áo len", image: '/image-product/ao4.webp',
   link: 'https://shope.ee/6AIV3fI4lq' },
   { name: "Chân Váy Chữ A", image: '/image-product/quan3.webp',
   link: 'https://shope.ee/B150l1YWG' },
   { name: "Quần Short", image: '/image-product/quan2.webp',
   link: 'https://shope.ee/5zytzRJ37F' },
  { name: "Áo khoác", image: '/image-product/ao3.webp',
   link: 'https://shope.ee/6fEZhpwehs' },
];

const product = document.querySelectorAll('product');
// Đoạn mã HTML ở dưới đây

document.addEventListener('DOMContentLoaded', function () {
  const productContainer = document.querySelector('.infomation-products');

  productList.forEach((product) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const productLink = document.createElement('a');
    productLink.href = product.link;
    productLink.target = '_blank'; // Mở trong tab/cửa sổ mới
    productLink.classList.add('link-product');

    const infoProductDiv = document.createElement('div');
    infoProductDiv.classList.add('info-product');

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.classList.add('image-product');

    const productName = document.createElement('p');
    productName.classList.add('name-product');
    productName.textContent = product.name;

    infoProductDiv.appendChild(productImage);
    productLink.appendChild(infoProductDiv);
    productLink.appendChild(productName);
    productDiv.appendChild(productLink);
    productContainer.appendChild(productDiv);
  });

  
});
