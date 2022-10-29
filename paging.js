const rowPerPage = 10;
const rows = document.querySelectorAll('#my-table tbody tr');
const rowsCount = rows.length;
const pageCount = Math.ceil(rowsCount / rowPerPage);
const numbers = document.querySelector('#numbers');

for (let i = 1; i <= pageCount; i++) {
	numbers.innerHTML += `<li><a href="">${i}</a></li>`;
}
const numbersLink = document.querySelectorAll('#numbers li a');


numbersLink.forEach(function (item) {
	item.addEventListener('click', e => {
		e.preventDefault();
		for (links of numbersLink) {
			links.classList.remove('active');
		}
		e.target.classList.add('active');
	});

})