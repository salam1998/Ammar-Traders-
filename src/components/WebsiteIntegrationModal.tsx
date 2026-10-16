import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { STORE_CONTACT } from '../data/products';
import { X, Copy, Check, Code2, Monitor, ExternalLink, Sparkles } from 'lucide-react';

interface WebsiteIntegrationModalProps {
  onClose: () => void;
}

export const WebsiteIntegrationModal: React.FC<WebsiteIntegrationModalProps> = ({ onClose }) => {
  const { isUrdu, t } = useLanguage();
  const [widgetMode, setWidgetMode] = useState<'calculator' | 'catalog' | 'floating_button'>('calculator');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [copied, setCopied] = useState<boolean>(false);

  // Current origin URL
  const appUrl = typeof window !== 'undefined' ? window.location.origin : 'https://ammar-traders-sadiqabad.com';

  const embedCodes: Record<string, string> = {
    calculator: `<!-- Ammar Traders & Electronics: Live Installment Calculator Embed -->
<iframe 
  src="${appUrl}/#calculator?theme=${theme}&lang=${isUrdu ? 'ur' : 'en'}" 
  width="100%" 
  height="680" 
  style="border: 1px solid #e2e8f0; border-radius: 16px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);" 
  frameborder="0" 
  loading="lazy" 
  title="Ammar Traders Installment Calculator">
</iframe>`,
    catalog: `<!-- Ammar Traders & Electronics: Full Product Booking Catalog Embed -->
<iframe 
  src="${appUrl}/#catalog?theme=${theme}&lang=${isUrdu ? 'ur' : 'en'}" 
  width="100%" 
  height="850" 
  style="border: 1px solid #e2e8f0; border-radius: 16px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);" 
  frameborder="0" 
  loading="lazy" 
  title="Ammar Traders Live Product Booking">
</iframe>`,
    floating_button: `<!-- Ammar Traders: Floating WhatsApp Booking Widget Snippet -->
<script>
  (function() {
    var btn = document.createElement('a');
    btn.href = "https://wa.me/${STORE_CONTACT.whatsappRaw}?text=" + encodeURIComponent("Hello Ammar Traders, I want to book an item.");
    btn.target = "_blank";
    btn.style.cssText = "position:fixed;bottom:24px;right:24px;z-index:9999;background:#25D366;color:#fff;padding:12px 18px;border-radius:50px;font-family:sans-serif;font-size:14px;font-weight:bold;text-decoration:none;box-shadow:0 4px 14px rgba(0,0,0,0.25);display:flex;align-items:center;gap:8px;";
    btn.innerHTML = "<span>💬 Book on WhatsApp (${STORE_CONTACT.phone})</span>";
    document.body.appendChild(btn);
  })();
</script>`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCodes[widgetMode]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 text-slate-900 my-auto">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                {t('embedTitle')}
              </h3>
              <p className="text-xs text-slate-500">
                {t('embedSub')}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Widget Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">
              1. {isUrdu ? 'ایمبیڈ وجیٹ کی قسم منتخب کریں' : 'Choose Integration Widget Type'}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setWidgetMode('calculator')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  widgetMode === 'calculator'
                    ? 'border-amber-500 bg-amber-50 text-amber-950 font-bold shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                }`}
              >
                <p className="text-xs font-bold">{isUrdu ? 'قسط کیلکولیٹر' : 'Installment Calculator'}</p>
                <p className="text-[11px] text-slate-500 mt-1">{isUrdu ? 'انٹرایکٹو سلائیڈرز اور شیڈول' : 'Dynamic sliders & dues'}</p>
              </button>

              <button
                type="button"
                onClick={() => setWidgetMode('catalog')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  widgetMode === 'catalog'
                    ? 'border-amber-500 bg-amber-50 text-amber-950 font-bold shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                }`}
              >
                <p className="text-xs font-bold">{isUrdu ? 'پروڈکٹ بکنگ گرڈ' : 'Product Booking Grid'}</p>
                <p className="text-[11px] text-slate-500 mt-1">{isUrdu ? 'مکمل کیٹلاگ بکنگ' : 'Full shop inventory'}</p>
              </button>

              <button
                type="button"
                onClick={() => setWidgetMode('floating_button')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  widgetMode === 'floating_button'
                    ? 'border-amber-500 bg-amber-50 text-amber-950 font-bold shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                }`}
              >
                <p className="text-xs font-bold">{isUrdu ? 'فلوٹنگ واٹس ایپ بٹن' : 'Floating WhatsApp CTA'}</p>
                <p className="text-[11px] text-slate-500 mt-1">{isUrdu ? '1-کلک جاوا اسکرپٹ کوڈ' : 'One-line script snippet'}</p>
              </button>
            </div>
          </div>

          {/* Theme Option */}
          {widgetMode !== 'floating_button' && (
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                2. {isUrdu ? 'وجیٹ تھیم' : 'Widget Visual Style'}
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setTheme('dark')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border cursor-pointer ${
                    theme === 'dark' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-200'
                  }`}
                >
                  {isUrdu ? 'ڈارک شو روم تھیم' : 'Navy / Gold (Dark)'}
                </button>
                <button
                  type="button"
                  onClick={() => setTheme('light')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border cursor-pointer ${
                    theme === 'light' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-200'
                  }`}
                >
                  {isUrdu ? 'لائٹ پورسلین تھیم' : 'Clean Porcelain (Light)'}
                </button>
              </div>
            </div>
          )}

          {/* Code Box */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-700">
                {isUrdu ? 'ویب سائٹ ایمبیڈ کوڈ (HTML)' : 'Copy Code Snippet to Paste in Your Website:'}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? t('codeCopied') : t('copyCode')}</span>
              </button>
            </div>

            <div className="relative">
              <pre className="p-4 bg-slate-900 text-slate-200 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed border border-slate-800 max-h-48">
                <code>{embedCodes[widgetMode]}</code>
              </pre>
            </div>
          </div>

          {/* Quick Integration Guidance */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>{isUrdu ? 'آسان انسٹالیشن گائیڈ' : 'How to Integrate on Any CMS / Website:'}</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-slate-600 text-[11px]">
              <li>
                <strong>WordPress / Shopify:</strong> {isUrdu ? 'کسٹم HTML بلاک میں یہ کوڈ پیسٹ کریں۔' : 'Add a "Custom HTML" block in your page editor and paste this code.'}
              </li>
              <li>
                <strong>React / Next.js / HTML:</strong> {isUrdu ? 'ڈائریکٹ iframe یا اسکرپٹ ٹیگ میں شامل کریں۔' : 'Include directly inside any JSX component or standard HTML body.'}
              </li>
              <li>
                <strong>Direct Webhook / WhatsApp:</strong> {isUrdu ? `کسٹمرز کے تمام آرڈرز براہ راست ${STORE_CONTACT.phone} پر موصول ہوں گے۔` : `All customer submissions route directly to verified showroom WhatsApp (+92 321 6702875).`}
              </li>
            </ul>
          </div>

          {/* Footer Action */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={handleCopy}
              className="py-2.5 px-5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? t('codeCopied') : t('copyCode')}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl cursor-pointer"
            >
              {isUrdu ? 'مکمل ہو گیا' : 'Done'}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
