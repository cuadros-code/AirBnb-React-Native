import React, { useState } from 'react'
import GuestsSelector from '../../components/GuestsSelector'

const GuestScreen = () => {

  const [numberAdults, setNumberAdults] = useState(0)
  const [numberChildrens, setNumberChildrens] = useState(0)
  const [numberInfants, setNumberInfants] = useState(0)

  return (
    <>
      <GuestsSelector
        title="Adults"
        description="Ages 13 or above"
        state={numberAdults}
        setState={setNumberAdults}
      />
      <GuestsSelector
        title="Children"
        description="Ages 2 - 12"
        state={numberChildrens}
        setState={setNumberChildrens}
      />
      <GuestsSelector
        title="Infants"
        description="Under 2"
        state={numberInfants}
        setState={setNumberInfants}
      />
    </>
  )
}

export default GuestScreen
