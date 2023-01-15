import styles from '../styles/MainContent.module.css'

const MainContent = () => {
    return (
        <section className={styles.main} >
            <div className={styles.heading}>Feedback boards your users will love.</div>
            <div className={styles.content}>
                Nolt is a beautiful, collaborative place for all your user
                requests – no more outdated spreadsheets or chaotic Trello
                boards. Give your customers a voice and gain priceless insights.
                Everything for just $25/month per board.
            </div>
        </section>
    );
};

export default MainContent;
