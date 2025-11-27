import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        // 1. Parsear body
        const body = await request.json();
        const { name, email, message } = body;

        // 2. Validación básica
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Todos los campos son requeridos' },
                { status: 400 }
            );
        }

        // Validar formato email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Email inválido' },
                { status: 400 }
            );
        }

        // 3. Enviar email usando Resend
        const { data, error } = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>', // Cambiar por tu dominio verificado
            to: ['vignardel.francisco@gmail.com'],     // Tu email
            replyTo: email,                             // Email del cliente
            subject: `Nuevo contacto de ${name}`,
            html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(to right, #2563eb, #9333ea);
                color: white;
                padding: 20px;
                border-radius: 10px 10px 0 0;
              }
              .content {
                background: #f8fafc;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: bold;
                color: #2563eb;
                margin-bottom: 5px;
              }
              .value {
                padding: 10px;
                background: white;
                border-radius: 5px;
                border-left: 3px solid #2563eb;
              }
              .footer {
                margin-top: 20px;
                padding-top: 20px;
                border-top: 2px solid #e5e7eb;
                font-size: 12px;
                color: #6b7280;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h2 style="margin: 0;">🚀 Nuevo Mensaje de Contacto</h2>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">Portfolio Francisco Vignardel</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">👤 Nombre:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value">${email}</div>
              </div>
              
              <div class="field">
                <div class="label">💬 Mensaje:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div class="footer">
                <p><strong>Próximos pasos:</strong></p>
                <ol>
                  <li>Responder dentro de 24 horas</li>
                  <li>Hacer una llamada/videollamada si es necesario</li>
                  <li>Enviar presupuesto si aplica</li>
                </ol>
                <p style="margin-top: 20px;">
                  <strong>Respuesta rápida:</strong><br>
                  <a href="https://wa.me/${email.replace('@', '').replace(/\./g, '')}" 
                     style="color: #2563eb;">
                    Contactar por WhatsApp
                  </a>
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
        });

        // Verificar si hubo error en el envío
        if (error) {
            console.error('Error de Resend:', error);
            return NextResponse.json(
                {
                    error: 'Error al enviar el mensaje. Por favor intenta nuevamente.',
                    details: process.env.NODE_ENV === 'development' ? error : undefined
                },
                { status: 500 }
            );
        }

        // 4. Log para debugging (opcional)
        console.log('Email enviado exitosamente:', data);

        // 5. Respuesta exitosa
        return NextResponse.json(
            {
                success: true,
                message: 'Email enviado correctamente',
                id: data?.id
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error al enviar email:', error);

        return NextResponse.json(
            {
                error: 'Error al enviar el mensaje. Por favor intenta nuevamente o contáctame directamente por WhatsApp.',
                details: process.env.NODE_ENV === 'development' ? error : undefined
            },
            { status: 500 }
        );
    }
}