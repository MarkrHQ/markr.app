import React from "react";
import Logo from "../components/Logo";

const SectionHeader = ({ children, center = true }) => (
  <h3
    className={`text-2xl lg:text-3xl font-black text-gray-900 ${
      center ? "text-center" : ""
    }`}
  >
    {children}
  </h3>
);

const Para = ({ children }) => <p className="leading-loose py-1">{children}</p>;

const Privacy = () => (
  <>
  <header className="py-4 border-b border-b-4">
    <div className="container mx-auto">
      <h1 className="font-black text-4xl flex items-center">
        <Logo className="w-12 mr-1" />
        Markr
      </h1>
    </div>
  </header>
  <main className="container mx-auto py-4 mt-2">
    <SectionHeader center={false}>Privacy Policy</SectionHeader>
    <Para>
      Neev Labs operates the{" "}
      <a
        className="bg-yellow-200 font-bold"
        href="https://markr.app"
      >
        https://markr.app
      </a>{" "}
      website, which provides the SERVICE.
    </Para>
    <Para>
      This page is used to inform website visitors regarding our policies with
      the collection, use, and disclosure of Personal Information if anyone
      decided to use our Service, the <strong>Markr</strong> website.
    </Para>
    <Para>
      If you choose to use our Service, then you agree to the collection and use
      of information in relation with this policy. The Personal Information that
      we collect are used for providing and improving the Service. We will not
      use or share your information with anyone except as described in this
      Privacy Policy.
    </Para>
    <Para>
      The terms used in this Privacy Policy have the same meanings as in our
      Terms and Conditions, which is accessible at{" "}
      <a
        href="https://markr.app"
        className="bg-yellow-200 font-bold"
      >
        https://markr.app
      </a>
      , unless otherwise defined in this Privacy Policy. Our Privacy Policy was
      created with the help of the Privacy Policy Template.
    </Para>
    <SectionHeader center={false}>Information Collection and Use</SectionHeader>
    <Para>
      For a better experience while using our Service, we may require you to
      provide us with certain personally identifiable information, including but
      not limited to your name, phone number, and postal address. The
      information that we collect will be used to contact or identify you.
    </Para>
    <SectionHeader center={false}>Log Data</SectionHeader>
    <Para>
      We want to inform you that whenever you visit our Service, we collect
      information that your browser sends to us that is called Log Data. This
      Log Data may include information such as your computer’s Internet Protocol
      ("IP") address, browser version, pages of our Service that you visit, the
      time and date of your visit, the time spent on those pages, and other
      statistics.
    </Para>
    <SectionHeader center={false}> Cookies</SectionHeader>
    <Para>
      Cookies are files with small amount of data that is commonly used an
      anonymous unique identifier. These are sent to your browser from the
      website that you visit and are stored on your computer’s hard drive.
    </Para>
    <Para>
      Our website uses these "cookies" to collection information and to improve
      our Service. You have the option to either accept or refuse these cookies,
      and know when a cookie is being sent to your computer. If you choose to
      refuse our cookies, you may not be able to use some portions of our
      Service.
    </Para>
    <SectionHeader center={false}> Service Providers</SectionHeader>
    <Para>
      We may employ third-party companies and individuals due to the following
      reasons:
      <ul>
        <li>To facilitate our Service;</li>
        <li>To provide the Service on our behalf;</li>
        <li>To perform Service-related services; or</li>
        <li>To assist us in analyzing how our Service is used.</li>
      </ul>
    </Para>
    <Para>
      We want to inform our Service users that these third parties have access
      to your Personal Information. The reason is to perform the tasks assigned
      to them on our behalf. However, they are obligated not to disclose or use
      the information for any other purpose.
    </Para>
    <SectionHeader center={false}> Security</SectionHeader>
    <Para>
      We value your trust in providing us your Personal Information, thus we are
      striving to use commercially acceptable means of protecting it. But
      remember that no method of transmission over the internet, or method of
      electronic storage is 100% secure and reliable, and we cannot guarantee
      its absolute security.
    </Para>
    <SectionHeader center={false}> Links to Other Sites</SectionHeader>
    <Para>
      Our Service may contain links to other sites. If you click on a
      third-party link, you will be directed to that site. Note that these
      external sites are not operated by us. Therefore, we strongly advise you
      to review the Privacy Policy of these websites. We have no control over,
      and assume no responsibility for the content, privacy policies, or
      practices of any third-party sites or services.
    </Para>
    <SectionHeader center={false}> Children’s Privacy</SectionHeader>
    <Para>
      Our Services do not address anyone under the age of 13. We do not
      knowingly collect personal identifiable information from children under
      13. In the case we discover that a child under 13 has provided us with
      personal information, we immediately delete this from our servers. If you
      are a parent or guardian and you are aware that your child has provided us
      with personal information, please contact us so that we will be able to do
      necessary actions.
    </Para>
    <SectionHeader center={false}>
      {" "}
      Changes to This Privacy Policy
    </SectionHeader>
    <Para>
      We may update our Privacy Policy from time to time. Thus, we advise you to
      review this page periodically for any changes. We will notify you of any
      changes by posting the new Privacy Policy on this page. These changes are
      effective immediately, after they are posted on this page.
    </Para>
    <SectionHeader center={false}> Contact Us</SectionHeader>
    <Para>
      If you have any questions or suggestions about our Privacy Policy, do not
      hesitate to contact us at hello@markr.app
    </Para>
    <Para>
      <span className="italic">Last updated: 20th April 2020</span>
    </Para>
  </main>
  </>
);

export default Privacy;