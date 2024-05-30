import React from 'react'
import MobileHero from './mobilehero'
import MobileMenu from './mobilemenu'

function MobileSite() {
  return (
<>
    <MobileHero />
    <MobileMenu animate={true}/>
</>
  )
}

export default MobileSite