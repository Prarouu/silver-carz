# Questions for the owner

Things still using demo/placeholder content that need real information from the
business owner before launch.

## Stats & credibility (Hero section)
The hero currently shows placeholder stats. Ask for real numbers (or whether to
drop the block):
- [ ] Years of experience (currently "6+")
- [ ] Cars detailed so far (currently "1,200+")
- [ ] Repeat-client rate (currently "97%")
- [ ] Are same-day express slots actually offered? (currently "Same day · Express slots")

## Photos
The site currently uses stock Unsplash images:
- [ ] Real photos of the studio and finished cars for the Hero image
- [ ] Real before/after or work photos for the Gallery section

## Local SEO (needed to actually rank #1 in Nagpur)
- [ ] Create / claim the **Google Business Profile** (business.google.com) with
      the exact same name, address, and phone as the website, link it to
      silvercarz.com, and start collecting Google reviews. This matters more
      than anything on the website itself for "car wash near me" searches.
- [ ] Exact Google Maps pin / share link for the studio (site currently uses
      approximate coordinates for Rajendra Nagar — update `geo` in
      `src/lib/site.ts`).
- [ ] Confirm the service-area list used on the site: Rajendra Nagar,
      Takli Seem, Manish Nagar, Somalwada, Khamla, Pratap Nagar,
      Trimurti Nagar, Wardha Road, Hingna.
- [ ] After deploying to silvercarz.com: submit the sitemap in Google Search
      Console (https://silvercarz.com/sitemap.xml).

## Other open items
- [ ] Working hours — footer currently says "Mon–Sat · 10:00 AM – 7:00 PM IST" (unconfirmed)
- [ ] Instagram / Facebook links — footer icons currently point to "#" (dead links)
- [ ] Booking form now sends requests via WhatsApp to a TEMPORARY number
      (7276038998). Replace with the business WhatsApp number — edit
      `WHATSAPP_NUMBER` in `src/components/sections/Contact.tsx`.
