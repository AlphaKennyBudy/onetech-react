import React from "react";

import "./CVBoilerplate.css";

import { cv as EN } from "../../lang/en.json";
import { cv as RU } from "../../lang/ru.json";
import useLang from "../../hooks/useLang";

function CVBoilerplate() {
  const ctx = useLang()!.lang ? EN : RU;
  return (
    <div id="cv" className="instaFade">
      <div className="mainDetails">
        <div id="headshot" className="quickFade">
          <img
            src="https://avatars2.githubusercontent.com/u/48881444?s=460&u=a2317274ce4b7c57e3c87e604e55595d65d02a2a&v=4"
            alt={ctx.name}
          />
        </div>

        <div id="name">
          <h1 className="quickFade delayTwo">{`${ctx.name} ${ctx.surname}`}</h1>
          <h2 className="quickFade delayThree">{ctx.job}</h2>
        </div>

        <div id="contactDetails" className="quickFade delayFour">
          <ul>
            <li>
              {ctx.email}:{" "}
              <a href={`mailto:${ctx.emailValue}`} target="_blank">
                {ctx.emailValue}
              </a>
            </li>
            <li>
              {ctx.website}: <a href={ctx.websiteValue}>{ctx.websiteValue}</a>
            </li>
            <li>
              {ctx.mobile}: {ctx.mobileValue}
            </li>
          </ul>
        </div>
        <div className="clear"></div>
      </div>

      <div id="mainArea" className="quickFade delayFive">
        <section>
          <article>
            <div className="sectionTitle">
              <h1>{ctx.info}</h1>
            </div>

            <div className="sectionContent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dolor metus, interdum at scelerisque in, porta at lacus.
                Maecenas dapibus luctus cursus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Donec ultricies massa et erat
                luctus hendrerit. Curabitur non consequat enim. Vestibulum
                bibendum mattis dignissim. Proin id sapien quis libero interdum
                porttitor.
              </p>
            </div>
          </article>
          <div className="clear"></div>
        </section>

        <section>
          <div className="sectionTitle">
            <h1>{ctx.workExp}</h1>
          </div>

          <div className="sectionContent">
            <article>
              <h2>{ctx.jobTitleAtCompany}</h2>
              <p className="subDetails">{ctx.jobDate}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ultricies massa et erat luctus hendrerit. Curabitur non
                consequat enim. Vestibulum bibendum mattis dignissim. Proin id
                sapien quis libero interdum porttitor.
              </p>
            </article>
          </div>
          <div className="clear"></div>
        </section>

        <section>
          <div className="sectionTitle">
            <h1>Key Skills</h1>
          </div>

          <div className="sectionContent">
            <ul className="keySkills">
              {ctx.skillsValue.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="clear"></div>
        </section>

        <section>
          <div className="sectionTitle">
            <h1>{ctx.education}</h1>
          </div>

          <div className="sectionContent">
            <article>
              <h2>{ctx.university}</h2>
              <p className="subDetails">{ctx.qualification}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ultricies massa et erat luctus hendrerit. Curabitur non
                consequat enim.
              </p>
            </article>
          </div>
          <div className="clear"></div>
        </section>
      </div>
    </div>
  );
}

export default CVBoilerplate;
