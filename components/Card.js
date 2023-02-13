import styles from '../styles/Card.module.css'
export async function getServerSideProps(context) {
    console.log(context)
    return {
      props: {
      }
    }
  }
export default function Card({title, href, description}){
    return (
        <div className={styles.card}>
            <h2 className={styles.cardHeader}>{title}</h2>
            <p className={styles.cardDesc}>{description}</p>
            <a href={href}>More Info</a>
        </div>
    )
    
}