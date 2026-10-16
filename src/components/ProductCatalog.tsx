import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Product, ProductCategory } from '../types';
import { PRODUCTS } from '../data/products';
import { formatPKR } from '../utils/calculator';
import { Search, Sparkles, Shield, Wrench, ArrowUpRight, Info } from 'lucide-react';

interface ProductCatalogProps {
  onSelectForInstallment: (product: Product) => void;
  onBookCash: (product: Product) => void;
  onViewSpecs: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectForInstallment,
  onBookCash,
  onViewSpecs
}) => {
  const { isUrdu, language, t } = useLanguage();

  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract unique brands for filter
  const allBrands = useMemo(() => {
    const brands = new Set<string>();
    PRODUCTS.forEach((p) => brands.add(p.brand));
    return Array.from(brands).sort();
  }, []);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category check
      if (activeCategory !== 'all' && product.category !== activeCategory) {
        return false;
      }
      // Brand check
      if (selectedBrand !== 'all' && product.brand !== selectedBrand) {
        return false;
      }
      // Search check
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesUrdu = product.urduName.includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        if (!matchesName && !matchesUrdu && !matchesBrand) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, selectedBrand, searchQuery]);

  const categories: { id: ProductCategory; labelKey: string }[] = [
    { id: 'all', labelKey: 'catAll' },
    { id: 'smart_tv', labelKey: 'catSmartTv' },
    { id: 'refrigerator', labelKey: 'catFridge' },
    { id: 'ac', labelKey: 'catAc' },
    { id: 'bikes', labelKey: 'catBikes' },
    { id: 'mobiles', labelKey: 'catMobiles' },
    { id: 'washing_machine', labelKey: 'catWashing' },
    { id: 'appliances', labelKey: 'catAppliances' }
  ];

  return (
    <section id="catalog" className="py-14 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 tracking-wider uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{isUrdu ? 'شو روم مصنوعات' : 'Showroom Collection'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t('catalogTitle')}
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              {t('catalogSub')}
            </p>
          </div>

          {/* Quick Stats or Total Count */}
          <div className="text-xs text-slate-500 font-medium">
            <span>{isUrdu ? 'دستیاب مصنوعات:' : 'Showing Items:'} </span>
            <span className="font-bold text-slate-900 tabular-nums">{filteredProducts.length}</span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs mb-8 space-y-4">
          
          {/* Category Tabs (Functional Buttons) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {t(cat.labelKey)}
              </button>
            ))}
          </div>

          {/* Search + Brand Filter Row */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs md:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
              />
            </div>

            {/* Brand Dropdown */}
            <div className="w-full sm:w-48">
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs md:text-sm text-slate-700 focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                <option value="all">{t('allBrands')}</option>
                {allBrands.map((brand) => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-base font-semibold text-slate-800">
              {isUrdu ? 'کوئی پروڈکٹ نہیں ملی' : 'No matching products found'}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              {isUrdu ? 'براہ کرم سرچ کے الفاظ یا کیٹیگری تبدیل کریں۔' : 'Please adjust your search criteria or category filter.'}
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSelectedBrand('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold bg-slate-900 text-white rounded-lg hover:bg-slate-800 cursor-pointer"
            >
              {isUrdu ? 'تمام مصنوعات دکھائیں' : 'Reset All Filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              // Lowest monthly installment estimate (based on 12-month plan with 20% down)
              const estAdvance = Math.round(product.cashPrice * 0.2);
              const estRemaining = product.cashPrice - estAdvance;
              const estFinanced = estRemaining + Math.round((estRemaining * 0.16));
              const estMonthly = Math.round(estFinanced / 12);

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-amber-400 hover:shadow-md transition-all group"
                >
                  {/* Card Media Header */}
                  <div>
                    <div className="relative h-56 bg-slate-100 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Subtle Badge Tag */}
                      {product.badge && (
                        <div className="absolute top-3 left-3 bg-slate-900/90 text-amber-400 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs backdrop-blur-xs">
                          {isUrdu ? product.urduBadge : product.badge}
                        </div>
                      )}

                      {/* Quick Specs View Trigger Button */}
                      <button
                        type="button"
                        onClick={() => onViewSpecs(product)}
                        className="absolute bottom-3 right-3 p-2 bg-white/90 hover:bg-white text-slate-800 rounded-lg shadow-xs hover:shadow transition-all text-xs flex items-center gap-1 cursor-pointer"
                        title="View Full Specifications"
                      >
                        <Info className="w-3.5 h-3.5 text-amber-600" />
                        <span className="text-[11px] font-medium hidden sm:inline">{t('viewSpecs')}</span>
                      </button>
                    </div>

                    {/* Content Section */}
                    <div className="p-5">
                      
                      {/* Unboxed Metadata (Zero Pill Rule) */}
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5 font-medium">
                        <span className="text-amber-700 font-bold uppercase">{product.brand}</span>
                        <span aria-hidden="true">·</span>
                        <span>{isUrdu ? product.urduWarranty : product.warranty}</span>
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-2 min-h-12">
                        {isUrdu ? product.urduName : product.name}
                      </h3>

                      {/* Price Matrix */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-baseline justify-between">
                        <div>
                          <p className="text-[11px] text-slate-500 uppercase font-medium">
                            {t('cashPrice')}
                          </p>
                          <p className="text-lg font-bold text-slate-900 tabular-nums">
                            {formatPKR(product.cashPrice, language)}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-[11px] text-amber-700 font-semibold">
                            {t('startingFrom')}
                          </p>
                          <p className="text-base font-extrabold text-amber-600 tabular-nums">
                            {formatPKR(estMonthly, language)}<span className="text-xs font-normal text-slate-500">{t('perMonth')}</span>
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Dual CTA Actions */}
                  <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectForInstallment(product)}
                      className="w-full py-2.5 px-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg font-bold text-xs transition-colors shadow-xs flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap"
                    >
                      <span>{t('bookInstallment')}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onBookCash(product)}
                      className="w-full py-2.5 px-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap"
                    >
                      <span>{t('buyCash')}</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
