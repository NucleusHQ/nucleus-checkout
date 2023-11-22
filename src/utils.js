import config from './config';

export function calculateFullPrice(programInfo, addonsList, selectedAddonIds) {
  const parsePrice = (price) => parseFloat(price);

  let totalPromoPrice = parsePrice(programInfo.promoPrice);
  let totalStrikeThroughPrice = parsePrice(programInfo.strikeThroughPrice);

  for (const addon of addonsList) {
    if (selectedAddonIds.includes(addon.id)) {
      totalPromoPrice += parsePrice(addon.promoPrice);
      totalStrikeThroughPrice += parsePrice(addon.strikeThroughPrice);
    }
  }

  const discountAmount = totalStrikeThroughPrice - totalPromoPrice;
  const discountPercentage = ((discountAmount / totalStrikeThroughPrice) * 100).toFixed(2);

  const gst = (totalPromoPrice * 0.18).toFixed(2);

  const totalPayable = (totalPromoPrice + parseFloat(gst)).toFixed(2);

  return {
    subTotal: totalStrikeThroughPrice.toFixed(2),
    gst,
    discount: discountAmount.toFixed(2),
    discountPercentage,
    totalPayable,
  };
}

export function loadRazorPay(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export function getRazorPayOptions(rzOrderResponse, userInfo, programInfo, setShowConfirmation) {
  const isDev = document.domain === 'localhost';
  const { amount, currency } = rzOrderResponse;

  const options = {
    key: isDev ? 'rzp_test_AfDEedK2bfu2QD' : 'PRODUCTION_KEY',
    name: 'Nucleus HQ',
    amount: amount.toString(),
    currency,
    description: 'Thank you for nothing. Please give us some money',
    image: 'https://example.com/your_logo',
    order_id: rzOrderResponse.id,
    handler: async function (response) {

      const {fullName, phone, email} = userInfo || {};

        //CONTACT CREATION/UPDATION
      const contactBody = { ...userInfo, source: 'webinar' };


        //PAYMENT CREATION
      const { programId, category, programtitle } = programInfo || {};
      const formattedDate = getCurrentFormattedDate();

      const paymentBody = {
        ...response,
        status: 'completed',
        paymentMethod: 'razorpay',
        paymentMethodId: response?.razorpay_payment_id,
        price: (amount / 100).toFixed(2).toString(),
        userId: userInfo.phone,
        item: programtitle,
        date: formattedDate,
        currency,
        source: {
          category,
          id: programId,
        },
      };


      //IF SUCCESSFUL, DELETE UNNECESSARY ACTIVITY

      const activityDeleteParams = {
        phone: userInfo.phone, 
        sourceId: programId, 
        sourceType: category
      }

      const emailConfirmationBody = {
        fullName: fullName, 
        email: email
      }

      await sendPostRequest(config.contactCreate, contactBody);
      await sendPostRequest(config.registerPayment, paymentBody);
      await sendDeleteRequest(config.deleteActivity, activityDeleteParams);
      await sendPostRequest(config.emailConfirmation(category), emailConfirmationBody);

      setShowConfirmation(true);
    },
    prefill: {
      name: userInfo.fullName,
      email: userInfo.email,
      contact: userInfo.phone,
    },
    notes: {
      address: 'Razorpay Corporate Office',
    },
    theme: {
      color: '#3399cc',
    },
  };

  return options;
}

// Helper function to send a POST request
export async function sendPostRequest(url, body) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      console.log('Request succeeded:', response.status);
    } else {
      console.error('Request failed:', response.status);
    }

    return response;
  } catch (error) {
    console.error('Request error:', error);
    throw error; 
  }
}


export async function sendDeleteRequest(url, queryParams) {
  try {
    // Construct the URL with query parameters
    const urlWithParams = new URL(url);
    if (queryParams) {
      Object.keys(queryParams).forEach((key) => {
        urlWithParams.searchParams.append(key, queryParams[key]);
      });
    }

    const response = await fetch(urlWithParams, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('Request succeeded:', response.status);
    } else {
      console.error('Request failed:', response.status);
    }
  } catch (error) {
    console.error('Request error:', error);
  }
}


// Helper function to get the current date in the "YYYY-MM-DD HH:MM:SS" format
export function getCurrentFormattedDate() {
  const currentDate = new Date();
  return currentDate.toISOString().slice(0, 19).replace('T', ' ');
}
