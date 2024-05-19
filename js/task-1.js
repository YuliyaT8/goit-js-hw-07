const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('.item');

// Кількість категорій
const categoriesCount = categoryItems.length;
console.log(`Кількість категорій: ${categoriesCount}`);

// Інформація про кожну категорію
categoryItems.forEach(categoryItem => {
  const categoryTitle = categoryItem.querySelector('h2').textContent;
  const categoryItemsCount = categoryItem.querySelectorAll('li').length;

  console.log(`Категорія: ${categoryTitle}`);
  console.log(`Кількість елементів: ${categoryItemsCount}`);
  console.log('-----------------');
});