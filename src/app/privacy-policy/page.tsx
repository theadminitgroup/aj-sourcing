import type { Metadata } from "next";
import { LegalDocument, LegalSection } from "@/components/legal/legal-document";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `Privacy Policy — ${siteConfig.name}`,
  description:
    "How AJ Sourcing collects, uses, and protects personal information when you visit our website or contact us.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument title="Privacy Policy" effectiveDate="November 22, 2026">
      <p>
        At AJ Sourcing, we respect your privacy and are committed to handling
        your personal information responsibly. This Privacy Policy explains how
        information is collected, used, and protected when you visit our website
        or communicate with us about our sourcing services.
      </p>

      <LegalSection title="1. Information We Collect">
        <p>
          When you contact AJ Sourcing or submit an enquiry, we may collect
          information such as your name, email address, phone number, company
          name, product requirements, and any other details you voluntarily
          provide.
        </p>
        <p>
          Our website and its service providers may also collect basic technical
          information, such as browser type, device information, and IP address,
          where necessary for website operation, security, or enabled analytics.
        </p>
      </LegalSection>

      <LegalSection title="2. How We Use Your Information">
        <p>
          We use the information you provide to respond to enquiries, prepare
          quotations, communicate about sourcing requirements, coordinate
          services, provide order-related updates, and improve our customer
          experience.
        </p>
        <p>
          We may contact you through email, telephone, or WhatsApp regarding
          your enquiries or ongoing business arrangements.
        </p>
      </LegalSection>

      <LegalSection title="3. Sharing Your Information">
        <p>
          We may share relevant information with manufacturers, suppliers,
          logistics providers, or other service partners when necessary to
          respond to your request or coordinate an agreed service.
        </p>
        <p>
          We may also use trusted technology providers for website hosting,
          communication, and email delivery.
        </p>
        <p>
          We share only the information reasonably necessary for the relevant
          purpose and take appropriate steps to protect it.
        </p>
      </LegalSection>

      <LegalSection title="4. International Data Transfers">
        <p>
          As AJ Sourcing works with international manufacturers and business
          partners, information relevant to your enquiry or order may be
          processed or shared across countries, including China.
        </p>
        <p>
          We take appropriate measures to handle such information responsibly
          and in accordance with applicable legal requirements.
        </p>
      </LegalSection>

      <LegalSection title="5. Cookies and Website Technology">
        <p>
          Our website may use essential cookies or similar technologies to
          support website functionality and security.
        </p>
        <p>
          If optional analytics or other tracking technologies are enabled, they
          may be used to understand website performance and improve the visitor
          experience.
        </p>
      </LegalSection>

      <LegalSection title="6. Data Security and Retention">
        <p>
          We take reasonable technical and organizational measures to protect
          personal information against unauthorized access, loss, or misuse.
        </p>
        <p>
          We retain information only for as long as reasonably necessary for
          business, contractual, or legal purposes.
        </p>
      </LegalSection>

      <LegalSection title="7. Your Privacy Rights">
        <p>
          Depending on applicable law, you may have the right to request access
          to, correction of, or deletion of your personal information.
        </p>
        <p>
          You can contact us to make a privacy-related request. Certain
          information may need to be retained to comply with legal or
          contractual obligations.
        </p>
      </LegalSection>

      <LegalSection title="8. External Websites">
        <p>
          Our website may contain links to third-party websites or communication
          platforms. We are not responsible for the privacy practices of those
          external services.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to This Policy">
        <p>
          We may update this Privacy Policy to reflect changes in our services,
          website functionality, or legal requirements. Any updates will be
          published on this page with a revised effective date.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact Us">
        <p>
          For questions about this Privacy Policy or how we handle personal
          information, please contact:
        </p>
        <p>
          <strong className="text-light-primary">AJ Sourcing</strong>
        </p>
        <p>
          Email:{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-light-primary underline decoration-[#E8E8E8] underline-offset-4 transition-colors hover:decoration-light-primary"
          >
            {siteConfig.email}
          </a>
        </p>
        <p>Registered business name: AJ Sourcing</p>
      </LegalSection>
    </LegalDocument>
  );
}
