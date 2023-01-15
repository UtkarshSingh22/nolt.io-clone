import styles from "../styles/Usage.module.css";

const Usage = () => {
    return (
        <section className={styles.main} id="usage">
            <div className={styles.heading}>
                Nolt powers user research at thousands of companies around the
                globe.
            </div>
            <div className={styles.content}>
                Teams that switch to Nolt have a better understanding of what
                their customers really care about. They make strategic decisions
                faster and build better customer relationships while saving
                hundreds of hours of unnecessary work.
            </div>
        </section>
    );
};

export default Usage;
