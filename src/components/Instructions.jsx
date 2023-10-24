const InstructionsSection = (props) => {

    const {email, phone, setActiveTab} = props;

    const handleTabSwitch = () => {
        setActiveTab("1");
    }
    
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
                    <div style = {{
                        padding: "10px 16px"
                    }} className="div-block-13">
                        <div style = {{fontWeight: "600", fontSize: "14px", marginBottom: "1rem"}}>{email}</div>
                        <p className="paragraph" style = {{marginBottom: "1rem"}}>
                            {"You will get access to the invite link in this email"}
                        </p>
                        <div style = {{fontWeight: "600", fontSize: "14px", marginBottom: "1rem"}}>{phone}</div>
                        <p className="paragraph">
                            {"We will send you WhatsApp updates on this phone number"}
                        </p>
                        <h5 onClick={handleTabSwitch} style = {{textDecoration: "underline", fontWeight: "500", cursor: "pointer"}}>Change</h5>
                    </div>
                </form>

            </div>
        </section>
    );
};



export default InstructionsSection;