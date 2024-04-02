import "./PageTwo.css";
import performaceImg from "./media/performanceimg.jpg";
import ImageSlider from "./Gallery";
import photo1 from "./media/pho1.png";
import photo2 from "./media/pho2.png";
import photo3 from "./media/pho3.png";
import fd1 from "./media/feed1.png";
import fd2 from "./media/feed2.png";
import fd3 from "./media/feed3.png";
import fd4 from "./media/feed4.png";

const images = [
  { original: photo1 },
  { original: photo2 },
  { original: photo3 },
];

function PageTwo() {
  return (
    <div className="pageTwo">
      <div className="about">
        <h1>ABOUT US</h1>
        <p>
          We're an all-inclusive lower-voices a cappella group known for our fun
          performances and original music! Since our founding in 2000, we’ve
          gone million-view-viral on YouTube multiple times, released an album
          entirely composed of original songs, and performed for Cal Athletics
          and at UC Berkeley's 2022 commencement!
        </p>
      </div>
      <div className="events">
        <section>
          <article className="ev">
            <h2>EVENTS</h2>
            <p>
              We organize Welcome Back to A Cappella, Cal’s a cappella
              orientation, at the beginning of every semester. Hundreds of
              students turn out to hear 13+ a cappella groups perform. The show
              is always fun, and we hope you’ll come!
            </p>
            <ImageSlider images={images} />
          </article>
          <article>
            <h2>HIRE US</h2>
            <p>
              Please e-mail our business manager at
              noteworthy@ucchoral.berkeley.edu and fill out this form. In your
              email, let us know:
            </p>
            <ul>
              <li>Who you are</li>
              <li>The details of the event (where and when it’ll be)</li>
              <li>
                What kind of performence you’d like us and how long the
                performance should be
              </li>
            </ul>
            <img id="pfmImg" src={performaceImg} width="80%" height="49%" />
          </article>
          <article>
            <h2>FALLOW US</h2>
            <a href="https://www.instagram.com/p/C3liex_vrpC/?img_index=1/">
              <img id="fd1" src={fd1} width="49%" height="36%" />
            </a>
            <a href="https://www.instagram.com/p/C2Yq2hvrEle/?img_index=1/">
              <img id="fd2" src={fd2} width="49%" height="36%" />
            </a>
            <a href="https://www.instagram.com/p/C2GQSnRv7TE/">
              <img id="fd3" src={fd3} width="49%" height="36%" />
            </a>
            <a href="https://www.instagram.com/p/C2D5oaZvZQv/">
              <img id="fd4" src={fd4} width="49%" height="36%" />
            </a>
            <a href="https://www.instagram.com/cal_noteworthy/">Instagram</a>
          </article>
        </section>
      </div>
    </div>
  );
}

export default PageTwo;
