import React from 'react';
import FinalOrder from '../components/templates/FinalOrder';
import FinishAdressForm from '../components/templates/FinishAdressForm';
import Header from '../components/molecules/Header';

export default function Checkout() {
  return (
    <div>
      <Header />
      <FinalOrder />
      <FinishAdressForm />
    </div>
  );
}
