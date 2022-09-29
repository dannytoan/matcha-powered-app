import "./Footer.css"

function Footer() {
  return (
    <div id="footer-ctnr">
      <div id="top-footer-about-links">
        <span className="footer-link">
          <i class="fa-solid fa-person"></i>&nbsp;
          <a className="footer-hyperlink" target="_blank" href="https://dannytoan.github.io/">Portfolio</a>
        </span>
        <span className="footer-link">
        <i class="fa-brands fa-linkedin"></i>&nbsp;
        <a className="footer-hyperlink" target="_blank" href="https://www.linkedin.com/in/dannytoan/">LinkedIn</a>
        </span>
        <span className="footer-link">
        <i class="fa-brands fa-square-github"></i>&nbsp;
        <a className="footer-hyperlink" target="_blank" href="https://github.com/dannytoan">GitHub</a>
        </span>
        <span className="footer-link">
        <i class="fa-brands fa-angellist"></i>&nbsp;
        <a className="footer-hyperlink" target="_blank" href="https://angel.co/u/danny-t-2">AngelList</a>
        </span>
      </div>
      <div id="bottom-footer-text">
        © 2022 | Danny Toan | MatchaShark is inspired by GymShark, Amazon, and
        Etsy
      </div>
    </div>
  );
}

export default Footer;
