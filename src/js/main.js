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
            src: "/src/img/flor-cerezo.webp", 
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


//funcion para enviar emails a traves de api de sendgrid
// document.getElementById('contactForm').addEventListener('submit', async (e) => {
//     e.preventDefault();
  
//     const form = e.target;
//     const data = {
//       name: form.name.value,
//       email: form.email.value,
//       message: form.message.value,
//     };
  
//     const res = await fetch('/api/sendEmail', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data),
//     });
  
//     if (res.ok) {
//       alert('Mensaje enviado correctamente');
//       form.reset();
//     } else {
//       alert('Error al enviar el mensaje');
//     }
//   });