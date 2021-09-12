(function () {
    // TODO: convert to module?

    window.addEventListener('DOMContentLoaded', (event) => {
        const hour = new Date().getHours();
        const mode = localStorage && localStorage.getItem('mode') 
            || (hour > 6 && hour < 17 ? '' : 'dark') 
            || ''
        document.querySelector('body').classList.toggle(mode);

        addModeButton(mode);

    });

    addModeButton = (mode) => {
        let el = document.createElement('button');
        el.innerHTML = `Mode: ${mode}`;
        el.style.position = 'fixed';
        el.style.bottom = '1em';
        el.style.right = '1em';

        el.onclick = (ev) => {
            // toggle the theme manually
            // update the button text
            // store the user preference

            let body = document.querySelector('body');
                body.classList.toggle('dark');
            let darkMode = body.classList.contains('dark');
            let mode = darkMode ? 'dark' : 'light';

            ev.target.innerHTML = `Mode: ${mode}`;

            localStorage.setItem('mode', mode);
        }

        document.body.appendChild(el);
    }


})()
