import { Hero } from "@/components/home/Hero";
import { Incident, QuickStart } from "@/components/home/Incident";
import { Facts, Modules } from "@/components/home/Modules";
import { Closing, Faq, Offer } from "@/components/home/Offer";
import { SITE } from "@/lib/site";

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareSourceCode",
      name: "agents-toolkit",
      description: "Five dependency-free Python modules that stop autonomous agents failing silently.",
      programmingLanguage: "Python",
      license: "https://opensource.org/licenses/MIT",
      codeRepository: SITE.github,
      author: { "@type": "Person", name: SITE.author },
    },
    {
      "@type": "Product",
      name: "Agents Kit Post-mortem",
      description: "The full written diagnosis of five silent failures in a production autonomous agent.",
      brand: { "@type": "Brand", name: SITE.name },
      offers: {
        "@type": "Offer",
        price: SITE.priceValue,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${SITE.url}/#postmortem`,
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="mx-auto w-[min(1160px,100%-32px)] md:w-[min(1160px,100%-48px)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <Hero />
      <Facts />
      <Modules />
      <Incident />
      <QuickStart />
      <Offer />
      <Faq />
      <Closing />
    </div>
  );
}
