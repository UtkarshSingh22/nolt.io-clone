import styles from "../styles/Testimonials.module.css";
import { Fragment } from "react";

const Testimonials = ({ col1Ref, col2Ref, col3Ref }) => {
    return (
        <Fragment>
            <section className={styles.main} id="testimonials">
                <div className={styles.col1} id="col1" ref={col1Ref}>
                    <div>
                        <div>
                            "Nolt is great for collecting feedback and feature
                            requests from our community of creators. It's given
                            us clarity on what to build next for our users and
                            has helped us improve our product decisions."
                        </div>
                        <div>
                            <img
                                src="https://nolt.io/static/dist/images/landing/testimonial-sahil.2236960693.jpg"
                                alt="testimonial"
                            />
                            <div>
                                <div>Sahil Lavingia</div>
                                <div>Gumroad</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            "It took us a while, but we finally found the
                            perfect product to centralize feedback. Nolt is
                            minimalistic, intuitive, and just beautiful. It's
                            the most efficient way to listen and interact with
                            our community."
                        </div>
                        <div>
                            <img
                                src="https://nolt.io/static/dist/images/landing/testimonial-itamar.3f40e2ee78.png"
                                alt="testimonial"
                            />
                            <div>
                                <div>Itamar Madar</div>
                                <div>The SCP Foundation</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            "Nolt works like a charm! Only after three days,
                            more than 8000 votes, 220 comments, and 80 ideas
                            have been submitted. A suggestion with over 1000
                            upvotes got implemented, and my users are engaged
                            and happy like never before."
                        </div>
                        <div>
                            <img
                                src="https://nolt.io/static/dist/images/landing/testimonial-michal.6b885fff05.png"
                                alt="testimonial"
                            />
                            <div>
                                <div>Michał Tajchert</div>
                                <div>Kanarek</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.no_name}>"Love the simplicity"</div>
                    <div>
                        <div>
                            "I really enjoy using Nolt! The app is focused on
                            what's essential, and it's super easy to customize
                            things and understand how things work. I also love
                            the transparent and affordable PRO model."
                        </div>
                        <div>
                            <img
                                src="https://nolt.io/static/dist/images/landing/testimonial-sebastiano.31c04f45c8.jpg"
                                alt="testimonial"
                            />
                            <div>
                                <div>Sebastiano Guerriero</div>
                                <div>CodyHouse</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            "We used to have suggestions from our community all
                            over the place, and it was hard to stay on top of
                            it. But with Nolt, we now have this dedicated place
                            for them that makes it super easy to see what the
                            community wants most."
                        </div>
                        <div>
                            <img
                                src="https://nolt.io/static/dist/images/landing/testimonial-richard.64b827b4bb.jpg"
                                alt="testimonial"
                            />
                            <div>
                                <div>Richard Rampas</div>
                                <div>Volcanoids</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            "Our users love the simple, intuitive, and modern
                            design of Nolt! It has allowed us to validate ideas,
                            ideate new features, and connect with our users in a
                            super easy and organized way."
                        </div>
                        <div>
                            <img
                                src="https://nolt.io/static/dist/images/landing/testimonial-umberto.2540ef7933.jpg"
                                alt="testimonial"
                            />

                            <div>
                                <div>Umberto Greco</div>
                                <div>OpenTabs</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.col2} id="col2" ref={col2Ref}>
                    <div className={styles.no_name}>
                        "We finally found the perfect product to centralize
                        feedback"
                    </div>
                    <div>
                        <div>
                            "We are big fans of Nolt. The amount of feedback,
                            feature requests and discussions has increased
                            significantly. With the voting system, it never
                            feels overwhelming. We are so much more in control
                            of our roadmap and closer to the community with our
                            releases."
                        </div>
                        <div>
                            <img
                                src="https://nolt.io/static/dist/images/landing/testimonial-bastian.e7fe6e24a1.jpg"
                                alt="testimonial"
                            />
                            <div>
                                <div>Bastian Allgeier</div>
                                <div>Kirby CMS</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            "Nolt is a fast and simple solution for getting
                            customer feedback for Archbee. We love the easy
                            token integration for automatically authenticating
                            our users."
                        </div>
                        <div>
                            <img
                                src="https://nolt.io/static/dist/images/landing/testimonial-dragos.5ba1ec0a09.jpg"
                                alt="testimonial"
                            />
                            <div>
                                <div>Dragos Bulugean</div>
                                <div>Archbee</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            "We tried several other tools for managing and
                            gathering user feedback, but they were either too
                            expensive, had an outdated look or were lacking
                            functionalities. Besides the reasonable price and
                            the very modern easy-to-use interface, what we love
                            about Nolt is the ability to suggest ideas or vote
                            on them anonymously. Most of the users don't like
                            signing up for something they may use only once.
                            Even if they act anonymously, they do have the
                            option to subscribe to specific ideas, so it's a
                            win-win situation."
                        </div>
                        <div>
                            <img
                                src="https://nolt.io/static/dist/images/landing/testimonial-ervin.4e6de2d1f0.png"
                                alt="testimonial"
                            />
                            <div>
                                <div>Ervin Kalemi</div>
                                <div>Publer</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            "We use @TryNolt for @rive_app and we love it!"
                        </div>
                        <div>
                            <img
                                src="https://nolt.io/static/dist/images/landing/testimonial-guido.79ae0f4b86.jpg"
                                alt="testimonial"
                            />
                            <div>
                                <div>Guido Rosso</div>
                                <div>Rive</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.no_name}>
                        "My users are engaged and happy like never before"
                    </div>
                    <div>
                        <div>
                            "Nolt enables us to get clarity over the features we
                            should build next. By opening up our backlog, which
                            is predominantly made up of feature requests from
                            our users, we democratise our product build,
                            ensuring the voice of our customer is at the center
                            of our development. Nolt makes it super easy!"
                        </div>
                        <div>
                            <img
                                src="https://nolt.io/static/dist/images/landing/testimonial-hassan.9e71415b4b.jpg"
                                alt="testimonial"
                            />
                            <div>
                                <div>Hassan Rajwani</div>
                                <div>REFSIX</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.col3} id="col3" ref={col3Ref}>
                    <div>
                        <div>
                            "The simplicity of Nolt made it easy for our small
                            team to start collecting customer feedback. In just
                            30 days, we went from 0 customer feedback to over 60
                            customer suggestions about our product. We even
                            started using Nolt to collect internal feedback from
                            different team members. Overall, it's been the
                            number one addition to our tech stack in terms of
                            price, simplicity, ROI, and effectiveness."
                        </div>
                        <div>
                            <img
                                src="https://nolt.io/static/dist/images/landing/testimonial-josh.827cc021f2.jpg"
                                alt="testimonial"
                            />
                            <div>
                                <div>Josh Merryman</div>
                                <div>MessageDesk</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            "We’ve really liked @TryNolt. The fine folks at
                            @Letterboxd_ have moved over to it as well. Highly
                            recommended."
                        </div>
                        <div>
                            <img
                                src="https://nolt.io/static/dist/images/landing/testimonial-tomwatson.c8c24550f9.jpg"
                                alt="testimonial"
                            />
                            <div>
                                <div>Tom Watson</div>
                                <div>Glass</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            "Thanks Tom! You tagged the handle of a fan account,
                            but yes, we’re loving Nolt’s streamlined approach to
                            feedback, not to mention the SSO and import options.
                            ⚡️"
                        </div>
                        <div>
                            <img
                                src="https://nolt.io/static/dist/images/landing/testimonial-letterboxd.d66b45c754.jpg"
                                alt="testimonial"
                            />
                            <div>
                                <div>Letterboxd</div>
                                <div>@letterboxd</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.no_name}>
                        "Nolt is the best for this, by far"
                    </div>
                    <div>
                        <div>
                            "Nolt was very easy to set up, and the support was
                            very fast. The tool helps us to get new ideas from
                            people both inside and outside of The Salvation
                            Army. We definitely recommend Nolt to anyone wanting
                            an easy and fast way to collect ideas."
                        </div>
                        <div>
                            <img
                                src="https://nolt.io/static/dist/images/landing/testimonial-dean.a9ae2d77df.jpg"
                                alt="testimonial"
                            />
                            <div>
                                <div>Dean Bates</div>
                                <div>The Salvation Army</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            "As a startup on a tiny budget, we were looking for
                            a super-lightweight customer feedback solution that
                            just worked right out of the box. Nolt fits our
                            needs perfectly!"
                        </div>
                        <div>
                            <img
                                src="https://nolt.io/static/dist/images/landing/testimonial-greg.5cab24bdd2.jpg"
                                alt="testimonial"
                            />
                            <div>
                                <div>Greg Hamilton</div>
                                <div>Lifecoach</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            "We are excited to now use a @TryNolt board for our
                            user suggestions! We love hearing from users & this
                            brings our community even closer to each other and
                            our roadmap."
                        </div>
                        <div>
                            <img
                                src="https://nolt.io/static/dist/images/landing/testimonial-tiimo.b0acff8ade.jpg"
                                alt="testimonial"
                            />
                            <div>
                                <div>Tiimo</div>
                                <div>@tiimoapp</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Testimonials;
