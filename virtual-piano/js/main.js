const fullscreen = document.querySelector('.fullscreen');
fullscreen.addEventListener('click', (e) => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.body.requestFullscreen();
    }

    fullscreen.style.backgroundImage = 'url(assets/svg/fullscreen-exit.svg)';
});
document.onfullscreenchange = () => {
    if (document.fullscreenElement) {
        fullscreen.style.backgroundImage = 'url(assets/svg/fullscreen-exit.svg)';
    } else {
        fullscreen.style.backgroundImage = 'url(assets/svg/fullscreen-open.svg)';
    }
};

const pianoKeys = document.querySelectorAll('.piano-key');
pianoKeys.forEach(key => {
    key.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        const audio = new Audio(`assets/audio/${e.target.dataset.note}.mp3`);
        audio.play();
        const linked = document.querySelectorAll(`[data-note='${e.target.dataset.note}']`);
        linked.forEach(el => {
            if (el.classList.contains('note') || el.classList.contains('letter')) {
                if (el.classList.contains('white')) {
                    el.classList.add('white-press');
                } else {
                    el.classList.add('black-press');
                }
            };
        });
        if (e.target.classList.contains('white-key')) {
            e.target.classList.add('white-key-press');
        } else {
            e.target.classList.add('black-key-press');
        }
    });
    key.addEventListener('pointerup', (e) => {
        const linked = document.querySelectorAll(`[data-note='${e.target.dataset.note}']`);
        linked.forEach(el => {
            if (el.classList.contains('note') || el.classList.contains('letter')) {
                if (el.classList.contains('white')) {
                    el.classList.remove('white-press');
                } else {
                    el.classList.remove('black-press');
                }
            };
        });
        if (e.target.classList.contains('white-key')) {
            e.target.classList.remove('white-key-press');
        } else {
            e.target.classList.remove('black-key-press');
        }
    });
    key.addEventListener('pointerover', (e) => {
        const linked = document.querySelectorAll(`[data-note='${e.target.dataset.note}']`);
        linked.forEach(el => {
            if (el.classList.contains('note') || el.classList.contains('letter')) {
                if (el.classList.contains('white')) {
                    el.classList.add('white-hover');
                } else {
                    el.classList.add('black-hover');
                }
            };
        });
        if (e.target.classList.contains('white-key')) {
            e.target.classList.add('white-key-hover');
        } else {
            e.target.classList.add('black-key-hover');
        }
        if (e.pressure > 0) {
            const audio = new Audio(`assets/audio/${e.target.dataset.note}.mp3`);
            audio.play();
            const linked = document.querySelectorAll(`[data-note='${e.target.dataset.note}']`);
            linked.forEach(el => {
                if (el.classList.contains('note') || el.classList.contains('letter')) {
                    if (el.classList.contains('white')) {
                        el.classList.add('white-press');
                    } else {
                        el.classList.add('black-press');
                    }
                };
            });
            if (e.target.classList.contains('white-key')) {
                e.target.classList.add('white-key-press');
            } else {
                e.target.classList.add('black-key-press');
            }
        }
    });
    key.addEventListener('pointerout', (e) => {
        const linked = document.querySelectorAll(`[data-note='${e.target.dataset.note}']`);
        linked.forEach(el => {
            if (el.classList.contains('note') || el.classList.contains('letter')) {
                if (el.classList.contains('white')) {
                    el.classList.remove('white-hover');
                    el.classList.remove('white-press');
                } else {
                    el.classList.remove('black-hover');
                    el.classList.remove('black-press');
                }
            };
        });
        if (e.target.classList.contains('white-key')) {
            e.target.classList.remove('white-key-hover');
            e.target.classList.remove('white-key-press');
        } else {
            e.target.classList.remove('black-key-hover');
            e.target.classList.remove('black-key-press');
        }
    });
});

window.addEventListener('keydown', (e) => {
    const key = document.querySelector(`[data-key=${e.code}]`);
    if (key && e.repeat === false) {
        key.dispatchEvent(new Event('pointerdown'));
        e.repeat = false;
    }

    if (e.code === 'Tab') {
        e.preventDefault();
        const btns = document.querySelectorAll('.toggle-buttons');
        btns.forEach(el => {
            el.classList.toggle('active');
        });
        btns.forEach(el => {
            if (el.classList.contains('active')) {
                el.dispatchEvent(new Event('click'));
            }
        });
    }

    if (e.code === 'F11') {
        e.preventDefault();
        fullscreen.dispatchEvent(new Event('click'));
    }
});

window.addEventListener('keyup', (e) => {
    const key = document.querySelector(`[data-key=${e.code}]`);
    if (key && e.repeat === false) {
        key.dispatchEvent(new Event('pointerup'));
        e.repeat = false;
    }
});

function activateNotes(e) {
    e.target.classList.add('active');
    const anotherButton = document.querySelector('.toggle-letters');
    anotherButton.classList.remove('active');
    const letters = document.querySelectorAll('.letters');
    letters.forEach(el => {
        el.style.display = 'none';
    });
    const notes = document.querySelectorAll('.notes');
    notes.forEach(el => {
        el.style.display = 'flex';
    });
    const highlight = document.querySelector('.button-highlight');
    highlight.style.left = '0%';
    highlight.style.borderRadius = '15px 0 0 15px';
}

function activateLetters(e) {
    e.target.classList.add('active');
    const anotherButton = document.querySelector('.toggle-notes');
    anotherButton.classList.remove('active');
    const letters = document.querySelectorAll('.letters');
    letters.forEach(el => {
        el.style.display = 'flex';
    });
    const notes = document.querySelectorAll('.notes');
    notes.forEach(el => {
        el.style.display = 'none';
    });
    const highlight = document.querySelector('.button-highlight');
    highlight.style.left = '50%';
    highlight.style.borderRadius = '0 15px 15px 0';
}