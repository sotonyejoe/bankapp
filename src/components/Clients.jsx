import { clients } from '../constants';
import styles from '../style';

const Clients = () =>  (
    <section className={`${styles.flexCenter} my-4 overflow-hidden w-full`}>
      <div className={`${styles.flexCenter} flex-wrap w-full marquee`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] 
          hover:brightness-0 hover:invert hover:scale-110 transition duration-300-ease-in-out `}>
            <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain " />
          </div>
        ))}
      </div>
    </section>
  )


export default Clients