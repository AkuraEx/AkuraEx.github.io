import { mainPage } from './index.ts';

export function aboutmePage() {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  app.innerHTML = `
    <section style="position: absolute; align-items: center;">
      <button type="button" class="menuLink" id="backToggle" style="position: absolute;">
        <section class="windowHeader">
          <div>
          asdf
          </div>
          <div>
          asdf
          </div>
        </section>
        <span class="spanBox" style="position: absolute;">
          <span class="shellText">&nbspGo back</span>
        </span>
      </button>
    </section>
  `;

  const backToggle = document.getElementById('backToggle');
  backToggle?.addEventListener('click', () => {
    mainPage();
  });
}
