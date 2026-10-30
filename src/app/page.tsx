import { IncidentStory } from "@/components/console/IncidentStory";
import { Author } from "@/components/home/Author";
import { Hero } from "@/components/home/Hero";
import { Pipeline, QuickStart } from "@/components/home/Incident";
import { Modules, Receipts } from "@/components/home/Modules";
import { Closing, Faq, Offer } from "@/components/home/Offer";
import { ScrollText } from "@/components/fx/ScrollText";
import { Reveal } from "@/components/Reveal";
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

const CONTAINER = "mx-auto w-[min(1200px,100%-32px)] md:w-[min(1200px,100%-48px)]";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <Hero />
      <div className={CONTAINER}>
        <Receipts />
        <section id="incidents" className="pt-24 md:pt-36">
          <Reveal>
            <h2 className="max-w-[18ch] text-[clamp(2rem,3.8vw,3rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
              What the dashboard didn&apos;t say
            </h2>
            <p className="mt-4 max-w-[56ch] text-muted">
              Five failures, each invisible to normal monitoring. Scroll, and watch the board tell the truth.
            </p>
          </Reveal>
          <IncidentStory />
        </section>
        <ScrollText
          text="Uptime, error rate and latency stayed green the whole time. Nothing ever asked the system to actually do anything."
          className="mx-auto mt-8 max-w-[28ch] text-center text-[clamp(1.7rem,3.6vw,2.9rem)] font-semibold leading-[1.18] tracking-[-0.035em]"
        />
        <Modules />
      </div>
      <Pipeline />
      <div className={CONTAINER}>
        <QuickStart />
        <Author />
        <Offer />
        <Faq />
        <Closing />
      </div>
    </>
  );
}
