import React from 'react';
import emailjs from 'emailjs-com';
import FormField from '@components/formField';


export default function SendEmail() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_pr1sm', 'template_pr1sm', e.target, 'user_KTzGasV9AqAz6WT2jCuzJ')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className="w-full ">

      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

        <FormField type="text" id="firstname" placeholder="John" label="First name"/>
        <FormField type="text" id="secondname" placeholder="Doe" label="Second name"/>
        <FormField type="email" id="email" placeholder="john.doe@gmail.com" label="E-Mail"/>
        <FormField type="text" id="IBAN" placeholder="IBAN" label="IBAN"/>
        <FormField type="tel" id="mobile" placeholder="0765432123" label="Your Mobile number"/>
        <FormField type="text" id="discord" placeholder="Name#1234" label="Your discord tag"/>
        <FormField type="text" id="Adress" placeholder="Strasse 122" label="Your Adress"/>
        <FormField type="text" id="plz" placeholder="4104 Oberwil" label="Your PLZ and Town"/>
        <FormField type="date" id="bday" placeholder="" label="Your date of birth"/>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button">
            Apply
          </button>
        </div>
      </form>
    </div>
  );
}
