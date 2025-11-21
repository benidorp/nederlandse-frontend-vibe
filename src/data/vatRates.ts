export interface VATRate {
  country: string;
  countryCode: string;
  currency: string;
  currencySymbol: string;
  standardRate: number;
  reducedRates: number[];
}

export const vatRates: VATRate[] = [
  // European Union
  { country: "Netherlands", countryCode: "NL", currency: "EUR", currencySymbol: "€", standardRate: 21, reducedRates: [9] },
  { country: "Belgium", countryCode: "BE", currency: "EUR", currencySymbol: "€", standardRate: 21, reducedRates: [6, 12] },
  { country: "Germany", countryCode: "DE", currency: "EUR", currencySymbol: "€", standardRate: 19, reducedRates: [7] },
  { country: "France", countryCode: "FR", currency: "EUR", currencySymbol: "€", standardRate: 20, reducedRates: [5.5, 10] },
  { country: "Spain", countryCode: "ES", currency: "EUR", currencySymbol: "€", standardRate: 21, reducedRates: [10] },
  { country: "Italy", countryCode: "IT", currency: "EUR", currencySymbol: "€", standardRate: 22, reducedRates: [5, 10] },
  { country: "Austria", countryCode: "AT", currency: "EUR", currencySymbol: "€", standardRate: 20, reducedRates: [10, 13] },
  { country: "Poland", countryCode: "PL", currency: "PLN", currencySymbol: "zł", standardRate: 23, reducedRates: [5, 8] },
  { country: "Portugal", countryCode: "PT", currency: "EUR", currencySymbol: "€", standardRate: 23, reducedRates: [6, 13] },
  { country: "Sweden", countryCode: "SE", currency: "SEK", currencySymbol: "kr", standardRate: 25, reducedRates: [6, 12] },
  { country: "Denmark", countryCode: "DK", currency: "DKK", currencySymbol: "kr", standardRate: 25, reducedRates: [] },
  { country: "Finland", countryCode: "FI", currency: "EUR", currencySymbol: "€", standardRate: 24, reducedRates: [10, 14] },
  { country: "Greece", countryCode: "GR", currency: "EUR", currencySymbol: "€", standardRate: 24, reducedRates: [6, 13] },
  { country: "Ireland", countryCode: "IE", currency: "EUR", currencySymbol: "€", standardRate: 23, reducedRates: [9, 13.5] },
  { country: "Luxembourg", countryCode: "LU", currency: "EUR", currencySymbol: "€", standardRate: 17, reducedRates: [8] },
  { country: "Czech Republic", countryCode: "CZ", currency: "CZK", currencySymbol: "Kč", standardRate: 21, reducedRates: [10, 15] },
  { country: "Hungary", countryCode: "HU", currency: "HUF", currencySymbol: "Ft", standardRate: 27, reducedRates: [5, 18] },
  { country: "Romania", countryCode: "RO", currency: "RON", currencySymbol: "lei", standardRate: 19, reducedRates: [5, 9] },
  { country: "Bulgaria", countryCode: "BG", currency: "BGN", currencySymbol: "лв", standardRate: 20, reducedRates: [9] },
  { country: "Croatia", countryCode: "HR", currency: "EUR", currencySymbol: "€", standardRate: 25, reducedRates: [5, 13] },
  { country: "Slovakia", countryCode: "SK", currency: "EUR", currencySymbol: "€", standardRate: 20, reducedRates: [10] },
  { country: "Slovenia", countryCode: "SI", currency: "EUR", currencySymbol: "€", standardRate: 22, reducedRates: [9.5] },
  { country: "Estonia", countryCode: "EE", currency: "EUR", currencySymbol: "€", standardRate: 20, reducedRates: [9] },
  { country: "Latvia", countryCode: "LV", currency: "EUR", currencySymbol: "€", standardRate: 21, reducedRates: [5, 12] },
  { country: "Lithuania", countryCode: "LT", currency: "EUR", currencySymbol: "€", standardRate: 21, reducedRates: [5, 9] },
  
  // Non-EU Europe
  { country: "United Kingdom", countryCode: "GB", currency: "GBP", currencySymbol: "£", standardRate: 20, reducedRates: [5] },
  { country: "Switzerland", countryCode: "CH", currency: "CHF", currencySymbol: "CHF", standardRate: 8.1, reducedRates: [2.6, 3.8] },
  { country: "Norway", countryCode: "NO", currency: "NOK", currencySymbol: "kr", standardRate: 25, reducedRates: [12, 15] },
  
  // Americas
  { country: "United States", countryCode: "US", currency: "USD", currencySymbol: "$", standardRate: 0, reducedRates: [] }, // Sales tax varies by state
  { country: "Canada", countryCode: "CA", currency: "CAD", currencySymbol: "$", standardRate: 5, reducedRates: [] }, // GST, varies by province
  { country: "Mexico", countryCode: "MX", currency: "MXN", currencySymbol: "$", standardRate: 16, reducedRates: [8] },
  { country: "Brazil", countryCode: "BR", currency: "BRL", currencySymbol: "R$", standardRate: 17, reducedRates: [12] },
  { country: "Argentina", countryCode: "AR", currency: "ARS", currencySymbol: "$", standardRate: 21, reducedRates: [10.5] },
  
  // Asia Pacific
  { country: "Australia", countryCode: "AU", currency: "AUD", currencySymbol: "$", standardRate: 10, reducedRates: [] },
  { country: "New Zealand", countryCode: "NZ", currency: "NZD", currencySymbol: "$", standardRate: 15, reducedRates: [] },
  { country: "Japan", countryCode: "JP", currency: "JPY", currencySymbol: "¥", standardRate: 10, reducedRates: [8] },
  { country: "Singapore", countryCode: "SG", currency: "SGD", currencySymbol: "$", standardRate: 9, reducedRates: [] },
  { country: "South Korea", countryCode: "KR", currency: "KRW", currencySymbol: "₩", standardRate: 10, reducedRates: [] },
  { country: "India", countryCode: "IN", currency: "INR", currencySymbol: "₹", standardRate: 18, reducedRates: [5, 12] },
  { country: "China", countryCode: "CN", currency: "CNY", currencySymbol: "¥", standardRate: 13, reducedRates: [6, 9] },
  
  // Middle East & Africa
  { country: "United Arab Emirates", countryCode: "AE", currency: "AED", currencySymbol: "د.إ", standardRate: 5, reducedRates: [] },
  { country: "Saudi Arabia", countryCode: "SA", currency: "SAR", currencySymbol: "﷼", standardRate: 15, reducedRates: [] },
  { country: "South Africa", countryCode: "ZA", currency: "ZAR", currencySymbol: "R", standardRate: 15, reducedRates: [] },
  { country: "Israel", countryCode: "IL", currency: "ILS", currencySymbol: "₪", standardRate: 17, reducedRates: [] },
];
