import React from 'react';
import Header from '../components/molecules/Header';
import FinalOrder from '../components/templates/FinalOrder';
import AdressForm from '../components/templates/AdressForm';

export default function Checkout() {
  return (
    <div>
      <Header />
      <FinalOrder />
      <AdressForm />
    </div>
  );
}
