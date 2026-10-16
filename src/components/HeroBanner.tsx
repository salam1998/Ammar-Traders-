import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HERO_IMAGE, STORE_CONTACT } from '../data/products';
import { Calculator, ShoppingBag, ShieldCheck, Truck, Wrench, Clock, MapPin, Eye } from 'lucide-react';

interface HeroBannerProps {
  onOpenOriginalPoster: () => void;
  onExploreClick: () => void;
  onCalculateClick: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onOpenOriginalPoster,
  onExploreClick,
  onCalculateClick
}) => {
  const { isUrdu, t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden py-12 md:py-18 border-b border-slate-800">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.12),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(30,58,138,0.2),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Grid: Value Proposition + Live Showroom Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Column 1: Slogans, Trust & Direct CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location & Trust Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs md:text-sm text-amber-400 font-medium">
              <MapPin className="w-4 h-4 shrink-0 text-amber-400" />
              <span>{isUrdu ? STORE_CONTACT.urduAddress : STORE_CONTACT.address}</span>
            </div>

            {/* Poster Main Slogans */}
            <div className="space-y-3">
              <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-md text-amber-300 font-semibold text-xs tracking-wider">
                {isUrdu ? 'آپ کے اعتماد کی ہماری پہچان' : 'Your Trust, Our Recognition'}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {isUrdu ? (
                  <span className="font-urdu leading-relaxed">
                    جدید بھی، معیاری بھی، <br className="hidden sm:inline" />
                    <span className="text-amber-400">قسطوں پر ہر خواب اب حقیقت!</span>
                  </span>
                ) : (
                  <span>
                    Premium Appliances & Bikes, <br className="hidden sm:inline" />
                    <span className="text-amber-400">Cash & Easy Monthly Installments</span>
                  </span>
                )}
              </h1>
              <p className="text-slate-300 text-sm md:text-base max-w-xl leading-relaxed">
                {t('heroSubtext')}
              </p>
            </div>

            {/* Cash & Installment Key Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/80">
                <p className="text-xs text-slate-400">{isUrdu ? 'ادائیگی کا طریقہ' : 'Payment Mode'}</p>
                <p className="text-sm font-bold text-amber-400 mt-0.5">{isUrdu ? 'کیش بھی، اقساط بھی' : 'Cash & Installment'}</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/80">
                <p className="text-xs text-slate-400">{isUrdu ? 'چھپے اخراجات' : 'Hidden Charges'}</p>
                <p className="text-sm font-bold text-emerald-400 mt-0.5">{isUrdu ? 'مکمل شفاف (0 فیس)' : 'Zero Hidden Fees'}</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/80 col-span-2 sm:col-span-1">
                <p className="text-xs text-slate-400">{isUrdu ? 'منظوری کا وقت' : 'Approval Speed'}</p>
                <p className="text-sm font-bold text-sky-400 mt-0.5">{isUrdu ? 'فوری دستاویز تصدیق' : 'Same-Day Fast'}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onCalculateClick}
                className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md hover:shadow-amber-500/20 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <Calculator className="w-4 h-4" />
                <span>{t('heroCtaCalc')}</span>
              </button>

              <button
                type="button"
                onClick={onExploreClick}
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm border border-slate-700 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <ShoppingBag className="w-4 h-4 text-amber-400" />
                <span>{t('heroCtaBrowse')}</span>
              </button>

              <button
                type="button"
                onClick={onOpenOriginalPoster}
                className="px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-amber-300 font-medium text-xs md:text-sm border border-amber-500/30 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                title="View original printed poster"
              >
                <Eye className="w-4 h-4" />
                <span>{isUrdu ? 'اصل پرنٹ اشتہار دیکھیں' : 'Original Poster View'}</span>
              </button>
            </div>

          </div>

          {/* Column 2: Visual Showroom Card with verified tags */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-800 shadow-2xl group">
              <img
                src={HERO_IMAGE}
                alt="Ammar Traders & Electronics Showroom"
                className="w-full h-72 sm:h-84 lg:h-96 object-cover transform group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Dark Gradient Scrim for Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

              {/* Poster Badge Overlay */}
              <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 text-xs font-extrabold px-3 py-1.5 rounded-md shadow-md">
                {isUrdu ? 'آج ہی خریدیں بعد میں قسطوں پر ادا کریں' : 'Buy Today, Pay in Installments'}
              </div>

              {/* Bottom Card Bar */}
              <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-200 bg-slate-900/80 backdrop-blur-md p-3 rounded-lg border border-slate-700/60 flex items-center justify-between">
                <div>
                  <p className="font-bold text-white text-sm">
                    {isUrdu ? 'عمار ٹریڈرز اینڈ الیکٹرانکس' : 'Ammar Traders & Electronics'}
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5">
                    {isUrdu ? 'صادق آباد کا سب سے بڑا شو روم' : 'Largest Showroom in Sadiqabad'}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-amber-400 font-mono font-bold text-sm block">0321 6702875</span>
                  <span className="text-emerald-400 text-[11px] block">{isUrdu ? 'اوپن صبح 9 تا رات 10' : 'Open 9 AM – 10 PM'}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width 4-Column KPI Trust Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400">{isUrdu ? '100% اصل مصنوعات' : '100% Original Brands'}</p>
              <p className="text-xs md:text-sm font-semibold text-white mt-0.5">{isUrdu ? 'کمپنی آفیشل وارنٹی' : 'Full Brand Guarantee'}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400">{isUrdu ? 'ماہرانہ انسٹالیشن' : 'Expert Appliance Setup'}</p>
              <p className="text-xs md:text-sm font-semibold text-white mt-0.5">{isUrdu ? 'مفت انسٹالیشن سروس' : 'Free Installation'}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400">{isUrdu ? 'گھر کی دہلیز تک' : 'Doorstep Transport'}</p>
              <p className="text-xs md:text-sm font-semibold text-white mt-0.5">{isUrdu ? 'فوری اور محفوظ ڈیلیوری' : 'Express Delivery'}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400">{isUrdu ? 'آسان ماہانہ اقساط' : 'Flexible Tenures'}</p>
              <p className="text-xs md:text-sm font-semibold text-white mt-0.5">{isUrdu ? '3 تا 24 ماہ کے پلانز' : '3 to 24 Month Plans'}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
