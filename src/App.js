import styles from './App.module.scss';

export default function App() {
  return (
    <>
      <main>
        <header>
          <nav>
            <a><img src="https://www.productvideoexamples.com/_nuxt/product_video_examples_logo.ce3a8ea9.png" alt="site logo" /></a>
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
              <li>
                <a href="/#">Get access now</a>
              </li>
            </ul>
          </nav>
        </header>
        <section className={styles.heroSection}>Section 1</section>
        <div>
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=390583&theme=dark&period=daily"
            alt="Ranked second in: Product Hunt Product of the day"
          />
          <p>Get inspired & unlock the full potential of video marketing</p>
          <h1>Create product videos that convert</h1>
          <p>
            Learn from more than 100+ hand selected videos of companies that
            create engaging, shareable product videos that not only boost brand
            awareness but also convert customers.
          </p>
          <div>
            <a href="/#">Get access to 100+ videos now </a>
            <a href="/#">Learn more</a>
          </div>
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/1665273?v=4"
              alt="Github user"
            />
            <i>
              “I am about to launch a new product and needed inspiration for
              creating our new Product Hunt launch video. This site has been an
              amazing resource for us.”
            </i>
            <span>Alex Styl, founder of Composables</span>
          </div>
        </div>
        <div></div>
        <section>Section 2</section>
      </main>
      <footer>Footer</footer>
    </>
  );
}
