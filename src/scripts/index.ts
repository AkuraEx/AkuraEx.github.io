import '../style.css';
import { animateFavicon } from './animate.ts';
import arisu from '../assets/Arisu.png';
import arisu2 from '../assets/Arisu2.png';
import arisu3 from '../assets/Arisu3.png';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <section>
      <nav>
        <a href="/about" class="menuLink" style="opacity: none;>
          <span class="spanBox">
              <img alt = "flatAboutMe" src="${arisu}" class="logo" style="position: absolute;">
                <p style="font-family: 'NerdFont'; font-size: 24px;">
                  Nerd Font Test:   
                </p>
            <span class="menuText">
              About Me
            </span>
          </span>
        </a>
        <a href="/skills" class="menuLink" style="opacity: none;>
          <span class="spanBox">
              <img alt = "flatAboutMe" src="${arisu2}" class="logo" style="position: absolute;">
            <span class="menuText">
              Projects
            </span>
        </a>
        <a href="/projects" class="menuLink" style="opacity: none;>
          <span class="spanBox">
              <img alt = "flatAboutMe" src="${arisu3}" class="logo" style="position: absolute;">
            <span class="menuText">
              Skills
            </span>
        </a>
        <a href="/secretfourththing" class="menuLink" style="opacity: none;>
          <span class="spanBox">
              <img alt = "flatAboutMe" src="${arisu}" class="logo" style="position: absolute;">
            <span class="menuText">
              Secret Fourth Thing
            </span>
        </a>
    </nav>
  </section>

  <section class="footer">
  </section>
</div>
`


setInterval(animateFavicon, 100);
animateFavicon();