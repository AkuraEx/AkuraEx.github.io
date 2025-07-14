import '../style.css';
import { animateFavicon } from './animate.ts';
import { getTime } from './time.ts';
import arisu from '../assets/Arisu.png';
import arisu2 from '../assets/Arisu2.png';
import arisu3 from '../assets/Arisu3.png';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <section class="header">
      <div class = "headerElement" style="padding: 0%;">
        <a class = "one">&nbsp1&nbsp</a>
        <a>&nbsp2&nbsp</a>
        <a>&nbsp3&nbsp</a>
        <a>&nbsp4&nbsp</a>
        <a>&nbsp5&nbsp</a>
      </div>
      <a href="https://github.com/AkuraEx" target="_blank" class = "headerElement">
        \uea84 &nbsp&nbspGithub 
      </a>
      <a href="https://www.linkedin.com/in/andrew-w-2a334b265/" target="_blank" class = "headerElement"">
        \ue820 &nbsp&nbspLinkedIn 
      </a>
      <a class = "headerElement" id="time" style="left: 40%; position:absolute;">
      </a>
    </section>

    <section>
      <nav>
        <a href="/about" class="menuLink" style="opacity: none;>
          <span class="spanBox">
              <img alt = "flatAboutMe" src="${arisu}" class="logo" style="position: absolute;">
            <span class="menuText">
                <p>
                  &nbspAbout Me 
                </p>
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

</div>
`


setInterval(animateFavicon, 100);
setInterval(getTime, 100);
animateFavicon();