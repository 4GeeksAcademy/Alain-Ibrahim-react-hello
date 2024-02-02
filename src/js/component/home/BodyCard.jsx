import React from 'react'
import { Card } from './Card'; 
import { cardsData } from '../../data/cardsData';

export const BodyCard = () => {

    return <main>

    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {
           cardsData.map(card => (
              <Card key={card.id} {...card}/>
            ))
          }
       </div> 
      </div>
    </div>
  
  </main>  
}
