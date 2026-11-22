import type { Metadata } from "next";
import { LegalDocument, LegalSection } from "@/components/legal/legal-document";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `Terms of Service — ${siteConfig.name}`,
  description:
    "Terms governing use of the AJ Sourcing website and enquiry features.",
};

export default function TermsOfServicePage() {
  return (
    <LegalDocument title="Terms of Service" effectiveDate="November 22, 2026">
      <p>
        Welcome to AJ Sourcing. By accessing our website or using its enquiry
        features, you agree to these Terms of Service.
      </p>
      <p>
        These terms govern the use of our website. Specific sourcing projects,
        commercial arrangements, and orders may be governed by separate
        quotations, agreements, or contracts.
      </p>

      <LegalSection title="1. About AJ Sourcing">
        <p>
          AJ Sourcing provides product sourcing and related coordination
          services, including manufacturer identification, production
          coordination, quality inspection arrangements, freight management, and
          import support.
        </p>
        <p>
          We may also help connect businesses with third-party professionals
          offering branding, design, website development, and digital marketing
          services.
        </p>
        <p>
          The availability and scope of services depend on individual project
          requirements.
        </p>
      </LegalSection>

      <LegalSection title="2. Website Use">
        <p>
          You agree to use our website for lawful purposes and to provide
          accurate information when submitting enquiries.
        </p>
        <p>
          You must not attempt to interfere with the website&apos;s operation,
          compromise its security, or misuse its content or communication
          features.
        </p>
      </LegalSection>

      <LegalSection title="3. Enquiries and Quotations">
        <p>
          Submitting an enquiry or requesting a quotation does not create a
          binding commercial agreement.
        </p>
        <p>
          Quotations may depend on product specifications, quantities,
          manufacturing requirements, supplier availability, shipping
          arrangements, and other relevant factors.
        </p>
        <p>
          Prices, timelines, and service availability are subject to
          confirmation.
        </p>
      </LegalSection>

      <LegalSection title="4. Sourcing and Manufacturing">
        <p>
          AJ Sourcing assists customers in identifying suitable suppliers and
          coordinating agreed sourcing activities.
        </p>
        <p>
          Manufacturing specifications, quality requirements, production
          timelines, and responsibilities will be determined through the
          relevant commercial arrangement.
        </p>
        <p>
          Any changes to approved requirements may affect pricing, production
          schedules, or delivery arrangements.
        </p>
      </LegalSection>

      <LegalSection title="5. Quality Inspection">
        <p>
          Where agreed, AJ Sourcing may coordinate inspections of manufactured
          goods before dispatch.
        </p>
        <p>
          Inspection scope and acceptance criteria depend on the requirements
          agreed for the project.
        </p>
        <p>
          An inspection does not guarantee that every product will be free from
          defects or that issues cannot arise after inspection.
        </p>
      </LegalSection>

      <LegalSection title="6. Shipping and Delivery">
        <p>
          AJ Sourcing may coordinate shipping through different freight methods
          depending on the destination, shipment requirements, and selected
          service.
        </p>
        <p>
          International trade terms such as EXW, FOB, CIF, and DDP may apply
          where expressly agreed.
        </p>
        <p>
          Shipping costs, customs duties, taxes, delivery responsibilities, and
          risk allocation will depend on the applicable commercial agreement and
          shipping terms.
        </p>
        <p>
          Delivery timelines are estimates unless expressly agreed otherwise.
        </p>
      </LegalSection>

      <LegalSection title="7. Payments and Commercial Agreements">
        <p>
          Payment amounts, methods, deadlines, and any applicable deposits will
          be specified in the relevant quotation, invoice, or commercial
          agreement.
        </p>
        <p>
          Orders, cancellations, refunds, and changes to services will be
          handled according to the terms agreed for the relevant project.
        </p>
      </LegalSection>

      <LegalSection title="8. Third-Party Services">
        <p>
          Certain services may involve independent manufacturers, freight
          providers, designers, developers, or other external partners.
        </p>
        <p>
          The responsibilities of each party and the scope of AJ Sourcing&apos;s
          involvement will be determined through the relevant service
          arrangement.
        </p>
      </LegalSection>

      <LegalSection title="9. Website Information">
        <p>
          We aim to keep the information on our website accurate and up to date.
        </p>
        <p>
          However, general service descriptions and website content are provided
          for informational purposes and do not constitute a guarantee of
          product availability, pricing, or specific commercial outcomes.
        </p>
      </LegalSection>

      <LegalSection title="10. Intellectual Property">
        <p>
          Website branding, original content, graphics, and other materials
          owned by or licensed to AJ Sourcing are protected by applicable
          intellectual property laws.
        </p>
        <p>
          You may not reproduce or commercially use protected website materials
          without appropriate authorization.
        </p>
      </LegalSection>

      <LegalSection title="11. Limitation of Liability">
        <p>
          To the extent permitted by applicable law, AJ Sourcing is not
          responsible for losses arising solely from reliance on general website
          information or interruptions in website availability.
        </p>
        <p>
          Liability relating to sourcing projects, manufacturing, inspections,
          payments, and deliveries will be determined by applicable law and the
          relevant commercial agreements.
        </p>
        <p>
          Nothing in these terms excludes liability that cannot legally be
          excluded.
        </p>
      </LegalSection>

      <LegalSection title="12. Changes to These Terms">
        <p>
          We may revise these Terms of Service when necessary. Updated terms
          will be published on this page with a revised effective date.
        </p>
        <p>
          Changes to website terms do not automatically alter the terms of
          existing signed commercial agreements.
        </p>
      </LegalSection>

      <LegalSection title="13. Contact Information">
        <p>For questions about these Terms of Service, please contact:</p>
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
