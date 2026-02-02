// Menu Data
const menuData = {
  korean: [
    {
      name: "돌솥 비빔밥",
      ingredients: ["밥 1공기", "콩나물", "시금치", "당근", "고사리", "계란 1개", "고추장 1큰술", "참기름"],
      recipe: [
        "각종 나물(콩나물, 시금치, 고사리)을 데쳐서 양념한다.",
        "당근은 채 썰어 볶는다.",
        "뚝배기에 밥을 담고 준비한 나물을 예쁘게 올린다.",
        "계란 프라이를 반숙으로 익혀 올린다.",
        "고추장과 참기름을 넣고 비벼 먹는다."
      ]
    },
    {
      name: "돼지고기 김치찌개",
      ingredients: ["김치 200g", "돼지고기 100g", "두부 1/2모", "대파", "고춧가루", "다진마늘", "국간장"],
      recipe: [
        "냄비에 돼지고기와 김치를 넣고 볶는다.",
        "물이나 육수를 붓고 끓인다.",
        "김치가 익으면 두부, 다진마늘, 고춧가루를 넣는다.",
        "마지막에 대파를 넣고 한소끔 더 끓인다."
      ]
    },
    {
      name: "불고기",
      ingredients: ["소고기 300g", "양파", "당근", "대파", "간장", "설탕", "다진마늘", "참기름", "후추"],
      recipe: [
        "소고기는 핏물을 제거하고 먹기 좋은 크기로 썬다.",
        "간장, 설탕, 다진마늘, 참기름, 후추로 양념장을 만든다.",
        "고기에 양념장을 넣고 재운다 (최소 30분).",
        "달군 팬에 고기와 채소를 넣고 볶는다."
      ]
    }
  ],
  chinese: [
    {
      name: "짜장면",
      ingredients: ["중화면", "춘장", "돼지고기", "양파", "양배추", "감자", "설탕", "전분물"],
      recipe: [
        "팬에 식용유를 두르고 춘장을 볶는다.",
        "다른 팬에 고기와 채소를 볶다가 볶은 춘장을 넣고 섞는다.",
        "물을 붓고 끓이다가 설탕으로 간을 맞춘다.",
        "전분물을 넣어 걸쭉하게 농도를 맞춘다.",
        "삶은 면 위에 소스를 부어 완성한다."
      ]
    },
    {
      name: "마파두부",
      ingredients: ["두부 1모", "다진 돼지고기", "두반장", "대파", "마늘", "생강", "고추기름", "전분물"],
      recipe: [
        "두부는 깍둑썰기 하여 끓는 물에 살짝 데친다.",
        "팬에 고추기름을 두르고 파, 마늘, 생강을 볶아 향을 낸다.",
        "다진 고기를 넣고 볶다가 두반장을 넣는다.",
        "물을 붓고 끓으면 두부를 넣는다.",
        "전분물을 풀어 농도를 맞춘다."
      ]
    }
  ],
  western: [
    {
      name: "알리오 올리오 파스타",
      ingredients: ["파스타 면", "마늘 5쪽", "페페론치노", "올리브 오일", "소금", "후추"],
      recipe: [
        "끓는 물에 소금을 넣고 파스타 면을 삶는다.",
        "팬에 올리브 오일을 듬뿍 두르고 편 썬 마늘을 볶는다.",
        "마늘 향이 올라오면 페페론치노를 부수어 넣는다.",
        "삶은 면과 면수 약간을 넣고 볶는다.",
        "소금과 후추로 간을 한다."
      ]
    },
    {
      name: "스테이크",
      ingredients: ["소고기 스테이크용", "올리브 오일", "소금", "후추", "로즈마리", "버터"],
      recipe: [
        "고기 앞뒤로 올리브 오일, 소금, 후추를 발라 시즈닝한다.",
        "팬을 아주 뜨겁게 달군 후 고기를 올린다.",
        "겉면이 바삭해질 때까지 굽고 뒤집는다.",
        "버터와 로즈마리를 넣고 숟가락으로 고기에 끼얹어가며 굽는다 (베이스팅).",
        "구운 고기는 5분 정도 래스팅 후 썬다."
      ]
    }
  ],
  snack: [
    {
      name: "떡볶이",
      ingredients: ["떡볶이 떡", "사각어묵", "대파", "고추장", "고춧가루", "설탕", "물엿"],
      recipe: [
        "떡은 물에 불려놓고, 어묵과 대파는 썬다.",
        "냄비에 물, 고추장, 고춧가루, 설탕, 물엿을 넣고 끓인다.",
        "국물이 끓으면 떡과 어묵을 넣는다.",
        "국물이 걸쭉해질 때까지 졸이다가 대파를 넣고 마무리한다."
      ]
    },
    {
      name: "김밥",
      ingredients: ["김밥김", "밥", "단무지", "햄", "계란", "시금치", "참기름", "소금"],
      recipe: [
        "밥에 참기름과 소금으로 간을 한다.",
        "햄, 맛살은 볶고 계란은 지단을 부쳐 길게 썬다.",
        "시금치는 데쳐서 무친다.",
        "김 위에 밥을 얇게 펴고 재료를 올린다.",
        "돌돌 말아서 먹기 좋은 크기로 썬다."
      ]
    },
    {
      name: "라면",
      ingredients: ["라면 1봉지", "계란", "대파", "물 550ml"],
      recipe: [
        "냄비에 물을 붓고 끓인다.",
        "물이 끓으면 면과 스프를 넣는다.",
        "면이 익을 때쯤 계란과 대파를 넣는다.",
        "취향에 따라 꼬들하게 익혀 먹는다."
      ]
    }
  ]
};

// DOM Elements
const buttons = document.querySelectorAll('.category-btn');
const resultArea = document.getElementById('result-area');
const menuNameEl = document.getElementById('menu-name');
const ingredientsListEl = document.getElementById('ingredients-list');
const recipeStepsEl = document.getElementById('recipe-steps');
const naverLinkEl = document.getElementById('naver-link');
const youtubeLinkEl = document.getElementById('youtube-link');

// Functions
function getRandomMenu(category) {
  const menus = menuData[category];
  const randomIndex = Math.floor(Math.random() * menus.length);
  return menus[randomIndex];
}

function displayMenu(menu) {
  // Reset animation
  resultArea.classList.remove('active');
  resultArea.classList.add('hidden');

  setTimeout(() => {
    menuNameEl.textContent = menu.name;
    
    // Clear lists
    ingredientsListEl.innerHTML = '';
    recipeStepsEl.innerHTML = '';

    // Populate Ingredients
    menu.ingredients.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ingredientsListEl.appendChild(li);
    });

    // Populate Steps
    menu.recipe.forEach(step => {
      const li = document.createElement('li');
      li.textContent = step;
      recipeStepsEl.appendChild(li);
    });

    // Update Search Links
    naverLinkEl.href = `https://search.naver.com/search.naver?query=${encodeURIComponent(menu.name + ' 레시피')}`;
    youtubeLinkEl.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(menu.name + ' 레시피')}`;

    resultArea.classList.remove('hidden');
    // Force reflow
    void resultArea.offsetWidth; 
    resultArea.classList.add('active');
  }, 100); // Short delay for animation effect
}

// Event Listeners
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    const menu = getRandomMenu(category);
    displayMenu(menu);
  });
});
