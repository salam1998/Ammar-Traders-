import { InstallmentPlanDetails, Product } from '../types';
import { STORE_CONTACT } from '../data/products';

/**
 * Calculates transparent installment plan with realistic commercial tenure rates
 */
export function calculateInstallmentPlan(
  product: Product,
  downPaymentPercent: number,
  tenureMonths: number
): InstallmentPlanDetails {
  const cashPrice = product.cashPrice;
  const downPaymentAmount = Math.round((cashPrice * downPaymentPercent) / 100);
  const remainingPrincipal = cashPrice - downPaymentAmount;

  // Commercial markup rate: transparent tiered structure in Pakistan appliance retail
  // 3 months: 0% markup (cash price promotional offer)
  // 6 months: 8%
  // 9 months: 12%
  // 12 months: 16%
  // 18 months: 24%
  // 24 months: 32%
  let markupPercent = 0;
  if (tenureMonths === 3) markupPercent = 0;
  else if (tenureMonths <= 6) markupPercent = 8;
  else if (tenureMonths <= 9) markupPercent = 12;
  else if (tenureMonths <= 12) markupPercent = 16;
  else if (tenureMonths <= 18) markupPercent = 24;
  else markupPercent = 32;

  const totalMarkup = Math.round((remainingPrincipal * markupPercent) / 100);
  const financedAmount = remainingPrincipal + totalMarkup;
  const monthlyInstallment = Math.round(financedAmount / tenureMonths);
  const totalPayable = downPaymentAmount + (monthlyInstallment * tenureMonths);

  return {
    product,
    downPaymentPercent,
    downPaymentAmount,
    tenureMonths,
    financedAmount,
    monthlyInstallment,
    totalPayable,
    markupPercent
  };
}

/**
 * Format currency in Pakistani Rupees
 */
export function formatPKR(amount: number, language: 'en' | 'ur' = 'en'): string {
  const formatted = new Intl.NumberFormat('en-PK').format(amount);
  if (language === 'ur') {
    return `روپے ${formatted}`;
  }
  return `Rs. ${formatted}`;
}

/**
 * Generates pre-formatted WhatsApp direct message link
 */
export function generateWhatsAppBookingUrl(booking: {
  bookingToken: string;
  customerName: string;
  phone: string;
  city: string;
  productName: string;
  bookingType: 'cash' | 'installment';
  downPaymentAmount?: number;
  monthlyInstallment?: number;
  tenureMonths?: number;
  cashPrice: number;
}): string {
  const baseUrl = `https://wa.me/${STORE_CONTACT.whatsappRaw}`;

  const messageLines = [
    `*السلام علیکم / Hello Ammar Traders & Electronics*`,
    `I would like to confirm my booking from your online portal:`,
    ``,
    `📋 *Booking Token:* ${booking.bookingToken}`,
    `👤 *Customer Name:* ${booking.customerName}`,
    `📞 *Phone Number:* ${booking.phone}`,
    `📍 *City / Area:* ${booking.city}`,
    ``,
    `📦 *Selected Item:* ${booking.productName}`,
    `💳 *Purchase Mode:* ${booking.bookingType === 'installment' ? 'آسان ماہانہ اقساط (Installment Plan)' : 'کیش خریداری (Cash Purchase)'}`,
  ];

  if (booking.bookingType === 'installment' && booking.downPaymentAmount && booking.monthlyInstallment && booking.tenureMonths) {
    messageLines.push(`💵 *Down Payment (ایڈوانس):* Rs. ${booking.downPaymentAmount.toLocaleString()}`);
    messageLines.push(`📅 *Installment Tenure:* ${booking.tenureMonths} Months`);
    messageLines.push(`📊 *Monthly Installment (ماہانہ قسط):* Rs. ${booking.monthlyInstallment.toLocaleString()} / month`);
  } else {
    messageLines.push(`💵 *Cash Price:* Rs. ${booking.cashPrice.toLocaleString()}`);
  }

  messageLines.push(``);
  messageLines.push(`Please review my application and confirm delivery / showroom pickup schedule.`);
  messageLines.push(`Thank you!`);

  const encoded = encodeURIComponent(messageLines.join('\n'));
  return `${baseUrl}?text=${encoded}`;
}
