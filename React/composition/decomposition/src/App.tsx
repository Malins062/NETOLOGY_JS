import './App.css'

import Ads from './components/Ads'
import ExchangeRates from './components/ExchangeRates'
import Image from './components/Image'
import News from './components/News'
import Search from './components/Search'
import Widgets from './components/Widgets/Widgets'
import WeatherWidget from './components/Widgets/WeatherWidget'

const adsHeader = {
  url: '#',
  caption: ''
}

const weatherTitle = {
  caption: 'Погода',
}

const weatherTemperature = {
  avg: '17.7',
  day: '19.9',
  mrn: '13.2',
}

function App() {

  return (
    <>
      <header className='app-header'>
        <div className='header__main'>
          <News
            newsCategories={[]}
            newsNames={[]}
          />
          <ExchangeRates
            currencyRates={[]}
          />
        </div>
        <div className='header__ads'>
          <Ads
            title={adsHeader}
            description=''
          >
            <Image
              containerClass='header-img-container__ads'
              imgClass='header-img__ads'
              src=''
              alt='Image advertisement'
            />
          </Ads>
        </div>
      </header>

      <main className='app-main'>
        <Search
          searchСategories={[]}
        />

        <Image
          containerClass='main-banner'
          imgClass='main-banner-image'
          src=''
          alt='Banner image'
        />       
      </main>

      <footer className='app-footer'>
        <Widgets>
          <WeatherWidget
            title={weatherTitle}
            temperature={weatherTemperature}
          />
          {/* ... другие виджеты */}

        </Widgets>
      </footer>
    </>
  )
}

export default App
