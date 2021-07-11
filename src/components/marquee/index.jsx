import React, { useState, useEffect } from 'react';
import Marquee from 'react-marquee';

import { TopMarqueeContainer } from './styles';

const MarqueeText = () => {
  let text = '';
  for (let i = 0; i <50; i++) {
    text += `HelloWorld ${i} `
  }

  return text
}

const coinMarketText = async () => {
  let coinMarqueeText = 'COIN MARKET DATA ';
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  // for (var i = 1; i < 3; i++) {
  //   coinMarqueeText += 'COIN MARKET DATA '
  // }
  
  let { data: coinAPIData } = await fetch(`https://api.coincap.io/v2/assets?limit=7`, requestOptions)
    .then(response => response.text())
    .then(responseText => JSON.parse(responseText))

  console.log(coinAPIData)

  for (let i = 1; i < 3; i++) {
    for (let coin of coinAPIData) {
      coinMarqueeText += `${coin.name}/${coin.symbol} $${parseFloat(coin.priceUsd).toFixed(2)} --- `
    }
  }

  return coinMarqueeText;
}

export const TopMarquee = () => {
  const [coinDataText, setCoinDataText] = useState(MarqueeText());
  
  useEffect(() => {
    const fn = async() => {
      let text = await coinMarketText();

      setCoinDataText(text);
    }
    fn()
  }, [])

  return (
    <TopMarqueeContainer>
      <Marquee
        text={coinDataText}
        loop={true}
        hoverToStop={true}
      />
    </TopMarqueeContainer>
  )
}
