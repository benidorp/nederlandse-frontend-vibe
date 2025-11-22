export interface VATRate {
  country: string;
  countryCode: string;
  flag: string;
  currency: string;
  currencySymbol: string;
  standardRate: number;
  reducedRates: number[];
}

export const vatRates: VATRate[] = [
  // European Union
  { country: "Netherlands", countryCode: "NL", flag: "🇳🇱", currency: "EUR", currencySymbol: "€", standardRate: 21, reducedRates: [9] },
  { country: "Belgium", countryCode: "BE", flag: "🇧🇪", currency: "EUR", currencySymbol: "€", standardRate: 21, reducedRates: [6, 12] },
  { country: "Germany", countryCode: "DE", flag: "🇩🇪", currency: "EUR", currencySymbol: "€", standardRate: 19, reducedRates: [7] },
  { country: "France", countryCode: "FR", flag: "🇫🇷", currency: "EUR", currencySymbol: "€", standardRate: 20, reducedRates: [5.5, 10] },
  { country: "Spain", countryCode: "ES", flag: "🇪🇸", currency: "EUR", currencySymbol: "€", standardRate: 21, reducedRates: [10] },
  { country: "Italy", countryCode: "IT", flag: "🇮🇹", currency: "EUR", currencySymbol: "€", standardRate: 22, reducedRates: [5, 10] },
  { country: "Austria", countryCode: "AT", flag: "🇦🇹", currency: "EUR", currencySymbol: "€", standardRate: 20, reducedRates: [10, 13] },
  { country: "Poland", countryCode: "PL", flag: "🇵🇱", currency: "PLN", currencySymbol: "zł", standardRate: 23, reducedRates: [5, 8] },
  { country: "Portugal", countryCode: "PT", flag: "🇵🇹", currency: "EUR", currencySymbol: "€", standardRate: 23, reducedRates: [6, 13] },
  { country: "Sweden", countryCode: "SE", flag: "🇸🇪", currency: "SEK", currencySymbol: "kr", standardRate: 25, reducedRates: [6, 12] },
  { country: "Denmark", countryCode: "DK", flag: "🇩🇰", currency: "DKK", currencySymbol: "kr", standardRate: 25, reducedRates: [] },
  { country: "Finland", countryCode: "FI", flag: "🇫🇮", currency: "EUR", currencySymbol: "€", standardRate: 24, reducedRates: [10, 14] },
  { country: "Greece", countryCode: "GR", flag: "🇬🇷", currency: "EUR", currencySymbol: "€", standardRate: 24, reducedRates: [6, 13] },
  { country: "Ireland", countryCode: "IE", flag: "🇮🇪", currency: "EUR", currencySymbol: "€", standardRate: 23, reducedRates: [9, 13.5] },
  { country: "Luxembourg", countryCode: "LU", flag: "🇱🇺", currency: "EUR", currencySymbol: "€", standardRate: 17, reducedRates: [8] },
  { country: "Czech Republic", countryCode: "CZ", flag: "🇨🇿", currency: "CZK", currencySymbol: "Kč", standardRate: 21, reducedRates: [10, 15] },
  { country: "Hungary", countryCode: "HU", flag: "🇭🇺", currency: "HUF", currencySymbol: "Ft", standardRate: 27, reducedRates: [5, 18] },
  { country: "Romania", countryCode: "RO", flag: "🇷🇴", currency: "RON", currencySymbol: "lei", standardRate: 19, reducedRates: [5, 9] },
  { country: "Bulgaria", countryCode: "BG", flag: "🇧🇬", currency: "BGN", currencySymbol: "лв", standardRate: 20, reducedRates: [9] },
  { country: "Croatia", countryCode: "HR", flag: "🇭🇷", currency: "EUR", currencySymbol: "€", standardRate: 25, reducedRates: [5, 13] },
  { country: "Slovakia", countryCode: "SK", flag: "🇸🇰", currency: "EUR", currencySymbol: "€", standardRate: 20, reducedRates: [10] },
  { country: "Slovenia", countryCode: "SI", flag: "🇸🇮", currency: "EUR", currencySymbol: "€", standardRate: 22, reducedRates: [9.5] },
  { country: "Estonia", countryCode: "EE", flag: "🇪🇪", currency: "EUR", currencySymbol: "€", standardRate: 20, reducedRates: [9] },
  { country: "Latvia", countryCode: "LV", flag: "🇱🇻", currency: "EUR", currencySymbol: "€", standardRate: 21, reducedRates: [5, 12] },
  { country: "Lithuania", countryCode: "LT", flag: "🇱🇹", currency: "EUR", currencySymbol: "€", standardRate: 21, reducedRates: [5, 9] },
  
  // Non-EU Europe
  { country: "United Kingdom", countryCode: "GB", flag: "🇬🇧", currency: "GBP", currencySymbol: "£", standardRate: 20, reducedRates: [5] },
  { country: "Switzerland", countryCode: "CH", flag: "🇨🇭", currency: "CHF", currencySymbol: "CHF", standardRate: 8.1, reducedRates: [2.6, 3.8] },
  { country: "Norway", countryCode: "NO", flag: "🇳🇴", currency: "NOK", currencySymbol: "kr", standardRate: 25, reducedRates: [12, 15] },
  
  // Americas
  { country: "United States", countryCode: "US", flag: "🇺🇸", currency: "USD", currencySymbol: "$", standardRate: 0, reducedRates: [] }, // Sales tax varies by state
  { country: "Canada", countryCode: "CA", flag: "🇨🇦", currency: "CAD", currencySymbol: "$", standardRate: 5, reducedRates: [] }, // GST, varies by province
  { country: "Mexico", countryCode: "MX", flag: "🇲🇽", currency: "MXN", currencySymbol: "$", standardRate: 16, reducedRates: [8] },
  { country: "Brazil", countryCode: "BR", flag: "🇧🇷", currency: "BRL", currencySymbol: "R$", standardRate: 17, reducedRates: [12] },
  { country: "Argentina", countryCode: "AR", flag: "🇦🇷", currency: "ARS", currencySymbol: "$", standardRate: 21, reducedRates: [10.5] },
  
  // Asia Pacific
  { country: "Australia", countryCode: "AU", flag: "🇦🇺", currency: "AUD", currencySymbol: "$", standardRate: 10, reducedRates: [] },
  { country: "New Zealand", countryCode: "NZ", flag: "🇳🇿", currency: "NZD", currencySymbol: "$", standardRate: 15, reducedRates: [] },
  { country: "Japan", countryCode: "JP", flag: "🇯🇵", currency: "JPY", currencySymbol: "¥", standardRate: 10, reducedRates: [8] },
  { country: "Singapore", countryCode: "SG", flag: "🇸🇬", currency: "SGD", currencySymbol: "$", standardRate: 9, reducedRates: [] },
  { country: "South Korea", countryCode: "KR", flag: "🇰🇷", currency: "KRW", currencySymbol: "₩", standardRate: 10, reducedRates: [] },
  { country: "India", countryCode: "IN", flag: "🇮🇳", currency: "INR", currencySymbol: "₹", standardRate: 18, reducedRates: [5, 12] },
  { country: "China", countryCode: "CN", flag: "🇨🇳", currency: "CNY", currencySymbol: "¥", standardRate: 13, reducedRates: [6, 9] },
  
  // Middle East & Africa
  { country: "United Arab Emirates", countryCode: "AE", flag: "🇦🇪", currency: "AED", currencySymbol: "د.إ", standardRate: 5, reducedRates: [] },
  { country: "Saudi Arabia", countryCode: "SA", flag: "🇸🇦", currency: "SAR", currencySymbol: "﷼", standardRate: 15, reducedRates: [] },
  { country: "South Africa", countryCode: "ZA", flag: "🇿🇦", currency: "ZAR", currencySymbol: "R", standardRate: 15, reducedRates: [] },
  { country: "Israel", countryCode: "IL", flag: "🇮🇱", currency: "ILS", currencySymbol: "₪", standardRate: 17, reducedRates: [] },
];
