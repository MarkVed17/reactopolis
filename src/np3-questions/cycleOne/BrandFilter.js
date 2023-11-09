import React, { useState } from 'react';

// Brands data structure
const brands = [
  { id: '0a', brandName: 'puma' },
  { id: '0b', brandName: 'adiddas' },
  { id: '0c', brandName: 'wildcraft' },
  { id: '0d', brandName: 'levis' },
  { id: '0e', brandName: 'celio' },
];

export default function BrandFilter() {
  const [brandNames, setBrandNames] = useState(brands);
  const [searchText, setSearchText] = useState('');

  function filterBrandNames(e) {
    setSearchText(e.target.value);

    const filteredBrandNames = brands.filter((brand) =>
      brand.brandName.includes(e.target.value)
    );

    setBrandNames(filteredBrandNames);
  }

  return (
    <>
      <input type="text" value={searchText} onChange={filterBrandNames} />
      {brandNames.map((brand) => {
        return <div key={brand.id}>{brand.brandName}</div>;
      })}
    </>
  );
}
