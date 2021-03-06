import styles from '../styles/components/Powered.module.css'
import Image from 'next/image'

function Powered() {
    return (
        <div className={styles.setup}>
            <a className={styles.layout} href="https://starknet.io/" target="_blank" rel="noreferrer" >
                <Image className={styles.logo} width={24} height={24} src="/starknet_logo.svg" alt="StarkNet Logo" />
                <span className={styles.text} >Powered by StarkNet</span>
            </a>
        </div>
    );

}
export default Powered;