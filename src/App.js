import styles from './App.module.scss';

export default function App() {
  return (
    <>
      <main>
        <header>
          <nav>
            <div>
              <div>
                <a>
                  <img
                    src="https://www.productvideoexamples.com/_nuxt/product_video_examples_logo.ce3a8ea9.png"
                    alt="site logo"
                  />
                </a>
              </div>
            </div>
            <div>
              <div className={styles.navigationBar}>
                {/* FIX NAVIGATION ELEMENTS NOT ALIGNED IN CENTER WITH GET ACCESS NOW */}
                <div className={styles.navigationBarContent}>
                  <ul>
                    <li>
                      <a href="/#">Features</a>
                    </li>
                    <li>
                      <a href="/#">Blog</a>
                    </li>
                    <li>
                      <a href="/#">Pricing</a>
                    </li>
                    <li>
                      <a href="/#">Login</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.getAccessNow}>
                  <a href="/#">
                    <div></div>
                    <p>Get access now</p>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <section>
          <div className={`${styles.heroSection} ${styles.container}`}>
            {/* ############# LEFT CONTAINER ############# */}

            <div className={styles.heroSectionFlex}>
              <div className={styles.heroSectionGradient}></div>
              <div className={styles.heroSectionGradientRelativeAnchor}></div>
              <div className={styles.heroSectionContentLeft}>
                <a
                  className={styles.heroSelectionProductBadgeContainer}
                  href="/#"
                >
                  <img
                    src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=390583&theme=dark&period=daily"
                    alt="Ranked second in: Product Hunt Product of the day"
                  />
                </a>
                <p className={styles.heroSectionInspirationQuote}>
                  Get inspired & unlock the full potential of video marketing
                </p>
                <h1>
                  Create product videos that
                  <span className={styles.fancyText}> convert</span>
                </h1>
                <p className={styles.heroParagraph}>
                  Learn from more than 100+ hand selected videos of companies
                  that create engaging, shareable product videos that not only
                  boost brand awareness but also convert customers.
                </p>
                <div className={styles.heroSectionAccessFlex}>
                  <div>
                    <a
                      className={styles.heroSectionAccessLinksAccessButton}
                      href="/#"
                    >
                      Get access to 100+ videos now{' '}
                    </a>
                  </div>
                  <div>
                    <a
                      className={styles.heroSectionAccessLinksLearnMoreButton}
                      href="/#"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
                <div className={styles.heroSectionTestimonialContainer}>
                  <div className={styles.heroSectionTestimonialFlex}>
                    <div
                      className={styles.heroSectionTestimonialImageContainer}
                    >
                      <img
                        src="https://avatars.githubusercontent.com/u/1665273?v=4"
                        alt="Github user"
                      />
                    </div>
                    <div className={styles.heroSectionTestimonialTextContainer}>
                      <p>
                        <span>“</span>
                        <i>
                          “I am about to launch a new product and needed
                          inspiration for creating our new Product Hunt launch
                          video. This site has been an amazing resource for us.”
                        </i>
                        <span>“</span>
                      </p>
                      <p className={styles.heroSectionTestimonialTextPerson}>
                        Alex Styl, founder of Composables
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ############# RIGHT CONTAINER ############# */}
              <div className={styles.heroSectionContainerRight}>
                <div className={styles.heroSectionContainerRightFlex}>
                  <div>
                    <video
                      autoPlay
                      muted
                      poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"
                    >
                      <source
                        src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim - 02.mp4"
                        type="video/mp4"
                      />
                      <track
                        src="captions_en.vtt"
                        kind="captions"
                        srcLang="en"
                        label="english_captions"
                      />
                    </video>
                    <video
                      autoPlay
                      muted
                      poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"
                    >
                      <source
                        src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim - 02.mp4"
                        type="video/mp4"
                      />
                      <track
                        src="captions_en.vtt"
                        kind="captions"
                        srcLang="en"
                        label="english_captions"
                      />
                    </video>
                    <video
                      autoPlay
                      muted
                      poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"
                    >
                      <source
                        src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim - 02.mp4"
                        type="video/mp4"
                      />
                      <track
                        src="captions_en.vtt"
                        kind="captions"
                        srcLang="en"
                        label="english_captions"
                      />
                    </video>
                  </div>
                  <div className={styles.heroSectionContainerRightColumn}>
                    <video
                      autoPlay
                      muted
                      poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"
                    >
                      <source
                        src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim - 02.mp4"
                        type="video/mp4"
                      />
                      <track
                        src="captions_en.vtt"
                        kind="captions"
                        srcLang="en"
                        label="english_captions"
                      />
                    </video>
                    <video
                      autoPlay
                      muted
                      poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"
                    >
                      <source
                        src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim - 02.mp4"
                        type="video/mp4"
                      />
                      <track
                        src="captions_en.vtt"
                        kind="captions"
                        srcLang="en"
                        label="english_captions"
                      />
                    </video>
                    <video
                      autoPlay
                      muted
                      poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"
                    >
                      <source
                        src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim - 02.mp4"
                        type="video/mp4"
                      />
                      <track
                        src="captions_en.vtt"
                        kind="captions"
                        srcLang="en"
                        label="english_captions"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <section>Section 2</section>
      </main>
      <footer>
        <img
          className={styles.footerGradientImage}
          src="https://www.productvideoexamples.com/_nuxt/gradient-bg-footer.51e46e1d.svg"
          alt="Footer design"
        />
        <div className={styles.container}>
          <div className={styles.footerFlex}>
            <div className={styles.footerCopyrightContainer}>
              <div className={styles.footerCopyrightFlex}>
                <div className={styles.footerCopyrightLogoContainer}>
                  <img
                    className={styles.footerCopyrightLogo}
                    src="https://www.productvideoexamples.com/_nuxt/product_video_examples_logo.ce3a8ea9.png"
                    alt="footer logo"
                  />
                </div>
                <div className={styles.footerCopyrightContent}>
                  <p>
                    Learn from more than 100+ carefully selected videos of
                    companies that creat engaging, shareable videos that not
                    only boost brand awareness but also convert customers.
                  </p>
                  <a>
                    <img
                      src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=390583&theme=dark&period=daily"
                      alt="Product Badge"
                    />
                  </a>
                  <p>
                    © Copyright 2023. All Rights Reserved by Seven Degrees Labs
                    LLC.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.footerCompanyContainer}>
              <div className={styles.footerHeightFull}>
                <h3 className={styles.footerHeading3}>Company</h3>
                <ul>
                  <li>
                    <a href="/#">Features</a>
                  </li>

                  <li>
                    <a href="/#">Pricing</a>
                  </li>
                  <li>
                    <a href="/#">Blog</a>
                  </li>
                  <li>
                    <a href="/#">Terms</a>
                  </li>
                  <li>
                    <a href="/#">Privacy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.footerSupportContainer}>
              <h3 className={styles.footerHeading3}>Support</h3>
              <ul>
                <li>
                  <a href="/#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className={styles.footerAboutContainer}>
              <div>
                <h3 className={styles.footerHeading3}>About</h3>
                <a className={styles.footerMadeBy} href="/#">
                  Made by @fitzekatz{' '}
                </a>
                <span>ツ</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
