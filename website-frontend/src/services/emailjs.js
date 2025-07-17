const emailjs = {
  send: (serviceId, templateId, templateParams, userId) => {
    console.log('Sending email with params:', { serviceId, templateId, templateParams, userId });
    // This is a mock. In a real app, the emailjs library would handle the API call.
    return new Promise((resolve, reject) => {
      if (!templateParams.from_name || !templateParams.from_email || !templateParams.message) {
        reject({ status: 400, text: 'Please fill all fields.' });
      } else {
        setTimeout(() => {
          resolve({ status: 200, text: 'OK' });
        }, 1000);
      }
    });
  }
};
export default emailjs;