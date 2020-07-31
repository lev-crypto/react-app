import React, { Component } from "react";
import "../css/resume.css";

class Resume extends Component {
  state = {};
  render() {
    return (
      <div className="resumePageBackground">
        <div className="resumePage">
          <div className="resumeHeader">
            <h3 className="baseColor">KUMAR, SANDEEP</h3>
            <span>sandeepkumar.tucsb12@gmail.com</span>
          </div>
          <div className="resumeSummary">
            <span className="baseColor bold">Summary</span>
            <p>
              Experienced Software developer with a demonstrated history of
              working in the computer software industry. <br />
              Have built channel API’s for android app using NodeJs, TypeScript
              as middleware. Have built Fiori Web Applications using SAP Web IDE
              with back-end OData services using ABAP OO in ABAP Ecosystem along
              with writing unit test cases in ABAP. Experience of working on
              NodeJs, ABAP, ABAP OO, SQL, JavaScript, HANA DB, XSJS, HERE Maps
              API, building Fiori web applications, developing conversational
              AI’s for business applications. Currently learning and working on
              Machine Learning projects using python along with internal
              projects. <br />
              Actively looking for a competitive, learning work space to take my
              career forward.
            </p>
          </div>
          <div className="resumeEducation">
            <span className="baseColor bold">Graduation(June 2016)</span>
            <p className="italic">
              I have completed my Bachelor’s Degree in Computer Science and
              Engineering discipline with a CGPA of 7.52 from Tezpur University,
              Assam.
            </p>
          </div>
          <div className="experience">
            <span className="designation baseColor bold">
              Developer(Jan 2020 - Present)
            </span>
            <br />
            <span className="companyName baseColor2">
              ZestMoney(Bangalore, India)
            </span>
            <div className="projects">
              <ul>
                <li>
                  <span className="title projectTitle">
                    {" "}
                    Channel API and Chatbot{" "}
                  </span>
                  <p className="projectDescription italic">
                    APIs written in NodeJs and Typescript to be used by android
                    application to reduce the overhead of updating the android
                    application frequently.Creating a chatbot to easy the
                    onboarding journey of customers as well as implementing
                    whole life cycle journey of customers through chatbot.
                    Technology Stack and Tools: NodeJs, TypeScript, loopback 4
                  </p>
                </li>
              </ul>
            </div>
            <br />
            <span className="designation baseColor bold">
              Developer​ (Jan 2016 - Dec 2020)
            </span>
            <br />
            <span className="companyName baseColor2">
              SAP Labs India​ (Bangalore,India)
            </span>
            <div className="projects">
              <ul>
                <li>
                  <span className="title projectTitle">
                    {" "}
                    Intelligent Sourcing Bot (May 2019){" "}
                  </span>
                  <p className="projectDescription italic">
                    A conversational AI bot which will help customers to reduce
                    the efforts of manually searching an appropriate vendor for
                    procurement of materials. Instead of opening an application
                    to assign vendors to a shopping cart and performing vendor
                    evaluation to search for an appropriate vendor this bot will
                    help them in searching for shopping carts, searching top
                    vendors for the shopping carts and assigning them to the
                    carts. These can then later be converted to purchase orders
                    and quotations just by querying appropriately. Technology
                    Stack and Tools used : recast.ai, NodeJS, OData, SAP Web
                    IDE, Cloud Foundry.
                  </p>
                </li>
                <li>
                  <span className="title projectTitle">
                    {" "}
                    Incidents Similarity (June 2018){" "}
                  </span>
                  <p className="projectDescription italic">
                    A tool where before processing a new incident a developer
                    can check whether a similar incident has been created in the
                    past or not. This can reduce average processing time of
                    solving an incident as well as developer doesn't have to
                    waste time in processing something which has already been
                    solved. To achieve this, a model has been built on a
                    training dataset which stores the semantic similarity and
                    return the top-5 results which relates to the newly created
                    incident.
                  </p>
                </li>
                <li>
                  <span className="title projectTitle">
                    {" "}
                    Spatial Data Visualizer (Aug 2017){" "}
                  </span>
                  <p className="projectDescription italic">
                    Spatial Data Visualizer is a visualization tool , to help
                    developers to perform predicates over HERE map, also they
                    can write their own SQL query over map. It supports full
                    text search with visualization of results over map and can
                    even perform predicate logic and can draw polygons or points
                    of interest to extract information of an area over map along
                    with time series analysis.
                  </p>
                </li>
                <li>
                  <span className="title projectTitle">
                    {" "}
                    Rent Mate (July 2017){" "}
                  </span>
                  <p className="projectDescription italic">
                    Rent Mate is a blockchain based solution where owner can
                    list their properties and people can search and book those
                    without the involvement of third parties with automatic
                    transfer of rent from tenants wallet using smart contracts.
                    This solution was built on Ethereum private test network.
                    Mostly worked as a UI Developer in this project.
                    <br />
                    <br />
                    Technology Stack and Tools used - JavaScript, jQuery, HTML,
                    CSS, solidity, remix browser, JAVA, web3j, geth client
                  </p>
                </li>
                <li>
                  <span className="title projectTitle">
                    {" "}
                    Joint Venture Accounting{" "}
                  </span>
                  <p className="projectDescription italic">
                    Fiori Web Applications for Joint Venture Accounting for
                    dispute management between pooling companies.
                    <br />
                    <br />
                    Technology Stack and Tools used - ABAP, OData, SAP Web IDE,
                    JavaScript, jQuery, CDS Views
                  </p>
                </li>
                <li>
                  <span className="title projectTitle">
                    {" "}
                    Internal Projects (Every cloud release cycle i.e. 2 months){" "}
                  </span>
                  <ol className="italic">
                    <li>
                      {" "}
                      Creating API's for different ERP Modules like Purchasing,
                      Material Management, Production Supply so that customers
                      and consume this API and can build their own applications
                      on top of this.{" "}
                    </li>
                    <li>
                      {" "}
                      Creating Fiori applications for Self Service Configuration
                      applications.{" "}
                    </li>
                    <li>
                      {" "}
                      Creating output forms (output management) for applications
                      e.g. creating adobe forms for purchase order and enable
                      print option.{" "}
                    </li>
                    <li>
                      {" "}
                      Enabled extensibility in various applications so that
                      customers can customize the applications as per their own
                      business need. E.g. customers can create their own custom
                      fields in a SAP delivered application and write their own
                      logic to handle custom fields.{" "}
                    </li>
                    <li>
                      {" "}
                      Writing unit tests and integration testing for API and
                      OData services.{" "}
                    </li>
                    <li>
                      {" "}
                      Maintenance of the products and ensuring smooth delivery
                      of the project.{" "}
                    </li>
                    <li>
                      {" "}
                      Providing solutions/cloud hotfix for customer and internal
                      incidents.{" "}
                    </li>
                  </ol>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <span className="resumeAccomplishment baseColor bold">
              Accomplishment
            </span>
            <ul className="italic">
              <li>
                {" "}
                Won the SAP Labs India Biggest Hackathon 2017 - Innvent on
                analytics theme.{" "}
              </li>
              <li>
                {" "}
                ABAP and ABAP OO trainer for new joiners and internal employees.{" "}
              </li>
              <li>
                {" "}
                Was a speaker in SAP TechEd 2017 (an annual event for customers
                and partners where they can learn about SAP Platform and
                technologies).{" "}
              </li>
              <li>
                Was a speaker in SAP devX Conference 2018 (an internal event for
                developers to learn more about SAP technologies)
              </li>
              <li>
                Got the 'Team Star' award in SAP AIS Annual Awards Ceremony.
              </li>
              <li>Got the 'Passionate employee’ award in the team.</li>
              <li>
                Got the participation certificate for ARIBA Codethon on
                blockchain theme(2017) and machine learning(2018) for qualifying
                as a finalist.
              </li>
            </ul>
          </div>
          <div>
            <span className="resumeSkills baseColor bold">Skills</span>
            <p>
              NodeJs, TypeScript, ABAP, ABAP OO, XSJS, HANA DB, JavaScript,
              jQuery, SQL, OData, CDS views, Fiori, Python, MongoDB, C, C++.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
