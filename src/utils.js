export function calculateFullPrice(programInfo, addonsList, selectedAddonIds) {
    let totalPromoPrice = parseFloat(programInfo.promoPrice);
    let totalStrikeThroughPrice = parseFloat(programInfo.strikeThroughPrice);

    for (let addon of addonsList) {
        if (selectedAddonIds.includes(addon.id)) {
            totalPromoPrice += parseFloat(addon.promoPrice);
            totalStrikeThroughPrice += parseFloat(addon.strikeThroughPrice); 
        }
    }

    const discountAmount = totalStrikeThroughPrice - totalPromoPrice;
    const discountPercentage = ((discountAmount / totalStrikeThroughPrice) * 100).toFixed(2);

    const gst = (totalPromoPrice * 0.18).toFixed(2);

    const totalPayable = (totalPromoPrice + parseFloat(gst)).toFixed(2);

    return {
        subTotal: totalStrikeThroughPrice.toFixed(2),
        gst: gst,
        discount: discountAmount.toFixed(2),
        discountPercentage: discountPercentage, 
        totalPayable
    };
}
