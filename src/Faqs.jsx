import React, { useState } from 'react'
import {question} from './faqQuestion';

export default function Faqs() {
    const [currentId,setCurrentId]=useState(question[0].id)

    let items = question.map((itemsData,i)=>{
        let itemDetails={
            itemsData,
            currentId,
            setCurrentId

        }
       return(
        <FaqItems itemDetails ={itemDetails}  key={i}/>
       )
    })
  return (
    <div>
        <h1>Frequently Asked Questions (FAQs)</h1>
        <div className='faqouter'>
           {items}
          
        </div>
    </div>
  )
}
function FaqItems({itemDetails}){
    let{itemsData,currentId,setCurrentId} =  itemDetails
    return(
        <div className='faqItems' >
            <h2>
              {itemsData.question}
            </h2>
            <p className={currentId===itemDetails.itemsData.id ? 'activeAns' : ' '}>
                {itemDetails.itemsData.answer}</p>
            
            </div> 
    )

}
