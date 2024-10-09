import { Link } from "react-router-dom";
import Accordion from "../components/Accordion";
export default function FAQ() {
  return (
    <div className="px-4 lg:px-12 pt-[120px] pb-[40px]  w-full max-w-[1280px] min-h-screen">
      <Accordion title="Installing Serum">
        <ol className="list-decimal mb-6">
          <li>
            Download the installer from your account page on Xfer's site or from
            the Splice client if you use Rent to Own.
          </li>
          <li>Run the full version installer.</li>
          <li>Restart your DAW.</li>
        </ol>
        <p className="font-bold">WINDOWS OS:</p>
        <ul className="list-disc mb-6">
          <li>
            If you are unfamiliar with VST Plugins, you need to create/have a
            VSTPlugins folder.
          </li>
          <li>
            I personally use C:\VSTPlugins but you can make the folder
            elsewhere.
          </li>
          <li>
            Install Serum VST to this location when running the installer.
          </li>
          <li>
            In your DAW, you need to set it to look for VST Plugins at this
            location.
          </li>
        </ul>
        <p className="mb-6">
          In FL Studio: -&gt; Options -&gt;Manage Plugins, and add a Search Path
          in top-left to your VST folder location (e.g. C:\VSTPlugins)
          containing Serum.dll / Serum_x64.dll
        </p>
        <p>
          In Ableton Live 10: -&gt; Preferences -&gt; Plugins, enable "VST2
          Custom Folder" and set the VST2 Custom Folder location to the folder
          containing Serum_x64.dll
        </p>
      </Accordion>
      <Accordion title="How do I update Serum?">
        <p className="mb-6">
          If you have a Splice Rent-To-Own lease, please read{" "}
          <Link to="#" className="underline text-blue-500">
            this article
          </Link>
          .
        </p>
        <p className="mb-6">
          To update Serum, you login to this website and go to "your account"
          page where you will see all the products you purchased.
        </p>
        <p className="mb-6">
          Click on "See Available Downloads" On the downloads page, you will
          find full installers and updates. Make sure to download the installer
          for your OS (Windows or macOS).
        </p>
        <p className="mb-6">
          Close your music software/DAW and run the updater. When the updater is
          done, restart your DAW and Serum will be updated.
        </p>
      </Accordion>
      <Accordion title="How to add Serum to Ableton">
        <ul className="list-decimal">
          <li>
            Download the Serum installer (choose full installer if you've never
            installed Serum) from your account page.
          </li>
          <li>
            Ableton's VST/AU settings need to be properly set to find the
            plugin, for that navigate to Ableton's Options &gt; Preferences &gt;
            Plug-ins (Preferences &gt; File and Folder in Live versions prior to
            10.1).
          </li>
          <li>
            Mac users need to make sure "Use AudioUnits/VST" are all checked and
            hit Rescan.
          </li>
          <li>
            Windows users need to turn on the "Use VST2 Plug-In custom folder
            option and click on the Browse button for the "VST2 Plugin Custom
            Folder" then navigate to the location you installed Serum. (When you
            install Serum it asks for a VST 64-bit destination. This installs a
            Serum_x64.dll file into that selected folder. )
          </li>
          <li>
            <p>
              VST2 plugins don't have a default installation location on
              Windows. Common locations users choose for VST2 installation:
              C:\VSTPlugins
            </p>
            <p>C:\Program Files\Steinberg\VSTPlugins</p>
            <p>C:\Program Files\Common Files\VST2</p>
            <p>C:\Program Files\Common Files\Steinberg\VST2</p>
          </li>
        </ul>
        <p className="mt-6">
          If you are using Splice Rent-to-Own, please refer to their support
          page.
        </p>
      </Accordion>
      <Accordion title="Does Serum support Apple M1/Big Sur?">
        <p>Yes, Serum now supports Apple M1/Big Sur!</p>
      </Accordion>
      <Accordion title="Do you offer discounts to students / educators?">
        <p>
          I offer discounts to full-time students (30+ hours weekly coursework)
          as a form of subsidy for those who are unable to work.
        </p>
        <p>
          If you qualify as such, please login or create an account on this site
          and fill out this form and you'll receive notification if approved.
        </p>
      </Accordion>
      <Accordion title="How do I update Serum (Splice RTO)">
        <p className="mb-6">
          You can update via the "Update" button on the "Tools" tab of the
          Splice client app.
        </p>
        <p className="mb-6">
          Alternatively, you can reset your Xfer password by clicking on the
          "forgot your password" option. Use the email you started the lease
          under (your Splice email address) to sign in to this website. If
          you're unsure of that email address, first try to login onto the
          Splice website using your login and check what email is attached. If
          that doesn't work, use the contact form and provide your Splice
          username.
        </p>
        <p className="mb-6">
          If you are logged in into the Xfer site using the email you use to
          lease Serum, you can download the updates from your account page.
        </p>
      </Accordion>
    </div>
  );
}
