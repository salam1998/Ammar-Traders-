import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Globe, FileText, Code2, Search } from 'lucide-react';
import { STORE_CONTACT } from '../data/products';

interface TopNavProps {
  onOpenOriginalPoster: () => void;
  onOpenIntegration: () => void;
  onOpenTracking: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  onOpenOriginalPoster,
  onOpenIntegration,
  onOpenTracking
}) => {
  const { language, toggleLanguage, isUrdu, t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-6">
        
        {/* Zone 1: Single text element Brand wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2 group whitespace-nowrap shrink-0"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center font-bold text-slate-950 text-lg shadow-sm">
            AT
          </div>
          <span className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
            {isUrdu ? STORE_CONTACT.urduName : STORE_CONTACT.name}
          </span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a 
            href="#catalog" 
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            {t('navCatalog')}
          </a>
          <a 
            href="#calculator" 
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            {t('navCalculator')}
          </a>
          <a 
            href="#benefits" 
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            {t('navBenefits')}
          </a>
          <button 
            type="button"
            onClick={onOpenTracking}
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <Search className="w-3.5 h-3.5 text-amber-400" />
            <span>{t('navTrack')}</span>
          </button>
          <button 
            type="button"
            onClick={onOpenOriginalPoster}
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer text-amber-300"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{t('navPoster')}</span>
          </button>
          <button 
            type="button"
            onClick={onOpenIntegration}
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer text-slate-300"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>{t('navIntegration')}</span>
          </button>
        </nav>

        {/* Zone 3: Primary Action & Language Switcher */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={toggleLanguage}
            className="px-3 py-1.5 text-xs font-semibold rounded-md border border-slate-700 bg-slate-800/80 hover:bg-slate-700 hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
            title="Toggle Urdu / English"
          >
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span>{language === 'ur' ? 'English' : 'اردو'}</span>
          </button>

          <a
            href={`https://wa.me/${STORE_CONTACT.whatsappRaw}?text=${encodeURIComponent('Hello Ammar Traders, I have an inquiry about product booking and installment plans.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs md:text-sm font-semibold rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-sm hover:shadow flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="tabular-nums font-mono">{STORE_CONTACT.phone}</span>
          </a>
        </div>

      </div>

      {/* Mobile Quick Action Sub-bar */}
      <div className="lg:hidden flex items-center justify-around border-t border-slate-800/80 py-2 px-3 text-xs text-slate-300 bg-slate-950/40">
        <a href="#catalog" className="hover:text-amber-400 px-2 py-1">
          {t('navCatalog')}
        </a>
        <a href="#calculator" className="hover:text-amber-400 px-2 py-1">
          {t('navCalculator')}
        </a>
        <button type="button" onClick={onOpenTracking} className="hover:text-amber-400 px-2 py-1">
          {t('navTrack')}
        </button>
        <button type="button" onClick={onOpenOriginalPoster} className="text-amber-400 px-2 py-1 font-semibold">
          {t('navPoster')}
        </button>
        <button type="button" onClick={onOpenIntegration} className="hover:text-amber-400 px-2 py-1">
          {t('navIntegration')}
        </button>
      </div>
    </header>
  );
};
