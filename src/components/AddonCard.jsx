const AddonCard = ({addon, setSelectedAddonIds, isSelected, selectedAddonIds}) => {

  const {promoPrice, strikeThroughPrice, id: addonId, line1, line2, line3, line4} = addon;

  const toggleCheck = () => {
    
    if (selectedAddonIds.includes(addonId)) {
      const updatedProductIds = selectedAddonIds.filter((id) => id !== addonId);
      setSelectedAddonIds(updatedProductIds);
    } else {
      setSelectedAddonIds([...selectedAddonIds, addonId]);
    }
  };
  
  
  return (
    <section className="section-14">
      <div className="form-block-3 w-form">
        <form
          id="email-form-3"
          name="email-form-3"
          data-name="Email Form 3"
          method="get"
          className="form-8"
          data-wf-page-id="64fda7155a16efb4bef04c53"
          data-wf-element-id="87d9c70f-31cd-9ad3-2a81-2b38a09a810a"
        >
          <div className="div-block-13">
            <h4>
              <strong className="bold-text-11">{line1}</strong>
            </h4>
            <p className="paragraph">
              {line2}
              <br />
              <br />
              {line3}
              <br />
              <br />‍
              <strong>
                {line4}
                <br />
                <br />
                <br />
              </strong>
              <span className="text-span-9">₹{strikeThroughPrice}</span>
              <span className="text-span-8">
                <strong> ₹{promoPrice}</strong>
              </span>
            </p>
          </div>
          <label className="w-checkbox checkbox-field">
            <span className="checkbox-arrow">➡</span>
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              data-name="Checkbox"
              onChange={toggleCheck}
              checked={isSelected}
              className="w-checkbox-input checkbox"
            />
            <span className="checkbox-label w-form-label" htmlFor="checkbox">
              Yes, I want access
            </span>
          </label>
        </form>
        
      </div>
    </section>
  );
};

export default AddonCard;
