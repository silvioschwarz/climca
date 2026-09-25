import React, { Fragment } from "react";
//import {Link} from "react-router-dom";

export default function PapersSite() {
  return (
    <Fragment>
      <h1 class="title">Publications</h1>
      <section id="published-papers" class="level2">
        <h2 data-anchor-id="published-papers">Published Papers</h2>
        <p>
          Recent publications co-authored by members of the Climate Causality
          &amp; Attribution group. The members of the group are highlighted in
          bold in the author list. For papers related to specific research
          topics or highlighted by members of the group, please consult the
          pages of individual researchers.
        </p>
        <div class="cell">
          <div class="cell-output-display">
            {/* <table class="caption-top table table-sm table-striped small">
            <caption>Publications</caption>
             <colgroup>
              <col style="width: 51%">
              <col style="width: 24%">
              <col style="width: 23%">
              <col style="width: 1%">
            </colgroup> 
            <thead>
              <tr class="header">
                <th style="text-align: left;">title</th>
                <th style="text-align: left;">author</th>
                <th style="text-align: left;">journal</th>
                <th style="text-align: right;">year</th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd">
                <td style="text-align: left;">Learning predictable and informative dynamical drivers of extreme
                  precipitation using variational autoencoders</td>
                <td style="text-align: left;"><strong>FR Spuler</strong>, <strong>M Kretschmer</strong>, MA Balmaseda, Y
                  Kovalchuk, TG Shepherd</td>
                <td style="text-align: left;">EGUsphere</td>
                <td style="text-align: right;">2025</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Balancing Earth science careers in an unequal world</td>
                <td style="text-align: left;">N Testani, LM Cappelletti, LB Díaz, C Prudente, V Rabanal, <strong>J
                    Mindlin</strong>, …</td>
                <td style="text-align: left;">Communications Earth &amp; Environment</td>
                <td style="text-align: right;">2025</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Reversal of the impact chain for actionable climate information</td>
                <td style="text-align: left;"><strong>P Pfleiderer</strong>, TL Frölicher, CM Kropf, RD Lamboll, Q
                  Lejeune, …</td>
                <td style="text-align: left;">Nature Geoscience</td>
                <td style="text-align: right;">2025</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">State of wildfires 2023–2024</td>
                <td style="text-align: left;">MW Jones, DI Kelley, CA Burton, F Di Giuseppe, MLF Barbosa, …</td>
                <td style="text-align: left;">Earth System Science Data</td>
                <td style="text-align: right;">2024</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">ibicus: a new open-source Python package and comprehensive interface for
                  statistical bias adjustment and evaluation in climate modelling (v1.0.1)</td>
                <td style="text-align: left;"><strong>FR Spuler</strong>, JB Wessel, E Comyn-Platt, J Varndell, C
                  Cagnazzo</td>
                <td style="text-align: left;">Geoscientific Model Development</td>
                <td style="text-align: right;">2024</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Identifying probabilistic weather regimes targeted to a local-scale impact
                  variable</td>
                <td style="text-align: left;"><strong>FR Spuler</strong>, <strong>M Kretschmer</strong>, Y Kovalchuk, MA
                  Balmaseda, TG Shepherd</td>
                <td style="text-align: left;">Environmental Data Science</td>
                <td style="text-align: right;">2024</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Global impacts of an extreme solar particle event under different
                  geomagnetic field strengths</td>
                <td style="text-align: left;">P Arsenović, E Rozanov, I Usoskin, C Turney, T Sukhodolov, …</td>
                <td style="text-align: left;">Proceedings of the National Academy of Sciences</td>
                <td style="text-align: right;">2024</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Biodiversity and climate extremes: Known interactions and research gaps
                </td>
                <td style="text-align: left;">MD Mahecha, A Bastos, FJ Bohn, N Eisenhauer, H Feilhauer, T Hickler, …
                </td>
                <td style="text-align: left;">Earth’s Future</td>
                <td style="text-align: right;">2024</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Could an extremely cold central European winter such as 1963 happen again
                  despite climate change?</td>
                <td style="text-align: left;"><strong>S Sippel</strong>, C Barnes, C Cadiou, E Fischer, S Kew, <strong>M
                    Kretschmer</strong>, S Philip, …</td>
                <td style="text-align: left;">Weather and Climate Dynamics</td>
                <td style="text-align: right;">2024</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">A belowground perspective on the nexus between biodiversity change,
                  climate change, and human well‐being</td>
                <td style="text-align: left;">N Eisenhauer, K Frank, A Weigelt, B Bartkowski, R Beugnon, K Liebal, …
                </td>
                <td style="text-align: left;">Journal of Sustainable Agriculture and Environment</td>
                <td style="text-align: right;">2024</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Early-twentieth-century cold bias in ocean surface temperature
                  observations</td>
                <td style="text-align: left;"><strong>S Sippel</strong>, EC Kent, N Meinshausen, D Chan, C Kadow, R
                  Neukom, …</td>
                <td style="text-align: left;">Nature</td>
                <td style="text-align: right;">2024</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Increasing extreme precipitation variability plays a key role in future
                  record-shattering event probability</td>
                <td style="text-align: left;">I de Vries, <strong>S Sippel</strong>, J Zeder, E Fischer, R Knutti</td>
                <td style="text-align: left;">Communications Earth &amp; Environment</td>
                <td style="text-align: right;">2024</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Broadening the scope of anthropogenic influence in extreme event
                  attribution</td>
                <td style="text-align: left;">A Jézéquel, A Bastos, D Faranda, J Kimutai, N Le Grix, AM Wilson, …</td>
                <td style="text-align: left;">Environmental Research: Climate</td>
                <td style="text-align: right;">2024</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Enhanced global carbon cycle sensitivity to tropical temperature linked to
                  internal climate variability</td>
                <td style="text-align: left;">N Li, <strong>S Sippel</strong>, N Linscheid, C Rödenbeck, AJ Winkler, M
                  Reichstein, …</td>
                <td style="text-align: left;">Science Advances</td>
                <td style="text-align: right;">2024</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">AI for Extreme Event Modeling and Understanding: Methodologies and
                  Challenges</td>
                <td style="text-align: left;">G Camps-Valls, MÁ Fernández-Torres, KH Cohrs, A Höhl, A Castelletti, …
                </td>
                <td style="text-align: left;">arXiv preprint arXiv:</td>
                <td style="text-align: right;">2024</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">A distinct role for aerosol and GHG forcing in historical CMIP6
                  evapotranspiration trends</td>
                <td style="text-align: left;">M Egli, V Humphrey, <strong>S Sippel</strong>, R Knutti</td>
                <td style="text-align: left;">Earth’s Future</td>
                <td style="text-align: right;">2024</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Finding the right XAI method—A guide for the evaluation and ranking of
                  explainable AI methods in climate science</td>
                <td style="text-align: left;"><strong>PL Bommer</strong>, <strong>M Kretschmer</strong>, A Hedström, D
                  Bareeva, MMC Höhne</td>
                <td style="text-align: left;">Artificial Intelligence for the Earth Systems</td>
                <td style="text-align: right;">2024</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Artificial intelligence for climate prediction of extremes: State of the
                  art, challenges, and future perspectives</td>
                <td style="text-align: left;">S Materia, LP García, C van Straaten, S O, A Mamalakis, L Cavicchia, …
                </td>
                <td style="text-align: left;">Wiley Interdisciplinary Reviews: Climate Change</td>
                <td style="text-align: right;">2024</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Regional climate change: consensus, discrepancies, and ways forward</td>
                <td style="text-align: left;">TA Shaw, PA Arias, M Collins, D Coumou, A Diedhiou, CI Garfinkel, …</td>
                <td style="text-align: left;">Frontiers in climate</td>
                <td style="text-align: right;">2024</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Northern Hemisphere stratosphere‐troposphere circulation change in CMIP6
                  models: 2. Mechanisms and sources of the spread</td>
                <td style="text-align: left;">AY Karpechko, Z Wu, IR Simpson, <strong>M Kretschmer</strong>, H
                  Afargan‐Gerstman, …</td>
                <td style="text-align: left;">Journal of Geophysical Research: Atmospheres</td>
                <td style="text-align: right;">2024</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">On the link between weather regimes and energy shortfall during winter for
                  28 European countries</td>
                <td style="text-align: left;">E Rouges, <strong>M Kretschmer</strong>, TG Shepherd</td>
                <td style="text-align: left;">EarthArXiv</td>
                <td style="text-align: right;">2024</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Cosy: Evaluating textual explanations of neurons</td>
                <td style="text-align: left;">L Kopf, <strong>PL Bommer</strong>, A Hedström, S Lapuschkin, M Höhne, K
                  Bykov</td>
                <td style="text-align: left;">Advances in Neural Information Processing Systems</td>
                <td style="text-align: right;">2024</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Overconfidence in climate overshoot</td>
                <td style="text-align: left;">CF Schleussner, G Ganti, Q Lejeune, B Zhu, <strong>P Pfleiderer</strong>,
                  R Prütz, P Ciais, …</td>
                <td style="text-align: left;">Nature</td>
                <td style="text-align: right;">2024</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Limited reversal of regional climate signals in overshoot scenarios</td>
                <td style="text-align: left;"><strong>P Pfleiderer</strong>, CF Schleussner, J Sillmann</td>
                <td style="text-align: left;">Environmental Research: Climate</td>
                <td style="text-align: right;">2024</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Using climate envelopes and earth system model simulations for assessing
                  climate change induced forest vulnerability</td>
                <td style="text-align: left;">L Martes, <strong>P Pfleiderer</strong>, M Köhl, J Sillmann</td>
                <td style="text-align: left;">Scientific Reports</td>
                <td style="text-align: right;">2024</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Introducing the MESMER-M-TPv0. 1.0 module: spatially explicit Earth system
                  model emulation for monthly precipitation and temperature</td>
                <td style="text-align: left;">S Schöngart, L Gudmundsson, M Hauser, <strong>P Pfleiderer</strong>, Q
                  Lejeune, S Nath, …</td>
                <td style="text-align: left;">Geoscientific Model Development</td>
                <td style="text-align: right;">2024</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Weakening of springtime Arctic ozone depletion with climate change</td>
                <td style="text-align: left;"><strong>M Friedel</strong>, G Chiodo, T Sukhodolov, J Keeble, T Peter, S
                  Seeber, …</td>
                <td style="text-align: left;">Atmospheric Chemistry and Physics</td>
                <td style="text-align: right;">2023</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">The influence of future changes in springtime Arctic ozone on
                  stratospheric and surface climate</td>
                <td style="text-align: left;">G Chiodo, <strong>M Friedel</strong>, S Seeber, D Domeisen, A Stenke, T
                  Sukhodolov, …</td>
                <td style="text-align: left;">Atmospheric Chemistry and Physics</td>
                <td style="text-align: right;">2023</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Stratospherically induced tropospheric circulation changes under the
                  extreme conditions of the No-Montreal-Protocol scenario</td>
                <td style="text-align: left;">F Zilker, T Sukhodolov, G Chiodo, <strong>M Friedel</strong>, T Egorova, E
                  Rozanov, …</td>
                <td style="text-align: left;">EGUsphere</td>
                <td style="text-align: right;">2023</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Stratospherically induced circulation changes under the extreme conditions
                  of the no-Montreal-Protocol scenario</td>
                <td style="text-align: left;">F Zilker, T Sukhodolov, G Chiodo, <strong>M Friedel</strong>, T Egorova, E
                  Rozanov, …</td>
                <td style="text-align: left;">Atmospheric Chemistry and Physics</td>
                <td style="text-align: right;">2023</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">The influence of future changes in springtime Arctic ozone on
                  stratospheric and surface climate</td>
                <td style="text-align: left;"><strong>M Friedel</strong>, G Chiodo, S Seeber, A Stenke</td>
                <td style="text-align: left;">ETH Zurich</td>
                <td style="text-align: right;">2023</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Timeslice simulations for the year 2075 simulated with SOCOL-MPIOM and
                  WACCM4</td>
                <td style="text-align: left;"><strong>M Friedel</strong>, G Chiodo, S Seeber</td>
                <td style="text-align: left;">ETH Zurich</td>
                <td style="text-align: right;">2023</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Heat extremes in Western Europe increasing faster than simulated due to
                  atmospheric circulation trends</td>
                <td style="text-align: left;">R Vautard, J Cattiaux, T Happé, J Singh, R Bonnet, C Cassou, D Coumou, …
                </td>
                <td style="text-align: left;">Nature Communications</td>
                <td style="text-align: right;">2023</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Storylines for unprecedented heatwaves based on ensemble boosting</td>
                <td style="text-align: left;">EM Fischer, U Beyerle, L Bloin-Wibe, C Gessner, V Humphrey, F Lehner, …
                </td>
                <td style="text-align: left;">Nature communications</td>
                <td style="text-align: right;">2023</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">A joint framework for studying compound ecoclimatic events</td>
                <td style="text-align: left;">A Bastos, <strong>S Sippel</strong>, D Frank, MD Mahecha, S Zaehle, J
                  Zscheischler, …</td>
                <td style="text-align: left;">Nature Reviews Earth &amp; Environment</td>
                <td style="text-align: right;">2023</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">The effect of a short observational record on the statistics of
                  temperature extremes</td>
                <td style="text-align: left;">J Zeder, <strong>S Sippel</strong>, OC Pasche, S Engelke, EM Fischer</td>
                <td style="text-align: left;">Geophysical Research Letters</td>
                <td style="text-align: right;">2023</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Circulation dampened heat extremes intensification over the Midwest USA
                  and amplified over Western Europe</td>
                <td style="text-align: left;">J Singh, <strong>S Sippel</strong>, EM Fischer</td>
                <td style="text-align: left;">Communications Earth &amp; Environment</td>
                <td style="text-align: right;">2023</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Robust global detection of forced changes in mean and extreme
                  precipitation despite observational disagreement on the magnitude of change</td>
                <td style="text-align: left;">IE de Vries, <strong>S Sippel</strong>, AG Pendergrass, R Knutti</td>
                <td style="text-align: left;">Earth System Dynamics</td>
                <td style="text-align: right;">2023</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Identifying climate models based on their daily output using machine
                  learning</td>
                <td style="text-align: left;">L Brunner, <strong>S Sippel</strong></td>
                <td style="text-align: left;">Environmental Data Science</td>
                <td style="text-align: right;">2023</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Heat extremes in Western Europe are increasing faster than simulated due
                  to missed atmospheric circulation changes</td>
                <td style="text-align: left;">R Vautard, J Cattiaux, T Happé, J Singh, R Bonnet, C Cassou, D Coumou, …
                </td>
                <td style="text-align: left;">Review, https://doi. org/</td>
                <td style="text-align: right;">2023</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">An extreme cold Central European winter such as 1963 is unlikely but still
                  possible despite climate change</td>
                <td style="text-align: left;"><strong>S Sippel</strong>, C Barnes, C Cadiou, E Fischer, S Kew, <strong>M
                    Kretschmer</strong>, S Philip, …</td>
                <td style="text-align: left;">EGUsphere</td>
                <td style="text-align: right;">2023</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Artificial intelligence for prediction of climate extremes: State of the
                  art, challenges and future perspectives</td>
                <td style="text-align: left;">S Materia, LP García, C van Straaten, A Mamalakis, L Cavicchia, …</td>
                <td style="text-align: left;">arXiv preprint arXiv:</td>
                <td style="text-align: right;">2023</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Seasonal seed scenario planning: co-design of a generic framework for
                  matching seed supply and demand using seasonal climate forecasts</td>
                <td style="text-align: left;">J Steinke, B Ortiz-Crespo, J van Etten, GD Borman, M Hassena, …</td>
                <td style="text-align: left;">Climate Services</td>
                <td style="text-align: right;">2023</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Evaluation of explainable AI solutions in climate science</td>
                <td style="text-align: left;">P Bommer, <strong>M Kretschmer</strong>, A Hedstroem, D Bareeva, MMC
                  Hoehne</td>
                <td style="text-align: left;">EGU General Assembly Conference Abstracts, EGU-</td>
                <td style="text-align: right;">2023</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Assembling the climate story: use of storyline approaches in
                  climate‐related science</td>
                <td style="text-align: left;">E Baulenas, G Versteeg, M Terrado, <strong>J Mindlin</strong>, D Bojovic
                </td>
                <td style="text-align: left;">Global Challenges</td>
                <td style="text-align: right;">2023</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Plausible Drying and Wetting Scenarios for Summer in Southeastern South
                  America</td>
                <td style="text-align: left;"><strong>J Mindlin</strong>, CS Vera, TG Shepherd, M Osman</td>
                <td style="text-align: left;">Journal of Climate</td>
                <td style="text-align: right;">2023</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Attributing Extreme Weather Events and Mean Climate Change using Dynamical
                  and Event Storylines</td>
                <td style="text-align: left;">L van Garderen, F Feser, <strong>J Mindlin</strong>, T Shepherd</td>
                <td style="text-align: left;">EGU General Assembly Conference Abstracts, EGU-</td>
                <td style="text-align: right;">2023</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">The meta-evaluation problem in explainable AI: identifying reliable
                  estimators with MetaQuantus</td>
                <td style="text-align: left;">A Hedström, P Bommer, KK Wickstrøm, W Samek, S Lapuschkin, …</td>
                <td style="text-align: left;">arXiv preprint arXiv:</td>
                <td style="text-align: right;">2023</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Risks of synchronized low yields are underestimated in climate and crop
                  model projections</td>
                <td style="text-align: left;">K Kornhuber, C Lesk, CF Schleussner, J Jägermeyr, <strong>P
                    Pfleiderer</strong>, …</td>
                <td style="text-align: left;">Nature Communications</td>
                <td style="text-align: right;">2023</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Overconfidence in climate overshoot</td>
                <td style="text-align: left;">CF Schleussner, G Ganti, Q Lejeune, B Zhu, <strong>P Pfleiderer</strong>,
                  R Prütz, P Ciais, …</td>
                <td style="text-align: left;">Authorea Preprints</td>
                <td style="text-align: right;">2023</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">No going back-Limited reversibility of regional climate changes under
                  overshoot</td>
                <td style="text-align: left;"><strong>P Pfleiderer</strong>, CF Schleussner, J Sillmann</td>
                <td style="text-align: left;">Authorea Preprints</td>
                <td style="text-align: right;">2023</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">The economics of climate change with endogenous preferences</td>
                <td style="text-align: left;">L Mattauch, C Hepburn, <strong>F Spuler</strong>, N Stern</td>
                <td style="text-align: left;">Resource and Energy Economics</td>
                <td style="text-align: right;">2022</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Springtime arctic ozone depletion forces northern hemisphere climate
                  anomalies</td>
                <td style="text-align: left;"><strong>M Friedel</strong>, G Chiodo, A Stenke, DIV Domeisen, S
                  Fueglistaler, JG Anet, …</td>
                <td style="text-align: left;">Nature Geoscience</td>
                <td style="text-align: right;">2022</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Effects of Arctic ozone on the stratospheric spring onset and its surface
                  impact</td>
                <td style="text-align: left;"><strong>M Friedel</strong>, G Chiodo, A Stenke, DIV Domeisen, T Peter</td>
                <td style="text-align: left;">Atmospheric Chemistry and Physics</td>
                <td style="text-align: right;">2022</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Exploring the link between austral stratospheric polar vortex anomalies
                  and surface climate in chemistry-climate models</td>
                <td style="text-align: left;">N Bergner, <strong>M Friedel</strong>, DIV Domeisen, D Waugh, G Chiodo
                </td>
                <td style="text-align: left;">Atmospheric Chemistry and Physics</td>
                <td style="text-align: right;">2022</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Model results for” Robust effect of springtime Arctic ozone depletion on
                  surface climate”, part 2: Data for SOCOL-MPIOM</td>
                <td style="text-align: left;"><strong>M Friedel</strong>, G Chiodo</td>
                <td style="text-align: left;">ETH Zurich</td>
                <td style="text-align: right;">2022</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Ozone depletion over the Arctic affects spring climate in the Northern
                  Hemisphere</td>
                <td style="text-align: left;"><strong>M Friedel</strong>, G Chiodo</td>
                <td style="text-align: left;">Nature Geoscience</td>
                <td style="text-align: right;">2022</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">On the Robustness of the Surface Response to Austral Stratospheric Polar
                  Vortex Extremes.</td>
                <td style="text-align: left;">N Bergner, <strong>M Friedel</strong>, DIV Domeisen, D Waugh, G Chiodo
                </td>
                <td style="text-align: left;">Atmospheric Chemistry &amp; Physics Discussions</td>
                <td style="text-align: right;">2022</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Climatic and soil factors explain the two-dimensional spectrum of global
                  plant trait variation</td>
                <td style="text-align: left;">JS Joswig, C Wirth, MC Schuman, J Kattge, B Reu, IJ Wright, SD Sippel, …
                </td>
                <td style="text-align: left;">Nature ecology &amp; evolution</td>
                <td style="text-align: right;">2022</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Physics-aware nonparametric regression models for Earth data analysis</td>
                <td style="text-align: left;">J Cortés-Andrés, G Camps-Valls, <strong>S Sippel</strong>, E Székely, D
                  Sejdinovic, …</td>
                <td style="text-align: left;">Environmental Research Letters</td>
                <td style="text-align: right;">2022</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Interannual global carbon cycle variations linked to atmospheric
                  circulation variability</td>
                <td style="text-align: left;">N Li, <strong>S Sippel</strong>, AJ Winkler, MD Mahecha, M Reichstein, A
                  Bastos</td>
                <td style="text-align: left;">Earth System Dynamics</td>
                <td style="text-align: right;">2022</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Reconstruction of zonal precipitation from sparse historical observations
                  using climate model information and statistical learning</td>
                <td style="text-align: left;">M Egli, <strong>S Sippel</strong>, AG Pendergrass, I de Vries, R Knutti
                </td>
                <td style="text-align: left;">Geophysical Research Letters</td>
                <td style="text-align: right;">2022</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Robust detection and attribution of climate change under interventions
                </td>
                <td style="text-align: left;">E Székely, <strong>S Sippel</strong>, N Meinshausen, G Obozinski, R Knutti
                </td>
                <td style="text-align: left;">arXiv preprint arXiv:</td>
                <td style="text-align: right;">2022</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Northern hemisphere stratosphere‐troposphere circulation change in CMIP6
                  models: 1. Inter‐model spread and scenario sensitivity</td>
                <td style="text-align: left;">AY Karpechko, H Afargan‐Gerstman, AH Butler, DIV Domeisen, …</td>
                <td style="text-align: left;">Journal of Geophysical Research: Atmospheres</td>
                <td style="text-align: right;">2022</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Stratospheric wave reflection events modulate North American weather
                  regimes and cold spells</td>
                <td style="text-align: left;">G Messori, <strong>M Kretschmer</strong>, SH Lee, V Matthias</td>
                <td style="text-align: left;">Weather and Climate Dynamics Discussions</td>
                <td style="text-align: right;">2022</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">The “polar vortex” winter of 2013/2014</td>
                <td style="text-align: left;">J Cohen, L Agel, M Barlow, JC Furtado, <strong>M Kretschmer</strong>, V
                  Wendt</td>
                <td style="text-align: left;">Journal of Geophysical Research: Atmospheres</td>
                <td style="text-align: right;">2022</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">The role of the timing of sudden stratospheric warmings for precipitation
                  and temperature anomalies in Europe</td>
                <td style="text-align: left;">E Monnin, <strong>M Kretschmer</strong>, I Polichtchouk</td>
                <td style="text-align: left;">International Journal of Climatology</td>
                <td style="text-align: right;">2022</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">A storyline attribution of the 2011/2012 drought in Southeastern South
                  America</td>
                <td style="text-align: left;">L van Garderen, <strong>J Mindlin</strong></td>
                <td style="text-align: left;">Weather</td>
                <td style="text-align: right;">2022</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Are we at risk of losing the current generation of climate researchers to
                  data science?</td>
                <td style="text-align: left;">S Jain, <strong>J Mindlin</strong>, G Koren, C Gulizia, C Steadman, GS
                  Langendijk, …</td>
                <td style="text-align: left;">AGU Advances</td>
                <td style="text-align: right;">2022</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Self-organizing maps identify windows of opportunity for seasonal European
                  summer predictions</td>
                <td style="text-align: left;"><strong>J Carvalho-Oliveira</strong>, LF Borchert, E Zorita, J Baehr</td>
                <td style="text-align: left;">Frontiers in Climate</td>
                <td style="text-align: right;">2022</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Extreme Atlantic hurricane seasons made twice as likely by ocean warming
                </td>
                <td style="text-align: left;"><strong>P Pfleiderer</strong>, S Nath, CF Schleussner</td>
                <td style="text-align: left;">Weather and Climate Dynamics</td>
                <td style="text-align: right;">2022</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Uncertainty in near-term temperature evolution must not obscure
                  assessments of climate mitigation benefits</td>
                <td style="text-align: left;">A Lanson, <strong>P Pfleiderer</strong>, F Lehner, CF Schleussner</td>
                <td style="text-align: left;">Nature communications</td>
                <td style="text-align: right;">2022</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">The Climate Impact Explorer, a free online tool providing sectoral impact
                  projections for a wide range of scenarios down to the subnational level</td>
                <td style="text-align: left;">Q Lejeune, <strong>P Pfleiderer</strong>, T Beck, I Menke, C Kropf, I
                  Sauer, C Schleussner</td>
                <td style="text-align: left;">EGU General Assembly Conference Abstracts, EGU</td>
                <td style="text-align: right;">2022</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">A global environmental crisis 42,000 years ago</td>
                <td style="text-align: left;">A Cooper, CSM Turney, J Palmer, A Hogg, M McGlone, J Wilmshurst, …</td>
                <td style="text-align: left;">Science</td>
                <td style="text-align: right;">2021</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Atmosphere–ocean–aerosol–chemistry–climate model SOCOLv4. 0: Description
                  and evaluation</td>
                <td style="text-align: left;">T Sukhodolov, T Egorova, A Stenke, WT Ball, C Brodowsky, G Chiodo, …</td>
                <td style="text-align: left;">Geoscientific Model Development</td>
                <td style="text-align: right;">2021</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Atmosphere–ocean–aerosol–chemistry–climate model SOCOLv4. 0: description
                  and evaluation, Geosci. Model Dev., 14, 5525–5560, 10.5194</td>
                <td style="text-align: left;">T Sukhodolov, T Egorova, A Stenke, WT Ball, C Brodowsky, G Chiodo, …</td>
                <td style="text-align: left;">gmd-</td>
                <td style="text-align: right;">2021</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Response to Comment on “A global environmental crisis 42,000 years ago”
                </td>
                <td style="text-align: left;">A Cooper, CSM Turney, J Palmer, A Hogg, M McGlone, J Wilmshurst, …</td>
                <td style="text-align: left;">Science</td>
                <td style="text-align: right;">2021</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Increasing probability of record-shattering climate extremes</td>
                <td style="text-align: left;">EM Fischer, <strong>S Sippel</strong>, R Knutti</td>
                <td style="text-align: left;">Nature Climate Change</td>
                <td style="text-align: right;">2021</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">An integrated approach to quantifying uncertainties in the remaining
                  carbon budget</td>
                <td style="text-align: left;">H Damon Matthews, KB Tokarska, J Rogelj, CJ Smith, AH MacDougall, …</td>
                <td style="text-align: left;">Communications Earth &amp; Environment</td>
                <td style="text-align: right;">2021</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Robust detection of forced warming in the presence of potentially large
                  climate variability</td>
                <td style="text-align: left;"><strong>S Sippel</strong>, N Meinshausen, E Székely, E Fischer, AG
                  Pendergrass, …</td>
                <td style="text-align: left;">Science Advances</td>
                <td style="text-align: right;">2021</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Network-based forecasting of climate phenomena</td>
                <td style="text-align: left;">J Ludescher, M Martin, N Boers, A Bunde, C Ciemer, J Fan, S Havlin, …</td>
                <td style="text-align: left;">Proceedings of the National Academy of Sciences</td>
                <td style="text-align: right;">2021</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Quantifying causal pathways of teleconnections</td>
                <td style="text-align: left;"><strong>M Kretschmer</strong>, SV Adams, A Arribas, R Prudden, N Robinson,
                  E Saggioro, …</td>
                <td style="text-align: left;">Bulletin of the American Meteorological Society</td>
                <td style="text-align: right;">2021</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Predictors and prediction skill for marine cold‐air outbreaks over the
                  Barents Sea</td>
                <td style="text-align: left;">I Polkova*, H Afargan‐Gerstman, DIV Domeisen, MP King, P Ruggieri, …</td>
                <td style="text-align: left;">Quarterly Journal of the Royal Meteorological Society</td>
                <td style="text-align: right;">2021</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">The influence of the timing of Sudden Stratospheric Warmings on
                  precipitation anomalies in Europe</td>
                <td style="text-align: left;">E Monnin, <strong>M Kretschmer</strong>, I Polichtchouk, E Paris</td>
                <td style="text-align: left;">Published online. DOI</td>
                <td style="text-align: right;">2021</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Combined effects of global warming and ozone depletion/recovery on
                  Southern Hemisphere atmospheric circulation and regional precipitation</td>
                <td style="text-align: left;"><strong>J Mindlin</strong>, TG Shepherd, C Vera, M Osman</td>
                <td style="text-align: left;">Geophysical Research Letters</td>
                <td style="text-align: right;">2021</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Subtle influence of the Atlantic Meridional Overturning Circulation (AMOC)
                  on seasonal sea surface temperature (SST) hindcast skill in the North Atlantic</td>
                <td style="text-align: left;"><strong>J Carvalho-Oliveira</strong>, LF Borchert, A Duchez, M Dobrynin, J
                  Baehr</td>
                <td style="text-align: left;">Weather and Climate Dynamics</td>
                <td style="text-align: right;">2021</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Reconstructing nonlinear dynamical systems from multi-modal time series
                </td>
                <td style="text-align: left;">D Kramer, <strong>PL Bommer</strong>, C Tombolini, G Koppe, D Durstewitz
                </td>
                <td style="text-align: left;">arXiv preprint arXiv:</td>
                <td style="text-align: right;">2021</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Identifying nonlinear dynamical systems from multi-modal time series data
                </td>
                <td style="text-align: left;"><strong>PL Bommer</strong>, D Kramer, C Tombolini, G Koppe, D Durstewitz
                </td>
                <td style="text-align: left;">arXiv e-prints, arXiv:</td>
                <td style="text-align: right;">2021</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Machine-learning-based evidence and attribution mapping of 100,000 climate
                  impact studies</td>
                <td style="text-align: left;">M Callaghan, CF Schleussner, S Nath, Q Lejeune, TR Knutson, …</td>
                <td style="text-align: left;">Nature climate change</td>
                <td style="text-align: right;">2021</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Pathways of climate resilience over the 21st century</td>
                <td style="text-align: left;">CF Schleussner, <strong>P Pfleiderer</strong>, M Andrijevic, MM Vogel, FEL
                  Otto, …</td>
                <td style="text-align: left;">Environmental Research Letters</td>
                <td style="text-align: right;">2021</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">NGFS climate scenario database: technical documentation V2. 2</td>
                <td style="text-align: left;">C Bertram, J Hilaire, E Kriegler, T Beck, D Bresch, L Clarke, R Cui, …
                </td>
                <td style="text-align: left;">Potsdam Institute for Climate Impact Research (PIK), International
                  Institute&nbsp;…</td>
                <td style="text-align: right;">2021</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Simulating compound weather extremes responsible for critical crop failure
                  with stochastic weather generators</td>
                <td style="text-align: left;"><strong>P Pfleiderer</strong>, A Jézéquel, J Legrand, N Legrix, I
                  Markantonis, E Vignotto, …</td>
                <td style="text-align: left;">Earth System Dynamics</td>
                <td style="text-align: right;">2021</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Briefing note on tropical cyclones: Impacts, the link to climate change
                  and adaptation</td>
                <td style="text-align: left;">A Thomas, P Pringle, <strong>P Pfleiderer</strong>, CF Schleussner</td>
                <td style="text-align: left;">Climate Analytics, no date, online</td>
                <td style="text-align: right;">2021</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Past warming trend constrains future warming in CMIP6 models</td>
                <td style="text-align: left;">KB Tokarska, MB Stolpe, <strong>S Sippel</strong>, EM Fischer, CJ Smith, F
                  Lehner, …</td>
                <td style="text-align: left;">Science advances</td>
                <td style="text-align: right;">2020</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Climate change now detectable from any single day of weather at global
                  scale</td>
                <td style="text-align: left;"><strong>S Sippel</strong>, N Meinshausen, EM Fischer, E Székely, R Knutti
                </td>
                <td style="text-align: left;">Nature climate change</td>
                <td style="text-align: right;">2020</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Machine learning applications in hydrology</td>
                <td style="text-align: left;">H Lange, <strong>S Sippel</strong></td>
                <td style="text-align: left;">Forest-water interactions</td>
                <td style="text-align: right;">2020</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Vegetation modulates the impact of climate extremes on gross primary
                  production</td>
                <td style="text-align: left;">M Flach, A Brenning, F Gans, M Reichstein, <strong>S Sippel</strong>, MD
                  Mahecha</td>
                <td style="text-align: left;">Biogeosciences Discussions</td>
                <td style="text-align: right;">2020</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Bias correction of climate model output for impact models</td>
                <td style="text-align: left;">AJ Cannon, C Piani, <strong>S Sippel</strong></td>
                <td style="text-align: left;">Climate extremes and their implications for impact and risk assessment
                </td>
                <td style="text-align: right;">2020</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Late 1980s abrupt cold season temperature change in Europe consistent with
                  circulation variability and long-term warming</td>
                <td style="text-align: left;"><strong>S Sippel</strong>, EM Fischer, SC Scherrer, N Meinshausen, R
                  Knutti</td>
                <td style="text-align: left;">Environmental Research Letters</td>
                <td style="text-align: right;">2020</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Synoptic-scale controls of fog and low-cloud variability in the Namib
                  Desert</td>
                <td style="text-align: left;">H Andersen, J Cermak, J Fuchs, P Knippertz, M Gaetani, J Quinting, …</td>
                <td style="text-align: left;">Atmospheric Chemistry and Physics</td>
                <td style="text-align: right;">2020</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Latent linear adjustment autoencoders v1. 0: A novel method for estimating
                  and emulating dynamic precipitation at high resolution</td>
                <td style="text-align: left;">C Heinze-Deml, <strong>S Sippel</strong>, AG Pendergrass, F Lehner, N
                  Meinshausen</td>
                <td style="text-align: left;">Geoscientific Model Development Discussions</td>
                <td style="text-align: right;">2020</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Concurrent and lagged effects of spring greening on seasonal carbon gain
                  and water loss across the Northern Hemisphere</td>
                <td style="text-align: left;">J Jin, F Guo, <strong>S Sippel</strong>, Q Zhu, W Wang, B Gu, Y Wang</td>
                <td style="text-align: left;">International journal of biometeorology</td>
                <td style="text-align: right;">2020</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Climate extremes and their implications for impact and risk assessment: A
                  short introduction</td>
                <td style="text-align: left;">J Sillmann, <strong>S Sippel</strong></td>
                <td style="text-align: left;">Climate Extremes and Their Implications for Impact and Risk Assessment
                </td>
                <td style="text-align: right;">2020</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Separating forced and unforced components of climate change: the utility
                  of pattern recognition methods in large ensembles and observations</td>
                <td style="text-align: left;">RCJ Wills, <strong>S Sippel</strong>, EA Barnes</td>
                <td style="text-align: left;">Variations</td>
                <td style="text-align: right;">2020</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Outlook: Challenges for societal resilience under climate extremes</td>
                <td style="text-align: left;">M Reichstein, D Frank, J Sillmann, <strong>S Sippel</strong></td>
                <td style="text-align: left;">Climate Extremes and Their Implications for Impact and Risk Assessment
                </td>
                <td style="text-align: right;">2020</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Towards dynamical adjustment of the full temperature distribution</td>
                <td style="text-align: left;">E Vignotto, <strong>S Sippel</strong>, F Lehner, E Fischer</td>
                <td style="text-align: left;">Proceedings of the</td>
                <td style="text-align: right;">2020</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Divergent consensuses on Arctic amplification influence on midlatitude
                  severe winter weather</td>
                <td style="text-align: left;">J Cohen, X Zhang, J Francis, T Jung, R Kwok, J Overland, TJ Ballinger, …
                </td>
                <td style="text-align: left;">Nature Climate Change</td>
                <td style="text-align: right;">2020</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Tropical and mid-latitude teleconnections interacting with the Indian
                  summer monsoon rainfall: a theory-guided causal effect network approach</td>
                <td style="text-align: left;">G Di Capua, <strong>M Kretschmer</strong>, RV Donner, B Van Den Hurk, R
                  Vellore, …</td>
                <td style="text-align: left;">Earth System Dynamics</td>
                <td style="text-align: right;">2020</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">The influence of stratospheric wave reflection on North American cold
                  spells</td>
                <td style="text-align: left;">V Matthias, <strong>M Kretschmer</strong></td>
                <td style="text-align: left;">Monthly Weather Review</td>
                <td style="text-align: right;">2020</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">The role of Barents–Kara sea ice loss in projected polar vortex changes
                </td>
                <td style="text-align: left;"><strong>M Kretschmer</strong>, G Zappa, TG Shepherd</td>
                <td style="text-align: left;">Weather and Climate Dynamics</td>
                <td style="text-align: right;">2020</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Reconstructing regime-dependent causal relationships from observational
                  time series</td>
                <td style="text-align: left;">E Saggioro, J de Wiljes, <strong>M Kretschmer</strong>, J Runge</td>
                <td style="text-align: left;">Chaos: An Interdisciplinary Journal of Nonlinear Science</td>
                <td style="text-align: right;">2020</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Potential for early forecast of Moroccan wheat yields based on climatic
                  drivers</td>
                <td style="text-align: left;">J Lehmann, <strong>M Kretschmer</strong>, B Schauberger, F Wechsung</td>
                <td style="text-align: left;">Geophysical Research Letters</td>
                <td style="text-align: right;">2020</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Robust predictors for seasonal Atlantic hurricane activity identified with
                  causal effect networks</td>
                <td style="text-align: left;"><strong>P Pfleiderer</strong>, CF Schleussner, T Geiger, <strong>M
                    Kretschmer</strong></td>
                <td style="text-align: left;">Weather and Climate Dynamics Discussions</td>
                <td style="text-align: right;">2020</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Comment of the European copyright society. Addressing selected aspects of
                  the implementation of articles 18 to 22 of the directive (EU) 2019/790 on copyright in the
                  digital&nbsp;…</td>
                <td style="text-align: left;">SVC Dusollier, VL Benabou, L Bently, E Derclaye, T Dreier, C Geiger, …
                </td>
                <td style="text-align: left;">JOURNAL OF INTELLECTUAL PROPERTY, INFORMATION TECHNOLOGY AND
                  ELECTRONIC&nbsp;…</td>
                <td style="text-align: right;">2020</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">The role of Arctic sea ice loss in projected polar vortex changes</td>
                <td style="text-align: left;"><strong>M Kretschmer</strong>, G Zappa, TG Shepherd</td>
                <td style="text-align: left;">Weather and Climate Dynamics Discussions</td>
                <td style="text-align: right;">2020</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Storyline description of Southern Hemisphere midlatitude circulation and
                  precipitation response to greenhouse gas forcing</td>
                <td style="text-align: left;"><strong>J Mindlin</strong>, TG Shepherd, CS Vera, M Osman, G Zappa, RW
                  Lee, …</td>
                <td style="text-align: left;">Climate Dynamics</td>
                <td style="text-align: right;">2020</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Forecast opportunities for European summer climate ensemble predictions
                  using Self-Organising Maps</td>
                <td style="text-align: left;">JC Oliveira, E Zorita, V Koul, T Ludwig, J Baehr</td>
                <td style="text-align: left;">Proceedings of the</td>
                <td style="text-align: right;">2020</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Global warming and extreme weather investment risks</td>
                <td style="text-align: left;">Q Rayer, <strong>P Pfleiderer</strong>, K Haustein</td>
                <td style="text-align: left;">Ecological, societal, and technological risks and the financial sector
                </td>
                <td style="text-align: right;">2020</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Half a degree and rapid socioeconomic development matter for heatwave risk
                </td>
                <td style="text-align: left;">S Russo, J Sillmann, <strong>S Sippel</strong>, MJ Barcikowska, C
                  Ghisetti, M Smid, …</td>
                <td style="text-align: left;">Nature communications</td>
                <td style="text-align: right;">2019</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Uncovering the forced climate response from a single ensemble member using
                  statistical learning</td>
                <td style="text-align: left;"><strong>S Sippel</strong>, N Meinshausen, A Merrifield, F Lehner, AG
                  Pendergrass, …</td>
                <td style="text-align: left;">Journal of Climate</td>
                <td style="text-align: right;">2019</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Local and nonlocal land surface influence in European heatwave initial
                  condition ensembles</td>
                <td style="text-align: left;">AL Merrifield, IR Simpson, KA McKinnon, <strong>S Sippel</strong>, SP Xie,
                  C Deser</td>
                <td style="text-align: left;">Geophysical Research Letters</td>
                <td style="text-align: right;">2019</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Climate extremes and their implications for impact and risk assessment
                </td>
                <td style="text-align: left;">J Sillmann, <strong>S Sippel</strong>, S Russo</td>
                <td style="text-align: left;">Elsevier</td>
                <td style="text-align: right;">2019</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">A direct approach to detection and attribution of climate change</td>
                <td style="text-align: left;">E Székely, <strong>S Sippel</strong>, R Knutti, G Obozinski, N Meinshausen
                </td>
                <td style="text-align: left;">arXiv preprint arXiv:</td>
                <td style="text-align: right;">2019</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Detecting and quantifying causal associations in large nonlinear time
                  series datasets</td>
                <td style="text-align: left;">J Runge, P Nowack, <strong>M Kretschmer</strong>, S Flaxman, D Sejdinovic
                </td>
                <td style="text-align: left;">Science advances</td>
                <td style="text-align: right;">2019</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Inferring causation from time series in Earth system sciences</td>
                <td style="text-align: left;">J Runge, S Bathiany, E Bollt, G Camps-Valls, D Coumou, E Deyle, …</td>
                <td style="text-align: left;">Nature communications</td>
                <td style="text-align: right;">2019</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Long-lead statistical forecasts of the Indian summer monsoon rainfall
                  based on causal precursors</td>
                <td style="text-align: left;">G Di Capua, <strong>M Kretschmer</strong>, J Runge, A Alessandri, RV
                  Donner, …</td>
                <td style="text-align: left;">Weather and Forecasting</td>
                <td style="text-align: right;">2019</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Summer weather becomes more persistent in a 2 C world</td>
                <td style="text-align: left;"><strong>P Pfleiderer</strong>, CF Schleussner, K Kornhuber, D Coumou</td>
                <td style="text-align: left;">Nature Climate Change</td>
                <td style="text-align: right;">2019</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Increasing risks of apple tree frost damage under climate change</td>
                <td style="text-align: left;"><strong>P Pfleiderer</strong>, I Menke, CF Schleussner</td>
                <td style="text-align: left;">Climatic Change</td>
                <td style="text-align: right;">2019</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Incremental improvements of 2030 targets insufficient to achieve the Paris
                  Agreement goals</td>
                <td style="text-align: left;">A Geiges, PY Parra, M Andrijevic, W Hare, A Nauels, <strong>P
                    Pfleiderer</strong>, …</td>
                <td style="text-align: left;">Earth System Dynamics Discussions</td>
                <td style="text-align: right;">2019</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Recommended temperature metrics for carbon budget estimates, model
                  evaluation and climate policy</td>
                <td style="text-align: left;">KB Tokarska, CF Schleussner, J Rogelj, MB Stolpe, HD Matthews, …</td>
                <td style="text-align: left;">Nature Geoscience</td>
                <td style="text-align: right;">2019</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Anthropogenic forcings and associated changes in fire risk in western
                  North America and Australia during 2015/16</td>
                <td style="text-align: left;">SFB Tett, A Falk, M Rogers, <strong>F Spuler</strong>, C Turner, J
                  Wainwright, …</td>
                <td style="text-align: left;">Bull. Am. Meteorol. Soc</td>
                <td style="text-align: right;">2018</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Steering the climate system: an extended comment</td>
                <td style="text-align: left;">L Mattauch, R Millar, R van der Ploeg, A Rezai, A Schultes, F Venmans, …
                </td>
                <td style="text-align: left;">CESifo Working Paper</td>
                <td style="text-align: right;">2018</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Impacts of droughts and extreme-temperature events on gross primary
                  production and ecosystem respiration: a systematic assessment across ecosystems and climate zones</td>
                <td style="text-align: left;">J Von Buttlar, J Zscheischler, A Rammig, <strong>S Sippel</strong>, M
                  Reichstein, A Knohl, …</td>
                <td style="text-align: left;">Biogeosciences</td>
                <td style="text-align: right;">2018</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Drought, heat, and the carbon cycle: a review</td>
                <td style="text-align: left;"><strong>S Sippel</strong>, M Reichstein, X Ma, MD Mahecha, H Lange, M
                  Flach, D Frank</td>
                <td style="text-align: left;">Current Climate Change Reports</td>
                <td style="text-align: right;">2018</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Contrasting biosphere responses to hydrometeorological extremes:
                  revisiting the 2010 western Russian heatwave</td>
                <td style="text-align: left;">M Flach, <strong>S Sippel</strong>, F Gans, A Bastos, A Brenning, M
                  Reichstein, …</td>
                <td style="text-align: left;">Biogeosciences</td>
                <td style="text-align: right;">2018</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Asymmetric responses of primary productivity to altered precipitation
                  simulated by ecosystem models across three long-term grassland sites</td>
                <td style="text-align: left;">D Wu, P Ciais, N Viovy, AK Knapp, K Wilcox, M Bahn, MD Smith, S Vicca, …
                </td>
                <td style="text-align: left;">Biogeosciences</td>
                <td style="text-align: right;">2018</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Extreme heat-related mortality avoided under Paris Agreement goals</td>
                <td style="text-align: left;">D Mitchell, C Heaviside, N Schaller, M Allen, KL Ebi, EM Fischer, …</td>
                <td style="text-align: left;">Nature climate change</td>
                <td style="text-align: right;">2018</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Large‐scale droughts responsible for dramatic reductions of terrestrial
                  net carbon uptake over North America in 2011 and 2012</td>
                <td style="text-align: left;">W He, W Ju, CR Schwalm, <strong>S Sippel</strong>, X Wu, Q He, L Song, C
                  Zhang, J Li, …</td>
                <td style="text-align: left;">Journal of Geophysical Research: Biogeosciences</td>
                <td style="text-align: right;">2018</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">From hazard to risk</td>
                <td style="text-align: left;">J Sillmann, S Russo, <strong>S Sippel</strong>, K Alnes</td>
                <td style="text-align: left;">Bulletin of the American Meteorological Society</td>
                <td style="text-align: right;">2018</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Nonlinear dynamics of river runoff elucidated by horizontal visibility
                  graphs</td>
                <td style="text-align: left;">H Lange, <strong>S Sippel</strong>, OA Rosso</td>
                <td style="text-align: left;">Chaos: An Interdisciplinary Journal of Nonlinear Science</td>
                <td style="text-align: right;">2018</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">More-persistent weak stratospheric polar vortex states linked to cold
                  extremes</td>
                <td style="text-align: left;"><strong>M Kretschmer</strong>, D Coumou, L Agel, M Barlow, E Tziperman, J
                  Cohen</td>
                <td style="text-align: left;">Bulletin of the American Meteorological Society</td>
                <td style="text-align: right;">2018</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">The different stratospheric influence on cold-extremes in Eurasia and
                  North America</td>
                <td style="text-align: left;"><strong>M Kretschmer</strong>, J Cohen, V Matthias, J Runge, D Coumou</td>
                <td style="text-align: left;">npj Climate and Atmospheric Science</td>
                <td style="text-align: right;">2018</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Arctic change and possible influence on mid-latitude climate and weather:
                  a US CLIVAR White Paper</td>
                <td style="text-align: left;">J Cohen, X Zhang, J Francis, T Jung, R Kwok, J Overland, T Ballinger, …
                </td>
                <td style="text-align: left;">US CLIVAR reports</td>
                <td style="text-align: right;">2018</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">The different stratospheric influence on cold-extremes in Eurasia and
                  North America. npj Climate and Atmospheric Science, 1, 44</td>
                <td style="text-align: left;"><strong>M Kretschmer</strong>, J Cohen, V Matthias, J Runge, D Coumou</td>
                <td style="text-align: left;">URL https://doi. org/</td>
                <td style="text-align: right;">2018</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Reflective stratospheric polar vortex pattern linked to North American
                  cold-extremes</td>
                <td style="text-align: left;"><strong>M Kretschmer</strong>, J Cohen, J Runge, D Coumou</td>
                <td style="text-align: left;">EGU General Assembly Conference Abstracts</td>
                <td style="text-align: right;">2018</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">A climatology of the annual cycle of river discharges into the Brazilian
                  continental shelves: from seasonal to interannual variability</td>
                <td style="text-align: left;">J Carvalho Oliveira, W Aguiar, M Cirano, F Genz, FN Amorim</td>
                <td style="text-align: left;">Environmental Earth Sciences</td>
                <td style="text-align: right;">2018</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">1.5 C hotspots: climate hazards, vulnerabilities, and impacts</td>
                <td style="text-align: left;">CF Schleussner, D Deryng, S D’haen, W Hare, T Lissner, M Ly, A Nauels, …
                </td>
                <td style="text-align: left;">Annual Review of Environment and Resources</td>
                <td style="text-align: right;">2018</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Quantification of temperature persistence over the Northern Hemisphere
                  land-area</td>
                <td style="text-align: left;"><strong>P Pfleiderer</strong>, D Coumou</td>
                <td style="text-align: left;">Climate Dynamics</td>
                <td style="text-align: right;">2018</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Global mean temperature indicators linked to warming levels avoiding
                  climate risks</td>
                <td style="text-align: left;"><strong>P Pfleiderer</strong>, CF Schleussner, M Mengel, J Rogelj</td>
                <td style="text-align: left;">Environmental Research Letters</td>
                <td style="text-align: right;">2018</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Carbon budgets for the 1.5 C limit</td>
                <td style="text-align: left;">CF Schleussner, M Stolpe, <strong>P Pfleiderer</strong>, Q Lejeune, B Hare
                </td>
                <td style="text-align: left;">Berlin. https://climateanalytics. org/briefings/carbon-budgets-for-the-
                </td>
                <td style="text-align: right;">2018</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Author Correction: In the observational record half a degree matters</td>
                <td style="text-align: left;">CF Schleussner, <strong>P Pfleiderer</strong>, EM Fischer</td>
                <td style="text-align: left;">Nature Climate Change</td>
                <td style="text-align: right;">2018</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Refining multi-model projections of temperature extremes by evaluation
                  against land–atmosphere coupling diagnostics</td>
                <td style="text-align: left;"><strong>S Sippel</strong>, J Zscheischler, MD Mahecha, R Orth, M
                  Reichstein, M Vogel, …</td>
                <td style="text-align: left;">Earth System Dynamics</td>
                <td style="text-align: right;">2017</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Detecting impacts of extreme events with ecological in situ monitoring
                  networks</td>
                <td style="text-align: left;">MD Mahecha, F Gans, <strong>S Sippel</strong>, JF Donges, T Kaminski, S
                  Metzger, …</td>
                <td style="text-align: left;">Biogeosciences</td>
                <td style="text-align: right;">2017</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Multivariate anomaly detection for Earth observations: a comparison of
                  algorithms and feature extraction techniques</td>
                <td style="text-align: left;">M Flach, F Gans, A Brenning, J Denzler, M Reichstein, E Rodner, …</td>
                <td style="text-align: left;">Earth System Dynamics</td>
                <td style="text-align: right;">2017</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Contrasting and interacting changes in simulated spring and summer carbon
                  cycle extremes in European ecosystems</td>
                <td style="text-align: left;"><strong>S Sippel</strong>, M Forkel, A Rammig, K Thonicke, M Flach, M
                  Heimann, FEL Otto, …</td>
                <td style="text-align: left;">Environmental Research Letters</td>
                <td style="text-align: right;">2017</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Have precipitation extremes and annual totals been increasing in the
                  world’s dry regions over the last 60 years?</td>
                <td style="text-align: left;"><strong>S Sippel</strong>, J Zscheischler, M Heimann, H Lange, MD Mahecha,
                  …</td>
                <td style="text-align: left;">Hydrology and Earth System Sciences</td>
                <td style="text-align: right;">2017</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Warm winter, wet spring, and an extreme response in ecosystem functioning
                  on the Iberian Peninsula</td>
                <td style="text-align: left;"><strong>S Sippel</strong>, TS El-Madany, M Migliavacca, MD Mahecha, A
                  Carrara, M Flach, …</td>
                <td style="text-align: left;">Bulletin of the American Meteorological Society</td>
                <td style="text-align: right;">2017</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Reverse engineering model structures for soil and ecosystem respiration:
                  The potential of gene expression programming</td>
                <td style="text-align: left;">I Ilie, P Dittrich, N Carvalhais, M Jung, A Heinemeyer, M Migliavacca, …
                </td>
                <td style="text-align: left;">Geoscientific Model Development</td>
                <td style="text-align: right;">2017</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Climate extremes and their impact on ecosystem-atmosphere interactions
                </td>
                <td style="text-align: left;">SD Sippel</td>
                <td style="text-align: left;">ETH Zurich</td>
                <td style="text-align: right;">2017</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Early prediction of extreme stratospheric polar vortex states based on
                  causal precursors</td>
                <td style="text-align: left;"><strong>M Kretschmer</strong>, J Runge, D Coumou</td>
                <td style="text-align: left;">Geophysical research letters</td>
                <td style="text-align: right;">2017</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Disentangling Causal Pathways of the Stratospheric Polar Vortex: A Machine
                  Learning Approach</td>
                <td style="text-align: left;"><strong>M Kretschmer</strong></td>
                <td style="text-align: left;">Universität Potsdam</td>
                <td style="text-align: right;">2017</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">In the observational record half a degree matters</td>
                <td style="text-align: left;">CF Schleussner, <strong>P Pfleiderer</strong>, EM Fischer</td>
                <td style="text-align: left;">Nature Climate Change</td>
                <td style="text-align: right;">2017</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">A novel bias correction methodology for climate impact simulations</td>
                <td style="text-align: left;"><strong>S Sippel</strong>, FEL Otto, M Forkel, MR Allen, BP Guillod, M
                  Heimann, …</td>
                <td style="text-align: left;">Earth System Dynamics</td>
                <td style="text-align: right;">2016</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Ecosystem impacts of climate extremes crucially depend on the timing</td>
                <td style="text-align: left;"><strong>S Sippel</strong>, J Zscheischler, M Reichstein</td>
                <td style="text-align: left;">Proceedings of the National Academy of Sciences</td>
                <td style="text-align: right;">2016</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">11. The role of anthropogenic warming in 2015 central European heat waves
                </td>
                <td style="text-align: left;"><strong>S Sippel</strong>, FEL Otto, M Flach, GJ van Oldenborgh</td>
                <td style="text-align: left;">Bulletin of the American Meteorological Society</td>
                <td style="text-align: right;">2016</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Diagnosing the dynamics of observed and simulated ecosystem gross primary
                  productivity with time causal information theory quantifiers</td>
                <td style="text-align: left;"><strong>S Sippel</strong>, H Lange, MD Mahecha, M Hauhs, P Bodesheim, T
                  Kaminski, …</td>
                <td style="text-align: left;">PloS one</td>
                <td style="text-align: right;">2016</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Detecting multivariate biosphere extremes</td>
                <td style="text-align: left;">Y Guanche Garcia, E Rodner, M Flach, <strong>S Sippel</strong>, MD
                  Mahecha, J Denzler</td>
                <td style="text-align: left;">Climate Informatics Workshop</td>
                <td style="text-align: right;">2016</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Using causal effect networks to analyze different Arctic drivers of
                  midlatitude winter circulation</td>
                <td style="text-align: left;"><strong>M Kretschmer</strong>, D Coumou, JF Donges, J Runge</td>
                <td style="text-align: left;">Journal of climate</td>
                <td style="text-align: right;">2016</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Quantifying changes in climate variability and extremes: Pitfalls and
                  their overcoming</td>
                <td style="text-align: left;"><strong>S Sippel</strong>, J Zscheischler, M Heimann, FEL Otto, J Peters,
                  MD Mahecha</td>
                <td style="text-align: left;">Geophysical Research Letters</td>
                <td style="text-align: right;">2015</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Stakeholder perspectives on the attribution of extreme weather events: An
                  explorative enquiry</td>
                <td style="text-align: left;"><strong>S Sippel</strong>, P Walton, FEL Otto</td>
                <td style="text-align: left;">Weather, climate, and society</td>
                <td style="text-align: right;">2015</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Combining large model ensembles with extreme value statistics to improve
                  attribution statements of rare events</td>
                <td style="text-align: left;"><strong>S Sippel</strong>, D Mitchell, MT Black, AJ Dittus, L Harrington,
                  N Schaller, …</td>
                <td style="text-align: left;">Weather and Climate Extremes</td>
                <td style="text-align: right;">2015</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Ground cover rice production systems increase soil carbon and nitrogen
                  stocks at regional scale</td>
                <td style="text-align: left;">M Liu, M Dannenmann, S Lin, G Saiz, G Yan, Z Yao, DE Pelster, H Tao, …
                </td>
                <td style="text-align: left;">Biogeosciences</td>
                <td style="text-align: right;">2015</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Beyond climatological extremes-assessing how the odds of
                  hydrometeorological extreme events in South-East Europe change in a warming climate</td>
                <td style="text-align: left;"><strong>S Sippel</strong>, FEL Otto</td>
                <td style="text-align: left;">Climatic Change</td>
                <td style="text-align: right;">2014</td>
              </tr>
              <tr class="even">
                <td style="text-align: left;">Do water-saving ground cover rice production systems increase grain yields
                  at regional scales?</td>
                <td style="text-align: left;">M Liu, S Lin, M Dannenmann, Y Tao, G Saiz, Q Zuo, <strong>S
                    Sippel</strong>, J Wei, …</td>
                <td style="text-align: left;">Field crops research</td>
                <td style="text-align: right;">2013</td>
              </tr>
              <tr class="odd">
                <td style="text-align: left;">Nitrogen dynamics at undisturbed and burned Mediterranean shrublands of
                  Salento Peninsula, Southern Italy</td>
                <td style="text-align: left;">M Dannenmann, G Willibald, <strong>S Sippel</strong>, K Butterbach-Bahl
                </td>
                <td style="text-align: left;">Plant and soil</td>
                <td style="text-align: right;">2011</td>
              </tr>
            </tbody>
          </table>*/}
          </div>
        </div>
      </section>
    </Fragment>
  );
}
