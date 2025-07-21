import '../style.css';

document.querySelector<HTMLDivElement>('#header')!.innerHTML = `
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
        <a href="https://www.linkedin.com/in/andrew-w-2a334b265/" target="_blank" class = "headerElement">
            \ue820 &nbsp&nbspLinkedIn 
        </a>
        <a class = "headerElement" id="time" style="left: 40%; position:absolute;">
        </a>
        <a href="https://leetcode.com/u/AndrewEx/" target="_blank" class = "headerElement" style="left: 90.5%; position: absolute;">
            \uf4b0 &nbsp&nbspLeetCode 
        </a>
    </section>
`