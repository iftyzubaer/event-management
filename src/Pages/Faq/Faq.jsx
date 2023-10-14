const Faq = () => {
    return (
        <div>
            <h3 className="text-5xl py-6 font-bold text-center">Frequently Asked Questions</h3>
            <div className="px-40">
                <div className="collapse my-3 collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        What types of events do you specialize in managing?
                    </div>
                    <div className="collapse-content">
                        <p>We specialize in managing a wide range of corporate events, including conferences, seminars, trade shows, team building workshops, product launches, corporate meetings, and award ceremonies.</p>
                    </div>
                </div>
                <div className="collapse my-3 collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Can you customize event packages to suit our specific needs?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we understand that every event is unique. We offer customized event solutions to meet your specific goals, preferences, and budget.</p>
                    </div>
                </div>
                <div className="collapse my-3 collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How do you handle event logistics?
                    </div>
                    <div className="collapse-content">
                        <p>We take care of all aspects of event logistics, including venue selection, audio-visual setup, catering, transportation, and more. Our goal is to make the planning process as stress-free as possible for you.</p>
                    </div>
                </div>
                <div className="collapse my-3 collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Do you have experience in managing large-scale events?
                    </div>
                    <div className="collapse-content">
                        <p>Absolutely! Our experienced team has successfully managed both small and large-scale events. We have the expertise and resources to handle events of any size.</p>
                    </div>
                </div>
                <div className="collapse my-3 collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Can you assist with event marketing and promotion?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we offer event marketing services to help promote your event. From online marketing campaigns to branding and print materials, we can support your promotional efforts.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;