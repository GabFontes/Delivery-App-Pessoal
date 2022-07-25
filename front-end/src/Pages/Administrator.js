import React from 'react';
import HeaderAdmin from '../components/molecules/HeaderAdmin';
import NewUserForm from '../components/templates/NewUserForm';

export default function Administrator() {
  return (
    <div>
      <HeaderAdmin />
      <NewUserForm />
    </div>
  );
}
