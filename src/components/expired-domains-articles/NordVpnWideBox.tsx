import { Shield, Lock, Globe, ArrowRight } from "lucide-react";

const NORDVPN_URL = "https://www.dpbolvw.net/click-100643838-14471514";

/**
 * Wide NordVPN affiliate column shown on every expired-domain article page.
 * Outer card uses the same blue palette as the Premium Domain box.
 * Inner content area is white with a blue title box on top.
 */
const NordVpnWideBox = () => {
  return (
    <section
      aria-label="NordVPN — protect your privacy online"
      className="my-12 overflow-hidden rounded-2xl border-2 border-blue-300 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-3 shadow-md md:p-4"
    >
      <div className="overflow-hidden rounded-xl bg-white">
        {/* Blue title box */}
        <div className="flex items-center gap-3 bg-blue-600 px-5 py-4 text-white md:px-7">
          <Shield className="h-6 w-6 shrink-0" />
          <h2 className="text-lg font-bold tracking-tight md:text-xl">
            Protect Your Privacy with NordVPN
          </h2>
        </div>

        {/* White inner content */}
        <div className="grid gap-6 px-5 py-6 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:px-7 md:py-7">
          <div>
            <p className="text-sm leading-relaxed text-slate-700 md:text-base">
              Your personal data — passwords, banking sessions, emails and
              browsing history — is exposed every time you connect to the
              internet, whether you are at home, in the office or on public
              Wi-Fi in a café, hotel or airport. A{" "}
              <a
                href={NORDVPN_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-800"
              >
                Virtual Private Network (VPN)
              </a>{" "}
              encrypts your full connection and hides your real IP address, so
              advertisers, hackers and network operators can no longer track
              what you do or steal what you send.
            </p>

            <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <Lock className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                Bank-grade encryption for every device
              </li>
              <li className="flex items-start gap-2">
                <Shield className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                Stay private at home and in the office
              </li>
              <li className="flex items-start gap-2">
                <Lock className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                Safe browsing on public &amp; hotel Wi-Fi
              </li>
              <li className="flex items-start gap-2">
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                Hide your IP &amp; block trackers worldwide
              </li>
            </ul>

            <p className="mt-3 text-xs text-slate-500">
              Disclosure: NordVPN link is an affiliate link. We may earn a
              commission at no extra cost to you.
            </p>
          </div>

          <a
            href={NORDVPN_URL}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-blue-700 md:self-center"
          >
            Get NordVPN Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NordVpnWideBox;
