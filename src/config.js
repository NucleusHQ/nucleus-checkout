const host = "http://localhost:8001/api";

const config = {
    razorpay: `${host}/razorpay`,
    registerPayment: `${host}/payments`, 
    contactCreate: `${host}/contacts`, 
    activityRegister: `${host}/activity`, 
    deleteActivity: `${host}/activity`, 
    emailConfirmation: (category, id) => `${host}/confirmation/${category}`, 
    whatsAppConfirmation: (category) => `${host}/whatsapp/${category}`
};


  
export default config;