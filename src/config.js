const host = "https://floating-plains-19404-3ba9055b7fae.herokuapp.com/api";

const config = {
    razorpay: `${host}/razorpay`,
    registerPayment: `${host}/payments`, 
    contactCreate: `${host}/contacts`, 
    activityRegister: `${host}/activity`, 
    deleteActivity: `${host}/activity`, 
    emailConfirmation: (category, id, type) => `${host}/confirmation/email/${category}/${id}/${type}`, 
    whatsAppConfirmation: (category) => `${host}/whatsapp/${category}`
};



export default config;