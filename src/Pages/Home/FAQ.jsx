import faq from "/assets/faq.svg";

const FAQ = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col-reverse items-center justify-center gap-10 sm:px-20 px-4">
        <div>
          <h2 className="lg:text-5xl text-4xl font-semibold title-font">
            Frequently Asked <br className="md:block hidden" /> Questions
          </h2>
          <p className="pt-4">Find answers to common questions and get the help you need.</p>
        </div>
        <div>
          <img src={faq} alt="" />
        </div>
      </div>

      {/* Q&A */}
      <div className=" sm:px-20 px-4 flex md:flex-row flex-col w-full gap-8 pt-9">
        {/* left */}
        <div className="space-y-4 w-full">
          {/* q-1 */}
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
            How do I apply for a scholarship?
            </div>
            <div className="collapse-content">
              <p>To apply, simply create an account on our website, fill out the application form, and submit the required documents before the deadline.</p>
            </div>
          </div>

          {/* q-2 */}
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            What documents are needed to apply?
            </div>
            <div className="collapse-content">
              <p>Typically, you will need proof of enrollment, transcripts, recommendation letters, and a personal statement. Please check each scholarship's specific requirements.</p>
            </div>
          </div>

          {/* q-3 */}
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            When is the application deadline?
            </div>
            <div className="collapse-content">
              <p>Deadlines vary depending on the scholarship. Be sure to review the details on the scholarship page for each opportunity.</p>
            </div>
          </div>
        </div>

          {/* right */}
        <div className="space-y-4 w-full">
          {/* q-4 */}
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
            Can I apply for multiple scholarships?
            </div>
            <div className="collapse-content">
              <p>Yes! You are welcome to apply for as many scholarships as you qualify for.</p>
            </div>
          </div>

          {/* q-5 */}
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            How will I know if I’ve been selected?
            </div>
            <div className="collapse-content">
              <p>Scholarship recipients will be notified by email after the selection process is complete. Make sure to check your inbox and spam folder for updates.</p>
            </div>
          </div>
          
          {/* q-6 */}
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            Are scholarships renewable for multiple years?
            </div>
            <div className="collapse-content">
              <p>Some scholarships are renewable for subsequent years, but eligibility and renewal criteria vary. Please review the terms of each scholarship for specific information.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
