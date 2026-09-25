import React from 'react';
//import {Link} from "react-router-dom";
import ResearchFeature from './ResearchFeature';
import People from './People';
import logo from './title_image-2.png'

export default function Main() {
  return (
   <main>
      <div className="logo">
        <img
          src={logo}
          alt='Climate Causality and Attribution Logo'
         />  
      </div>
                         <hr />   
      <section id="climate-causality-attribution" className="level1">

        <h1>Climate Causality &amp; Attribution</h1>
        <section id="about" className="about">
          <h2>About</h2>
          <p>
            We are a group of climate scientists at Leipzig University in
            Germany. The motivation of our research is to explain and attribute
            climate risks, and to reduce uncertainties in regional predictions
            and projections of extreme weather and climate events. This effort
            requires an improved causal understanding of the physical drivers
            and consequences of extreme events. Our research includes several
            sub-aspects:
          </p>
        </section>
         <hr />
        <section id="research" className="research">
          <h2>Research</h2>
            <div className="research-row">
                {/* ResearchFeature({href, src, alt, h3Text}) */}
                <ResearchFeature 
                    href={"./research/teleconnections/index.html"} 
                    src={"teleconnections/teleconnections"} 
                    alt={"Teleconnections and Regional Climate Change"} 
                    h3Text={"Teleconnections and Regional Climate Change"}
                    />
                <ResearchFeature 
                    href={"./research/detection_and_attribution/index.html"} 
                    src={"detection_and_attribution/DA"} 
                    alt={"Detection and Attribution"} 
                    h3Text={"Detection and Attribution"}
                    />
                <ResearchFeature 
                    href={"./research/causality/index.html"} 
                    src={"causality/causality"} 
                    alt={"Causal Data Science"} 
                    h3Text={"Causal Data Science"}
                    />
                <ResearchFeature 
                    href={"./research/extremes/index.html"} 
                    src={"extremes/prediction"} 
                    alt={"Extreme Weather and Climate Events"} 
                    h3Text={"Extreme Weather and Climate Events"}
                    />
                <ResearchFeature 
                    href={"./research/machine_learning/index.html"} 
                    src={"machine_learning/RMM"} 
                    alt={"Machine Learning"} 
                    h3Text={"Machine Learning"}
                    />
                <ResearchFeature 
                    href={"./research/impacts/index.html"} 
                    src={"impacts/regional"} 
                    alt={"Climate Impacts"} 
                    h3Text={"Climate Impacts"}
                    />
            </div>
        </section>
           <hr />
        <section id="projects" className="projects">
          <h2>Projects</h2>
          <section id="jun---prof.-dr.-marlene-kretschmer" className="level3">
            <h3 data-anchor-id="jun---prof.-dr.-marlene-kretschmer">
              Jun - Prof.&nbsp;Dr.&nbsp;Marlene Kretschmer
            </h3>
            <ul>
              <ul>
                <li>
                  <a href="https://ac3-tr.com"
                    >AC<sup>3</sup>: Arctic Amplification: Climate Relevant
                    Atmospheric and Surface Processes and Feedback Mechanisms</a
                  >
                </li>
                <li>
                  <a href="https://expect-project.eu"
                    >EXPECT: Towards an Integrated Capability to Explain and
                    Predict Regional Climate Changes</a
                  >
                </li>
                <li>
                  <a href="https://xaida.eu"
                    >XAIDA: eXtreme events: Artificial Intelligence for
                    Detection and Attribution</a
                  >
                </li>
              </ul>
            </ul>
          </section>
          <section id="jun---prof.-dr.-sebastian-sippel" className="level3">
            <h3 data-anchor-id="jun---prof.-dr.-sebastian-sippel">
              Jun - Prof.&nbsp;Dr.&nbsp;Sebastian Sippel
            </h3>
            <ul>
              <ul>
                <li>
                  <a href="https://www.climxtreme.de/index.html"
                    >CLIMXTREME: Climate Change and Extreme Events</a
                  >
                </li>
                <li>
                  <a href="https://xaida.eu"
                    >XAIDA: eXtreme events: Artificial Intelligence for
                    Detection and Attribution</a
                  >
                </li>
                <li>
                  <a href="https://ai4pex.org"
                    >AI4PEX: Artificial Intelligence for enhanced representation
                    of processes and extremes in Earth System Models</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.uni-leipzig.de/en/economics-of-connected-natural-commons"
                    >ECO-N: Economics of Connected Natural Commons</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.dfg.de/de/gefoerderte-projekte/preistraeger-innen/leibnitz-preis/2024"
                    >Heinz Maier-Leibnitz Price of the DFG</a
                  >
                </li>
              </ul>
            </ul>
            <hr />
          </section>
        </section>
        <section id="people" className="people">
          <h2 data-anchor-id="people">People</h2>
          <div className="full-width">
            <figure className="figure">
              <img 
              src={require("./images/group_photo.jpg")} 
              alt="" 
              className="img-fluid figure-img" 
              />
              <figcaption>
                The Climate Causality and Climate Attribution Groups of the
                Leipzig Institute for Meteorology during their group retreat at
                the Baltic sea in July 2024.
              </figcaption>
            </figure>
          </div>
          <section id="team" className='team-container'>
            <People 
                name={"ernest"} 
                fullName={"Ernest Agyemang-Oko"} 
                position={"PhD Researcher"}
            />
            <People 
                name={"richard"} 
                fullName={"Richard Alawode"} 
                position={"PhD Researcher"}
            />
            <People 
                name={"philine"} 
                fullName={"Philine Lou Bommer"} 
                position={"PhD Researcher"}
            />
            <People 
                name={"istvan"} 
                fullName={"Dr. István Dunkl"} 
                position={"Post-Doc"}
            />
            <People 
                name={"marina"} 
                fullName={"Dr. Marina Friedel"} 
                position={"Post-Doc"}
            />
            <People 
                name={"florian"} 
                fullName={"Florian Kraulich"} 
                position={"PhD Researcher"}
            />
            <People 
                name={"marlene"} 
                fullName={"Jun-Prof. Dr. Marlene Kretschmer"} 
                position={"Junior Professor"}
            />
            <People 
                name={"frieder"} 
                fullName={"Frieder Loer"} 
                position={"PhD Researcher"}
            />
            <People 
                name={"julius"} 
                fullName={"Julius Mex"} 
                position={"Research Fellow"}
            />
            <People 
                name={"julia"} 
                fullName={"Dr. Julia Mindlin"} 
                position={"Post-Doc"}
            />
            <People 
                name={"julianna"} 
                fullName={"Dr. Julianna Carvalho Oliveira"} 
                position={"Post-Doc"}
            />
            <People 
                name={"peter"} 
                fullName={"Dr. Peter Pfleiderer"} 
                position={"Post-Doc"}
            />
            <People 
                name={"sebastian"} 
                fullName={"Jun.-Prof. Dr. Sebastian Sippel"} 
                position={"Junior Professor"}
            />
            <People 
                name={"fiona"} 
                fullName={"Fiona Spuler"} 
                position={"PhD Researcher"}
            />
            <People 
                name={"onno"} 
                fullName={"Onno Nennecke"} 
                position={"Research Fellow"}
            />
            <People 
                name={"aurelia"} 
                fullName={"Aurelia Eberhard"} 
                position={"Research Fellow"}
            />
            <People 
                name={"jakob"} 
                fullName={"Jakob Wessel"} 
                position={"Post-Doc"}
            />
              {/*
              <People 
                name={"sujata"} 
                fullName={"Sujata Kulkarni"} 
                position={"PhD Researcher"}
            />
            <People 
                name={"lina"} 
                fullName={"Dr. Na Li"} 
                position={"Post-Doc"}
            />
            <People 
                name={"johanna"} 
                fullName={"Johanna Beikert"} 
                position={"Research Fellow"}
            />
            <People 
                name={"juliana"} 
                fullName={"Juliana Neild"} 
                position={"Research Assistant"}
            /> */}

              {/* Team member */}
          </section>
          <section id="former-group-members" className="former-members">
            <h3>Former Group Members</h3>
            <ul>
              <li>Juliana Neild (Research Fellow, Climate Attribution)</li>
              <li>
                Sujata Kulkarni (visiting PhD researcher, Climate Causality)
              </li>
              <li>
                Johanna Beikert (Research Fellow, Climate Causality, Now at
                German weather service in Offenbach)
              </li>
              <li>
                Dr.&nbsp;Na Li (Postdoctoral researcher, Climate Attribution)
              </li>
              <li>
                Bjarne Biskamp (MA student, Climate Causality, now at UFZ
                Leipzig)
              </li>
              <li>
                Xuebang Liu (visiting PhD researcher, Climate Attribution)
              </li>
              <li>Nadine Theisen (MA student, Climate Attribution)</li>
              <li>
                Nelly Pomnitz (Research assistant, Climate Causality, now PhD
                student at Uni Leipzig)
              </li>
            </ul>
            <hr />
          </section>
        </section>
        <section id="contact" className="contact">
          <h2>Contact Us</h2>
          <div className="contact-container">
            <p>
              <strong>Address</strong><br />
              Climate Causality and Attribution Leipzig University<br />
              Leipzig Institute for Meteorology<br />
              Talstraße 35, 04103 Leipzig, Germany
            </p>
            <p>
              <strong>Email</strong><br />
              <a href="mailto:marlene.kretschmer@uni-leipzig.de"
                >marlene.kretschmer@uni-leipzig.de</a
              ><br />
              <a href="mailto:sebastian.sippel@uni-leipzig.de"
                >sebastian.sippel@uni-leipzig.de</a
              >
            </p>
            <p><strong>Follow Us</strong></p>
            <p>
              <a href="https://github.com/LIM-Climate-Causality"
                ><i className="fa fa-github"></i> GitHub</a
              >
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}