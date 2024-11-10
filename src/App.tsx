import { useState } from 'react'
import './App.css'
import CTA from './components/CTASection'
import Footer from './components/Footer';
import ServiciosTitle from './components/ServiciosTitle';
import FeatureSection from './components/FeatureSection';

function App() {
  const features = [
    {number: "01", title:"Servicio de mantenimiento de piscinas", 
     description: "Limpieza, reparaciones, sustitución de motores, Skimmers, filtro y más."},
    {number: "02", title:"Servicio según el tipo de piscina",
     description: "Mantenimiento integral de piscinas para hogares edificios, hoteles y clubes."},
    {number: "03", title:"Servicio de jardinería", 
     description: "Nos adaptamos incluso a las zonas verdes que son parte de tu piscina, contamos con profesionales en jardinería."},
    {number: "04", title:"Revisión, supervisión técnica y asesoramiento",
     description: "No es solo limpieza, abarcamos todo lo necesario para prestar un servicio completo de mantenimiento y limpiez del área de piscinas"}
  ];

  return (
    <div className='relative h-screen'>      
      <ServiciosTitle/>   
      <FeatureSection items={features}/>
      <CTA/>
      <Footer/>
    </div>    
  );
}

export default App
