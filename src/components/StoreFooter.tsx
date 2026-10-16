import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { STORE_CONTACT } from '../data/products';
import { Phone, MapPin, Clock, MessageSquare, ExternalLink, Code2, FileText } from 'lucide-react';

interface StoreFooterProps {
  onOpenOriginalPoster: () => void;
  onOpenIntegration: () => void;
  onOpenTracking: () => void;
}

export const StoreFooter: React.FC<StoreFooterProps> = ({
  onOpenOriginalPoster,
  onOpenIntegration,
  onOpenTracking
}) => {
  const { isUrdu, t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand & About */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center font-black text-slate-950 text-base">
                AT
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {isUrdu ? STORE_CONTACT.urduName : STORE_CONTACT.name}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {isUrdu ? (
                <span className="font-urdu">
                  صادق آباد کا بھروسہ مند شو روم جہاں جدید ترین الیکٹرانکس، ہوم اپلائنسز، سمارٹ فونز اور بائیکس آسان ماہانہ اقساط اور رعایتی کیش قیمت پر حاصل کی جا سکتی ہیں۔
                </span>
              ) : (
                'Sadiqabad’s trusted electronics and motorcycle dealership offering genuine home appliances, smartphones, and bikes on transparent monthly installment plans or discounted cash prices.'
              )}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${STORE_CONTACT.whatsappRaw}?text=${encodeURIComponent('Hello Ammar Traders, I want to book an item or inquire about monthly installments.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{isUrdu ? 'واٹس ایپ پر رابطہ' : 'Chat on WhatsApp'}</span>
              </a>

              <button
                type="button"
                onClick={onOpenOriginalPoster}
                className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/30 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{isUrdu ? 'اصل اشتہار دیکھیں' : 'Original Poster'}</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {isUrdu ? 'فوری لنکس' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#catalog" className="hover:text-amber-400 transition-colors block py-0.5">
                  {t('navCatalog')}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors block py-0.5">
                  {t('navCalculator')}
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-amber-400 transition-colors block py-0.5">
                  {t('navBenefits')}
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTracking}
                  className="hover:text-amber-400 transition-colors block py-0.5 text-left cursor-pointer"
                >
                  {t('navTrack')}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenIntegration}
                  className="hover:text-amber-400 transition-colors block py-0.5 text-left cursor-pointer text-amber-300"
                >
                  {t('navIntegration')} (Embed)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Location Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {t('storeLocation')}
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">
                    {isUrdu ? STORE_CONTACT.urduAddress : STORE_CONTACT.address}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Near JDW Sugar Mills Crossing / Main Bazaar Highway
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${STORE_CONTACT.phone}`}
                  className="font-mono text-sm font-bold text-white hover:text-amber-400 tabular-nums"
                >
                  {STORE_CONTACT.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  {isUrdu ? STORE_CONTACT.urduTimings : STORE_CONTACT.timings}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent('Ammar Traders Electronics Pulley JDW Road Sadiqabad')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300"
              >
                <span>{isUrdu ? 'گوگل میپس پر لوکیشن دیکھیں' : 'Open in Google Maps'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {t('footerRights')}</p>
          <p className="font-urdu">آپ کے اعتماد کی ہماری پہچان · معیاری بھی، قیمت بھی، آسان اقساط بھی</p>
        </div>

      </div>
    </footer>
  );
};
