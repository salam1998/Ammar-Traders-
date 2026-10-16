import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Product, InstallmentPlanDetails } from '../types';
import { PRODUCTS } from '../data/products';
import { calculateInstallmentPlan, formatPKR } from '../utils/calculator';
import { Calculator, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface InstallmentCalculatorProps {
  selectedProduct?: Product | null;
  onSelectProduct: (product: Product) => void;
  onApplyPlan: (plan: InstallmentPlanDetails) => void;
}

export const InstallmentCalculator: React.FC<InstallmentCalculatorProps> = ({
  selectedProduct,
  onSelectProduct,
  onApplyPlan
}) => {
  const { isUrdu, language, t } = useLanguage();

  // Active product selection (defaults to first featured product or prop)
  const currentProduct = selectedProduct || PRODUCTS[0];

  // Sliders and options
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [selectedTenure, setSelectedTenure] = useState<number>(12);

  // Available tenures for this product
  const availableTenures = currentProduct.availableTenures || [3, 6, 9, 12, 18, 24];

  // Calculated Plan
  const planDetails: InstallmentPlanDetails = useMemo(() => {
    return calculateInstallmentPlan(currentProduct, downPaymentPercent, selectedTenure);
  }, [currentProduct, downPaymentPercent, selectedTenure]);

  return (
    <section id="calculator" className="py-14 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>{isUrdu ? 'آسان ماہانہ اقساط کا نظام' : 'Transparent Financing'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            {t('calcHeading')}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            {t('calcSubheading')}
          </p>
        </div>

        {/* Calculator Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-950/80 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
            
            {/* Step 1: Select Product */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-2">
                1. {t('selectProduct')}
              </label>
              <select
                value={currentProduct.id}
                onChange={(e) => {
                  const found = PRODUCTS.find((p) => p.id === e.target.value);
                  if (found) {
                    onSelectProduct(found);
                    // Ensure selected tenure is allowed
                    if (!found.availableTenures.includes(selectedTenure)) {
                      setSelectedTenure(found.availableTenures[0]);
                    }
                  }
                }}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                {PRODUCTS.map((prod) => (
                  <option key={prod.id} value={prod.id}>
                    {isUrdu ? prod.urduName : prod.name} — ({formatPKR(prod.cashPrice, language)})
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Down Payment Percentage Slider */}
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2">
                <span>2. {t('downPayment')}</span>
                <span className="text-amber-400 font-bold text-sm tabular-nums">
                  {downPaymentPercent}% ({formatPKR(planDetails.downPaymentAmount, language)})
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 tabular-nums">
                <span>10% {isUrdu ? '(کم از کم)' : '(Minimum)'}</span>
                <span>25%</span>
                <span>35%</span>
                <span>50% {isUrdu ? '(زیادہ ایڈوانس = کم قسط)' : '(Higher Advance = Lower EMI)'}</span>
              </div>
            </div>

            {/* Step 3: Tenure Months Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-2.5">
                3. {t('selectTenure')}
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {availableTenures.map((tenure) => (
                  <button
                    key={tenure}
                    type="button"
                    onClick={() => setSelectedTenure(tenure)}
                    className={`py-2.5 px-3 rounded-lg text-xs font-semibold transition-all border cursor-pointer ${
                      selectedTenure === tenure
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-sm font-bold'
                        : 'bg-slate-900 text-slate-300 border-slate-700/80 hover:border-slate-500'
                    }`}
                  >
                    <span className="tabular-nums">{tenure}</span> {t('months')}
                  </button>
                ))}
              </div>
              {selectedTenure === 3 && (
                <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t('zeroMarkupNote')}</span>
                </p>
              )}
            </div>

            {/* Product Quick Specs in Calculator */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-3">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  className="w-16 h-16 object-cover rounded-lg border border-slate-700 bg-slate-800 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="min-w-0">
                  <p className="text-xs text-amber-400 font-semibold">{currentProduct.brand}</p>
                  <p className="text-sm font-bold text-white truncate">
                    {isUrdu ? currentProduct.urduName : currentProduct.name}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {isUrdu ? currentProduct.urduWarranty : currentProduct.warranty}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-800 to-slate-900 p-6 sm:p-8 rounded-2xl border border-amber-500/30 shadow-xl space-y-6">
            
            <div className="border-b border-slate-700 pb-4">
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                {isUrdu ? 'متوقع ماہانہ ادائیگی شیڈول' : 'Estimated Payment Schedule'}
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 tabular-nums">
                  {formatPKR(planDetails.monthlyInstallment, language)}
                </span>
                <span className="text-slate-400 text-xs sm:text-sm font-medium">
                  {t('perMonth')}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {isUrdu 
                  ? `${planDetails.tenureMonths} ماہانہ مساوی اقساط میں ادائیگی` 
                  : `Payable across ${planDetails.tenureMonths} equal monthly installments`}
              </p>
            </div>

            {/* Breakdown List */}
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between items-center text-slate-300">
                <span>{t('cashPrice')}</span>
                <span className="font-semibold text-white tabular-nums">
                  {formatPKR(planDetails.product.cashPrice, language)}
                </span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span>{t('advanceAmount')} ({planDetails.downPaymentPercent}%)</span>
                <span className="font-semibold text-amber-300 tabular-nums">
                  {formatPKR(planDetails.downPaymentAmount, language)}
                </span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span>{isUrdu ? 'باقی اقساط رقم' : 'Financed Balance'}</span>
                <span className="font-semibold text-white tabular-nums">
                  {formatPKR(planDetails.financedAmount, language)}
                </span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span>{t('selectTenure')}</span>
                <span className="font-semibold text-white tabular-nums">
                  {planDetails.tenureMonths} {t('months')}
                </span>
              </div>

              <div className="pt-3 border-t border-slate-700/80 flex justify-between items-center">
                <span className="font-bold text-white">{t('totalPayable')}</span>
                <span className="font-bold text-emerald-400 text-base tabular-nums">
                  {formatPKR(planDetails.totalPayable, language)}
                </span>
              </div>
            </div>

            {/* Verification checklist items */}
            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isUrdu ? 'بغیر کسی اضافی چارج کے شفاف معاہدہ' : 'Zero hidden application processing fee'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isUrdu ? 'صادق آباد و گردونواح میں فوری ترسیل' : 'Fast doorstep verification in Sadiqabad'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isUrdu ? 'اصل کمپنی وارنٹی کارڈ ساتھ شامل' : 'Official manufacturer warranty card included'}</span>
              </div>
            </div>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={() => onApplyPlan(planDetails)}
              className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-md hover:shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t('applyThisPlan')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
