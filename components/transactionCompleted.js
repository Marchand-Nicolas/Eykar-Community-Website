import styles from '../styles/components/TransactionCompleted.module.css'
import Image from 'next/image'

export default function transactionCompleted () {
    return (
        <div className={styles.container}>
            <Image alt='Medal' src="/icons/medals.svg" width={40} height={40} />
            <h2>Successful transaction</h2>
        </div>
    )
}