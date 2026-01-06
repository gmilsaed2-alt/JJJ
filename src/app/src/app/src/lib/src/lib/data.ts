import type { Product, Category, StoreSettings } from './types';

export const CATEGORIES: Category[] = [
  { id: 'juices', name: 'العصائر' },
  { id: 'sandwiches', name: 'السندوتشات' },
  { id: 'breakfast', name: 'وجبة الإفطار' },
  { id: 'kids', name: 'وجبات الأطفال' },
  { id: 'events', name: 'طلبات المناسبات' },
];

export const PRODUCTS: Product[] = [
  // العصائر
  {
    id: 'prod_avo',
    name: 'عصير أفوكادو',
    description: 'أفوكادو طازج ممزوج بالحليب والعسل.',
    category: 'juices',
    imageId: 'avocado-juice',
    sizes: [
      { name: 'صغير', price: 500 },
      { name: 'كبير', price: 800 },
      { name: 'قارورة', price: 1500 },
    ],
    featured: true,
  },
  {
    id: 'prod_fakh',
    name: 'فخفخينا',
    description: 'مزيج من قطع الفواكه الموسمية مع الآيس كريم.',
    category: 'juices',
    imageId: 'fakhfakhina-juice',
    sizes: [
      { name: 'صغير', price: 600 },
      { name: 'كبير', price: 1000 },
    ],
  },
  {
    id: 'prod_cocktail',
    name: 'كوكتيل طبقات',
    description: 'طبقات منعشة من عصائر المانجو، الجوافة والفراولة.',
    category: 'juices',
    imageId: 'cocktail-juice',
    sizes: [
      { name: 'صغير', price: 400 },
      { name: 'كبير', price: 700 },
      { name: 'قارورة', price: 1300 },
    ],
    featured: true,
  },
  {
    id: 'prod_lemon_mint',
    name: 'ليمون بالنعناع',
    description: 'انتعاش الليمون مع أوراق النعناع الطازجة.',
    category: 'juices',
    imageId: 'lemon-juice',
    sizes: [
      { name: 'صغير', price: 300 },
      { name: 'كبير', price: 500 },
      { name: 'قارورة', price: 1000 },
    ],
  },
    {
    id: 'prod_mango',
    name: 'عصير مانجو',
    description: 'عصير مانجو طبيعي 100% بدون إضافات.',
    category: 'juices',
    imageId: 'mango-juice',
    sizes: [
      { name: 'صغير', price: 400 },
      { name: 'كبير', price: 700 },
      { name: 'قارورة', price: 1300 },
    ],
  },
  {
    id: 'prod_strawberry',
    name: 'عصير فراولة',
    description: 'فراولة طازجة مع لمسة من الحليب.',
    category: 'juices',
    imageId: 'strawberry-juice',
     sizes: [
      { name: 'صغير', price: 400 },
      { name: 'كبير', price: 700 },
      { name: 'قارورة', price: 1300 },
    ],
  },

  // السندوتشات
  {
    id: 'prod_egg_cheese',
    name: 'ساندوتش بيض بالجبن',
    description: 'بيض مقلي مع جبنة سائلة في خبز طازج.',
    category: 'sandwiches',
    imageId: 'egg-sandwich',
    sizes: [{ name: 'صغير', price: 400 }],
  },
  {
    id: 'prod_chips_mayo',
    name: 'ساندوتش شيبس مايونيز',
    description: 'بطاطس مقلية مقرمشة مع صلصة المايونيز الخاصة.',
    category: 'sandwiches',
    imageId: 'chips-mayo-sandwich',
    sizes: [{ name: 'صغير', price: 300 }],
    featured: true,
  },
  {
    id: 'prod_tuna',
    name: 'ساندوتش تونة',
    description: 'تونة عالية الجودة مع قليل من المايونيز والخضروات.',
    category: 'sandwiches',
    imageId: 'tuna-sandwich',
    sizes: [{ name: 'صغير', price: 450 }],
  },
   {
    id: 'prod_falafel',
    name: 'ساندوتش فلافل',
    description: 'فلافل مقرمشة مع سلطة وطحينة.',
    category: 'sandwiches',
    imageId: 'falafel-sandwich',
    sizes: [{ name: 'صغير', price: 350 }],
  },

  // وجبة الإفطار
  {
    id: 'prod_foul',
    name: 'صحن فول',
    description: 'فول مدمس على الطريقة التقليدية مع زيت الزيتون.',
    category: 'breakfast',
    imageId: 'foul-plate',
    sizes: [{ name: 'صغير', price: 500 }],
  },
  {
    id: 'prod_shakshouka',
    name: 'شكشوكة عدني',
    description: 'بيض مخفوق مع الطماطم والبصل والفلفل.',
    category: 'breakfast',
    imageId: 'shakshouka-plate',
    sizes: [{ name: 'صغير', price: 600 }],
    featured: true,
  },
  
  // وجبات الأطفال
  {
    id: 'prod_kids_nuggets',
    name: 'وجبة أطفال (ناجتس)',
    description: 'قطع دجاج ناجتس مقلية مع بطاطس وعصير.',
    category: 'kids',
    imageId: 'kids-meal-nuggets',
    sizes: [{ name: 'صغير', price: 800 }],
  },
   {
    id: 'prod_kids_burger',
    name: 'وجبة أطفال (برجر)',
    description: 'برجر لحم صغير مع بطاطس وعصير.',
    category: 'kids',
    imageId: 'kids-meal-burger',
    sizes: [{ name: 'صغير', price: 900 }],
  },

  // طلبات المناسبات
  {
    id: 'prod_event_juices',
    name: 'قوارير عصائر مشكلة',
    description: 'تشكيلة من قوارير العصائر الطازجة للمناسبات.',
    category: 'events',
    imageId: 'event-juices',
    sizes: [{ name: 'صغير', price: 5000 }],
  },
  {
    id: 'prod_event_sandwiches',
    name: 'بوكس سندوتشات ميني',
    description: 'صندوق يحتوي على تشكيلة من السندوتشات الصغيرة.',
    category: 'events',
    imageId: 'event-sandwiches',
    sizes: [{ name: 'صغير', price: 4000 }],
  },
];

export const STORE_SETTINGS: StoreSettings = {
    name: 'كافتيريا الخير',
    slogan: 'الخير.. طعم الطبيعة في كل رشفة.. كافتيريا الخير غير',
    address: 'اليمن - تعز - دمنة خدير - الكمب - أمام الملك فون وجوار صيدلية العفيفي',
    phone1: '+967730528609',
    phone2: '+967782602676',
    mapsLink: 'https://maps.app.goo.gl/L6wozGC9xj8k6sDb8',
    workingHours: 'خدمة مستمرة على مدار الساعة',
    deliveryPolicy: 'توصيل مجاني داخل المدينة فقط',
    storeStatus: 'open',
};
