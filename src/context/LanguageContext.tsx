import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isUrdu: boolean;
  t: (key: string) => string;
}

const TRANSLATIONS: Record<string, { en: string; ur: string }> = {
  // Brand & Nav
  brandName: { en: 'Ammar Traders & Electronics', ur: 'عمار ٹریڈرز اینڈ الیکٹرانکس' },
  brandTagline: { en: 'Your Trust is Our Reputation', ur: 'آپ کے اعتماد کی ہماری پہچان' },
  navCatalog: { en: 'Catalog', ur: 'مصنوعات' },
  navCalculator: { en: 'Installment Calculator', ur: 'قسط کیلکولیٹر' },
  navBenefits: { en: 'Store Guarantees', ur: 'ہماری خصوصیات' },
  navTrack: { en: 'Track Booking', ur: 'آرڈر ٹریک کریں' },
  navPoster: { en: 'View Poster', ur: 'اصل اشتہار' },
  navIntegration: { en: 'Website Integration', ur: 'ویب سائٹ ایمبیڈ' },
  callNow: { en: 'Call / WhatsApp', ur: 'رابطہ کریں' },
  
  // Hero
  heroSlogan1: { en: 'Quality, Best Price & Easy Installments', ur: 'معیاری بھی، قیمت بھی، آسان اقساط بھی' },
  heroSlogan2: { en: 'Cash & Installments: Every Dream Now Reality', ur: 'جدید بھی، معیاری بھی، قسطوں پر ہر خواب اب حقیقت' },
  heroSubtext: { 
    en: 'Sadiqabad’s premier electronics and motorcycle destination. Purchase 100% genuine appliances and brand new motorbikes on immediate cash or flexible monthly installment plans.', 
    ur: 'صادق آباد کا معتبر الیکٹرانکس اور بائیکس شو روم۔ جدید ترین اپلائنسز، سمارٹ ٹی وی، فریج، اے سی اور نئی بائیکس کیش پر یا آسان ماہانہ اقساط پر فوری حاصل کریں۔' 
  },
  heroCtaCalc: { en: 'Calculate Installment', ur: 'ماہانہ قسط معلوم کریں' },
  heroCtaBrowse: { en: 'Explore Products', ur: 'تمام ورائٹی دیکھیں' },
  heroGuaranteeFast: { en: 'Fast Home Delivery', ur: 'فوری ڈیلیوری' },
  heroGuaranteeInstall: { en: 'Free Installation', ur: 'مفت انسٹالیشن' },
  heroGuaranteeOriginal: { en: '100% Original Brands', ur: 'اصل برانڈز کی ضمانت' },
  heroGuaranteeWarranty: { en: 'Official Warranty', ur: 'وارنٹی کے ساتھ' },

  // Categories
  catAll: { en: 'All Categories', ur: 'تمام کیٹیگریز' },
  catMobiles: { en: 'Mobile Phones', ur: 'موبائل فونز' },
  catSmartTv: { en: 'LED / Smart TVs', ur: 'سمارٹ ایل ای ڈی' },
  catFridge: { en: 'Refrigerators & Freezers', ur: 'فریج و ڈیپ فریزر' },
  catAc: { en: 'Inverter ACs', ur: 'انورٹر اے سی' },
  catWashing: { en: 'Washing Machines', ur: 'واشنگ مشینیں' },
  catBikes: { en: 'Motorbikes', ur: 'بائیکس' },
  catAppliances: { en: 'Home Appliances', ur: 'ہوم اپلائنسز' },

  // Calculator
  calcHeading: { en: 'Instant Installment Plan Calculator', ur: 'آسان قسط کیلکولیٹر' },
  calcSubheading: { 
    en: 'Pick your product, choose your preferred down payment and tenure to see exact transparent monthly dues.',
    ur: 'اپنی پسندیدہ پروڈکٹ منتخب کریں، ایڈوانس رقم اور ماہانہ مدت طے کر کے شفاف قسط شیڈول جانیں۔'
  },
  selectProduct: { en: 'Select Product', ur: 'پروڈکٹ منتخب کریں' },
  downPayment: { en: 'Down Payment (Advance)', ur: 'ایڈوانس پیشگی رقم' },
  selectTenure: { en: 'Tenure Duration', ur: 'اقساط کی مدت' },
  months: { en: 'Months', ur: 'ماہ' },
  cashPrice: { en: 'Cash Retail Price', ur: 'کیش قیمت' },
  advanceAmount: { en: 'Advance to Pay', ur: 'ادا طلب ایڈوانس' },
  monthlyDues: { en: 'Monthly Installment', ur: 'ماہانہ قسط' },
  totalPayable: { en: 'Total Financing Price', ur: 'کل اقساط قیمت' },
  zeroMarkupNote: { en: 'Special 0% markup available on 3-month plans!', ur: '3 ماہ کے پلان پر 0 فیصد اضافی چارج!' },
  applyThisPlan: { en: 'Book This Installment Plan', ur: 'اس قسط پر بُک کریں' },

  // Catalog
  catalogTitle: { en: 'Featured Showroom Inventory', ur: 'شو روم کا تازہ ترین اسٹاک' },
  catalogSub: { en: 'Genuine appliances and bikes available for immediate booking on cash or monthly installments.', ur: '100% اصل مصنوعات کیش یا آسان اقساط پر بکنگ کے لیے دستیاب۔' },
  searchPlaceholder: { en: 'Search brand, model, or product...', ur: 'ماڈل، برانڈ یا نام تلاش کریں...' },
  allBrands: { en: 'All Brands', ur: 'تمام برانڈز' },
  bookInstallment: { en: 'Book on Installment', ur: 'قسطوں پر بک کریں' },
  buyCash: { en: 'Buy on Cash', ur: 'کیش پر خریدیں' },
  startingFrom: { en: 'Installments starting from', ur: 'ماہانہ قسط شروع از' },
  perMonth: { en: '/ month', ur: 'ماہانہ' },
  viewSpecs: { en: 'Specs & Details', ur: 'تفصیلات دیکھیں' },

  // Booking Modal
  bookingModalTitle: { en: 'Complete Your Showroom Booking', ur: 'شو روم بکنگ فارم' },
  customerInfo: { en: 'Customer Information', ur: 'خریدار کی معلومات' },
  fullName: { en: 'Full Name', ur: 'پورا نام' },
  phoneNumber: { en: 'WhatsApp / Mobile Number', ur: 'واٹس ایپ یا موبائل نمبر' },
  cnicNumber: { en: 'CNIC / National ID Number', ur: 'شناختی کارڈ نمبر (CNIC)' },
  cityArea: { en: 'City & Tehsil', ur: 'شہر / تحصیل' },
  deliveryAddress: { en: 'Complete Delivery Address', ur: 'مکمل پتہ برائے ڈیلیوری' },
  chooseMode: { en: 'Choose Purchase Option', ur: 'خریداری کا طریقہ منتخب کریں' },
  cashPurchase: { en: 'Full Cash Purchase (with instant discount)', ur: 'مکمل کیش ادائیگی (فوری رعایت کے ساتھ)' },
  installmentPurchase: { en: 'Easy Monthly Installments', ur: 'آسان ماہانہ اقساط' },
  guarantorNote: { 
    en: 'Note: For installment plans, 1 local guarantor CNIC copy & utility bill verification is confirmed upon doorstep delivery or showroom visit.', 
    ur: 'نوٹ: اقساط کے لیے ایک ضامن کا شناختی کارڈ اور بجلی کا بل تصدیق کے وقت درکار ہوگا۔' 
  },
  submitAndWhatsApp: { en: 'Confirm & Send to WhatsApp', ur: 'بکنگ کنفرم کریں اور واٹس ایپ بھیجیں' },
  submitBooking: { en: 'Save Booking Application', ur: 'بکنگ محفوظ کریں' },

  // Benefits
  benefitsHeading: { en: 'Why Customers Trust Ammar Traders', ur: 'ہمارے خاص فوائد اور کسٹمر اعتماد' },
  benefitsSub: { en: 'Proudly serving Sadiqabad and surrounding areas with verified authentic electronics and honest financing.', ur: 'صادق آباد اور ملحقہ علاقوں میں اصل الیکٹرانکس اور بائیکس کا سب سے معتبر ادارہ۔' },

  // Embed & Integration
  embedTitle: { en: 'Website Integration & Embed Code', ur: 'ویب سائٹ انٹیگریشن و ایمبیڈ' },
  embedSub: { en: 'Easily embed our live booking catalog or installment calculator widget onto any website, portal, or blog.', ur: 'ہماری لائیو پروڈکٹ بکنگ یا قسط کیلکولیٹر کو اپنی کسی بھی ویب سائٹ میں باآسانی لگائیں۔' },
  embedWidgetType: { en: 'Widget Mode', ur: 'وجیٹ موڈ' },
  embedCalculator: { en: 'Installment Calculator Widget', ur: 'قسط کیلکولیٹر وجیٹ' },
  embedCatalog: { en: 'Product Booking Card Widget', ur: 'پروڈکٹ بکنگ وجیٹ' },
  copyCode: { en: 'Copy Embed Code', ur: 'کوڈ کاپی کریں' },
  codeCopied: { en: 'Copied to Clipboard!', ur: 'کوڈ کاپی ہو گیا!' },

  // Tracking
  trackingTitle: { en: 'Track Your Showroom Booking', ur: 'اپنی بکنگ اور اقساط ٹریک کریں' },
  enterPhoneOrToken: { en: 'Enter your Booking Token or Phone Number', ur: 'بکنگ ٹوکن یا موبائل نمبر درج کریں' },
  searchBooking: { en: 'Find Booking', ur: 'تلاش کریں' },
  noBookingsFound: { en: 'No existing booking found with these details.', ur: 'اس نمبر یا ٹوکن پر کوئی بکنگ موجود نہیں ہے۔' },
  recentBookings: { en: 'Your Saved Bookings', ur: 'آپ کی حالیہ بکنگز' },
  printReceipt: { en: 'Print Booking Receipt', ur: 'رسید پرنٹ کریں' },

  // Contact Footer
  storeLocation: { en: 'Showroom Location', ur: 'شو روم کا پتہ' },
  sadiqabadAddress: { en: 'Pulley JDW Road, Sadiqabad, District Rahim Yar Khan', ur: 'پل جے ڈی ڈبلیو روڈ، صادق آباد، ضلع رحیم یار خان' },
  directHotline: { en: 'Direct Hotline & WhatsApp', ur: 'فون و واٹس ایپ' },
  showroomHours: { en: 'Business Hours', ur: 'دکان کے اوقات' },
  footerRights: { en: 'Ammar Traders & Electronics. All rights reserved.', ur: 'عمار ٹریڈرز اینڈ الیکٹرانکس۔ جملہ حقوق محفوظ ہیں۔' }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ur'); // Default Urdu to match original poster aesthetic

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'ur' ? 'en' : 'ur'));
  };

  useEffect(() => {
    // Sync document HTML direction and lang attribute
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ur' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string): string => {
    if (!TRANSLATIONS[key]) return key;
    return TRANSLATIONS[key][language] || TRANSLATIONS[key].en;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isUrdu: language === 'ur',
        t
      }}
    >
      <div className={language === 'ur' ? 'font-urdu-clean text-right' : 'font-sans text-left'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
