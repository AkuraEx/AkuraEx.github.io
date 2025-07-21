import '../style.css';
import { animateFavicon } from './animate.ts';
import { getTime } from './time.ts';
import { aboutmePage } from './aboutme.ts';
import arisu from '../assets/Arisu.png';
import arisu2 from '../assets/Arisu2.png';
import arisu3 from '../assets/Arisu3.png';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <section>
      <nav>
        <button type="button" class="menuLink" style="opacity:none;" id="aboutToggle">
          <span class="spanBox">
              <img alt = "flatAboutMe" src="${arisu}" class="logo" style="position: absolute;">
            <span class="menuText">
                &nbspAbout Me 
            </span>
          </span>
        </button>
        <button class="menuLink" style="opacity: none;">
          <span class="spanBox">
              <img alt = "flatAboutMe" src="${arisu2}" class="logo" style="position: absolute;">
            <span class="menuText">
              Projects
            </span>
        </button>
        <button class="menuLink" style="opacity: none;">
          <span class="spanBox">
              <img alt = "flatAboutMe" src="${arisu3}" class="logo" style="position: absolute;">
            <span class="menuText">
              Skills
            </span>
        </button>
        <button class="menuLink" style="opacity: none;">
          <span class="spanBox">
              <img alt = "flatAboutMe" src="${arisu}" class="logo" style="position: absolute;">
            <span class="menuText">
              Secret Fourth Thing
            </span>
        </button>
    </nav>
  </section>

</div>
`

setTimeout(() => {
  const aboutToggle = document.getElementById('aboutToggle');

  aboutToggle?.addEventListener('click', () => {
    aboutmePage()
  });
}, 0);


setInterval(animateFavicon, 100);
setInterval(getTime, 100);
animateFavicon();