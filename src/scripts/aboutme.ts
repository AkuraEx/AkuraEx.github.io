
export function aboutmePage() {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <section style="position: absolute; align-items: center;">
    <button type="button" class="menuLink" style="opacity:none; position: absolute;" id="backToggle">
      <span class="spanBox" style="position: absolute;">
        <span class="menuText">
          &nbspGo back 
        </span>
      </span>
    </button>
  </section>
`
}

setTimeout(() => {
  const aboutToggle = document.getElementById('backToggle');

  aboutToggle?.addEventListener('click', () => {
    aboutmePage()
  });
}, 0);