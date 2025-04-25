// // backend para enviar email a traves de vercel
// import sgMail from "@sendgrid/mail";

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { name, email, message } = req.body;

//     const msg = {
//       to: "contacto@frangarciadev.com", //
//       from: "contacto@frangarciadev.com",
//       subject: `Nuevo mensaje de ${name}`,
//       text: message,
//       html: `<strong>De:</strong> ${name} (${email})<br/><strong>Mensaje:</strong><br/>${message}`,
//     };

//     try {
//       await sgMail.send(msg);
//       res.status(200).json({ success: true });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Error enviando el mensaje" });
//     }
//   } else {
//     res.status(405).json({ error: "Método no permitido" });
//   }
// }
