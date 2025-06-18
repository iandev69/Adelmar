
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdelmarWebsite() {
  return (
    <div className="bg-[#FAFAFA] text-[#003B49] font-sans">
      <header className="flex items-center justify-between p-6 shadow-md">
        <div className="text-2xl font-bold">Adelmar</div>
        <nav className="space-x-6 text-base">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#sustainability">Sustainability</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="bg-gradient-to-r from-[#C6E2D6] to-[#FAFAFA] text-center py-20">
        <h1 className="text-4xl font-bold mb-4">From Sea to Table – Perfected.</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          We transform ocean harvests into prime-quality, ready-to-eat seafood products for global distribution.
        </p>
        <Button className="bg-[#003B49] text-white px-6 py-3">Learn More</Button>
      </section>

      <section id="about" className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p>
          Adelmar is committed to processing seafood with precision, sustainability, and quality. We work closely with
          coastal communities and use modern facilities to ensure that every product meets the highest standards.
        </p>
      </section>

      <section id="services" className="bg-[#F2E9DC] py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Custom seafood processing for international markets</li>
          <li>Packaging and private labeling</li>
          <li>Cold chain logistics support</li>
        </ul>
      </section>

      <section id="sustainability" className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Sustainability</h2>
        <p>
          We maintain sustainable fishing practices and waste-reduction initiatives across all stages of production.
          Our commitment to marine ecosystems and local livelihoods is central to our mission.
        </p>
      </section>

      <section id="contact" className="bg-[#003B49] text-white py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p>Email: info@adelmarseafood.com</p>
          <p>Phone: +1 800 555 0198</p>
          <p>Address: 123 Ocean Drive, Bergen, Norway</p>
        </div>
      </section>

      <footer className="bg-[#002B36] text-white text-center py-6">
        <p>© 2025 Adelmar. All rights reserved.</p>
      </footer>
    </div>
  );
}
