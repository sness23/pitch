const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-link');

function closeMobileNav() {
    hamburger?.classList.remove('active');
    navLinksContainer?.classList.remove('active');
}

if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const target = targetId ? document.querySelector(targetId) : null;

        if (target) {
            const offset = target.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
        closeMobileNav();
    });
});

function setActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 120;
    let activeId = 'hero';

    sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            activeId = section.id;
        }
    });

    navLinks.forEach(link => {
        const id = link.getAttribute('href');
        if (id === `#${activeId}`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', () => {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    setActiveNavLink();
});

setActiveNavLink();

// Animate on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

// Mol* viewer setup
let molstarPlugin = null;

async function initializeMolstarViewer() {
    const container = document.getElementById('molstar-viewer');
    if (!container || !window.MolstarPlugin) return;

    try {
        molstarPlugin = new window.MolstarPlugin({
            target: container,
            layout: {
                initial: { isExpanded: false, showControls: false }
            },
            viewportBackgroundColor: '#000040'
        });

        await molstarPlugin.loadStructureFromUrl('https://files.rcsb.org/download/1ERM.pdb', 'pdb');

        molstarPlugin.canvas3d?.setProps({
            renderer: { backgroundColor: '#04070f' }
        });
    } catch (error) {
        console.error('Mol* viewer failed to load:', error);
        container.innerHTML = '<div class="viewer-error">Viewer unavailable</div>';
    }
}

function resetViewer() {
    molstarPlugin?.canvas3d?.requestCameraReset();
}

function toggleSurface() {
    if (!molstarPlugin) return;
    const state = molstarPlugin.managers?.structure?.component?.state;
    if (!state) return;

    const surface = state.filter(item => item.type === 'molecular-surface');
    if (!surface.length) {
        molstarPlugin.managers.structure.component.add({
            type: 'molecular-surface',
            colorTheme: { name: 'element-symbol' },
            sizeTheme: { name: 'uniform', value: 0.25 }
        });
        return;
    }

    surface.forEach(item => {
        molstarPlugin.managers.structure.component.update(item, { isHidden: !item.isHidden });
    });
}

function highlightLigand() {
    if (!molstarPlugin) return;
    const hierarchy = molstarPlugin.managers.structure.hierarchy.current;
    const structure = hierarchy.structures?.[0];
    if (!structure) return;

    const loci = molstarPlugin.managers.structure.selection.queries.atoms({
        resname: ['EST']
    });

    molstarPlugin.managers.structure.selection.set({ structure, loci });

    molstarPlugin.managers.structure.component.add({
        type: 'ball-and-stick',
        colorTheme: { name: 'uniform', value: '#ff6b9a' },
        sizeTheme: { name: 'uniform', value: 0.45 }
    });

    setTimeout(() => molstarPlugin.managers.structure.selection.clear(), 2500);
}

const viewerActions = {
    reset: resetViewer,
    surface: toggleSurface,
    ligand: highlightLigand
};

document.addEventListener('click', (event) => {
    const button = event.target.closest('.panel-btn');
    if (!button) return;

    const action = button.dataset.action;
    viewerActions[action]?.();
});

document.addEventListener('DOMContentLoaded', () => {
    initializeMolstarViewer();
});
