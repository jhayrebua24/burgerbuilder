import React from 'react';
import PropTypes from 'prop-types';

const PricingTable = ({ items }) => (
  <div
    style={{
      height: '360px',
      borderBottom: '2px solid #ffda79',
      padding: '0 5px',
    }}
  >
    <table
      cellSpacing="0"
      cellPadding="3"
      width="100%"
      style={{
        fontSize: 14,
        textAlign: 'center',
      }}
    >
      <thead>
        <tr>
          <th>Product</th>
          <th>Qty.</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bun</td>
          <td>1</td>
          <td style={{ textAlign: 'right' }}>20</td>
          <td style={{ textAlign: 'right' }}>20.00</td>
        </tr>
        {items.map((item) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td style={{ textAlign: 'right' }}>{item.price}</td>
            <td style={{ textAlign: 'right' }}>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

PricingTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default PricingTable
