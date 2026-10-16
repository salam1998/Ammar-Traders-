import { Product } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_electronics_showroom_1792145276920.jpg';

export const PRODUCTS: Product[] = [
  // --- Smart TVs & LEDs ---
  {
    id: 'prod-tv-01',
    name: 'Samsung 65" Crystal UHD 4K Smart TV',
    urduName: 'سام سنگ 65 انچ کرسٹل یو ایچ ڈی 4K سمارٹ ٹی وی',
    category: 'smart_tv',
    brand: 'Samsung',
    cashPrice: 215000,
    marketPrice: 235000,
    image: '/src/assets/images/product_smart_tv_1792145276853.jpg',
    badge: '4K Ultra HD',
    urduBadge: '4K الٹرا ایچ ڈی',
    specs: {
      'Screen Size': '65 Inches',
      'Resolution': '3840 x 2160 (4K UHD)',
      'Smart OS': 'Tizen with YouTube & Netflix',
      'Sound': '20W Dolby Digital Plus',
      'Connectivity': '3x HDMI, 2x USB, Wi-Fi, Bluetooth'
    },
    urduSpecs: {
      'سکرین سائز': '65 انچ',
      'ریزولوشن': '3840 x 2160 (4K UHD)',
      'آپریٹنگ سسٹم': 'ٹائزن اسمارٹ، یوٹیوب و نیٹ فلکس',
      'آواز': '20 واٹ ڈولبی ڈیجیٹل پلس',
      'کنیکٹیویٹی': '3x HDMI, 2x USB, وائی فائی'
    },
    warranty: '2 Years Official Brand Warranty',
    urduWarranty: '2 سال آفیشل برانڈ وارنٹی',
    featured: true,
    minDownPaymentPercent: 20,
    availableTenures: [3, 6, 9, 12, 18, 24]
  },
  {
    id: 'prod-tv-02',
    name: 'TCL 55" Bezel-less Google 4K LED TV',
    urduName: 'ٹی سی ایل 55 انچ بغیر بارڈر 4K گوگل ایل ای ڈی ٹی وی',
    category: 'smart_tv',
    brand: 'TCL',
    cashPrice: 135000,
    marketPrice: 148000,
    image: '/src/assets/images/product_smart_tv_1792145276853.jpg',
    badge: 'Best Seller',
    urduBadge: 'سب سے زیادہ مقبول',
    specs: {
      'Screen Size': '55 Inches',
      'Display': 'HDR 10+ / Dolby Audio',
      'OS': 'Google TV with Play Store',
      'Voice Remote': 'Included Google Assistant'
    },
    urduSpecs: {
      'سکرین سائز': '55 انچ',
      'ڈسپلے': 'HDR 10+ اور ڈولبی آڈیو',
      'سسٹم': 'گوگل ٹی وی ود پلے اسٹور',
      'ریموٹ': 'وائس کمانڈ گوگل اسسٹنٹ'
    },
    warranty: '2 Years Panel & Parts Warranty',
    urduWarranty: '2 سال پینل اور پارٹس وارنٹی',
    featured: false,
    minDownPaymentPercent: 15,
    availableTenures: [3, 6, 12, 18]
  },
  {
    id: 'prod-tv-03',
    name: 'Haier 43" Smart Bezel-less Android TV',
    urduName: 'ہائیر 43 انچ سمارٹ اینڈرائڈ ایل ای ڈی ٹی وی',
    category: 'smart_tv',
    brand: 'Haier',
    cashPrice: 78000,
    marketPrice: 85000,
    image: '/src/assets/images/product_smart_tv_1792145276853.jpg',
    badge: 'Affordable Smart',
    urduBadge: 'کفایتی سمارٹ ٹی وی',
    specs: {
      'Screen Size': '43 Inches',
      'Resolution': 'Full HD 1080p',
      'OS': 'Licensed Android 11',
      'Wi-Fi': 'Built-in Dual Band'
    },
    urduSpecs: {
      'سکرین سائز': '43 انچ',
      'ریزولوشن': 'فل ایچ ڈی 1080p',
      'سسٹم': 'اینڈرائڈ 11 لائسنس یافتہ',
      'وائی فائی': 'بلٹ ان ڈوئل بینڈ'
    },
    warranty: '2 Years Official Warranty',
    urduWarranty: '2 سال آفیشل وارنٹی',
    featured: false,
    minDownPaymentPercent: 15,
    availableTenures: [3, 6, 9, 12]
  },

  // --- Inverter Air Conditioners ---
  {
    id: 'prod-ac-01',
    name: 'Gree 1.5 Ton Fairy Inverter Heat & Cool AC',
    urduName: 'گری 1.5 ٹن فیری انورٹر ہیٹ اینڈ کول ایئرکنڈیشنر',
    category: 'ac',
    brand: 'Gree',
    cashPrice: 188000,
    marketPrice: 205000,
    image: '/src/assets/images/product_inverter_ac_1792145278183.jpg',
    badge: 'T3 Tropical Inverter',
    urduBadge: 'T3 شدید گرمی کے لیے موزوں',
    specs: {
      'Capacity': '1.5 Ton (18000 BTU)',
      'Energy Saving': 'Up to 65% Electricity Saving',
      'Function': 'Heat & Cool (All Seasons)',
      'Compressor': 'T3 High Ambient Heavy Duty',
      'Refrigerant': 'Eco-Friendly R410A'
    },
    urduSpecs: {
      'صلاحیت': '1.5 ٹن (18000 BTU)',
      'بجلی کی بچت': '65 فیصد تک بجلی کی بچت',
      'فنکشن': 'ہیٹ اینڈ کول (گرمی و سردی دونوں)',
      'کمپریسر': 'T3 شدید گرمی پروف کمپریسر',
      'گیس': 'ماحول دوست R410A'
    },
    warranty: '10 Years Compressor + 4 Years PCB Kit',
    urduWarranty: '10 سال کمپریسر + 4 سال کٹ وارنٹی',
    featured: true,
    minDownPaymentPercent: 20,
    availableTenures: [3, 6, 9, 12, 18, 24]
  },
  {
    id: 'prod-ac-02',
    name: 'Haier 1.5 Ton Pearl Inverter Self-Cleaning AC',
    urduName: 'ہائیر 1.5 ٹن پرل انورٹر خودکار صفائی والا اے سی',
    category: 'ac',
    brand: 'Haier',
    cashPrice: 172000,
    marketPrice: 185000,
    image: '/src/assets/images/product_inverter_ac_1792145278183.jpg',
    badge: 'Self Clean Tech',
    urduBadge: 'سیلف کلین ٹیکنالوجی',
    specs: {
      'Capacity': '1.5 Ton',
      'Cleaning': 'One-Touch Cold Expansion Clean',
      'Voltage': 'Runs on Low Voltage (150V)',
      'Warranty': '10 Years Compressor'
    },
    urduSpecs: {
      'صلاحیت': '1.5 ٹن',
      'سیلف کلین': 'ون ٹچ خودکار برف صفائی',
      'وولٹیج': 'کم وولٹیج (150V) پر بھی رواں',
      'وارنٹی': '10 سال کمپریسر وارنٹی'
    },
    warranty: '10 Years Compressor + 1 Year Parts',
    urduWarranty: '10 سال کمپریسر + 1 سال پارٹس',
    featured: false,
    minDownPaymentPercent: 20,
    availableTenures: [3, 6, 12, 18]
  },

  // --- Refrigerators & Deep Freezers ---
  {
    id: 'prod-fridge-01',
    name: 'Dawlance Chrome Inverter Glass Door Refrigerator (16 Cu Ft)',
    urduName: 'ڈاولنس کروم انورٹر گلاس ڈور ریفریجریٹر 16 کیوبک فٹ',
    category: 'refrigerator',
    brand: 'Dawlance',
    cashPrice: 142000,
    marketPrice: 155000,
    image: '/src/assets/images/product_refrigerator_steel_1792145277837.jpg',
    badge: '55% Energy Saving',
    urduBadge: '55 فیصد بجلی بچت',
    specs: {
      'Capacity': '16 Cubic Feet / 450 Liters',
      'Technology': 'Inverter Pro Compressor',
      'Cooling Retention': 'Keeps cool up to 12 hours during outages',
      'Body': 'Tempered Scratch-Proof Mirror Glass'
    },
    urduSpecs: {
      'گنجائش': '16 کیوبک فٹ (450 لیٹر)',
      'ٹیکنالوجی': 'جدید انورٹر پرو کمپریسر',
      'کولنگ تحفظ': 'بجلی بندش پر 12 گھنٹے کولنگ برقرار',
      'باڈی': 'مضبوط سکریچ پروف شیشہ'
    },
    warranty: '12 Years Compressor Warranty',
    urduWarranty: '12 سال کمپریسر وارنٹی',
    featured: true,
    minDownPaymentPercent: 15,
    availableTenures: [3, 6, 9, 12, 18, 24]
  },
  {
    id: 'prod-fridge-02',
    name: 'PEL Double Door Deep Freezer 450 Liters',
    urduName: 'پی ای ایل ڈبل ڈور ڈیپ فریزر 450 لیٹر',
    category: 'refrigerator',
    brand: 'PEL',
    cashPrice: 96000,
    marketPrice: 105000,
    image: '/src/assets/images/product_refrigerator_steel_1792145277837.jpg',
    badge: 'Heavy Cooling',
    urduBadge: 'طاقتور فریزنگ',
    specs: {
      'Lids': 'Dual Glass-sliding + Top Lock Lid',
      'Cooling': 'Rapid Sub-Zero Fast Freeze',
      'Condenser': '100% Pure Copper Tubing'
    },
    urduSpecs: {
      'دروازے': 'ڈبل گلاس سلائیڈنگ + اوپر مضبوط لاک',
      'فریزنگ': 'تیز ترین سب زیرو فریزنگ',
      'کنڈینسر': '100 فیصد خالص تانبا'
    },
    warranty: '10 Years Compressor Warranty',
    urduWarranty: '10 سال کمپریسر وارنٹی',
    featured: false,
    minDownPaymentPercent: 15,
    availableTenures: [3, 6, 9, 12]
  },
  {
    id: 'prod-fridge-03',
    name: 'Haier Side-by-Side Inverter Refrigerator (22 Cu Ft)',
    urduName: 'ہائیر سائیڈ بائی سائیڈ انورٹر فریج 22 کیوبک فٹ',
    category: 'refrigerator',
    brand: 'Haier',
    cashPrice: 285000,
    marketPrice: 310000,
    image: '/src/assets/images/product_refrigerator_steel_1792145277837.jpg',
    badge: 'Executive Series',
    urduBadge: 'لگژری ایگزیکٹو ماڈل',
    specs: {
      'Capacity': '22 Cu Ft Large French Style',
      'Dispenser': 'Exterior Digital Ice & Water',
      'Multi Airflow': '360° Surrounding Cooling'
    },
    urduSpecs: {
      'سائز': '22 کیوبک فٹ کشادہ ماڈل',
      'ڈسپینسر': 'ڈیجیٹل ڈسپلے اور واٹر ڈسپینسر',
      'ایئر فلو': '360 ڈگری یکساں ٹھنڈک'
    },
    warranty: '10 Years Compressor Warranty',
    urduWarranty: '10 سال کمپریسر وارنٹی',
    featured: false,
    minDownPaymentPercent: 25,
    availableTenures: [6, 12, 18, 24]
  },

  // --- Motorbikes ---
  {
    id: 'prod-bike-01',
    name: 'Honda CD 70cc 2026 Model (Brand New)',
    urduName: 'ہونڈا سی ڈی 70cc ماڈل 2026 (بالکل نیا)',
    category: 'bikes',
    brand: 'Honda',
    cashPrice: 157900,
    marketPrice: 162000,
    image: '/src/assets/images/product_commuter_bike_1792145276890.jpg',
    badge: 'Pakistan #1 Commuter',
    urduBadge: 'پاکستان کی سب سے بھروسہ مند بائیک',
    specs: {
      'Engine': '4-Stroke OHC Air-Cooled 70cc',
      'Mileage': '65+ KM per Liter Fuel Economy',
      'Tank Capacity': '8.5 Liters (with 1.0L Reserve)',
      'Transmission': '4-Speed Constant Mesh',
      'Condition': 'Brand New Showroom Delivery'
    },
    urduSpecs: {
      'انجن': '4 اسٹروک ایئر کولڈ 70 سی سی',
      'پیٹرول مائلیج': '65+ کلومیٹر فی لیٹر زبردست اوسط',
      'فیول ٹینک': '8.5 لیٹر (1 لیٹر ریزرو)',
      'گیئر': '4 اسپیڈ ٹرانسمیشن',
      'حالت': 'زیرو میٹر برانڈ نیو شو روم ڈلیوری'
    },
    warranty: 'Official Atlas Honda Warranty & 3 Free Tunings',
    urduWarranty: 'اٹلس ہونڈا آفیشل وارنٹی + 3 مفت ٹیوننگز',
    featured: true,
    minDownPaymentPercent: 20,
    availableTenures: [6, 9, 12, 18, 24]
  },
  {
    id: 'prod-bike-02',
    name: 'Honda CG 125cc Special Edition (Self Start / 5-Speed)',
    urduName: 'ہونڈا سی جی 125cc اسپیشل ایڈیشن (سیلف اسٹارٹ / 5 گیئر)',
    category: 'bikes',
    brand: 'Honda',
    cashPrice: 282900,
    marketPrice: 295000,
    image: '/src/assets/images/product_commuter_bike_1792145276890.jpg',
    badge: 'Power & Sound',
    urduBadge: 'پاور فل ساؤنڈ اور رفتار',
    specs: {
      'Engine': '4-Stroke 125cc OHV Engine',
      'Starting': 'Self Start + Kick Start',
      'Gears': '5-Speed Smooth Gearbox',
      'Front Brake': 'Disc Brake High Safety'
    },
    urduSpecs: {
      'انجن': 'طاقتور 125 سی سی OHV انجن',
      'اسٹارٹنگ': 'سیلف اسٹارٹ بمعہ کک',
      'گیئر': '5 اسپیڈ اسموتھ گیئر باکس',
      'بریک': 'فرنٹ ڈسک بریک مضبوط گرپ'
    },
    warranty: 'Official Atlas Honda Warranty',
    urduWarranty: 'اٹلس ہونڈا آفیشل وارنٹی بک',
    featured: false,
    minDownPaymentPercent: 25,
    availableTenures: [6, 12, 18, 24]
  },

  // --- Washing Machines & Fans ---
  {
    id: 'prod-wash-01',
    name: 'Super Asia 10KG Twin Tub Jet Washer & Spinner',
    urduName: 'سپر ایشیا 10 کلو گرام ٹوئن ٹب جیٹ واشر و اسپنر',
    category: 'washing_machine',
    brand: 'Super Asia',
    cashPrice: 48000,
    marketPrice: 53000,
    image: '/src/assets/images/hero_electronics_showroom_1792145276920.jpg',
    badge: 'Heavy Rust-Proof',
    urduBadge: 'زنگ پروف مضبوط باڈی',
    specs: {
      'Capacity': '10 KG Heavy Laundry Load',
      'Motor': 'Powerful Pure Copper Motor',
      'Pulsator': 'Deep Clean Waterfall Pulsator',
      'Body': 'Double Layer Shock Proof Plastic'
    },
    urduSpecs: {
      'صلاحیت': '10 کلو گرام بڑا لوڈ',
      'موٹر': '100 فیصد خالص کاپر موٹر',
      'دھلائی': 'ڈیپ کلین واٹر فال پلسیٹر',
      'باڈی': 'شاک پروف ڈبل باڈی پلاسٹک'
    },
    warranty: '2 Years Motor & Parts Warranty',
    urduWarranty: '2 سال موٹر اور پارٹس وارنٹی',
    featured: false,
    minDownPaymentPercent: 15,
    availableTenures: [3, 6, 9, 12]
  },
  {
    id: 'prod-wash-02',
    name: 'Haier 9KG Fully Automatic Top Load Inverter Washing Machine',
    urduName: 'ہائیر 9 کلو مکمل آٹومیٹک ٹاپ لوڈ انورٹر واشنگ مشین',
    category: 'washing_machine',
    brand: 'Haier',
    cashPrice: 94000,
    marketPrice: 104000,
    image: '/src/assets/images/hero_electronics_showroom_1792145276920.jpg',
    badge: 'Fully Automatic',
    urduBadge: 'مکمل خودکار انورٹر',
    specs: {
      'Washing Type': 'One Touch Smart Fuzzy Logic',
      'Drum': 'Pillow Drum Fabric Care',
      'Water Pressure': 'Near Zero Water Pressure Tech'
    },
    urduSpecs: {
      'فنکشن': 'ون ٹچ خودکار اسمارٹ دھلائی',
      'ڈرم': 'کپڑوں کی حفاظت والا پلو ڈرم',
      'پریشر': 'کم پانی پریشر پر بھی مکمل کارکردگی'
    },
    warranty: '10 Years Motor Warranty',
    urduWarranty: '10 سال موٹر آفیشل وارنٹی',
    featured: false,
    minDownPaymentPercent: 15,
    availableTenures: [3, 6, 12, 18]
  },

  // --- Mobile Phones ---
  {
    id: 'prod-mob-01',
    name: 'Samsung Galaxy A55 5G (8GB RAM / 256GB Storage)',
    urduName: 'سام سنگ گلیکسی A55 5G (8 جی بی ریم / 256 جی بی)',
    category: 'mobiles',
    brand: 'Samsung',
    cashPrice: 132000,
    marketPrice: 139000,
    image: '/src/assets/images/hero_electronics_showroom_1792145276920.jpg',
    badge: 'Official PTA Approved',
    urduBadge: 'پی ٹی اے تصدیق شدہ',
    specs: {
      'Camera': '50MP OIS Triple Camera + 32MP Selfie',
      'Display': '6.6" Super AMOLED 120Hz Gorilla Glass Victus+',
      'Battery': '5000 mAh with 25W Fast Charging',
      'Water Resistance': 'IP67 Dust & Water Proof'
    },
    urduSpecs: {
      'کیمرہ': '50 میگا پکسل OIS ٹرپل کیمرہ + 32MP سیلفی',
      'ڈسپلے': '6.6 انچ سپر امولیڈ 120Hz',
      'بیٹری': '5000 ایم اے ایچ 25 واٹ فاسٹ چارجنگ',
      'حفاظت': 'IP67 پانی اور دھول سے محفوظ'
    },
    warranty: '1 Year Official Samsung Pakistan Warranty',
    urduWarranty: '1 سال سام سنگ پاکستان آفیشل وارنٹی',
    featured: true,
    minDownPaymentPercent: 20,
    availableTenures: [3, 6, 9, 12]
  },
  {
    id: 'prod-mob-02',
    name: 'Infinix Note 40 Pro (12GB RAM / 256GB - 70W Fast Charge)',
    urduName: 'انفنکس نوٹ 40 پرو (12 جی بی ریم / 256 جی بی - 70 واٹ فاسٹ چارج)',
    category: 'mobiles',
    brand: 'Infinix',
    cashPrice: 69999,
    marketPrice: 75000,
    image: '/src/assets/images/hero_electronics_showroom_1792145276920.jpg',
    badge: 'Wireless MagCharge',
    urduBadge: 'وائرلیس میگ چارج',
    specs: {
      'Display': '120Hz 3D Curved AMOLED',
      'Charging': '70W Wired + 20W Wireless MagCharge',
      'Camera': '108MP Super-Zoom OIS Camera',
      'Audio': 'Dual Stereo Speakers tuned by JBL'
    },
    urduSpecs: {
      'ڈسپلے': '120 ہرٹز مڑا ہوا امولیڈ ڈسپلے',
      'چارجنگ': '70 واٹ کیبل + 20 واٹ وائرلیس چارج',
      'کیمرہ': '108 میگا پکسل OIS کیمرہ',
      'آڈیو': 'جے بی ایل ڈوئل اسپیکرز'
    },
    warranty: '1 Year Brand Warranty + PTA Approved',
    urduWarranty: '1 سال برانڈ وارنٹی بمعہ پی ٹی اے',
    featured: false,
    minDownPaymentPercent: 20,
    availableTenures: [3, 6, 9, 12]
  },
  {
    id: 'prod-mob-03',
    name: 'Vivo V30 5G (Aura Light Portrait / 12GB + 256GB)',
    urduName: 'ویوو V30 5G (اورا لائٹ پورٹریٹ / 12 جی بی ریم)',
    category: 'mobiles',
    brand: 'Vivo',
    cashPrice: 139999,
    marketPrice: 147000,
    image: '/src/assets/images/hero_electronics_showroom_1792145276920.jpg',
    badge: 'Aura Light Camera',
    urduBadge: 'اسٹوڈیو پورٹریٹ کیمرہ',
    specs: {
      'Portrait': 'Smart Color Temperature Aura Light',
      'Front Camera': '50MP AF Ultra-Wide Selfie',
      'Processor': 'Snapdragon 7 Gen 3 (4nm)',
      'Charging': '80W FlashCharge'
    },
    urduSpecs: {
      'پورٹریٹ': 'اسمارٹ اورا لائٹ کیمرہ',
      'فرنٹ کیمرہ': '50 میگا پکسل الٹرا وائیڈ سیلفی',
      'پروسیسر': 'اسنیپ ڈریگن 7 Gen 3 طاقتور چپ',
      'چارجنگ': '80 واٹ فلیش چارج'
    },
    warranty: '1 Year Official Warranty',
    urduWarranty: '1 سال آفیشل وارنٹی',
    featured: false,
    minDownPaymentPercent: 20,
    availableTenures: [3, 6, 9, 12]
  },

  // --- Home & Kitchen Appliances ---
  {
    id: 'prod-app-01',
    name: 'Dawlance 30L Microwave Oven with Baking & Grill',
    urduName: 'ڈاولنس 30 لیٹر مائیکرو ویو اوون بمعہ بیکنگ و گرل',
    category: 'appliances',
    brand: 'Dawlance',
    cashPrice: 38500,
    marketPrice: 42000,
    image: '/src/assets/images/hero_electronics_showroom_1792145276920.jpg',
    badge: 'Baking & Convection',
    urduBadge: 'بیکنگ اور گرل',
    specs: {
      'Capacity': '30 Liters Spacious Cavity',
      'Functions': 'Baking, Grilling, Defrosting, Reheating',
      'Presets': '10 Built-in Pakistani Cooking Menus'
    },
    urduSpecs: {
      'گنجائش': '30 لیٹر کشادہ اوون',
      'فنکشنز': 'بیکنگ، گرلنگ، ڈی فراسٹ، گرم کرنا',
      'مینو': '10 خودکار پاکستانی کھانے کے مینو'
    },
    warranty: '1 Year Magnetron & Parts Warranty',
    urduWarranty: '1 سال میگنیٹران و پارٹس وارنٹی',
    featured: false,
    minDownPaymentPercent: 15,
    availableTenures: [3, 6, 9, 12]
  },
  {
    id: 'prod-app-02',
    name: 'Anex Deluxe 4-in-1 Juicer, Blender, Grinder & Mincer',
    urduName: 'اینکس ڈیلکس 4 ان 1 جوسر، بلینڈر، گرائنڈر اور قیمہ مشین',
    category: 'appliances',
    brand: 'Anex',
    cashPrice: 19500,
    marketPrice: 22000,
    image: '/src/assets/images/hero_electronics_showroom_1792145276920.jpg',
    badge: 'Unbreakable Jar',
    urduBadge: 'ناٹوٹنے والا مضبوط جگ',
    specs: {
      'Power': '800W Heavy Duty Motor with Overheat Protection',
      'Blades': 'Stainless Steel Precision Cutters',
      'Attachments': 'Juicer Extractor, Glass Blender, Spice Grinder, Meat Mincer'
    },
    urduSpecs: {
      'پاور': '800 واٹ طاقتور موٹر اوورہیٹ پروٹیکشن کے ساتھ',
      'بلیڈ': 'سٹین لیس اسٹیل تیز دھار بلیڈز',
      'حصص': 'جوسر، بلینڈر جگ، مسالہ گرائنڈر، قیمہ مشین'
    },
    warranty: '2 Years Official Warranty',
    urduWarranty: '2 سال آفیشل وارنٹی',
    featured: false,
    minDownPaymentPercent: 15,
    availableTenures: [3, 6]
  },
  {
    id: 'prod-app-03',
    name: 'Pak Fan Deluxe 56" Energy Saver Ceiling Fan',
    urduName: 'پاک فین ڈیلکس 56 انچ بجلی بچانے والا چھت کا پنکھا',
    category: 'appliances',
    brand: 'Pak Fan',
    cashPrice: 12500,
    marketPrice: 14000,
    image: '/src/assets/images/hero_electronics_showroom_1792145276920.jpg',
    badge: 'Pure Copper 99.9%',
    urduBadge: 'خالص تانبا وائرنگ',
    specs: {
      'Sweep': '56 Inches (1400mm)',
      'Winding': '99.99% Pure Electrolytic Copper Wire',
      'Air Delivery': '310 m³/min Ultra High Air Throw'
    },
    urduSpecs: {
      'سائز': '56 انچ (1400 ملی میٹر)',
      'وائنڈنگ': '99.99 فیصد خالص الیکٹرولائٹک تانبا',
      'ہوا کا دباؤ': '310 کیوبک میٹر فی منٹ تیز ترین ہوا'
    },
    warranty: '3 Years Replacement Warranty',
    urduWarranty: '3 سال تبدیلی کی وارنٹی',
    featured: false,
    minDownPaymentPercent: 15,
    availableTenures: [3, 6]
  }
];

export const STORE_CONTACT = {
  name: 'Ammar Traders & Electronics',
  urduName: 'عمار ٹریڈرز اینڈ الیکٹرانکس',
  phone: '0321 6702875',
  whatsappRaw: '923216702875',
  address: 'Pulley JDW Road, Sadiqabad, District Rahim Yar Khan, Punjab, Pakistan',
  urduAddress: 'پل جے ڈی ڈبلیو روڈ، صادق آباد، ضلع رحیم یار خان',
  timings: 'Monday to Sunday: 9:00 AM – 10:00 PM (Friday break: 1:00 PM – 3:00 PM)',
  urduTimings: 'پیر تا اتوار: صبح 9 بجے سے رات 10 بجے تک (جمعہ وقفہ 1 تا 3 بجے)',
  guarantees: [
    {
      title: '100% Original Brand Guarantee',
      urduTitle: 'معیاری اور اصل برانڈز کی ضمانت',
      desc: 'All products sourced directly from authorized manufacturers with official company warranties.'
    },
    {
      title: 'Free Home Delivery & Installation',
      urduTitle: 'مفت انسٹالیشن اور فوری ڈیلیوری',
      desc: 'Safe doorstep transit across Sadiqabad and expert appliance mounting at zero extra cost.'
    },
    {
      title: 'Zero Hidden Fees & Transparent Terms',
      urduTitle: 'مکمل انسٹالمنٹ پلان بغیر کسی چھپی چارج کے',
      desc: 'Simple monthly schedule with clear down payment and zero surprise surcharges.'
    },
    {
      title: 'Fast Approval in Minutes',
      urduTitle: 'آسان اقساط اور جلد منظوری کا نظام',
      desc: 'Rapid physical or digital verification with minimal documentation.'
    }
  ]
};
