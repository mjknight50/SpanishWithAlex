import connectMongoDB from "@/libs/mongodb";
import UserEmail from "@/models/userEmail";
import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export const GET = async () => {
  return NextResponse.json("users");
};

export const POST = async (req) => {
  await connectMongoDB();

  const { email } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use SSL
    ignoreTLS: true, // Agrega esta línea para ignorar problemas de validación TLS

    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.NODEMAILER_EMAIL,
      to: email,
      subject: "Welcome to SWA Newsletter",
      html: `
        <html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bienvenid@ a este Newsletter</title>
  <style>
    /* Global styles */
    body {
      font-family: 'Comic Sans MS', sans-serif;
      line-height: 1.6;
      margin: 20px;
      color: #333;
    }

    h1 {
      color: #F8180E;
    }

    p {
      margin-bottom: 15px;
      border: 1px solid #1c1b1b;
      border-radius: 5px;
      padding: 10px;
    }

    .highlight {
      color: #e67e22;
    }

    .signature {
      font-style: italic;
      margin-top: 20px;
      color: #7f8c8d;
    }
/* space */
   .space {
      
        padding: 10px;
        border-radius: 5px;
        margin-top: 20px;
        margin-bottom: 20px; /* Ajusta el valor según tus necesidades */
    }
        /* Cursive text */
        .cursive {
            font-family: cursive;
        }

        /* Bold text */
        .bold {
            font-weight: bold;
        }

        /* Underline text */
        .underline {
            text-decoration: underline;
        }

            .button {
                margin-left: 4px;
                border: 2px solid red;
                color: red;
                width: auto;
                cursor: pointer;
                background-color: white;
                padding: 8px 16px;
                border-radius: 4px;
                /* Added padding inside */
                padding-top: 10px;
                padding-bottom: 10px;
                padding-left: 20px;
                padding-right: 20px;
            }

            .button:hover {
                background-color: rgb(240, 219, 219);
                color: rgb(255, 2, 2);
            }
    /* Estilos específicos para el primer párrafo */
    p.first-paragraph {
      background-color: #fefff;
      color: #000000;
      padding: 10px;
      border-radius: 5px;
       text-align: left;
      font-family: 'Arial';
        }

    /* Card styles */
    .card_outer {
      margin-bottom: 20px;
      background-color: #f1f1f1;
    }

    .card_main {
      padding: 20px;
    }

    .card_first_div_heading {
      color: #f00;
    }

    .card_first_div_image {
      max-width: 100%;
      height: auto;
    }

    .card_second_div p {
      font-size: 16px;
      font-weight: bold;
      color: #00f;
    }

    .card_third_div {
      margin-top: 15px;
    }

    .card_third_div_first {
      margin-bottom: 10px;
    }

    .card_third_div_first p {
      font-size: 14px;
    }

    .card_third_div_first input {
      width: 50px;
      padding: 5px;
      box-sizing: border-box;
    }

    .card_third_div_second p {
      font-size: 14px;
      margin-bottom: 5px;
    }

    .card_third_div_third button {
      padding: 10px;
      font-size: 14px;
      color: #fff;
      background-color: #00f;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>¡Hola!👋 ¡Bienvenid@!</h1>

 <p class="first-paragraph"> Are you ready to unleash your speaking superpower?<br />
 
If you want to speak from day one, and learn from others mistakes, <br />
you  are going to love learning with us.<br />
Make sure you keep a lookout in your inbox for our newsletters.<br />
 I am going to contact you soon with learning content, tips and juice advice. <br />
    </p>
    Just one morestep to go. Please confirm your email address by clicking the button below.🚀<br />
    <br />




  <!-- botón personalizado -->
  <!-- <button style="margin-left: 4px; border: 2px solid red; color: red; width: auto; cursor: pointer; background-color: white; padding: 8px 16px; border-radius: 4px;">
    <a href="https://www.spanishwithalex.com/" style="text-decoration: none; color: red;">Confirmation email</a>
  </button> -->

 <button class="button" >
    <a href="https://www.spanishwithalex.com/" style="text-decoration: none; color: red;">Confirmation email</a>
</button>

<div class="space">  <img src="https://yt3.googleusercontent.com/r54bOUhebt9WAn61Uyp30snMW7lP0RlKqlByy2lIh6mwNQCd0nOoimYQXaAW0GbkEPTAGyjl=s176-c-k-c0x00ffffff-no-rj" alt="Bienvenido">
</div>
  <!-- <p>También, para tener clases juntos, es importante que te caiga un mínimo de bien. :) Y tienes que conocerme. Porque vamos a hablar, y hablar mucho. Y si posiblemente que cuente un poco de mi vida :)</p>

  <p>Bueno…o .mucho…jajaj me encanta…las graciosas. (Tirado en la cama, de k hablo con.., ejercicios corregidos…clase. Cambia) Siempre hago clases más amenas.</p>

  <p>Si quieres clases para tu hijo, tengo experiencia previa con muy buenos resultados. Mi máster fueron mis trabajos anteriores y mis hobbies un poco reflejan mi manera de enseñanza.</p>

  <ul>
    <li>Entrenador - Push the student as much as you can.</li>
    <li>Croupiers</li>
    <li>Customer service - Pleasant, patient, easy</li>
    <li>Pedagogo - Estructurar contenido y transmitir significativamente.</li>
    <li>Transcripción de la clase con notas.</li>
  </ul>

  <p class="signature">Hobbies:</p>
  <ul>
    <li>Fotografías</li>
    <li>Comics</li>
    <li>Art</li>
    <li>Filosofía</li>
    <li>Espacio</li>
    <li>Sports</li>
    <li>Nature</li>
    <li>Literatura</li>
    <li>Cinema</li>
    <li>Animals</li>
    <li>Future</li>
    <li>Past</li>
    <li>Rutinas</li>
    <li>Política</li>
    <li>Robot</li>
    <li>Computer</li>
    <li>Boardgames</li>
    <li>Gay friendly</li>
    <li>Freedom</li>
    <li>Non violencia</li>
    <li>Values</li>
  </ul>

  <p><strong>P. D. 1:</strong> Hoy fui yo, mañana quizás tú. Pronto te volveré a escribir. Seguro. Y preguntarte unas cosillas. :)</p>

  <div class="container">
    <div class="inner-container"> -->

      <!-- Repeat the following block for each card -->
      <!-- <div class="card_outer">
        <div class="card_main">
          <div class="card_first_div">
            <h2 class="card_first_div_heading">CUP VERBS</h2>
            <div class="card_first_div_image_div">
              <img src="https://www.spanishwithalex.com/images/cards/pedirPerdon.jpg" alt="shop" class="card_first_div_image">
            </div>
          </div>
          <div class="card_second_div">
            <p>$ <span>20</span></p>
          </div>
          <div class="card_third_div">
            <div class="card_third_div_first">
              <p>Age </p>
              <input type="number">
            </div>
            <div class="card_third_div_second">
              <p>T-Shirt</p>
              <p>SIZES: S / MD / X / XL</p>
            </div>
            <div class="card_third_div_third">
              <button>add to basket</button>
            </div>
          </div>
        </div>
      </div> -->
      <!-- End of card block -->
    </div>
  </div>
</body>
</html>
      `,
    });

    const user = await UserEmail.findOne({ email });
    if (!user) {
      await UserEmail.create({
        email,
      });

      return NextResponse.json({ message: "email sent" });
    } else {
      return NextResponse.json({ message: "email ya registrado" });
    }
  } catch (error) {
    console.log("error", error);
    return NextResponse.json("no se pudo enviar");
  }
};
