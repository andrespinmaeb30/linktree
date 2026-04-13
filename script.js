// Data for the services
let founderIntervals = [];
const servicesData = {
    "1": {
        title: "Servicios Jurídicos y Migratorios",
        subtitle: "Movilidad internacional y representación legal.",
        cta: "Agendar Asesoría Jurídica",
        icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
        items: [
            { t: "Gestión de Visas", d: "Turismo, Estudios, de Trabajo o Transito para distintos países Estados Unidos, Canadá, Australia, Unión Europea, Tanzania, entre otros.", stats: "Alta Tasa de Aprobación", i: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>' },
            { t: "Idiomas en el Extranjero", d: "Estudiar el idioma inglés en el extranjero en las mejores escuelas de idiomas.", i: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>' },
            { t: "Asilo y Refugio", d: "Solicitud de asilo, refugio en el Ecuador y países del extranjero como Estados Unidos, Mexico, entre otros. ", stats: "Asesoría Estratégica", i: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' },
            { t: "Permisos de Salida del País", d: "Autorizaciones de salida del país para menores de edad; y, levantamiento de prohibición de salida del país por procesos judiciales.", i: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><path d="m2 21 6-6"/><path d="M2 15l6 6"/></svg>' },
            { t: "Trámites Notariales", d: "Poderes Judiciales, Generales o Especiales gestionados dentro y fuera del Ecuador.", i: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>' },
            { t: "Representación Jurídica en Ecuador", d: "Representación en procesos judiciales en Ecuador, en materias Civiles, Penales, Constitucionales, Notariales, y Administrativas.", stats: "Defensa Especializada", i: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>' }
        ]
    },
    "2": {
        title: "Servicios de Viaje y Logística",
        subtitle: "Tu viaje ideal, planificado al detalle por expertos.",
        cta: "Cotizar mi Próximo Viaje",
        icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.7 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/></svg>',
        items: [
            { t: "Tickets Aeros, Marítimos y Terrestres", d: "Reserva y Adquisición de Tickets Nacionales e Internacionales Aéreos, Marítimos (Cruceros, Buques o Ferris), Terrestres (Buses de diferentes niveles semi cama y cama. transporte ferroviario (trenes de diferentes niveles).", i: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.7 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/></svg>' },
            { t: "Hospedaje a Medida", d: "Reservas de hoteles y alojamientos en la ciudad o ciudades destino de acuerdo a tu presupuesto.", stats: "Tarifas Preferenciales", i: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="12" rx="2"/><path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/><path d="M11 11v4"/><path d="M11 15h2"/><path d="M15 11v4"/></svg>' },
            { t: "Tours de Cruceros por el Mundo", d: "Reserva y Adquisición de tickets de crucero para viajar en barco a través de los océanos o de acuerdo a tu plan de viaje por distintos puntos marítimos del mundo.", i: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M2 17h20"/><path d="M2 12h20"/><path d="M2 7h20"/><path d="M5 22v-5"/><path d="M19 22v-5"/><path d="M12 22V2"/></svg>' },
            { t: "Seguros de viaje", d: "Adquisición de Seguros de Viaje para que puedas viajar con tranquilidad por todo el mundo.", i: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
            { t: "Servicio de Logística", d: "Asesoramiento en Excursiones y tour en diferentes lugares dentro y fuera del país.", i: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>' }
        ]
    },
    "3": {
        title: "Servicios Vikundi",
        subtitle: "Asesoramiento Integral Personalizado para Viajar.",
        cta: "Agendar mi Asesoría de Viaje",
        icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V21l7-3 7 3 4-3V4l-4 3-7-3L3 7z"/><line x1="10" y1="4" x2="10" y2="18"/><line x1="17" y1="7" x2="17" y2="21"/></svg>',
        items: [
            { t: "Viajero Platinium", d: "Viaja con la máxima comodidad y optimiza tu tiempo. Ideal para quienes buscan experiencias premium y exclusivas.", i: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 13L2 9z"/><path d="M11 3 8 9l4 13 4-13-3-6"/></svg>' },
            { t: "Mochilero VIP", d: "El equilibrio perfecto: viaja ligero con poco equipaje pero con el confort necesario para disfrutar cada destino al máximo.", i: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 18h8"/><path d="M8 14h8"/><rect x="6" y="10" width="12" height="10" rx="2"/><path d="M8 10V7a4 4 0 1 1 8 0v3"/></svg>' },
            { t: "Ser un Vikundi", d: "Vivir experiencias locales profundas. Incluye gestión de voluntariados y herramientas para autosustentar tu aventura de forma legal.", i: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>' }
        ]
    }
};

// Video VSL Logic
const playVslBtn = document.getElementById('play-vsl');
const videoOverlay = document.getElementById('video-overlay');
const closeVideoBtn = document.getElementById('close-video');
const videoPlayerRoot = document.getElementById('video-player-root');

const openVideo = () => {
    // Aquí puedes poner el ID de YouTube o Vimeo real cuando lo tengas
    const videoId = "dQw4w9WgXcQ"; // Placeholder
    videoPlayerRoot.innerHTML = `
        <iframe 
            src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
            title="Vikundi VSL" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;
    videoOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
};

const closeVideo = () => {
    videoOverlay.classList.remove('active');
    videoPlayerRoot.innerHTML = '';
    document.body.style.overflow = '';
};

if (playVslBtn) playVslBtn.addEventListener('click', openVideo);
if (closeVideoBtn) closeVideoBtn.addEventListener('click', closeVideo);

// Share Logic
const shareBtn = document.getElementById('share-btn');
if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Vikundi | Asesoría Migratoria',
                    text: 'Te comparto los servicios de Vikundi para movilidad internacional y asesoría legal.',
                    url: window.location.href
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            // Fallback: Copy to clipboard
            try {
                await navigator.clipboard.writeText(window.location.href);
                alert('¡Enlace copiado al portapapeles!');
            } catch (err) {
                alert('No se pudo compartir el enlace.');
            }
        }
    });
}

// Testimonial Carousel Logic
const initCarousel = () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.testimonial-card'));
    const dots = Array.from(document.querySelectorAll('.dot'));
    let currentIndex = 0;

    const updateCarousel = (index) => {
        track.style.transform = `translateX(-${index * 100}%)`;
        slides.forEach((s, i) => s.classList.toggle('active', i === index));
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
        currentIndex = index;
    };

    const nextSlide = () => {
        let index = currentIndex + 1;
        if (index >= slides.length) index = 0;
        updateCarousel(index);
    };

    // Auto rotate every 5 seconds
    setInterval(nextSlide, 5000);

    // Click on dots
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => updateCarousel(i));
    });
};

// Social Proof Toasts Logic
const socialToasts = [
    { name: "Angela", action: "agendó una cita de visa", time: "hace 30 min" },
    { name: "Carlos", action: "resolvió su proceso legal", time: "hace 3 días" },
    { name: "Mariana", action: "cotizó un viaje sin contratiempos", time: "hace 1 hora" },
    { name: "Roberto", action: "inició su trámite de visa", time: "hace 22 min" },
    { name: "Luis", action: "recibió asesoría para asilo", time: "hace 2 horas" },
    { name: "Elena", action: "reservó un vuelo a Tanzania", time: "hace 5 min" },
    { name: "Pedro", action: "Encontro su equipaje perdido", time: "hace 1 día" },
    { name: "Sofía", action: "levantó su prohibición de salida", time: "hace 45 min" },
    { name: "Hugo", action: "gestionó un poder judicial", time: "hace 6 horas" },
    { name: "Andrea", action: "viajó como Viajero VIP", time: "hace 2 días" }
];

const showSocialToast = () => {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toastData = socialToasts[Math.floor(Math.random() * socialToasts.length)];

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <div class="toast-icon">✓</div>
        <div class="toast-content">
            <strong>${toastData.name}</strong> ${toastData.action} <span style="opacity: 0.7; font-size: 10px; margin-left: 4px;">${toastData.time}</span>
        </div>
    `;

    container.innerHTML = '';
    container.appendChild(toast);

    setTimeout(() => toast.classList.add('active'), 100);

    setTimeout(() => {
        toast.classList.remove('active');
        setTimeout(() => toast.remove(), 600);
    }, 5000); // 5 segundos visible
};

// Iniciar ciclo de prueba social
setTimeout(() => {
    showSocialToast();
    setInterval(showSocialToast, 30000); // Cada 30 segundos
}, 6000);

const modalBody = document.getElementById('modal-body-content');
const modalOverlay = document.getElementById('modal-overlay');

const openModal = (serviceKey) => {
    renderModalContent(serviceKey);
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    // Clear auto-slide intervals to save performance
    founderIntervals.forEach(interval => clearInterval(interval));
    founderIntervals = [];
};

const renderModalContent = (serviceKey) => {
    const data = servicesData[serviceKey];
    if (!data) return;

    let itemsHtml = data.items.map(item => `
        <div class="service-item">
            <div class="service-title-row">
                <div class="service-icon-box-small">${item.i}</div>
                <div class="service-title-group">
                    <h3>${item.t}</h3>
                    ${item.stats ? `<span class="service-stats">${item.stats}</span>` : ''}
                </div>
            </div>
            <p>${item.d}</p>
        </div>
    `).join('');

    const modalBodyRef = document.getElementById('modal-body-content');
    modalBodyRef.innerHTML = `
        <div class="modal-header">
            <div class="modal-nav">
                <button class="modal-back-btn" id="close-modal-inner">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                </button>
                <h2 class="modal-title">${data.title}</h2>
                <div class="main-icon-wrapper">${data.icon}</div>
            </div>
            <p class="modal-subtitle">${data.subtitle}</p>
        </div>
        <div class="services-list">
            ${itemsHtml}
        </div>
    `;

    // Re-bind close event
    document.getElementById('close-modal-inner').addEventListener('click', closeModal);
};

const renderAboutMe = () => {
    const modalBodyRef = document.getElementById('modal-body-content');
    modalBodyRef.innerHTML = `
        <div class="modal-header about-header">
            <div class="modal-nav">
                <button class="modal-back-btn" id="close-modal-inner">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                </button>
                <h2 class="modal-title">El Equipo Detrás de Vikundi</h2>
                <div class="main-icon-wrapper about-icon-main">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
            </div>
        </div>
        <div class="about-container">
            <div class="timeline-intro">
                <p>Vikundi nace de la unión de dos trayectorias que combinan soluciones legales con la experiencia real de recorrer el mundo.</p>
            </div>

            <!-- Profile 1: Andrés -->
            <div class="profile-card-founder">
                <div class="about-image-wrapper">
                    <div class="founder-slider-container" id="slider-andres">
                        <div class="founder-slide"><img src="Foto_andres.jpeg" alt="Andrés Espín 1"></div>
                        <div class="founder-slide"><img src="Slider_andres/foto1.jpeg" alt="Andrés Espín 2"></div>
                        <div class="founder-slide"><img src="Slider_andres/foto2.jpeg" alt="Andrés Espín 3"></div>
                        <div class="founder-slide"><img src="Slider_andres/foto3.jpeg" alt="Andrés Espín 4"></div>
                        <div class="founder-slide"><img src="Slider_andres/foto4.jpeg" alt="Andrés Espín 5"></div>
                    </div>
                    <div class="slider-dots" id="dots-andres">
                        <span class="slider-dot active"></span>
                        <span class="slider-dot"></span>
                        <span class="slider-dot"></span>
                        <span class="slider-dot"></span>
                        <span class="slider-dot"></span>
                    </div>
                </div>
                <div class="about-personal-info">
                    <h3>Andrés Espín Barroso</h3>
                    <p>ABOGADO & EXPERTO EN MOVILIDAD HUMANA</p>
                </div>
                <div class="about-timeline">
                    <div class="timeline-item">
                        <div class="timeline-icon"><svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                        <div class="timeline-content">
                            <h3>Perfil Profesional</h3>
                            <p>Abogado, Máster, Mediador / Conciliador, con experiencia en dirección y asesoramiento legal estratégica enfocado en migración y soluciones internacionales.</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-icon"><svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
                        <div class="timeline-content">
                            <h3>Experiencia Internacional</h3>
                            <p>Ha estudiado en Nueva Zelanda, Canadá y Sudáfrica. Cuenta con experiencia laboral en Estados Unidos y voluntariado en Zambia. Ha recorrido más de 35 países en América, África, Europa y Oceanía.</p>
                        </div>
                    </div>
                </div>
                <div class="purpose-block">
                    <p><strong>Propósito:</strong> Ofrecer un respaldo legal sólido basado en el conocimiento real de las leyes y las dinámicas globales de viaje.</p>
                </div>
            </div>

            <div class="founder-separator"></div>

            <!-- Profile 2: Carlos -->
            <div class="profile-card-founder">
                <div class="about-image-wrapper">
                    <div class="founder-slider-container" id="slider-julio">
                        <div class="founder-slide"><img src="Foto_Julio.jpeg" alt="Carlos Julio 1"></div>
                        <div class="founder-slide"><img src="Slider_julio/foto1.jpeg" alt="Carlos Julio 2"></div>
                        <div class="founder-slide"><img src="Slider_julio/foto2.jpeg" alt="Carlos Julio 3"></div>
                        <div class="founder-slide"><img src="Slider_julio/foto3.jpeg" alt="Carlos Julio 4"></div>
                        <div class="founder-slide"><img src="Slider_julio/foto4.jpeg" alt="Carlos Julio 5"></div>
                    </div>
                    <div class="slider-dots" id="dots-julio">
                        <span class="slider-dot active"></span>
                        <span class="slider-dot"></span>
                        <span class="slider-dot"></span>
                        <span class="slider-dot"></span>
                        <span class="slider-dot"></span>
                    </div>
                </div>
                <div class="about-personal-info">
                    <h3>Julio Villacís</h3>
                    <p>ABOGADO & EXPERTO EN LOGÍSTICA MIGRATORIA</p>
                </div>
                <div class="about-timeline">
                    <div class="timeline-item">
                        <div class="timeline-icon"><svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                        <div class="timeline-content">
                            <h3>Perfil Profesional</h3>
                            <p>Abogado y Magister con amplia experiencia en trámites y procesos migratorios complejos, especializado en la gestión de logística internacional para viajeros.</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-icon"><svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
                        <div class="timeline-content">
                            <h3>Trayectoria en Terreno</h3>
                            <p>Estudió y trabajó en Australia, y realizó un voluntariado en Filipinas. Ha vivido la experiencia Vikundi en más de 11 países por Asia, América y Oceanía.</p>
                        </div>
                    </div>
                </div>
                <div class="purpose-block">
                    <p><strong>Visión:</strong> Cree firmemente que viajar no es un lujo, sino una herramienta de libertad y crecimiento personal.</p>
                </div>
            </div>

            <div class="key-point-banner">
                <p>No somos una agencia de viajes; Somos Vikundi que a través de la experiencia vivida hemos aprendido a ver el mundo de forma diferente, y queremos ofrecerte nuestros servicios para que explores nuevos terrenos de forma legal y segura.</p>
            </div>
        </div>
    `;

    // Logic for slider dots synchronization and auto-slide
    const initSlider = (sliderId, dotsId) => {
        const slider = document.getElementById(sliderId);
        if (!slider) return;
        const dotsParent = document.getElementById(dotsId);
        if (!dotsParent) return;
        const dots = dotsParent.querySelectorAll('.slider-dot');
        const slidesCount = slider.querySelectorAll('.founder-slide').length;

        // Sync dots on scroll
        slider.addEventListener('scroll', () => {
            const index = Math.round(slider.scrollLeft / slider.offsetWidth);
            dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
        });

        // Auto-slide logic
        let slideInterval = setInterval(() => {
            let currentIndex = Math.round(slider.scrollLeft / slider.offsetWidth);
            let nextIndex = (currentIndex + 1) % slidesCount;

            slider.scrollTo({
                left: nextIndex * slider.offsetWidth,
                behavior: 'smooth'
            });
        }, 4000); // Cambia cada 4 segundos
        founderIntervals.push(slideInterval);
    };

    setTimeout(() => {
        initSlider('slider-andres', 'dots-andres');
        initSlider('slider-julio', 'dots-julio');
    }, 100);

    // Re-bind close event
    document.getElementById('close-modal-inner').addEventListener('click', closeModal);
};

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();

    // Secondary Modal (Agenda)
    const agendaOverlay = document.getElementById('agenda-info-overlay');
    const openAgendaBtn = document.getElementById('open-agenda-info');
    const closeAgendaBtn = document.getElementById('close-agenda-info');
    const cancelAgendaBtn = document.getElementById('cancel-agenda-btn');
    const confirmBtn = document.querySelector('.confirm-agenda-btn');

    let agendaCountdown;
    const openAgenda = () => {
        agendaOverlay.classList.add('active');
        document.body.classList.add('agenda-active');
        document.body.style.overflow = 'hidden';

        if (confirmBtn) {
            confirmBtn.classList.add('disabled');
            let seconds = 10;
            confirmBtn.innerText = `Espera... (${seconds}s)`;

            clearInterval(agendaCountdown);
            agendaCountdown = setInterval(() => {
                seconds--;
                if (seconds > 0) {
                    confirmBtn.innerText = `Espera... (${seconds}s)`;
                } else {
                    clearInterval(agendaCountdown);
                    confirmBtn.classList.remove('disabled');
                    confirmBtn.innerText = 'Sí, deseo agendar mi cita';
                }
            }, 1000);
        }
    };

    const closeAgenda = () => {
        agendaOverlay.classList.remove('active');
        document.body.classList.remove('agenda-active');
        document.body.style.overflow = '';
        clearInterval(agendaCountdown);
        if (confirmBtn) {
            confirmBtn.classList.remove('disabled');
            confirmBtn.innerText = 'Sí, deseo agendar mi cita';
        }
    };

    if (openAgendaBtn) openAgendaBtn.addEventListener('click', openAgenda);
    if (closeAgendaBtn) closeAgendaBtn.addEventListener('click', closeAgenda);
    if (cancelAgendaBtn) cancelAgendaBtn.addEventListener('click', closeAgenda);

    if (confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            setTimeout(closeAgenda, 500);
        });
    }

    if (agendaOverlay) {
        agendaOverlay.addEventListener('click', (e) => {
            if (e.target === agendaOverlay) closeAgenda();
        });
    }

    // Main Modal Elements
    const linkItems = document.querySelectorAll('.link-item[data-service]');
    const modalOverlay = document.getElementById('modal-overlay');
    const closeModalBtn = document.getElementById('close-modal');
    const aboutBtn = document.getElementById('open-about');

    // Attach Main Modal Events
    if (linkItems) {
        linkItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const key = item.getAttribute('data-service');
                openModal(key);
            });
        });
    }

    if (aboutBtn) {
        aboutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            renderAboutMe();
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });

    // Parallax Effect for Hero Image
    const heroImg = document.querySelector('.hero-img');
    if (heroImg) {
        window.addEventListener('scroll', () => {
            const scroll = window.pageYOffset;
            heroImg.style.transform = `translateY(${scroll * 0.25}px) scale(1.15)`;
        });
    }
});
