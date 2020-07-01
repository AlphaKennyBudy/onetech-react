import React from "react";

import { cv as EN } from "../../lang/en.json";
import { cv as RU } from "../../lang/ru.json";
import useLang from "../../hooks/useLang";

function ContactPage() {
  const ctx = useLang()!.lang ? EN : RU;
  return (
    <div className="ContactPage">
      <div id="cv" className="instaFade">
        <div className="mainDetails"></div>

        <div id="mainArea" className="quickFade delayFive">
          <section>
            <article>
              <div className="sectionTitle">
                <h1>{ctx.mobile}</h1>
              </div>

              <div className="sectionContent">
                <p>{ctx.mobileValue}</p>
              </div>
            </article>
            <div className="clear"></div>
          </section>

          <section>
            <div className="sectionTitle">
              <h1>{ctx.email}</h1>
            </div>

            <div className="sectionContent">
              <article>
                <p>{ctx.emailValue}</p>
              </article>
            </div>
            <div className="clear"></div>
          </section>

          <section>
            <div className="sectionTitle">
              <h1>{ctx.website}</h1>
            </div>

            <div className="sectionContent">
              <p>{ctx.websiteValue}</p>
            </div>
            <div className="clear"></div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
