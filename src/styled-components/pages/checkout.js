import styled from 'styled-components';

  export const CheckoutContent = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    min-height: 300px;
    text-align: center;
  `;

  export const OrderList = styled.div`
    width: max-content;
    padding: 32px;
    margin: auto;
    text-align: center;
    border: 1px solid #8d8d8d;
    border-radius: 4px;
    button {
      display: block;
      padding: 12px;
      font-size: 18px;
      width: 300px;
      margin: 12px auto;
    }
  `;
