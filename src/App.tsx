import { useState } from 'react'
import './App.css'
import CTA from './components/CTASection'
import Footer from './components/Footer';

const services = [
  {
    id: '01',
    title: 'asdad',
    description: '',
  }
]

function App() {
  return (
    <div className='relative h-screen'>
      {/* pones una seccion <seccion />
        <div flex></div>
        <FeatureItem
          number="01"
          title="servicio noseq"
          description="lorem ipsum"
        />
        <FeatureItem
          number="02"
          title="servicio noseq"
          description="lorem ipsum"
        />

        {services.map((service) => 
          <FeatureItem
            number={service.id}
            title={service.title}
        )}

      */}
      <h1>HOLA</h1>
      <CTA/>
      <Footer/>
    </div>    
  );
}

export default App
