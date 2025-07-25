import '../style.css';
import { animateFavicon } from './animate.ts';
import { getTime } from './time.ts';
import { aboutmePage } from './aboutme.ts';
import arisu from '../assets/Arisu.png';
import arisu2 from '../assets/Arisu2.png';
import arisu3 from '../assets/Arisu3.png';

export function mainPage() {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  app.innerHTML = `
    <section>
      <nav>
        <button type="button" class="menuLink" id="aboutToggle">
          <span class="spanBox">
              <img alt="flatAboutMe" src="${arisu}" class="logo" style="position: absolute;">
              <span class="menuText">&nbspAbout Me</span>
          </span>
        </button>

        <button class="menuLink">
          <span class="spanBox">
              <img alt="flatAboutMe" src="${arisu2}" class="logo" style="position: absolute;">
              <span class="menuText">Projects</span>
          </span>
        </button>

        <button class="menuLink">
          <span class="spanBox">
              <img alt="flatAboutMe" src="${arisu3}" class="logo" style="position: absolute;">
              <span class="menuText">Skills</span>
          </span>
        </button>

        <button class="menuLink">
          <span class="spanBox">
              <img alt="flatAboutMe" src="${arisu}" class="logo" style="position: absolute;">
              <span class="menuText">Secret Fourth Thing</span>
          </span>
        </button>
      </nav>
    </section>
  `;

  const aboutToggle = document.getElementById('aboutToggle');
  aboutToggle?.addEventListener('click', () => {
    aboutmePage();
  });
}

mainPage();
setInterval(animateFavicon, 100);
setInterval(getTime, 100);
animateFavicon();
