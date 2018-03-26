export default [
  { label: 'What to buy', name: 'purchase', type: 'text' },
  { label: 'How much', name: 'price', type: 'text' },
  {
    label: 'Payment', name: 'payment', type: 'select', options: [
      { value: '10', label: 'Ten' },
      { value: '11', label: 'Eleven' },
      { value: '12', label: 'Twelve' },
    ]
  },
  { label: 'Date purchase', name: 'datePurchase', type: 'date' },
];
