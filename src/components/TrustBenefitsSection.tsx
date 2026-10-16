import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Headphones, Percent, Users, HeartHandshake, Sparkles, Truck, Wrench } from 'lucide-react';

export const TrustBenefitsSection: React.FC = () => {
  const { isUrdu, t } = useLanguage();

  const benefits = [
    {
      icon: ShieldCheck,
      title: '100% Original Brand Guarantee',
      urduTitle: 'معیاری اور اصل برانڈز کی ضمانت',
      desc: 'All products are authentic with verified company warranty stamps from Samsung, Haier, Gree, Honda, and Dawlance.',
      urduDesc: 'ہر پروڈکٹ مجاز مینوفیکچرر سے تصدیق شدہ اور آفیشل کمپنی وارنٹی کارڈ کے ساتھ فراہم کی جاتی ہے۔'
    },
    {
      icon: Headphones,
      title: 'Clear & Reliable After-Sales Service',
      urduTitle: 'ہر چیز پر واضح اور بعد از فروخت سروس',
      desc: 'Dedicated technical support and warranty facilitation after purchase so you never worry.',
      urduDesc: 'خریداری کے بعد بھی ہمارا عملہ وارنٹی کلیم اور ٹیکنیکل سپورٹ کے لیے ہمیشہ حاضر رہتا ہے۔'
    },
    {
      icon: Percent,
      title: 'Zero Hidden Charges or Fees',
      urduTitle: 'مکمل انسٹالمنٹ پلان (بغیر کسی چھپی چارج)',
      desc: 'What you see is what you pay. Transparent down payment, fixed monthly dues, and no secret processing costs.',
      urduDesc: 'ہم مکمل شفافیت پر یقین رکھتے ہیں؛ کوئی فائل چارجز یا خفیہ فیس وصول نہیں کی جاتی۔'
    },
    {
      icon: Users,
      title: 'Experienced & Courteous Staff',
      urduTitle: 'تجربہ کار اور خوش اخلاق عملہ',
      desc: 'Get genuine friendly advice matching your household budget and installment comfort.',
      urduDesc: 'ہمارا عملہ آپ کی گھریلو ضرورت اور بجٹ کے مطابق بہترین پروڈکٹ اور اقساط تجویز کرتا ہے۔'
    },
    {
      icon: HeartHandshake,
      title: 'Affordable Monthly Dues',
      urduTitle: 'آسان اقساط اور کم ماہانہ ادائیگی',
      desc: 'Flexible 3 to 24 month tenures designed to keep monthly installments easy on your wallet.',
      urduDesc: '3 سے 24 ماہ تک کے لچکدار پلانز تاکہ آپ کی ماہانہ بچت پر کوئی بوجھ نہ پڑے۔'
    },
    {
      icon: Wrench,
      title: 'Free Home Installation & Transit',
      urduTitle: 'مفت انسٹالیشن اور فوری ڈیلیوری',
      desc: 'Safe transportation across Sadiqabad and expert mounting for ACs and Smart TVs.',
      urduDesc: 'صادق آباد اور قریبی علاقوں میں گھر کی دہلیز تک محفوظ ترسیل اور فری فٹنگ سروس۔'
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isUrdu ? 'آپ کے اعتماد کی ہماری پہچان' : 'Trust & Authenticity'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t('benefitsHeading')}
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            {t('benefitsSub')}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, index) => {
            const Icon = b.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-white hover:shadow-sm transition-all space-y-3"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  {isUrdu ? b.urduTitle : b.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isUrdu ? b.urduDesc : b.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Poster Slogan Highlight Quote Box */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-xs font-bold uppercase tracking-wider opacity-90">
              {isUrdu ? 'عمار ٹریڈرز کا پختہ عزم' : 'Ammar Traders Guarantee'}
            </p>
            <p className="text-lg sm:text-xl font-black font-urdu">
              {isUrdu ? 'ایک بار خریدیں، برسوں سکون سے استعمال کریں!' : 'Buy once with peace of mind, enjoy for years to come!'}
            </p>
          </div>
          <a
            href="#calculator"
            className="px-5 py-2.5 rounded-xl bg-slate-950 text-white font-bold text-xs hover:bg-slate-900 transition-colors shadow-xs whitespace-nowrap cursor-pointer"
          >
            {isUrdu ? 'اقساط شروع کریں' : 'Start Installment Plan'}
          </a>
        </div>

      </div>
    </section>
  );
};
