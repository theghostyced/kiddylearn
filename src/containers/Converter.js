import React, { useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'

import RomanNumerals from '../api/romanNumerals'

const Converter = () => {
  const [romanToNumVal, setRomanToNumVal] = useState(null);
  const [romanToNumResult, setRomanToNumResult] = useState(null)

  const [numeralToRomanVal, setNumeralToRomanVal] = useState(null);
  const [numeralToRomanResult, setNumeralToRomanResult] = useState(null)

  const handleR2NChange = (e) => setRomanToNumVal(e.target.value);
  const handleN2RChange = (e) => setNumeralToRomanVal(e.target.value);

  const handleR2NConversion = () => {
    if (romanToNumVal !== null) {
      const response = RomanNumerals.fromRoman(romanToNumVal);

      setRomanToNumResult(response)
    }
  }


  const handleN2RConversion = () => {
    if (numeralToRomanVal !== null) {
      const response = RomanNumerals.toRoman(numeralToRomanVal);

      setNumeralToRomanResult(response)
    }
  }

  return (
    <div className="bg-primary convert">
      <div className="convert__wrapper">
        <Card>
          <h2 className="card__header">Roman to Number</h2>
          <p className="card__description">Converts roman numerals to numbers</p>
          <div className="card__wrapper">
            <input className="input" type="text" aria-label="Roman to Number" name="rTN" onChange={handleR2NChange} placeholder="XX" />
            <div className="r2n__display">{romanToNumResult}</div>
          </div>
          <Button onClick={handleR2NConversion}>
            Convert
          </Button>
        </Card>

        <Card>
          <h2 className="card__header">Numbers to Roman</h2>
          <p className="card__description">Converts numbers to roman numerals</p>
          <div className="card__wrapper">
            <input className="input" type="text" aria-label="Roman to Number" name="rTN2" onChange={handleN2RChange} placeholder="30" />
            <div className="r2n__display">{numeralToRomanResult}</div>
          </div>
          <Button onClick={handleN2RConversion}>
            Convert
          </Button>
        </Card>
      </div>
    </div>
  )
}

export default Converter
