import styles from './style';
import {about, blog, navbar, team} from './components';

const App = () => (
  <div className="bg-primaryBlack w-full overflow-hidden">
    <div className={'${styles.paddingX} ${styles.flexCenter}'}>
      <div className= {'${styles.boxWidth}'}>
        <Navbar/>
      </div>
    </div>

{/*Hero section */}
    <div className={'bg-primaryBlack ${styles.flexStart}'}>
      <div className={'${styles.boxWidth}'}>
        <Hero/>
      </div>
    </div>

{/*Body component for the about */}
    <div className={'bg-primaryBlack ${styles.paddingX} ${styles.flexStart}'}>
      <div className={'${styles.boxWidth}'}>
        <About/>
        <Team/>
        <Blog/>
      </div>
    </div>

  </div>
);


export default App