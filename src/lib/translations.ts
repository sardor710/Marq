export type Locale = "en" | "ru";

export interface TranslationDictionary {
  meta: {
    title: string;
    description: string;
  };
  header: {
    search: string;
    account: string;
    cart: string;
    menu: string;
    langSwitch: string;
  };
  nav: {
    label: string;
    href: string;
    columns?: {
      heading?: string;
      links: { label: string; href: string }[];
    }[];
  }[];
  subNav: {
    title: string;
    intro: string;
    legacy: string;
    buyNow: string;
  };
  hero: {
    titleAlt: string;
    lineupAlt: string;
  };
  textIntro: {
    heading: string;
    body: string;
  };
  fireDamascus: {
    edition: string;
    newBadge: string;
    brand: string;
    model: string;
    learnMore: string;
  };
  lifestyleCarousel: {
    learnMore: string;
    prevSlide: string;
    nextSlide: string;
    pauseCarousel: string;
    playCarousel: string;
    editions: {
      titanium: string;
      carbon: string;
      damascus: string;
    };
  };
  quality: {
    heading: string;
    body: string;
  };
  design: {
    heading: string;
    body: string;
    imageAlt: string;
  };
  scrollVideo: {
    title: string;
    subtitle: string;
    ctaLabel: string;
  };
  materials: {
    damascus: {
      title: string;
      body: string;
    };
    carbon: {
      title: string;
      body: string;
    };
    titanium: {
      title: string;
      body: string;
    };
  };
  featureCallouts: {
    sapphireTitle: string;
    sapphireSubtitle: string;
    amoledTitle: string;
    amoledSubtitle: string;
  };
  bands: {
    nylonLabel: string;
    leatherLabel: string;
    titaniumLabel: string;
    heading: string;
    body: string;
  };
  legacy: {
    heading: string;
    body: string;
    learnMore: string;
    imageAlt: string;
  };
  productCarousel: {
    imageAlt: string;
    newTag: string;
    learnMore: string;
    prev: string;
    next: string;
    editions: {
      titanium: string;
      carbon: string;
      damascus: string;
    };
  };
  signup: {
    heading: string;
    placeholder: string;
    submit: string;
    infoText: string;
    privacyLink: string;
  };
  footer: {
    country: string;
    copyright: string;
    columns: {
      heading: string;
      links: { label: string; href: string }[];
    }[];
    legalLinks: { label: string; href: string }[];
  };
}

export const translations: Record<Locale, TranslationDictionary> = {
  en: {
    meta: {
      title: "MARQ (Gen 2) COLLECTION | Garmin Kazakhstan",
      description:
        "Seven luxury modern tool watches. The second generation of the MARQ Collection — Fused Carbon Fiber, Damascus Steel and Grade-5 Titanium. Where luxury and performance collide.",
    },
    header: {
      search: "Search",
      account: "Account",
      cart: "Cart",
      menu: "Toggle mobile menu",
      langSwitch: "Switch language",
    },
    nav: [
      {
        label: "Smartwatches",
        href: "#",
        columns: [
          {
            heading: "Featured",
            links: [
              { label: "MARQ Collection", href: "#" },
              { label: "fēnix Series", href: "#" },
              { label: "Forerunner Series", href: "#" },
              { label: "All Smartwatches", href: "#" },
            ],
          },
          {
            heading: "By Activity",
            links: [
              { label: "Running", href: "#" },
              { label: "Adventure & Outdoor", href: "#" },
              { label: "Golf", href: "#" },
              { label: "Marine & Sailing", href: "#" },
              { label: "Aviation", href: "#" },
            ],
          },
        ],
      },
      { label: "Sports & Outdoor", href: "#" },
      { label: "Auto & Home", href: "#" },
      { label: "Marine", href: "#" },
      { label: "Aviation", href: "#" },
      { label: "Support", href: "#" },
    ],
    subNav: {
      title: "MARQ (Gen 2)",
      intro: "Introduction",
      legacy: "Legacy",
      buyNow: "Buy Now",
    },
    hero: {
      titleAlt: "MARQ Collection — The Second Generation",
      lineupAlt: "MARQ Collection watch lineup",
    },
    textIntro: {
      heading: "The Quest for Excellence Has Broken New Ground",
      body: "Seven luxury modern tool watches designed as an expression of your ambition and passions in life. Inspired by more than 30 years of relentless innovation and refined for a second generation, this collection is where luxury and performance collide.",
    },
    fireDamascus: {
      edition: "Damascus Steel Edition",
      newBadge: "New",
      brand: "MARQ",
      model: "Adventurer",
      learnMore: "Learn More",
    },
    lifestyleCarousel: {
      learnMore: "Learn More",
      prevSlide: "Previous Slide",
      nextSlide: "Next Slide",
      pauseCarousel: "Pause Carousel",
      playCarousel: "Play Carousel",
      editions: {
        titanium: "TITANIUM EDITION",
        carbon: "CARBON EDITION",
        damascus: "DAMASCUS STEEL EDITION",
      },
    },
    quality: {
      heading: "Quality",
      body: "Our reputation for durability, precision and reliability is built on the exploits of countless pilots, sailors, explorers and athletes who have trusted our products in the most challenging places on earth. We repay their confidence with strict procedures, processes and testing in development and manufacturing. The MARQ collection is made by Garmin engineers with total control over the creation and assembly of each and every watch. The process for creating these superior watches is unique, using optical bonding and alignment, water pressure testing, and thermal, shock and abrasion trials. The result is a demanding material design, taking the known Garmin reputation for quality to the next level and beyond.",
    },
    design: {
      heading: "Design",
      body: "To deliver the ultimate smartwatch craftsmanship, we traveled the world in search for the best material possible. Crafted using the most advanced technology, MARQ has elegantly married style and performance with a modern reinterpretation of Damascus steel, Fused Carbon Fiber, and Grade-5 titanium - attaining a new level of refined excellence. Every watch is designed with excruciating attention to detail and packed with smart features - a luxury collection that belongs with exquisiteness.",
      imageAlt: "MARQ watch design detail",
    },
    scrollVideo: {
      title: "Extraordinary Craftsmanship",
      subtitle: "Tried and tested - The recreation of medieval brilliance",
      ctaLabel: "Watch Now",
    },
    materials: {
      damascus: {
        title: "DAMASCUS STEEL EDITION",
        body: "Using an intricately complex method, two pieces of steel forged through repeated hammering, twisting and heating to present the age-old craftmanship - 50 processes over six months - to recreate this thousand-year-old mastery",
      },
      carbon: {
        title: "CARBON EDITION SERIES",
        body: "Machined from 130 layers of Fused Carbon Fiber; lightweight, tough and meticulously made; 67.8% lighter than Grade-5 Titanium",
      },
      titanium: {
        title: "TITANIUM EDITION SERIES",
        body: "A Grade-5 Titanium build makes the watch heat, corrosion and scratch-resistant; 2.5 times harder than Grade-2 Titanium",
      },
    },
    featureCallouts: {
      sapphireTitle: "DOMED SAPPHIRE CRYSTAL LENS",
      sapphireSubtitle: "Premium Scratch Resistance",
      amoledTitle: "AMOLED",
      amoledSubtitle: "Stunning display",
    },
    bands: {
      nylonLabel: "Jacquard-weave nylon",
      leatherLabel: "Leather/FKM rubber hybrid strap",
      titaniumLabel: "Titanium bracelet",
      heading: "Create Your Signature Look",
      body: "Personalize your MARQ modern tool watch to fit your style and ambition with premium accessory straps and bracelets. Each is made from the highest-quality materials for durability and comfort, including Italian vacchetta and leathers, brushed titanium, jacquard-weave nylon and performance silicone rubber. And each offers QuickFit connections, so you can change your look in seconds, with no tools required. Finally, you have a timepiece as individual as you are — and just as uncompromising.",
    },
    legacy: {
      heading: "Our Legacy",
      body: "The MARQ Collection is designed for those who aspire to the lifestyles we have redefined over decades of innovation. For them, we present these magnificent modern tool watches — our tribute to their rightful rewards.",
      learnMore: "Learn More",
      imageAlt: "MARQ premium watch and Garmin presentation box",
    },
    productCarousel: {
      imageAlt: "MARQ Collection — The Second Generation",
      newTag: "New",
      learnMore: "Learn More",
      prev: "Previous",
      next: "Next",
      editions: {
        titanium: "TITANIUM EDITION",
        carbon: "CARBON EDITION",
        damascus: "DAMASCUS STEEL EDITION",
      },
    },
    signup: {
      heading: "Sign up for News",
      placeholder: "your.email@example.com",
      submit: "Submit",
      infoText:
        "Get product news and promotions based on your preferences and registered devices.",
      privacyLink: "Learn about email privacy.",
    },
    footer: {
      country: "Kazakhstan",
      copyright: "© Garmin Ltd. or its subsidiaries. All rights reserved.",
      columns: [
        {
          heading: "Customer Service",
          links: [
            { label: "Support Center", href: "#" },
            { label: "Shipping & Returns", href: "#" },
            { label: "Order Status", href: "#" },
            { label: "Contact Us", href: "#" },
          ],
        },
        {
          heading: "Company",
          links: [
            { label: "About Garmin", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Investors", href: "#" },
            { label: "Newsroom", href: "#" },
          ],
        },
        {
          heading: "Explore",
          links: [
            { label: "Garmin Connect", href: "#" },
            { label: "Garmin Express", href: "#" },
            { label: "Connect IQ", href: "#" },
          ],
        },
      ],
      legalLinks: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Use", href: "#" },
        { label: "Security", href: "#" },
        { label: "Compliance", href: "#" },
      ],
    },
  },
  ru: {
    meta: {
      title: "КОЛЛЕКЦИЯ MARQ (Gen 2) | Garmin Казахстан",
      description:
        "Семь премиальных современных часов-инструментов. Второе поколение коллекции MARQ — Fused Carbon Fiber, дамасская сталь и титан Grade-5. Где роскошь встречается с непревзойденной функциональностью.",
    },
    header: {
      search: "Поиск",
      account: "Личный кабинет",
      cart: "Корзина",
      menu: "Открыть меню",
      langSwitch: "Сменить язык",
    },
    nav: [
      {
        label: "Смарт-часы",
        href: "#",
        columns: [
          {
            heading: "Рекомендуемое",
            links: [
              { label: "Коллекция MARQ", href: "#" },
              { label: "Серия fēnix", href: "#" },
              { label: "Серия Forerunner", href: "#" },
              { label: "Все смарт-часы", href: "#" },
            ],
          },
          {
            heading: "По видам спорта",
            links: [
              { label: "Бег", href: "#" },
              { label: "Туризм и приключения", href: "#" },
              { label: "Гольф", href: "#" },
              { label: "Морская навигация", href: "#" },
              { label: "Авиация", href: "#" },
            ],
          },
        ],
      },
      { label: "Спорт и активный отдых", href: "#" },
      { label: "Авто и дом", href: "#" },
      { label: "Морская навигация", href: "#" },
      { label: "Авиация", href: "#" },
      { label: "Поддержка", href: "#" },
    ],
    subNav: {
      title: "MARQ (Gen 2)",
      intro: "Введение",
      legacy: "Наследие",
      buyNow: "Купить",
    },
    hero: {
      titleAlt: "Коллекция MARQ — Второе поколение",
      lineupAlt: "Модельный ряд коллекции MARQ",
    },
    textIntro: {
      heading: "Стремление к совершенству открывает новые горизонты",
      body: "Семь премиальных современных часов-инструментов, созданных как воплощение ваших амбиций и жизненных стремлений. Вдохновленная более чем 30-летним опытом непрерывных инноваций и усовершенствованная во втором поколении, эта коллекция объединяет бескомпромиссную роскошь и высочайшую производительность.",
    },
    fireDamascus: {
      edition: "Издание из дамасской стали",
      newBadge: "Новинка",
      brand: "MARQ",
      model: "Adventurer",
      learnMore: "Подробнее",
    },
    lifestyleCarousel: {
      learnMore: "Подробнее",
      prevSlide: "Предыдущий слайд",
      nextSlide: "Следующий слайд",
      pauseCarousel: "Приостановить",
      playCarousel: "Воспроизвести",
      editions: {
        titanium: "ТИТАНОВАЯ ВЕРСИЯ",
        carbon: "КАРБОНОВАЯ ВЕРСИЯ",
        damascus: "ВЕРСИЯ ИЗ ДАМАССКОЙ СТАЛИ",
      },
    },
    quality: {
      heading: "Качество",
      body: "Наша репутация непревзойденной прочности, точности и надежности основана на опыте бесчисленных пилотов, мореплавателей, первооткрывателей и атлетов, доверявших нашим приборам в самых экстремальных уголках планеты. Мы оправдываем их доверие строжайшими стандартами проектирования, производства и многоэтапного тестирования. Коллекция MARQ создается инженерами Garmin при абсолютном контроле каждого этапа сборки. Производство этих уникальных часов включает оптическую склейку и юстировку, гидростатические испытания высоким давлением, а также термические, ударные и абразивные нагрузки. В результате рождается исключительная надежность материалов, выводящая легендарное качество Garmin на новый уровень.",
    },
    design: {
      heading: "Дизайн",
      body: "В поисках безупречного часового мастерства мы исследовали весь мир, чтобы отобрать лучшие из существующих материалов. Созданная с применением передовых технологий, коллекция MARQ гармонично объединила изысканный стиль и предельную функциональность в современном переосмыслении дамасской стали, плавленого углеволокна (Fused Carbon Fiber) и титана 5-го класса (Grade-5 Titanium), достигая эталонного совершенства. Каждая модель спроектирована с исключительным вниманием к деталям и оснащена интеллектуальными функциями — роскошная коллекция, олицетворяющая истинную утонченность.",
      imageAlt: "Детали дизайна часов MARQ",
    },
    scrollVideo: {
      title: "Исключительное мастерство",
      subtitle: "Проверено временем — возрождение средневекового искусства",
      ctaLabel: "Смотреть видео",
    },
    materials: {
      damascus: {
        title: "ИЗДАНИЕ ИЗ ДАМАССКОЙ СТАЛИ",
        body: "По сложнейшей технологии два вида стали соединяются путем многократной ковки, скручивания и закалки. Более 50 этапов обработки на протяжении полугода воссоздают древнее тысячелетнее мастерство.",
      },
      carbon: {
        title: "СЕРИЯ ИЗ КАРБОНА",
        body: "Корпус выточен из 130 слоев плавленого углеродного волокна (Fused Carbon Fiber): сверхлегкий, прочный и ювелирно обработанный — на 67,8% легче титана Grade-5.",
      },
      titanium: {
        title: "СЕРИЯ ИЗ ТИТАНА",
        body: "Конструкция из титана Grade-5 обеспечивает непревзойденную термостойкость, устойчивость к коррозии и царапинам — в 2,5 раза прочнее традиционного титана Grade-2.",
      },
    },
    featureCallouts: {
      sapphireTitle: "ВЫПУКЛОЕ САПФИРОВОЕ СТЕКЛО",
      sapphireSubtitle: "Премиальная устойчивость к царапинам",
      amoledTitle: "AMOLED",
      amoledSubtitle: "Потрясающий яркий дисплей",
    },
    bands: {
      nylonLabel: "Жаккардовый плетеный нейлон",
      leatherLabel: "Гибридный ремешок из кожи и каучука FKM",
      titaniumLabel: "Титановый браслет",
      heading: "Создайте свой неповторимый образ",
      body: "Подчеркните свой стиль и статус, дополнив часы MARQ премиальными сменными ремешками и браслетами. Каждый аксессуар изготовлен из отборных материалов высочайшего качества для долговечности и комфорта: итальянской кожи vacchetta, сатинированного титана, жаккардового нейлона и износостойкого силикона. Благодаря системе крепления QuickFit вы можете изменить облик часов за секунды без инструментов. Часы, столь же уникальные и бескомпромиссные, как и вы.",
    },
    legacy: {
      heading: "Наше наследие",
      body: "Коллекция MARQ создана для тех, кто стремится к образу жизни, который мы формировали на протяжении десятилетий инноваций. Для них мы представляем эти великолепные современные часы-инструменты — дань уважения их заслуженным достижениям.",
      learnMore: "Узнать больше",
      imageAlt: "Премиальные часы MARQ и фирменная подарочная коробка Garmin",
    },
    productCarousel: {
      imageAlt: "Коллекция MARQ — Второе поколение",
      newTag: "Новинка",
      learnMore: "Подробнее",
      prev: "Назад",
      next: "Вперед",
      editions: {
        titanium: "ТИТАНОВАЯ ВЕРСИЯ",
        carbon: "КАРБОНОВАЯ ВЕРСИЯ",
        damascus: "ВЕРСИЯ ИЗ ДАМАССКОЙ СТАЛИ",
      },
    },
    signup: {
      heading: "Подпишитесь на новости",
      placeholder: "vash.email@example.com",
      submit: "Отправить",
      infoText:
        "Получайте новости о новинках и специальные предложения с учетом ваших предпочтений и зарегистрированных устройств.",
      privacyLink: "Узнать о конфиденциальности email.",
    },
    footer: {
      country: "Казахстан",
      copyright: "© Garmin Ltd. или дочерние компании. Все права защищены.",
      columns: [
        {
          heading: "Служба поддержки",
          links: [
            { label: "Центр поддержки", href: "#" },
            { label: "Доставка и возврат", href: "#" },
            { label: "Статус заказа", href: "#" },
            { label: "Связаться с нами", href: "#" },
          ],
        },
        {
          heading: "Компания",
          links: [
            { label: "О компании Garmin", href: "#" },
            { label: "Карьера", href: "#" },
            { label: "Инвесторам", href: "#" },
            { label: "Пресс-центр", href: "#" },
          ],
        },
        {
          heading: "Сервисы и приложения",
          links: [
            { label: "Garmin Connect", href: "#" },
            { label: "Garmin Express", href: "#" },
            { label: "Connect IQ", href: "#" },
          ],
        },
      ],
      legalLinks: [
        { label: "Политика конфиденциальности", href: "#" },
        { label: "Условия использования", href: "#" },
        { label: "Безопасность", href: "#" },
        { label: "Соответствие стандартам", href: "#" },
      ],
    },
  },
};
