// Import dataset
import contactData from "../data/contactData";
// Import components
import PageHeader from "../components/PageHeader";

export default function Help() {
    return (
        <div>
            <PageHeader title="Help" />
            
            <p>
                Find answers to common questions.
            </p>
            <br/>
            <article>
                <h3>Company data:</h3>
                <br />
                <p>
                    Company name: <strong>{contactData.CompanyName}</strong>
                </p>
                <p>
                    Phone number: <strong>{contactData.PhoneNumber}</strong>
                </p>
                <p>
                    Email address: <strong>{contactData.EmailAddress}</strong>
                </p>
                <a href={contactData.linkedIn}>
                    <strong>LinkedIn account</strong>
                </a>
            </article>
        </div>
    );
}