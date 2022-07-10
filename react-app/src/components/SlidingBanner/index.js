import "./SlidingBanner.css"

function SlidingBanner() {
  return (
    <div id="sliding-banner-container">
      <a class="item-1 text" target="_blank" href="https://www.linkedin.com/in/dannytoan/">
        Keep in touch. Let's connect on LinkedIn!
      </a>

      <a class="item-2 text" target="_blank" href="https://github.com/dannytoan">
        Check out my other projects on Github!
      </a>

      <a
        class="item-3 text"
        target="_blank" 
        href="https://github.com/dannytoan/matcha-shark-app"
      >
        View this project's repository here!
      </a>
    </div>
  );
}

export default SlidingBanner
