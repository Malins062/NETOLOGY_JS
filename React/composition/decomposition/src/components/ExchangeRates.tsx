interface TCurrencyRates {
  currency: string;
  rate: string;
  url?: string;
}

/**
 * Rendering content of currency exchange rates
 * 
 * @namespace ExchangeRates
 * 
 * @param {Array<TCurrencyRates>} currencyRates - List of currency rates
 * @param {string} currencyRates.currency - Currency 
 * @param {string} currencyRates.rates - Rate 
 * @param {string} currencyRates.url - URL link for currency  
 */
export default function ExchangeRates({ currencyRates }: { currencyRates: Array<TCurrencyRates> }) {
  return (
    <div className='exchange-rates-container'>
      <ul className='exchange-rates'>
        {currencyRates.map((item, index) => {
          return (
            <li className='exchange-rates__item' key={index}>
              <a href={item.url ? item.url : '#'} className='exchange-rates__item-link'>
                {item.currency}
              </a>
              <span className='exchange-rates__item-rate'>
                {item.rate}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
