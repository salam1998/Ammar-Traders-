export type ProductCategory = 
  | 'all'
  | 'mobiles'
  | 'smart_tv'
  | 'refrigerator'
  | 'ac'
  | 'washing_machine'
  | 'bikes'
  | 'appliances';

export interface Product {
  id: string;
  name: string;
  urduName: string;
  category: ProductCategory;
  brand: string;
  cashPrice: number;
  marketPrice?: number;
  image: string;
  badge?: string;
  urduBadge?: string;
  specs: { [key: string]: string };
  urduSpecs: { [key: string]: string };
  warranty: string;
  urduWarranty: string;
  featured?: boolean;
  minDownPaymentPercent: number;
  availableTenures: number[]; // e.g. [3, 6, 9, 12, 18, 24]
}

export interface InstallmentPlanDetails {
  product: Product;
  downPaymentPercent: number;
  downPaymentAmount: number;
  tenureMonths: number;
  financedAmount: number;
  monthlyInstallment: number;
  totalPayable: number;
  markupPercent: number;
}

export interface BookingRecord {
  id: string;
  bookingToken: string;
  createdAt: string;
  customerName: string;
  phone: string;
  cnic: string;
  city: string;
  address: string;
  bookingType: 'installment' | 'cash';
  product: Product;
  installmentDetails?: {
    downPaymentAmount: number;
    tenureMonths: number;
    monthlyInstallment: number;
    totalPayable: number;
  };
  status: 'Pending Verification' | 'Approved' | 'Out for Delivery' | 'Completed';
  notes?: string;
}

export type Language = 'ur' | 'en';
