import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BookingRecord } from '../types';
import { formatPKR, generateWhatsAppBookingUrl } from '../utils/calculator';
import { STORE_CONTACT } from '../data/products';
import { X, Search, Clock, CheckCircle2, MessageSquare, Printer, PackageCheck } from 'lucide-react';

interface BookingTrackerModalProps {
  onClose: () => void;
}

export const BookingTrackerModal: React.FC<BookingTrackerModalProps> = ({ onClose }) => {
  const { isUrdu, language, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [savedBookings, setSavedBookings] = useState<BookingRecord[]>([]);
  const [searchedResults, setSearchedResults] = useState<BookingRecord[]>([]);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  useEffect(() => {
    try {
      const existing = localStorage.getItem('ammartraders_bookings');
      if (existing) {
        const list: BookingRecord[] = JSON.parse(existing);
        setSavedBookings(list);
        setSearchedResults(list);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    if (!searchTerm.trim()) {
      setSearchedResults(savedBookings);
      return;
    }

    const term = searchTerm.trim().toLowerCase();
    const filtered = savedBookings.filter(
      (b) =>
        b.bookingToken.toLowerCase().includes(term) ||
        b.phone.includes(term) ||
        b.customerName.toLowerCase().includes(term)
    );
    setSearchedResults(filtered);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 text-slate-900 my-auto">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2">
            <PackageCheck className="w-5 h-5 text-amber-600" />
            <h3 className="text-base font-bold text-slate-900">
              {t('trackingTitle')}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={isUrdu ? 'بکنگ ٹوکن یا موبائل نمبر لکھیں...' : 'Enter Booking Token (e.g. ATE-26...) or Phone...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs md:text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white tabular-nums"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-all cursor-pointer whitespace-nowrap"
            >
              {t('searchBooking')}
            </button>
          </form>

          {/* Results List */}
          <div className="space-y-4">
            {searchedResults.length === 0 ? (
              <div className="text-center py-10 bg-slate-50 rounded-xl border border-dashed border-slate-200 p-6">
                <Clock className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="text-sm font-semibold text-slate-700">
                  {hasSearched ? t('noBookingsFound') : (isUrdu ? 'کوئی حالیہ بکنگ موجود نہیں ہے۔' : 'No recorded bookings found yet.')}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {isUrdu ? 'جب آپ کوئی پروڈکٹ بک کریں گے تو یہاں اس کا اسٹیٹس ظاہر ہوگا۔' : 'When you book an item, its verification status and installment history will appear here.'}
                </p>
              </div>
            ) : (
              searchedResults.map((booking) => (
                <div
                  key={booking.id}
                  className="p-4 rounded-xl border border-slate-200 bg-white hover:border-amber-400 hover:shadow-xs transition-all space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 block uppercase">
                        {isUrdu ? 'بکنگ ٹوکن' : 'Token'}
                      </span>
                      <span className="font-mono font-black text-amber-600 text-sm">
                        {booking.bookingToken}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                      <Clock className="w-3 h-3 text-amber-600" />
                      <span>{booking.status}</span>
                    </div>
                  </div>

                  <div className="text-xs space-y-1.5">
                    <p className="font-bold text-slate-900 text-sm">
                      {isUrdu ? booking.product.urduName : booking.product.name}
                    </p>
                    <p className="text-slate-600">
                      <strong>{isUrdu ? 'گاہک:' : 'Customer:'}</strong> {booking.customerName} ({booking.phone})
                    </p>
                    <p className="text-slate-600">
                      <strong>{isUrdu ? 'طریقہ خریداری:' : 'Plan:'}</strong>{' '}
                      {booking.bookingType === 'installment'
                        ? `${isUrdu ? 'ماہانہ اقساط' : 'Installment'} (${booking.installmentDetails?.tenureMonths} ${t('months')})`
                        : (isUrdu ? 'کیش خریداری' : 'Cash')}
                    </p>
                    {booking.installmentDetails && (
                      <p className="text-emerald-700 font-bold">
                        {isUrdu ? 'ماہانہ قسط:' : 'Monthly Dues:'}{' '}
                        {formatPKR(booking.installmentDetails.monthlyInstallment, language)} / {t('months')}
                      </p>
                    )}
                  </div>

                  {/* Actions for this record */}
                  <div className="pt-2 flex items-center justify-between gap-2 border-t border-slate-100">
                    <a
                      href={generateWhatsAppBookingUrl({
                        bookingToken: booking.bookingToken,
                        customerName: booking.customerName,
                        phone: booking.phone,
                        city: booking.city,
                        productName: isUrdu ? booking.product.urduName : booking.product.name,
                        bookingType: booking.bookingType,
                        downPaymentAmount: booking.installmentDetails?.downPaymentAmount,
                        monthlyInstallment: booking.installmentDetails?.monthlyInstallment,
                        tenureMonths: booking.installmentDetails?.tenureMonths,
                        cashPrice: booking.product.cashPrice
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{isUrdu ? 'واٹس ایپ پر پوچھیں' : 'WhatsApp Status'}</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900 cursor-pointer"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>{t('printReceipt')}</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
