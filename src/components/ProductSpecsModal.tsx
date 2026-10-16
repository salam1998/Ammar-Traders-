import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Product } from '../types';
import { formatPKR } from '../utils/calculator';
import { X, ShieldCheck, Check, ArrowRight } from 'lucide-react';

interface ProductSpecsModalProps {
  product: Product;
  onClose: () => void;
  onBookInstallment: (product: Product) => void;
  onBookCash: (product: Product) => void;
}

export const ProductSpecsModal: React.FC<ProductSpecsModalProps> = ({
  product,
  onClose,
  onBookInstallment,
  onBookCash
}) => {
  const { isUrdu, language, t } = useLanguage();
  const specs = isUrdu ? product.urduSpecs : product.specs;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 text-slate-900 my-auto">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">{product.brand}</span>
            <span className="text-slate-300">/</span>
            <span className="text-xs font-medium text-slate-600">{product.warranty}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media & Title */}
        <div className="p-6">
          <div className="h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 mb-5">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <h3 className="text-xl font-bold text-slate-900">
            {isUrdu ? product.urduName : product.name}
          </h3>

          <div className="mt-3 flex items-baseline justify-between p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
            <div>
              <p className="text-xs text-amber-800 font-semibold">{t('cashPrice')}</p>
              <p className="text-xl font-black text-slate-900 tabular-nums">{formatPKR(product.cashPrice, language)}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-amber-800 font-semibold">{t('startingFrom')}</p>
              <p className="text-base font-bold text-amber-700 tabular-nums">
                {formatPKR(Math.round(product.cashPrice * 0.1), language)} {t('perMonth')}
              </p>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="mt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              {isUrdu ? 'تکنیکی معلومات و خصوصیات' : 'Technical Specifications'}
            </h4>
            <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-100 text-xs">
              {Object.entries(specs).map(([key, val]) => (
                <div key={key} className="flex p-3 bg-white hover:bg-slate-50">
                  <span className="w-1/3 text-slate-500 font-medium">{key}</span>
                  <span className="w-2/3 text-slate-900 font-semibold">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Warranty Note */}
          <div className="mt-4 p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2.5 text-xs text-slate-700">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <span className="font-bold text-slate-900 block">{isUrdu ? 'آفیشل کمپنی وارنٹی' : 'Official Warranty Guaranteed'}</span>
              <span>{isUrdu ? product.urduWarranty : product.warranty}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookInstallment(product);
              }}
              className="py-3 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>{t('bookInstallment')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onBookCash(product);
              }}
              className="py-3 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>{t('buyCash')}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
