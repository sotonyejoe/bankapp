import styles from './style';
import {
  NavBar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stat,
  Footer,
  Testimonials,
  Hero,
  ScrollReveal
} from './components'



function App() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <ScrollReveal>
            <Hero />
          </ScrollReveal>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stat />

          <ScrollReveal>
          <Business />
          </ScrollReveal>

          <ScrollReveal>
           <Billing />
          </ScrollReveal>
         
         <ScrollReveal>
          <CardDeal />
         </ScrollReveal>
          
          <ScrollReveal>
          <Testimonials />
          </ScrollReveal>
          
          <Clients />
          
          <CTA  />
          <Footer />

        </div>
      </div>
    </div>
  )
}

export default App
