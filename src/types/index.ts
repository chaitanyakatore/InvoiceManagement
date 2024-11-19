export interface Invoice {
  id: string;
  serialNumber: string;
  customerName: string;
  productName: string;
  qty: number;
  tax: number;
  totalAmount: number;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
  tax: number;
  priceWithTax: number;
}

export interface Customer {
  id: string;
  name: string;
  phoneNumber: string;
  totalPurchaseAmount: number;
}
