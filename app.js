const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];

//Obje içinden category'leri al
const categories = menu.map((item) => item.category);
//Set ile aynı olanları çıkar ve destructuring ile array olarak kaydet (çünkü set obje döndürür)
const categoryList = [...new Set(categories)];
//Listenin başına All ekle
categoryList.unshift("All");

//Kategori düğmelerinin geleceği container i dom olarak al
const btnCont = document.querySelector(".btn-container");
//categoryList'teki her başlık için bir buton oluştur
for (let i = 0; i < categoryList.length; i++) {
  let buttons = document.createElement("button");
  //başlık sayısı kadar butonu container'a ekle
  btnCont.appendChild(buttons);
  //her butonun içine kategori adını yaz
  buttons.innerHTML = categoryList[i];
  //butonları şekillendirmek için oluştuktan sonra class ver (bu class'ı syle.css'de düzenledik)
  buttons.className = "btn-item";
}

//seçilen kategoriyi yazmak için alttaki container element'i seçip aşağıdaki fonksiyonda tıklanan butona göre buraya içerik göndereceğiz
const mainSection = document.querySelector(".section-center");
mainSection.className = "menu-items";

//bu sefer sonuna all ekleyerek tüm butonları seç (sayfada başka amaçlı buton olmadığı için) (olsaydı class verip seçerdik)
const buttons = document.querySelectorAll("button");

//şimdi her kategori butonuna tıklandığında butonun içindeki kategori ismini alalım
let btnName = "notClicked";
let selectedCategory = [];
let wantedCategory;
if (btnName) {
  selectedCategory = menu.map((item) => {
    //düğme adı ile aynı olan item'ları bir array'de birleştir
    selectedCategory.push(item);
    //kategorisi düğme ismi ile farklı olanları çıkart
    wantedCategory = selectedCategory.filter((e) => e);
  });
}

//sayfa ilk açıldığında tüm menünün görüntülenmesi için kod (en altta düğmelere basıldıkça aynı fonksiyon çağırıyor)
const displayer = function () {
  for (let i = 0; i < wantedCategory.length; i++) {
    let sections = document.createElement("section");
    mainSection.appendChild(sections);

    //her bölüme class ver (css'de mevcut olan class)
    sections.className = "menu-info";

    //her yemeğin resmini alıp span ile göster
    let images = document.createElement("img");
    sections.appendChild(images);
    images.src = wantedCategory[i].img;
    images.className = "photo";

    //her yemeğin adını alıp span ile yazdır
    let titles = document.createElement("span");
    sections.appendChild(titles);
    titles.className = "menu-title";

    //her yemeğin fiyatını alıp span ile yazdır
    titles.innerHTML = `${wantedCategory[i].title}`;
    let prices = document.createElement("span");
    prices.innerHTML = wantedCategory[i].price;
    titles.append(prices);

    //her yemeğin açıklamasını alıp span ile yazdır
    let descriptions = document.createElement("span");
    sections.appendChild(descriptions);
    descriptions.innerHTML = wantedCategory[i].desc;
    descriptions.className = "menu-text";
  }
};
displayer();

btnCont.addEventListener("click", function (e) {
  //tıklanan düğmenin adını al
  btnName = e.target.innerHTML;
  //ardından başka düğmeye tıklanırsa önce dom'u boşalt
  mainSection.innerHTML = "";
  if (btnName == "notClicked" || btnName == "All") {
    selectedCategory = menu.map((item) => {
      //düğme adı ile aynı olan item'ları bir array'de birleştir
      selectedCategory.push(item);
      //kategorisi düğme ismi ile farklı olanları çıkart
      wantedCategory = selectedCategory.filter((e) => e);
    });
  } else {
    selectedCategory = menu.map((item) => {
      //düğme adı ile aynı olan item'ları bir array'de birleştir
      selectedCategory.push(item.category == btnName ? item : "");
      //kategorisi düğme ismi ile farklı olanları çıkart
      wantedCategory = selectedCategory.filter((e) => e);
    });
  }

  //yukarıda seçtiğimiz section container'a yine yukarıda adını aldığımız kategoriyi yazdır
  displayer();
});