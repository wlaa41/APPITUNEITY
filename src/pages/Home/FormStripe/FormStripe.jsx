import "./FormStripe.scss";

const FormStripe = () => {
    return (
        <div className="form-stripe">
            <div className="main-container">
                <div className="envelop-out">
                    <div className="envelop">
                        <div className="form-container">
                            <form>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <h3 className="stripe-title">
                                                Book a Call
                                            </h3>
                                        </div>
                                        <div className="form-group">
                                            <input type="Text" name="name" placeholder="Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type={Text} name="company" placeholder="Company" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email" placeholder="E-mail" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <textarea name="message" placeholder="Message" cols="30" rows="10"></textarea>
                                        </div>
                                        <div className="form-group justify-content-center">
                                            <button type="submit" name="submit" className="submit-button">Book a Call</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="virtual-tour">
                            <div className="row">
                                <div className="col-8">
                                    <h5>Step into our Development Center</h5>
                                </div>
                                <div className="col-4">
                                    <button className="virtual-tour-btn" >Take a virtual tour</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormStripe;