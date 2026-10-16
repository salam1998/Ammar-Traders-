import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { STORE_CONTACT } from '../data/products';
import { ProductCategory } from '../types';
import { X, Phone, MapPin, ShieldCheck, Check, Sparkles, ExternalLink } from 'lucide-react';

interface OriginalPosterModalProps {
  onClose: () => void;
  onFilterCategory: (category: ProductCategory) => void;
}

export const OriginalPosterModal: React.FC<OriginalPosterModalProps> = ({
  onClose,
  onFilterCategory
}) => {
  const { isUrdu } = useLanguage();

  const posterCategories: { id: ProductCategory; labelUrdu: string; labelEn: string; icon: string }[] = [
    { id: 'mobiles', labelUrdu: 'موبائل فونز', labelEn: 'Mobiles', icon: '📱' },
    { id: 'smart_tv', labelUrdu: 'LED / سمارٹ ٹی وی', labelEn: 'Smart TV', icon: '📺' },
    { id: 'refrigerator', labelUrdu: 'فریج و ڈیپ فریزر', labelEn: 'Fridge & Freezer', icon: '❄️' },
    { id: 'ac', labelUrdu: 'انورٹر اے سی', labelEn: 'Inverter AC', icon: '🌬️' },
    { id: 'washing_machine', labelUrdu: 'واشنگ مشین', labelEn: 'Washing Machine', icon: '🧺' },
    { id: 'appliances', labelUrdu: 'فینز و اوون', labelEn: 'Fans & Ovens', icon: '🌀' },
    { id: 'bikes', labelUrdu: 'بائیکس', labelEn: 'Motorbikes', icon: '🏍️' },
  ];

  const brandLogos = [
    'Samsung', 'Infinix', 'Vivo', 'Oppo', 'Realme', 'TCL', 'Haier', 'Gree', 'Honda', 'Daewoo', 'PEL'
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border-2 border-amber-500/40 text-white my-auto relative">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Digital Poster Frame Container */}
        <div className="p-4 sm:p-7 space-y-6 bg-gradient-to-b from-sky-950 via-slate-900 to-slate-950 rounded-3xl relative overflow-hidden">
          
          {/* Ambient Poster Lighting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-amber-500/15 blur-3xl pointer-events-none" />

          {/* Top Poster Arc & Slogan */}
          <div className="text-center space-y-2 border-b border-amber-500/20 pb-5">
            <div className="flex items-center justify-between text-xs sm:text-sm text-amber-300 font-semibold px-2">
              <span className="font-urdu">آپ کے اعتماد کی ہماری پہچان</span>
              <span className="font-urdu">معیاری بھی، قیمت بھی، آسان اقساط بھی</span>
            </div>

            {/* Poster Main Emblem Brand Title */}
            <div className="pt-2">
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 drop-shadow-md">
                AMMAR
              </h2>
              <div className="inline-block px-4 py-1.5 mt-1 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white font-extrabold text-sm sm:text-base tracking-widest shadow-md">
                TRADERS & ELECTRONICS
              </div>
              <p className="text-amber-300 text-xs sm:text-sm font-urdu mt-1.5 font-bold">
                عمار ٹریڈرز اینڈ الیکٹرانکس — صادق آباد
              </p>
            </div>

            {/* Poster Sub-strip categories */}
            <p className="text-[11px] sm:text-xs text-slate-300 tracking-wider">
              Mobiles | LED | Smart TV | Fridge | AC | Washing Machine | Home Appliances | Bikes & More...
            </p>
          </div>

          {/* Golden Center Crescent Banner */}
          <div className="bg-gradient-to-r from-amber-600/30 via-amber-500/40 to-amber-600/30 border border-amber-400/50 p-4 rounded-2xl text-center shadow-lg">
            <span className="text-xs text-amber-300 uppercase tracking-widest block font-bold">
              کیش بھی · اقساط بھی
            </span>
            <p className="text-lg sm:text-2xl font-black text-white font-urdu mt-0.5 leading-relaxed">
              جدید بھی، معیاری بھی، قسطوں پر ہر خواب اب حقیقت
            </p>
          </div>

          {/* Interactive Category Icons (Clickable to jump to catalog) */}
          <div>
            <p className="text-center text-xs text-amber-300/80 mb-2.5 font-semibold">
              {isUrdu ? 'پروڈکٹس دیکھنے کے لیے کسی بھی کیٹیگری پر کلک کریں:' : 'Click any category to browse catalog:'}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {posterCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    onFilterCategory(cat.id);
                    onClose();
                  }}
                  className="p-3 bg-slate-800/90 hover:bg-amber-500/20 hover:border-amber-400 border border-slate-700/80 rounded-xl text-center transition-all cursor-pointer group"
                >
                  <span className="text-2xl block mb-1">{cat.icon}</span>
                  <span className="text-xs font-bold text-white group-hover:text-amber-300 block">
                    {isUrdu ? cat.labelUrdu : cat.labelEn}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Poster Dual Boxes: Special Benefits & Installment Ease */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            
            {/* Box 1: ہمارے خاص فوائد */}
            <div className="bg-slate-800/90 border border-slate-700 p-4 rounded-2xl space-y-2">
              <h4 className="font-bold text-amber-400 font-urdu text-base border-b border-slate-700 pb-1.5 flex items-center justify-between">
                <span>ہمارے خاص فوائد</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </h4>
              <ul className="space-y-1.5 text-slate-300 text-xs">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>معیاری اور اصل برانڈز کی ضمانت</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>ہر چیز پر واضح اور بعد از فروخت سروس</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>مکمل انسٹالمنٹ پلان (بغیر کسی چھپی چارج)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>تجربہ کار اور خوش اخلاق عملہ</span>
                </li>
              </ul>
            </div>

            {/* Box 2: قسطوں پر آسان خریدیں */}
            <div className="bg-slate-800/90 border border-slate-700 p-4 rounded-2xl space-y-2">
              <h4 className="font-bold text-amber-400 font-urdu text-base border-b border-slate-700 pb-1.5 flex items-center justify-between">
                <span>قسطوں پر آسان خریدیں</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </h4>
              <ul className="space-y-1.5 text-slate-300 text-xs">
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-400">★</span>
                  <span>بغیر کسی اضافی فیس کے شفافیت</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-400">★</span>
                  <span>معقول ترین ایڈوانس اور آسان ماہانہ اقساط</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-400">★</span>
                  <span>جلد منظوری (سیم ڈے کلیئرنس)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-400">★</span>
                  <span>آپ کی سہولت، ہماری ترجیح</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Brands Strip */}
          <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
            <span className="text-[11px] text-amber-300 font-bold uppercase tracking-wider block mb-2">
              ہمارے برانڈز (Available Authorized Brands)
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-slate-200">
              {brandLogos.map((brand) => (
                <span key={brand} className="px-2.5 py-1 bg-slate-800 rounded-md border border-slate-700 text-slate-300">
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Poster Footer: Hotline & Address */}
          <div className="bg-amber-500 text-slate-950 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 shrink-0" />
              <div>
                <span className="text-xs uppercase font-extrabold block">کال یا واٹس ایپ کریں</span>
                <span className="text-lg font-black font-mono tabular-nums">{STORE_CONTACT.phone}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-right sm:text-left">
              <MapPin className="w-5 h-5 shrink-0" />
              <div>
                <span className="text-xs font-bold block">{STORE_CONTACT.urduAddress}</span>
                <span className="text-[11px] opacity-90 block">Pulley JDW Road, Sadiqabad</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
