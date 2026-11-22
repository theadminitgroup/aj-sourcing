import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";

type LegalDocumentProps = {
  title: string;
  effectiveDate: string;
  children: ReactNode;
};

/**
 * Shared layout for Privacy Policy / Terms — narrow readable column + site footer.
 */
export function LegalDocument({
  title,
  effectiveDate,
  children,
}: LegalDocumentProps) {
  return (
    <div className="bg-white">
      <article className="content-width section-x pb-20 pt-28 md:pb-28 md:pt-36">
        <div className="mx-auto max-w-[820px]">
          <header className="border-b border-[#E8E8E8] pb-8 md:pb-10">
            <h1
              className="text-balance text-[36px] leading-[1.1] tracking-[-0.03em] text-light-primary md:text-[44px]"
              style={{ fontWeight: 400 }}
            >
              {title}
            </h1>
            <p
              className="mt-4 text-[15px] leading-[1.5] text-light-secondary md:text-[16px]"
              style={{ fontWeight: 400 }}
            >
              Effective Date: {effectiveDate}
            </p>
          </header>

          <div className="legal-prose mt-10 space-y-4 text-[16px] leading-[1.7] text-light-secondary md:mt-12 md:text-[17px] md:leading-[1.75]">
            {children}
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="!mt-10 space-y-4 md:!mt-12">
      <h2
        className="text-[20px] leading-[1.3] tracking-[-0.02em] text-light-primary md:text-[22px]"
        style={{ fontWeight: 400 }}
      >
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
