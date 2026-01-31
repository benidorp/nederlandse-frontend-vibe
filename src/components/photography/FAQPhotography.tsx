import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
const faqContent = {
  title: "Frequently Asked Questions About Photography Legal Documents",
  description: "Common questions from photographers about legal protection and documentation",
  questions: [{
    question: "How can I legally use music or video in my photo content?",
    answer: "Always ensure you have rights or licenses for any music or video clips used in your slideshows or social media. Use royalty-free platforms like Epidemic Sound, Artlist, or Pexels. Never use copyrighted material without explicit permission, as it can result in takedown notices or fines."
  }, {
    question: "What is a quitclaim in photography?",
    answer: "A quitclaim is a signed release where a model or property owner waives any rights or future claims to images, granting full usage rights to the photographer. It's essential for commercial shoots, advertising, or any project where images might be sold or published internationally."
  }, {
    question: "What is a property release and when do I need one?",
    answer: "A property release grants permission to photograph private property for commercial use. It's required for locations like homes, offices, or recognizable landmarks. Without one, you may face legal restrictions when licensing or selling those images commercially."
  }, {
    question: "How should photographers handle intellectual property rights?",
    answer: "Always assert copyright ownership in your contracts and metadata. Register your images with a copyright office when possible. Add watermarks, EXIF data, and maintain clear licensing records. Avoid using others' work without permission, even for inspiration."
  }, {
    question: "What are moral rights in photography?",
    answer: "Moral rights protect a photographer's integrity and reputation. They include the right to be credited and the right to object to distortion or misuse of your images. These rights exist automatically in many countries and should be respected by clients and collaborators."
  }, {
    question: "Can I photograph people in public places legally?",
    answer: "In most countries, photographing people in public for editorial or artistic purposes is allowed, but using those images commercially requires a model release. Always check local privacy laws — they vary widely across regions."
  }, {
    question: "What is a non-disclosure agreement (NDA) for photographers?",
    answer: "An NDA prevents clients or collaborators from sharing confidential information about your shoot, pricing, or creative process. It's common in fashion, advertising, and corporate photography to protect trade secrets and brand strategy."
  }, {
    question: "How can I protect my online portfolio from theft?",
    answer: "Watermark your images subtly, disable right-click saving, and embed metadata in your files. Use low-resolution previews for web display. Services like Pixsy or Digimarc help track and enforce unauthorized image use globally."
  }, {
    question: "How can I write a strong photography disclaimer?",
    answer: "Your disclaimer should state that all photos are owned by the photographer, not to be copied or distributed without written consent. Include a note that colors and appearances may vary by device or screen settings to avoid misrepresentation claims."
  }, {
    question: "What's the importance of branding for photographers?",
    answer: "Strong branding builds recognition and trust. It includes a consistent logo, color palette, tone of voice, and editing style. A clear brand identity helps clients remember you and positions you as a professional in your niche."
  }, {
    question: "How can photographers build an international audience?",
    answer: "Use social media platforms strategically (Instagram, Pinterest, Behance). Write multilingual captions and use international hashtags. Collaborate with global creators, participate in online exhibitions, and optimize your website for multiple languages and currencies."
  }, {
    question: "How do I tell a story through my photography?",
    answer: "Every image should communicate emotion, context, or narrative. Use composition, lighting, and subjects intentionally. Sequences of images can build visual storytelling — ideal for editorial and documentary work."
  }, {
    question: "How do I handle image manipulation ethically?",
    answer: "Photo editing should enhance but not mislead. Avoid altering body features in ways that distort reality unless it's for artistic intent. Always disclose when composites or AI-generated elements are used to maintain transparency and trust."
  }, {
    question: "What is AI-generated photography and is it legal?",
    answer: "AI tools can create or modify images, but copyright ownership is complex. Laws differ by region — in most cases, only human-made elements are copyrightable. Clearly disclose AI involvement to clients and avoid generating likenesses without consent."
  }, {
    question: "How can I collaborate with brands as a photographer?",
    answer: "Create a professional media kit with your portfolio, audience stats, and pricing. Approach brands with tailored proposals showing mutual value. Include clear contracts outlining deliverables, payment, exclusivity, and licensing rights."
  }, {
    question: "What should I include in a photography privacy policy?",
    answer: "Explain how client data (names, photos, contact info) is collected, stored, and used. State how long data is retained and how clients can request deletion. Ensure compliance with GDPR, CCPA, or local data protection laws."
  }, {
    question: "How can I manage cultural sensitivity in photography?",
    answer: "Always research local customs and obtain consent before photographing people or religious sites. Avoid reinforcing stereotypes. Ethical representation enhances your reputation and supports responsible visual storytelling."
  }, {
    question: "What are the risks of using AI photo enhancement tools?",
    answer: "AI can overprocess or alter key details, reducing authenticity. Some tools may store uploaded images, risking data privacy. Use trusted software, read terms of service, and maintain originals for proof of authorship."
  }, {
    question: "What's the best way to future-proof a photography business?",
    answer: "Diversify income streams (prints, workshops, online courses, stock licensing). Build a strong online presence and adapt to new technologies like AI and NFTs. Continue learning and updating your contracts, branding, and equipment regularly."
  }, {
    question: "What legal rights do I retain as a photographer when selling images?",
    answer: "As the photographer, you retain the copyright of your images by default under international treaties such as the Berne Convention. You may transfer usage rights (license) to clients while still protecting underlying rights. Clearly define what the client may do (print, digital, commercial) in your contract and keep the rest reserved."
  }, {
    question: "When should I use a quitclaim or release form in photography?",
    answer: "Use a quitclaim or release form when you deliver images and want to ensure the client waives future claims (e.g., model release for commercial use). It helps protect you from liability, limits future disputes, and clarifies that the client accepts the rights as set out in the contract."
  }, {
    question: "How do I ethically photograph people in public or private spaces?",
    answer: "Respect privacy and local laws. In most jurisdictions you may photograph in public spaces without explicit permission, but for recognizable individuals or private locations you need consent or a release. Always disclose how you will use the images and allow subjects to opt out when reasonable."
  }, {
    question: "What should I include in branding for my photography business?",
    answer: "Branding should reflect your style, niche, and target market. Include a consistent logo, colour palette, typography, and voice. Showcase your best work, testimonials, and a clear value proposition. A strong brand helps you stand out and attract clients aligned with your aesthetic."
  }, {
    question: "How can I tell compelling visual stories through photography?",
    answer: "Focus on narrative: what is happening, who is the subject, what emotion or message do you wish to convey? Use composition, lighting, colour, and context to support your story. Show a beginning, middle, and end in a series to engage viewers and deepen impact."
  }, {
    question: "What ethical considerations apply to photo editing and retouching?",
    answer: "Be transparent about what has been altered, especially in portrait or commercial work. Avoid misrepresenting reality (e.g., significant body modification) unless the assignment explicitly allows it. Ethical editing builds trust with subjects and clients."
  }, {
    question: "How do I navigate copyright across different countries?",
    answer: "Copyright is automatic in most countries under the Berne Convention. Still, you should register your work where possible (e.g., US Copyright Office) for stronger enforcement. Use contracts specifying applicable law and jurisdiction to reduce uncertainty for international clients."
  }, {
    question: "How can I handle image usage when a client wants global rights?",
    answer: "Clarify territory, duration, media, exclusivity, and fees in your licensing agreement. 'Worldwide, in perpetuity' usage should command higher fees. Keep track of where and how images are used and renew or renegotiate if usage expands."
  }, {
    question: "What is the difference between editorial and commercial photography usage?",
    answer: "Editorial usage is for news, education or commentary and doesn't typically promote a product or brand. Commercial usage promotes a product, service or brand and involves stricter licensing, model and property releases, and higher fees."
  }, {
    question: "How can I build and protect a stock photography business?",
    answer: "Curate a consistent style, keywords, and metadata to make your images searchable. Protect your work by embedding metadata, using watermarks for previews, and monitoring usage. Define clear licensing terms (royalty free, rights managed) and enforce them."
  }, {
    question: "What role does metadata play in managing photographic rights?",
    answer: "Metadata (EXIF, IPTC) embeds information like copyright holder, usage rights, and contact details. It helps track usage and supports enforcement. Ensure your workflow preserves metadata when exporting images for clients or stock platforms."
  }, {
    question: "How do I set up licensing terms for drone or aerial photography?",
    answer: "Drone imagery often involves additional regulations (airspace, privacy). Define usage limits (print/web, duration, region) and clarify responsibility for compliance with drone laws. Consider higher insurance and include disclaimers about regulatory changes."
  }, {
    question: "How do I respond to a client who uses images beyond their agreed license?",
    answer: "Send a formal notice stating the infringement, provide the original licensing terms, and invoice for additional usage (including retrospective fees). Escalate with takedown notices (e.g., DMCA) or legal action if necessary. Always keep documentation."
  }, {
    question: "How can I integrate storytelling with commercial or brand photography?",
    answer: "Combine the brand's message with a visual narrative: show the user's journey, highlight emotion, include real-life contexts. Plan with a storyboard, shoot in authentic environments, and deliver images that resonate beyond standard product shots."
  }, {
    question: "What are the best practices for backup and archival of a high-volume photography business?",
    answer: "Use the 3-2-1 backup rule (3 copies, 2 devices, 1 off-site/cloud). Organize files by date/client, label clearly, use checksums or verification tools. Archive RAW and final images separately and keep release forms, contracts, and usage logs for legal protection."
  }, {
    question: "How do I price for usage-based licensing rather than solely session fees?",
    answer: "Segment pricing into session fee + usage fee. Usage-based licensing varies by media type (print/web), duration, region, exclusivity. Provide clear terms in your contract and license. You may charge a higher session fee upfront and maintain a usage tracker for future usage."
  }, {
    question: "What do I need to know about insurance for commercial photography?",
    answer: "Essential coverage includes equipment insurance (theft/damage), public liability (client/third-party claims), and professional indemnity (errors/omissions). For international shoots, include travel cover, drone liability if applicable, and verify local legal requirements."
  }, {
    question: "How can I protect my brand identity as a photographer in a competitive market?",
    answer: "Register your business name and trademark your logo if possible. Maintain consistent visual identity across website, social media, packaging, and invoices. Deliver exceptional service and client experience to build referrals and recognition."
  }, {
    question: "What ethical issues arise with AI-generated or enhanced photography?",
    answer: "Disclose the use of AI tools when editing or producing images. Avoid presenting AI-generated work as purely natural, especially in documentary or journalism contexts. Ensure your contract covers AI usage, rights, and any limitations on modification."
  }, {
    question: "How do I evaluate and select equipment for a high-end commercial photography studio?",
    answer: "Assess your niche demands: lighting rig capability, tethering, medium/large format, high-resolution sensors, colour accuracy. Consider future-proofing and workflow efficiency. Prioritize reliability, service support, modular setup, and expandability."
  }, {
    question: "How can I photograph in low light without flash?",
    answer: "Use a wide aperture (f/1.8–f/2.8), a slower shutter speed, and increase ISO carefully to avoid noise. Stabilize your camera on a tripod or steady surface. Shooting in RAW allows better post-processing in programs like Lightroom or Photoshop for noise reduction and color correction."
  }, {
    question: "What is the best lens for portrait photography?",
    answer: "A prime lens with a wide aperture, such as 50mm f/1.8 or 85mm f/1.4, is ideal for portraits. These lenses create beautiful background blur (bokeh) and flattering compression for facial features. Choose full-frame lenses for professional quality and consistent sharpness."
  }, {
    question: "How do I take great landscape photos?",
    answer: "Use a small aperture (f/8–f/16) for a wide depth of field, focus one-third into the scene, and use a tripod for stability. The best times to shoot landscapes are sunrise and sunset. Incorporate foreground interest for depth and use a polarizing filter to enhance skies."
  }, {
    question: "What is white balance in photography?",
    answer: "White balance adjusts color temperature to ensure whites appear neutral under different lighting. Common settings include daylight, cloudy, tungsten, and fluorescent. Correct white balance prevents photos from looking too blue or orange and ensures consistent color tones."
  }, {
    question: "How can I photograph fast-moving subjects?",
    answer: "Use shutter priority mode and set a fast shutter speed (1/500s or higher). Enable continuous autofocus (AF-C) and burst mode to capture multiple frames. Sports, wildlife, and event photographers rely on these settings for crisp, dynamic shots."
  }, {
    question: "What is macro photography?",
    answer: "Macro photography captures extreme close-ups of small subjects like insects, jewelry, or flowers. Use a macro lens (1:1 ratio) and ensure steady focus using a tripod or focus stacking. Good lighting and shallow depth of field highlight intricate details."
  }, {
    question: "How can I create better compositions?",
    answer: "Apply composition techniques like the rule of thirds, symmetry, leading lines, and framing. Avoid centering every subject. Use foreground and background layers to create visual depth. Study master photographers for creative composition inspiration."
  }, {
    question: "What's the difference between full-frame and crop sensor cameras?",
    answer: "Full-frame cameras have larger sensors, better low-light performance, and shallower depth of field. Crop sensors (APS-C) are more affordable and lighter but slightly reduce image quality and field of view. Both can produce professional results with the right lenses."
  }, {
    question: "How can I edit my photos like a professional?",
    answer: "Use editing software like Adobe Lightroom or Capture One. Adjust exposure, contrast, white balance, and color grading consistently. Avoid over-editing — subtlety preserves realism. Use presets or custom styles for a cohesive portfolio aesthetic."
  }, {
    question: "What are the best camera settings for night photography?",
    answer: "Use manual mode, a tripod, ISO 800–1600, wide aperture (f/2.8), and a slow shutter speed (10–30s). Shoot in RAW to recover shadow detail. A remote shutter release or self-timer helps prevent camera shake."
  }, {
    question: "How do I take professional product photos?",
    answer: "Use soft, even lighting and a neutral background. A lightbox or diffuser eliminates harsh shadows. Keep ISO low for clarity and shoot with a tripod. Adjust white balance for accurate colors, and retouch dust or reflections in post-production."
  }, {
    question: "What is bokeh and how do I create it?",
    answer: "Bokeh is the aesthetic quality of background blur produced by a wide aperture lens (f/1.2–f/2.8). Use a long focal length and keep your subject far from the background. Prime lenses and round aperture blades create smoother bokeh effects."
  }, {
    question: "How can I take great black and white photos?",
    answer: "Focus on lighting, texture, and contrast instead of color. Shoot in RAW and convert in post-processing for better tonal control. Avoid flat lighting; dramatic shadows enhance mood and storytelling in monochrome photography."
  }, {
    question: "What are the best apps for photo editing on mobile?",
    answer: "Popular professional apps include Lightroom Mobile, Snapseed, VSCO, and Adobe Photoshop Express. These tools allow fine control of exposure, contrast, and color. For quick editing, Canva or Pixlr are good alternatives."
  }, {
    question: "What is composition in photography?",
    answer: "Composition refers to how elements are arranged in a frame. Strong composition draws the viewer's eye and creates balance. Techniques include rule of thirds, leading lines, symmetry, and negative space for impactful images."
  }, {
    question: "How do I photograph silhouettes?",
    answer: "Position your subject in front of a bright light source such as the sunset. Expose for the background rather than the subject. Use a small aperture and manual mode. Silhouettes emphasize shape and form, making them powerful storytelling tools."
  }]
};
const FAQPhotography = () => {
  return <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Badge className="mb-4">Q&A</Badge>
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground mb-12">Common questions from photographers about legal protection and documentation for your website</p>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq-all" className="border rounded-lg px-6 py-2">
              <AccordionTrigger className="hover:no-underline">
                <h2 className="text-xl font-semibold text-left">{faqContent.title}</h2>
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-6">
                {faqContent.questions.map((item, index) => <div key={index} className="space-y-2">
                    <h2 className="text-lg font-semibold">{item.question}</h2>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>)}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>;
};
export default FAQPhotography;