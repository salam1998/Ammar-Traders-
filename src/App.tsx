import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Product, InstallmentPlanDetails, BookingRecord, ProductCategory } from './types';
import { PRODUCTS, STORE_CONTACT } from './data/products';
import { TopNav } from './components/TopNav';
import { HeroBanner } from './components/HeroBanner';
import { InstallmentCalculator } from './components/InstallmentCalculator';
import { ProductCatalog } from './components/ProductCatalog';
import { TrustBenefitsSection } from './components/TrustBenefitsSection';
import { StoreFooter } from './components/StoreFooter';
import { BookingModal } from './components/BookingModal';
import { ProductSpecsModal } from './components/ProductSpecsModal';
import { OriginalPosterModal } from './components/OriginalPosterModal';
import { WebsiteIntegrationModal } from './components/WebsiteIntegrationModal';
import { BookingTrackerModal } from './components/BookingTrackerModal';
import { MessageSquare } from 'lucide-react';

function StoreApp() {
  const { isUrdu } = useLanguage();

  // State for Modals
  const [activeBookingProduct, setActiveBookingProduct] = useState<Product | null>(null);
  const [activeBookingPlan, setActiveBookingPlan] = useState<InstallmentPlanDetails | null>(null);
  const [bookingMode, setBookingMode] = useState<'installment' | 'cash'>('installment');

  const [activeSpecsProduct, setActiveSpecsProduct] = useState<Product | null>(null);
  const [showPosterModal, setShowPosterModal] = useState<boolean>(false);
  const [showIntegrationModal, setShowIntegrationModal] = useState<boolean>(false);
  const [showTrackingModal, setShowTrackingModal] = useState<boolean>(false);

  // Active product selected for the installment calculator
  const [calculatorSelectedProduct, setCalculatorSelectedProduct] = useState<Product>(PRODUCTS[0]);

  // Handle Booking from Calculator
  const handleApplyFromCalculator = (plan: InstallmentPlanDetails) => {
    setActiveBookingProduct(plan.product);
    setActiveBookingPlan(plan);
    setBookingMode('installment');
  };

  // Handle Direct Installment from Card
  const handleBookInstallmentFromCard = (product: Product) => {
    setActiveBookingProduct(product);
    setActiveBookingPlan(null); // Will calculate in modal
    setBookingMode('installment');
  };

  // Handle Cash Buy from Card
  const handleBookCashFromCard = (product: Product) => {
    setActiveBookingProduct(product);
    setActiveBookingPlan(null);
    setBookingMode('cash');
  };

  // Jump to calculator and select product
  const handleJumpToCalculator = (product?: Product) => {
    if (product) {
      setCalculatorSelectedProduct(product);
    }
    const elem = document.getElementById('calculator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJumpToCatalog = () => {
    const elem = document.getElementById('catalog');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      
      {/* Top Bar Contract (Wordmark, Nav, Primary CTA & Lang Switch) */}
      <TopNav
        onOpenOriginalPoster={() => setShowPosterModal(true)}
        onOpenIntegration={() => setShowIntegrationModal(true)}
        onOpenTracking={() => setShowTrackingModal(true)}
      />

      <main className="flex-1">
        {/* Hero Banner with authentic poster slogans, guarantees & showroom visual */}
        <HeroBanner
          onOpenOriginalPoster={() => setShowPosterModal(true)}
          onExploreClick={handleJumpToCatalog}
          onCalculateClick={() => handleJumpToCalculator()}
        />

        {/* Interactive Installment Calculator */}
        <InstallmentCalculator
          selectedProduct={calculatorSelectedProduct}
          onSelectProduct={(p) => setCalculatorSelectedProduct(p)}
          onApplyPlan={handleApplyFromCalculator}
        />

        {/* Full Showroom Product Catalog with filters, search, and pricing */}
        <ProductCatalog
          onSelectForInstallment={handleBookInstallmentFromCard}
          onBookCash={handleBookCashFromCard}
          onViewSpecs={(p) => setActiveSpecsProduct(p)}
        />

        {/* 6 Core Pillars from the Poster (Brand Guarantee, No Hidden Fees, Free Installation) */}
        <TrustBenefitsSection />
      </main>

      {/* Showroom Footer with Sadiqabad Location, Maps, and Hotline */}
      <StoreFooter
        onOpenOriginalPoster={() => setShowPosterModal(true)}
        onOpenIntegration={() => setShowIntegrationModal(true)}
        onOpenTracking={() => setShowTrackingModal(true)}
      />

      {/* Floating WhatsApp Action Button */}
      <a
        href={`https://wa.me/${STORE_CONTACT.whatsappRaw}?text=${encodeURIComponent('Hello Ammar Traders, I have an inquiry about installment booking.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Booking"
        className="fixed bottom-5 right-5 z-40 p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg hover:shadow-emerald-600/30 transition-all flex items-center gap-2 cursor-pointer group"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="text-xs font-bold hidden sm:inline whitespace-nowrap">
          {isUrdu ? 'واٹس ایپ بکنگ' : 'Book on WhatsApp'}
        </span>
      </a>

      {/* Booking Checkout Modal (Cash or Installments) */}
      {activeBookingProduct && (
        <BookingModal
          product={activeBookingProduct}
          initialPlan={activeBookingPlan}
          initialType={bookingMode}
          onClose={() => {
            setActiveBookingProduct(null);
            setActiveBookingPlan(null);
          }}
          onBookingSuccess={() => {
            // keep modal open to show confirmation slip
          }}
        />
      )}

      {/* Product Detailed Specs Modal */}
      {activeSpecsProduct && (
        <ProductSpecsModal
          product={activeSpecsProduct}
          onClose={() => setActiveSpecsProduct(null)}
          onBookInstallment={(p) => {
            setActiveSpecsProduct(null);
            handleBookInstallmentFromCard(p);
          }}
          onBookCash={(p) => {
            setActiveSpecsProduct(null);
            handleBookCashFromCard(p);
          }}
        />
      )}

      {/* Digital Poster Reconstruction Modal */}
      {showPosterModal && (
        <OriginalPosterModal
          onClose={() => setShowPosterModal(false)}
          onFilterCategory={(cat: ProductCategory) => {
            setShowPosterModal(false);
            const catalogElem = document.getElementById('catalog');
            if (catalogElem) {
              catalogElem.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
      )}

      {/* Website Integration & Embed Code Generator Modal */}
      {showIntegrationModal && (
        <WebsiteIntegrationModal
          onClose={() => setShowIntegrationModal(false)}
        />
      )}

      {/* Booking Status & Receipt Tracking Modal */}
      {showTrackingModal && (
        <BookingTrackerModal
          onClose={() => setShowTrackingModal(false)}
        />
      )}

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <StoreApp />
    </LanguageProvider>
  );
}
