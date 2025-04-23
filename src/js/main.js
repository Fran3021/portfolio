tsParticles.load("tsparticles", {
    fullScreen: { enable: true },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "repulse"
            },
        },
        modes: {
            repulse: {
                distance: 100,
            },
        },
    },
    particles: {
        number: {
            value: 30,
            density: { enable: true, area: 2000 },
        },
        shape: {
            type: "image",
            image: {
            src: "src/img/flor-cerezo.webp", 
            width: 20,
            eight: 20,
            },
        },
        opacity: {
            value: 0.8,
            random: true,
        },
        size: {
            value: 15,
            random: { enable: true, minimumValue: 6 },
        },
        move: {
            enable: true,
            speed: 5,
            direction: "bottom-right",
            random: true,
            straight: false,
            outModes: { default: "out" },
        },
        rotate: {
            value:{
                min: 0,
                max: 360,
            },
            animation: {
                enable: true,
                speed: 20,
            }
        },
    },
});
