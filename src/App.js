import styles from './App.module.scss';

export default function App() {
  return (
    <>
      <main>
        <header>
          <nav>
            <div>
              <a>
                <img
                  src="https://www.productvideoexamples.com/_nuxt/product_video_examples_logo.ce3a8ea9.png"
                  alt="site logo"
                />
              </a>
            </div>
            <div className={styles.navigationBar}>
              <div>
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
                <a href="/#">Get access now</a>
              </div>
            </div>
          </nav>
        </header>

        <section className={styles.heroSection}>
          <div className={styles.heroSectionContainer}>
            <div className={styles.heroSectionGradient}></div>
            {/* ############# LEFT CONTAINER ############# */}
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
                Learn from more than 100+ hand selected videos of companies that
                create engaging, shareable product videos that not only boost
                brand awareness but also convert customers.
              </p>
              <div className={styles.heroSectionAccessLinks}>
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
              <div>
                <div>
                  <div>
                    <img
                      src="https://avatars.githubusercontent.com/u/1665273?v=4"
                      alt="Github user"
                    />
                  </div>
                  <div>
                    <i>
                      “I am about to launch a new product and needed inspiration
                      for creating our new Product Hunt launch video. This site
                      has been an amazing resource for us.”
                    </i>
                  </div>
                </div>
              </div>
              <span>Alex Styl, founder of Composables</span>
            </div>
            {/* ############# RIGHT CONTAINER ############# */}
            <div className={styles.heroSectionContainerRight}>
              <div class={styles.heroSectionContainerRightFlex}>
                <div className={styles.heroSectionColumnLeft}>
                  <video
                    autoPlay
                    poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"
                  >
                    <source src="/#" />
                    <track
                      src="captions_en.vtt"
                      kind="captions"
                      srcLang="en"
                      label="english_captions"
                    />
                  </video>
                  <video
                    autoPlay
                    poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"
                  >
                    <source src="/#" />
                    <track
                      src="captions_en.vtt"
                      kind="captions"
                      srcLang="en"
                      label="english_captions"
                    />
                  </video>
                  <video
                    autoPlay
                    poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"
                  >
                    <source src="/#" />
                    <track
                      src="captions_en.vtt"
                      kind="captions"
                      srcLang="en"
                      label="english_captions"
                    />
                  </video>
                </div>
                <div className={styles.heroSectionColumnRight}>
                  <video
                    autoPlay
                    poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"
                  >
                    <source src="/#" />
                    <track
                      src="captions_en.vtt"
                      kind="captions"
                      srcLang="en"
                      label="english_captions"
                    />
                  </video>
                  <video
                    autoPlay
                    poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"
                  >
                    <source src="/#" />
                    <track
                      src="captions_en.vtt"
                      kind="captions"
                      srcLang="en"
                      label="english_captions"
                    />
                  </video>
                  <video
                    autoPlay
                    poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"
                  >
                    <source src="/#" />
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
        </section>
        <br />
        <section>Section 2</section>
      </main>
      <footer>Footer</footer>
    </>
  );
}
