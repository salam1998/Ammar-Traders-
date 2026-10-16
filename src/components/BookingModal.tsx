import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Product, InstallmentPlanDetails, BookingRecord } from '../types';
import { formatPKR, calculateInstallmentPlan, generateWhatsAppBookingUrl } from '../utils/calculator';
import { STORE_CONTACT } from '../data/products';
import { X, CheckCircle2, MessageSquare, Printer, ShieldCheck, ArrowRight } from 'lucide-react';

interface BookingModalProps {
  product: Product;
  initialPlan?: InstallmentPlanDetails | null;
  initialType?: 'installment' | 'cash';
  onClose: () => void;
  onBookingSuccess: (record: BookingRecord) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  product,
  initialPlan,
  initialType = 'installment',
  onClose,
  onBookingSuccess
}) => {
  const { isUrdu, language, t } = useLanguage();

  const [bookingType, setBookingType] = useState<'installment' | 'cash'>(initialType);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(
    initialPlan?.downPaymentPercent || product.minDownPaymentPercent || 20
  );
  const [tenureMonths, setTenureMonths] = useState<number>(
    initialPlan?.tenureMonths || product.availableTenures[0] || 12
  );

  // Form Fields
  const [customerName, setCustomerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [cnic, setCnic] = useState<string>('');
  const [city, setCity] = useState<string>('Sadiqabad');
  const [address, setAddress] = useState<string>('');
  const [formError, setFormError] = useState<string>('');

  // Confirmation state
  const [confirmedBooking, setConfirmedBooking] = useState<BookingRecord | null>(null);

  // Current calculated plan
  const currentPlan = calculateInstallmentPlan(product, downPaymentPercent, tenureMonths);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !phone.trim() || !address.trim()) {
      setFormError(isUrdu ? 'براہ کرم تمام لازمی خانے پر کریں۔' : 'Please fill all required fields.');
      return;
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const token = `ATE-${new Date().getFullYear().toString().slice(-2)}${randomSuffix}`;

    const newRecord: BookingRecord = {
      id: `booking-${Date.now()}`,
      bookingToken: token,
      createdAt: new Date().toISOString(),
      customerName,
      phone,
      cnic: cnic || 'To be verified on delivery',
      city,
      address,
      bookingType,
      product,
      installmentDetails: bookingType === 'installment' ? {
        downPaymentAmount: currentPlan.downPaymentAmount,
        tenureMonths: currentPlan.tenureMonths,
        monthlyInstallment: currentPlan.monthlyInstallment,
        totalPayable: currentPlan.totalPayable
      } : undefined,
      status: 'Pending Verification'
    };

    // Save to local storage
    try {
      const existing = localStorage.getItem('ammartraders_bookings');
      const list: BookingRecord[] = existing ? JSON.parse(existing) : [];
      list.unshift(newRecord);
      localStorage.setItem('ammartraders_bookings', JSON.stringify(list));
    } catch {
      // ignore local storage error
    }

    setConfirmedBooking(newRecord);
    onBookingSuccess(newRecord);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 text-slate-900 my-auto">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between sticky top-0 bg-white z-10">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              {confirmedBooking 
                ? (isUrdu ? 'بکنگ تصدیق رسید' : 'Booking Confirmation Slip') 
                : t('bookingModalTitle')}
            </h3>
            <p className="text-xs text-slate-500">
              {isUrdu ? STORE_CONTACT.urduName : STORE_CONTACT.name} · {STORE_CONTACT.phone}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {confirmedBooking ? (
            /* Confirmation View */
            <div className="space-y-6 text-center">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  {isUrdu ? 'آپ کا بکنگ ٹوکن نمبر' : 'Your Official Booking Token'}
                </span>
                <span className="text-2xl font-black text-amber-600 font-mono tracking-wider block mt-1">
                  {confirmedBooking.bookingToken}
                </span>
                <p className="text-xs text-emerald-700 font-medium mt-1">
                  {isUrdu ? 'بکنگ درخواست کامیابی سے درج کر لی گئی ہے۔' : 'Application recorded successfully in showroom ledger.'}
                </p>
              </div>

              {/* Order Receipt Summary Card */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">{isUrdu ? 'گاہک کا نام:' : 'Customer Name:'}</span>
                  <span className="font-bold text-slate-900">{confirmedBooking.customerName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">{isUrdu ? 'پروڈکٹ:' : 'Product:'}</span>
                  <span className="font-bold text-slate-900">{isUrdu ? product.urduName : product.name}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">{isUrdu ? 'طریقہ خریداری:' : 'Purchase Mode:'}</span>
                  <span className="font-bold text-amber-700">
                    {confirmedBooking.bookingType === 'installment' ? (isUrdu ? 'آسان ماہانہ اقساط' : 'Monthly Installments') : (isUrdu ? 'کیش خریداری' : 'Cash')}
                  </span>
                </div>
                {confirmedBooking.installmentDetails && (
                  <>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">{isUrdu ? 'ایڈوانس رقم:' : 'Down Payment:'}</span>
                      <span className="font-bold text-slate-900 tabular-nums">
                        {formatPKR(confirmedBooking.installmentDetails.downPaymentAmount, language)}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">{isUrdu ? 'ماہانہ قسط:' : 'Monthly Installment:'}</span>
                      <span className="font-bold text-emerald-600 tabular-nums">
                        {formatPKR(confirmedBooking.installmentDetails.monthlyInstallment, language)} ({confirmedBooking.installmentDetails.tenureMonths} {t('months')})
                      </span>
                    </div>
                  </>
                )}
                <div className="flex justify-between pt-1">
                  <span className="text-slate-500">{isUrdu ? 'ڈیلیوری ایڈریس:' : 'Delivery Address:'}</span>
                  <span className="text-slate-800 text-right max-w-xs">{confirmedBooking.address}, {confirmedBooking.city}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={generateWhatsAppBookingUrl({
                    bookingToken: confirmedBooking.bookingToken,
                    customerName: confirmedBooking.customerName,
                    phone: confirmedBooking.phone,
                    city: confirmedBooking.city,
                    productName: isUrdu ? product.urduName : product.name,
                    bookingType: confirmedBooking.bookingType,
                    downPaymentAmount: confirmedBooking.installmentDetails?.downPaymentAmount,
                    monthlyInstallment: confirmedBooking.installmentDetails?.monthlyInstallment,
                    tenureMonths: confirmedBooking.installmentDetails?.tenureMonths,
                    cashPrice: product.cashPrice
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t('submitAndWhatsApp')}</span>
                </a>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="flex-1 py-2.5 px-3 border border-slate-300 hover:bg-slate-100 rounded-xl text-xs font-semibold text-slate-700 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Printer className="w-4 h-4 text-slate-500" />
                    <span>{t('printReceipt')}</span>
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 py-2.5 px-3 bg-slate-900 hover:bg-slate-800 rounded-xl text-xs font-semibold text-white cursor-pointer"
                  >
                    {isUrdu ? 'بند کریں' : 'Close'}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Application Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Product Info Strip */}
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-lg bg-slate-200 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="min-w-0">
                  <span className="text-[11px] font-bold text-amber-700 uppercase">{product.brand}</span>
                  <h4 className="text-sm font-bold text-slate-900 truncate">
                    {isUrdu ? product.urduName : product.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {t('cashPrice')}: <span className="font-bold text-slate-900 tabular-nums">{formatPKR(product.cashPrice, language)}</span>
                  </p>
                </div>
              </div>

              {/* Purchase Mode Switch */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  {t('chooseMode')}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setBookingType('installment')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                      bookingType === 'installment'
                        ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-xs'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {isUrdu ? 'آسان ماہانہ اقساط' : 'Easy Installment'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingType('cash')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                      bookingType === 'cash'
                        ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {isUrdu ? 'کیش ادائیگی (رعایت)' : 'Full Cash Purchase'}
                  </button>
                </div>
              </div>

              {/* Installment Plan Adjuster if Mode is installment */}
              {bookingType === 'installment' && (
                <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-800">{t('advanceAmount')}:</span>
                    <span className="font-bold text-amber-800 tabular-nums">
                      {formatPKR(currentPlan.downPaymentAmount, language)} ({downPaymentPercent}%)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    step="5"
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                  />

                  <div>
                    <span className="text-xs font-semibold text-slate-800 block mb-1.5">{t('selectTenure')}:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.availableTenures.map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setTenureMonths(m)}
                          className={`px-3 py-1 text-xs rounded-md font-semibold border transition-all cursor-pointer ${
                            tenureMonths === m
                              ? 'bg-amber-600 text-white border-amber-600'
                              : 'bg-white text-slate-700 border-amber-200 hover:border-amber-400'
                          }`}
                        >
                          {m} {t('months')}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-amber-200/60 flex justify-between items-baseline">
                    <span className="text-xs font-bold text-slate-900">{t('monthlyDues')}:</span>
                    <span className="text-lg font-extrabold text-amber-700 tabular-nums">
                      {formatPKR(currentPlan.monthlyInstallment, language)} <span className="text-xs font-normal text-slate-600">{t('perMonth')}</span>
                    </span>
                  </div>
                </div>
              )}

              {/* Form Inputs */}
              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t('fullName')} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isUrdu ? 'مثال: محمد امین' : 'e.g. Muhammad Amin'}
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t('phoneNumber')} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0300 1234567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white tabular-nums"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t('cnicNumber')}
                    </label>
                    <input
                      type="text"
                      placeholder="31304-xxxxxxx-x"
                      value={cnic}
                      onChange={(e) => setCnic(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white tabular-nums"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t('cityArea')}
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Sadiqabad / صادق آباد"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t('deliveryAddress')} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isUrdu ? 'محلہ / گلی / ہاؤس نمبر' : 'Street / House / Mohallah'}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Guarantees and note */}
              {bookingType === 'installment' && (
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-[11px] text-slate-600 space-y-1">
                  <p className="font-semibold text-slate-800">{isUrdu ? 'ضروری شرائط برائے اقساط:' : 'Installment Verification Policy:'}</p>
                  <p>{t('guarantorNote')}</p>
                </div>
              )}

              {formError && (
                <p className="text-xs text-rose-600 font-semibold">{formError}</p>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t('submitBooking')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
