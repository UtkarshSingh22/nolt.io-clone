import styles from "../../styles/Pricing.module.css";

const PricingBoards = () => {
    return (
        <section className={styles.boards}>
            <h1>Pricing</h1>
            <div className={styles.pricings}>
                <div>
                    <h2>Essential Plan</h2>
                    <div className={styles.intro}>Get started with Nolt</div>
                    <div className={styles.features}>
                        <div>
                            <div>✓</div>
                            <div>Unlimited users & usage</div>
                        </div>
                        <div>
                            <div>✓</div>
                            <div>One board</div>
                        </div>

                        <div>
                            <div>✓</div>
                            <div>Basic integrations</div>
                        </div>
                    </div>
                    <button>$29/mo - Start trial</button>
                </div>
                <div className={styles.active}>
                    <h2>Pro Plan</h2>
                    <div className={styles.intro}>
                        Everything you need to grow
                    </div>
                    <div className={styles.features}>
                        <div>
                            <div>✓</div>
                            <div>Unlimited</div>
                        </div>
                        <div>
                            <div>✓</div>
                            <div>Five boards</div>
                        </div>

                        <div>
                            <div>✓</div>
                            <div>
                                Advanced integrations (Okta, One Login, Zapier)
                            </div>
                        </div>
                    </div>
                    <button>$69/mo - Start trial</button>
                </div>
                <div>
                    <h2>Enterprise Plan</h2>
                    <div className={styles.intro}>
                        Powerful features for scale
                    </div>
                    <div className={styles.features}>
                        <div>
                            <div>✓</div>
                            <div>Unlimited</div>
                        </div>
                        <div>
                            <div>✓</div>
                            <div>Unlimited boards</div>
                        </div>

                        <div>
                            <div>✓</div>
                            <div>Unlimited integrations</div>
                        </div>
                    </div>
                    <button>Contact Us</button>
                </div>
            </div>
        </section>
    );
};

export default PricingBoards;
