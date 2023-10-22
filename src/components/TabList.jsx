const TabList = (props) => {

    const {activeTab, setActiveTab, handleSubmit, isPaid} = props;
    

    if(!isPaid) {
        return (
            <a
                    data-w-tab="Tab 1"
                    className={`tab-link-tab-2 free tab w-inline-block w-tab-link ${activeTab == "1" ? "w--current" : ""
                        }`}
                    onClick={() => setActiveTab(true)}
                >
                    <div className="text-block-18">
                        <strong className="bold-text-4">Provide your details to register </strong>
                        <br />
                        <span className="text-span-7">You're almost there!</span>
                    </div>
                </a>
        )
    }

    return (
            <div className="tabs-menu w-tab-menu">
                <a
                    data-w-tab="Tab 1"
                    className={`tab-link-tab-2 tab w-inline-block w-tab-link ${activeTab == "1" ? "w--current" : ""
                        }`}
                    onClick={() => setActiveTab(true)}
                >
                    <div className="text-block-18 _1">
                        <strong className="bold-text-8">1</strong>
                    </div>
                    <div className="text-block-18">
                        <strong className="bold-text-4">Your Details</strong>
                        <br />
                        <span className="text-span-7">For Access</span>
                    </div>
                </a>
                <a
                    id="Payment"
                    data-w-tab="Tab 2"
                    second="2"
                    className={`tab-link-tab-2 tab w-inline-block w-tab-link ${activeTab == "2" ? "w--current" : ""
                        }`}
                    onClick={handleSubmit}
                >
                    <div className="text-block-18 _1">
                        <strong className="bold-text-9">2</strong>
                    </div>
                    <div className="text-block-18">
                        <strong className="bold-text-4">Payment</strong>
                        <br />
                        <span className="text-span-7">Of Your Program</span>
                    </div>
                </a>
            </div>
    )
}

export default TabList