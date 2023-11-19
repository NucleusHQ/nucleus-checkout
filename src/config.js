const host = "http://localhost:8001/api";

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