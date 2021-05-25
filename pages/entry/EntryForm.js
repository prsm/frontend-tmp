import React from 'react';
import emailjs from 'emailjs-com';
import FormField from '@components/formField';
import HCaptcha from '@hcaptcha/react-hcaptcha';



export default function EntryForm(props) {


  const submitted = true;

  const sendRequest = event => {
    event.preventDefault();
    console.log(event);

    var templateParams = {
      firstname: event.target.firstname.value,
      secondname: event.target.secondname.value,
      email: event.target.email.value,
      IBAN: event.target.IBAN.value,
      mobile: event.target.mobile.value,
      discord: event.target.discord.value,
      address: event.target.address.value,
      plz: event.target.plz.value,
      bday: event.target.bday.value
    };

    //sendEmail(templateParams)
    if(true){

    }

  }

  function onVerifyCaptcha (token) {
    console.log("Verified: " + token)
  }

  function sendEmail(templateParams) {
    emailjs.send('service_pr1sm', 'templae_pr1sm', templateParams, 'user_KTzGasV9AqAz6WT2jCuzJ')
      .then((result) => {
        console.log('SUCCESS!', response.status, response.text);
        return true;
      }, (error) => {
        console.log('FAILED...', error);
        return false;
      });
  }

  return (
    <div className="py-1 mt-10 bg-gradient-to-r from-red-400 via-pink-400 to-blue-500 rounded max-w-xl mx-auto">
      <div className="pt-1 bg-gray-700">
      <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={sendRequest}>
        <p className="pb-4">If you want to join PR1SM fill out this form. A request will be sent to our team and you will hear back from us about your acceptance </p>

        <FormField type="text" id="firstname" placeholder="John" label="First name"/>
        <FormField type="text" id="secondname" placeholder="Doe" label="Second name"/>
        <FormField type="email" id="email" placeholder="john.doe@gmail.com" label="E-Mail"/>
        <FormField type="text" id="IBAN" placeholder="IBAN" label="IBAN"/>
        <FormField type="tel" id="mobile" placeholder="0765432123" label="Your Mobile number"/>
        <FormField type="text" id="discord" placeholder="Name#1234" label="Your discord tag"/>
        <FormField type="text" id="address" placeholder="Strasse 122" label="Your Address"/>
        <FormField type="text" id="plz" placeholder="4104 Oberwil" label="Your PLZ and Town"/>
        <FormField type="date" id="bday" placeholder="" label="Your date of birth"/>

        <HCaptcha sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY} onVerify={onVerifyCaptcha}/>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>
      </div>
    </div>

  );
}
