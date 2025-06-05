// Этот файл содержит массив с данными новостей
// Каждый элемент массива - объект с полями: image, title, description
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';


const newsData = [
  {
    id: 1,
    image: img1, // URL изображения новости
    title: "Запуск нового проекта", // Заголовок новости
    description: "Мы рады объявить о запуске нашего нового проекта, который изменит представление о технологиях.", // Полный текст новости
  },
  {
    id: 2,
    image: img2,
    title: "Энцелад",
    description: "Энцелад во тьме космоса",
  },
  {
    id: 3,
    image: img3,
    title: "Космическое торнадо",
    description: "Космическое торнадо или HH 49/50, запечатленный телескопом James Webb",
  },
  
{
    id: 4,
    image: img4,
    title: "Земля, если отметить почти все известные обломки космического мусора. ",
    description: "Согласно исследованию, проведенному Европейским космическим агентством в 2019 году, по оценкам, на орбите Земли находится более 130 миллионов обломков.",
  },
  {
    id: 5,
    image: img5,
    title: "Уран ",
    description: "Крупный план Урана, запечатленный космическим телескопом Джеймс Уэбб",
  },{
    id: 6,
    image: img6,
    title: "Млечный путь",
    description: "Изображение центрального участка Млечного Пути, составленное из 30 отдельных кадров.",
  },
]


export default newsData; 
