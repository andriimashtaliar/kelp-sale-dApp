import Logo from "@/assets/Logo";
import Link from "next/link";

import Youtube from "@/assets/icons/social-media/Youtube";
import Telegram from "@/assets/icons/social-media/Telegram";
import Facebook from "@/assets/icons/social-media/Facebook";
import Twitter from "@/assets/icons/social-media/Twitter";
import CoinMarket from "@/assets/partners/CoinMarket";

const Footer = () => {
  return (
    <footer className="px-4 md:px-0  bg-[#1E293B] ">
      <div className="font-poppins text-gray-500 container mx-auto">
        <div className="flex justify-between py-2.5 items-center border-b border-gray-500">
          <div className="w-1/2 md:w-1/3">
            <Logo
              className="w-12 h-10 md:w-16 md:h-12 text-primary-400"
              fill="currentColor"
            />
          </div>
          <div className="inline-flex items-center justify-end gap-x-3 md:gap-x-6 w-1/2 md:w-1/3">
            <a href="https://www.youtube.com/@kelpfinance" target="_blank">
              <Youtube className="md:w-7 md:h-7 w-6 h-6 text-slate-500 hover:text-slate-300" />
            </a>
            <a href="https://t.me/kelpfinance" target="_blank">
              <Telegram className="md:w-7 md:h-7 w-6 h-6 text-slate-500 hover:text-slate-300" />
            </a>
            <a href="https://www.facebook.com/kelpfinance" target="_blank">
              <Facebook className="md:w-7 md:h-7 w-6 h-6 text-slate-500 hover:text-slate-300" />
            </a>
            <a href="https://twitter.com/KelpFinance" target="_blank">
              <Twitter className="md:w-7 md:h-7 w-6 h-6 text-slate-500 hover:text-slate-300" />
            </a>
            <a
              href="https://coinmarketcap.com/currencies/kelp/"
              target="_blank"
              className="bg-slate-500 rounded-full p-1 md:p-1.5 hover:bg-slate-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#1E293B"
                viewBox="0 0 30 30"
                className="w-4 h-4"
              >
                <path d="M28.442 14.445v-.056C28.414 6.466 22.032 0 14.221 0S0 6.466 0 14.445c0 7.98 6.381 14.433 14.221 14.433a13.978 13.978 0 009.66-3.866 1.309 1.309 0 00-1.766-1.933l-.028.028a11.5 11.5 0 01-16.572-.755l6.075-9.742v4.508c0 2.154.84 2.855 1.546 3.051.706.196 1.765.054 2.912-1.765l3.333-5.412a3.26 3.26 0 01.306-.449v2.745c0 2.015.812 3.639 2.211 4.422a4.071 4.071 0 004.173-.167c1.616-1.049 2.484-2.886 2.371-5.098zm-3.696 2.835a1.529 1.529 0 01-1.546.111c-.56-.335-.897-1.09-.897-2.126v-3.173c0-1.51-.588-2.603-1.595-2.881-1.709-.516-2.995 1.595-3.472 2.379l-3.015 4.842V10.47c-.028-1.371-.477-2.183-1.317-2.436-.56-.167-1.4-.082-2.211 1.15L3.946 19.989a11.971 11.971 0 01-1.371-5.544c0-6.523 5.234-11.814 11.646-11.814 6.412 0 11.646 5.291 11.646 11.814v.057c.067  1.258-.337 2.268-1.12 2.77v.008zm23.517-7.762a1.407 1.407 0 01.645 1.092 1.24 1.24 0 01-1.204 1.232 2.062 2.062 0 01-.449-.085 4.61 4.61 0 00-2.716-.922c-2.379 0-4.002 1.93-4.002 4.337s1.652 4.312 4.002 4.312a4.34 4.34 0 003.023-1.232c.206-.145.45-.223.701-.224a1.134 1.134 0 01.99 1.709c-.097.17-.235.315-.402.42a6.647 6.647 0 11-4.283-11.758c1.318-.02 2.61.37 3.695 1.119zm6.662 2.791a4.745 4.745 0 00-4.765 4.71 4.82 4.82 0 004.76 4.79c2.464 0 4.564-2.212 4.564-4.79 0-2.576-2.067-4.71-4.559-4.71zm-.028 7.167c-1.175 0-2.155-1.064-2.155-2.436 0-1.427.98-2.296 2.155-2.296 1.093 0 2.015.897 2.015 2.296 0 1.4-.922 2.444-2.015 2.444v-.008zm6.159.876v-6.608a1.29 1.29 0 011.289-1.314 1.306 1.306 0 011.289 1.314v6.608a1.306 1.306 0 01-1.289 1.315 1.328 1.328 0 01-1.289-1.315zM60.86 9.938a1.505 1.505 0 011.485-1.547 1.528 1.528 0 011.51 1.547 1.497 1.497 0 01-2.994 0zm7.699 6.832v3.582a1.289 1.289 0 11-2.578 0v-6.915a.994.994 0 111.988 0 3.738 3.738 0 012.835-1.12c2.577 0 3.724 1.932 3.724 4.144v3.891a1.289 1.289 0 11-2.578 0V16.77c0-1.121-.139-2.062-1.763-2.062-1.146 0-1.623.951-1.623 2.062h-.005zm14.306 1.371a.835.835 0 01-.673-.338l-2.995-3.247v5.796a1.289 1.289 0 11-2.577 0V8.873a.546.546 0 01.477-.335.9.9 0 01.56.335l4.788 5.376a.624.624 0 00.42.258.701.701 0 00.42-.258l4.786-5.376a.843.843 0 01.559-.335.49.49 0 01.477.335v11.48a1.29 1.29 0 01-1.289 1.314 1.307 1.307 0 01-1.288-1.315v-5.796l-2.998 3.247a1.031 1.031 0 01-.67.338h.003zm24.215-3.443h-.281c-1.623.082-1.93 1.008-1.93 2.062v3.582a1.29 1.29 0 01-1.289 1.289 1.29 1.29 0 01-1.288-1.29v-6.903a.997.997 0 01.995-.995.996.996 0 01.994.995c.951-.897 1.735-1.093 2.518-1.122h.258a1.207 1.207 0 011.175 1.204 1.18 1.18 0 01-1.147 1.178h-.005zm9.938 5.038c.118.185.186.397.196.616a1.346 1.346 0 01-1.289 1.289c-.446 0-.84-.338-1.147-.73l-2.966-3.448v2.86a1.288 1.288 0 01-2.577 0V9.828a1.287 1.287 0 012.199-.911c.242.241.378.57.378.91v6.55l2.966-3.274c.307-.337.673-.7 1.119-.7a1.289 1.289 0 011.232 1.26 1.09 1.09 0 01-.168.587l-2.35 2.577 2.407 2.913v-.003zm15.566 2.044h-.701c-1.959 0-3.108-.869-3.108-3.92v-3.162h-.67a1.19 1.19 0 110-2.382h.66V9.881a1.282 1.282 0 01.789-1.214c.158-.066.328-.1.499-.1a1.311 1.311 0 011.289 1.314v2.428h1.062a1.185 1.185 0 011.149 1.203 1.222 1.222 0 01-1.149 1.178h-1.062v2.66c0 1.763.082 2.126.866 2.126h.366a1.152 1.152 0 011.147 1.15 1.174 1.174 0 01-1.147 1.147l.01.007zM145.04 9.518a1.41 1.41 0 01.644 1.092 1.239 1.239 0 01-1.204 1.232 2.135 2.135 0 01-.448-.085 4.597 4.597 0 00-2.714-.922c-2.381 0-4.005 1.93-4.005 4.337s1.652 4.312 4.005 4.312a4.34 4.34 0 003.023-1.232c.205-.144.449-.222.699-.224a1.143 1.143 0 01.816.332 1.134 1.134 0 01.176 1.378 1.184 1.184 0 01-.405.418 6.639 6.639 0 01-5.978 1.3 6.642 6.642 0 01-4.853-7.268 6.642 6.642 0 016.548-5.789 6.27 6.27 0 013.696 1.119zm-46.05 2.884a.982.982 0 00-.982 1.007l-.054.31a4.026 4.026 0 00-2.997-1.428c-2.518 0-4.337 2.126-4.337 4.7 0 2.575 1.79 4.789 4.198 4.789 1.008 0 2.603-.449 3.108-1.428l.057.307a.964.964 0 001.007.982 1.006 1.006 0 001.008-1.008v-7.216a1.03 1.03 0 00-1.008-1.015zm-3.752 7.082c-1.147 0-2.044-1.09-2.044-2.436 0-1.345.923-2.32 2.044-2.32 1.12 0 2.129.923 2.129 2.32 0 1.397-.982 2.436-2.13 2.436zm31.187-2.66c-.057-2.884-1.933-4.508-4.423-4.508-3.092 0-4.397 2.24-4.397 4.817 0 3.276 2.158 4.675 4.761 4.675.979 0 2.015-.141 2.798-.729a1.135 1.135 0 00.56-.923 1.057 1.057 0 00-1.031-1.064c-.237.002-.469.07-.67.196a4.173 4.173 0 01-1.681.335c-.644 0-2.128-.258-2.128-1.791h5.2a1.031 1.031 0 001.011-1.008zm-6.217-.65c0-1.09 1.15-1.453 1.848-1.453.699 0 1.848.363 1.876 1.453h-3.724zm35.102-3.772a.984.984 0 00-.703.296.976.976 0 00-.277.711l-.056.31a4.02 4.02 0 00-2.995-1.428c-2.52 0-4.34 2.126-4.34 4.7 0 2.575 1.804 4.789 4.198 4.789 1.008 0 2.606-.449 3.108-1.428l.057.307a.974.974 0 00.292.708.965.965 0 00.716.274 1.01 1.01 0 00.932-.622c.05-.122.076-.253.076-.386v-7.216a1.032 1.032 0 00-1.008-1.015zm-3.753 7.082c-1.118 0-2.043-1.09-2.043-2.436 0-1.345.897-2.32 2.043-2.32 1.147 0 2.129.923 2.129 2.32 0 1.397-.974 2.436-2.123 2.436h-.006zm12.1-7.175a4.14 4.14 0 00-3.023 1.232c0-.642-.42-1.119-.979-1.119a1.007 1.007 0 00-1.01 1.008v10.863a1.291 1.291 0 001.288 1.288 1.29 1.29 0 001.289-1.288v-3.268c.698.53 1.819.755 2.577.773 2.436 0 4.201-2.211 4.201-4.788 0-2.578-1.85-4.701-4.343-4.701zm-.309 7.167c-1.147 0-2.126-1.03-2.126-2.435s.979-2.32 2.126-2.32c1.147 0 2.044.923 2.044 2.32 0 1.352-.894 2.443-2.044 2.443v-.008z"></path>
              </svg>
            </a>
          </div>
        </div>
        <ul className="flex items-center text-sm 2xl:text-base flex-wrap justify-center divide-x my-3 lg:my-5 divide-gray-500">
          <li className="px-1.5">Investment products</li>
          <li className="px-1.5">Not FDIC insured</li>
          <li className="px-1.5">No bank guarantee</li>
          <li className="px-1.5">May lose value</li>
        </ul>
        <div className="space-y-3 text-left text-xs 2xl:text-sm my-3 ">
          <h6 className="font-medium text-[#94A3B8] text-base 2xl:text-lg text-center">
            Important Disclosures
          </h6>
          <p>
            Data Privacy: Due to the sensitive nature of customer data, Kelp
            aims to keep customer data safe, secure and private. GDPR
            disclaimer: Under the General Data Protection Regulation 2016/679,
            we have a legal duty to protect any information we collect from you.
          </p>
          <p>
            Accuracy of Information: Kelp will strive to ensure accuracy of
            information listed on this website although it will not hold any
            responsibility for any missing or wrong information. Kelp provides
            all information as is. You understand that you are using any
            information available here at your own risk.
          </p>
          <p>
            Anti-Money Laundering (AML): To comply with AML (Anit-Money
            Laundering) regulations, Kelp may need to implement measures such as
            customer identification and verification, transaction monitoring,
            and reporting suspicious activity to the relevant authorities.
          </p>
          <p>
            No Investment Advice: The information provided on this website does
            not constitute investment advice, financial advice, trading advice,
            or any other sort of advice and you should not treat any of the
            website’s content as such. Kelp does not recommend that any asset
            should be bought, sold, or held by you. Do conduct your own due
            diligence and consult your financial advisor before making any
            investment decisions.
          </p>
          <p>
            Digital assets products and [non-fungible tokens] are unregulated
            and can be highly risky. There may be no regulatory recourse for any
            loss from such transactions. The ESG (Environmental, social, and
            governance) investment strategies may limit the types and number of
            investment opportunities available, as a result, the portfolio may
            underperform others that do not have an ESG focus. Companies
            selected for inclusion in the portfolio may not exhibit positive or
            favourable ESG characteristics at all times and may shift into and
            out of favour depending on market and economic conditions.
            Environmental criteria consider how a company performs as a steward
            of nature. Social criteria examine how it manages relationships with
            employees, suppliers, customers, and the communities where it
            operates. Governance deals with a company’s leadership, executive
            pay, audits, internal controls, and shareholder rights.
          </p>
        </div>
        <div className="flex items-center justify-between py-3  text-sm 2xl:text-base">
          <p>&copy; {new Date().getFullYear()} Kelp FInance Labs Inc.</p>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
