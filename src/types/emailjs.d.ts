// src/types/emailjs.d.ts
declare module '@emailjs/browser' {
  interface EmailJSResponseStatus {
    status: number;
    text: string;
  }

  interface EmailJS {
    sendForm(
      serviceID: string,
      templateID: string,
      form: HTMLFormElement,
      userID?: string
    ): Promise<EmailJSResponseStatus>;
  }

  const emailjs: EmailJS;
  export default emailjs;
}
