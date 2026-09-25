import React, { Fragment } from "react";
//import {Link} from "react-router-dom";

export default function SoftwareSite() {
  return (
    <Fragment>
      <div class="title">
        <h1>Open-source software</h1>
        <h2>
          Open-source software packages developed by members of the Climate
          Causality & Attribution research group.
        </h2>
      </div>
      <div class="content">
        <section id="software-packages" class="level2">
          <p>
            On this page, you can find open-source software developed by members
            of the group.
          </p>
          <h2 data-anchor-id="software-packages">Software packages</h2>
          <section
            id="ibicus-an-open-source-python-packages-for-the-comparison-and-evaluation-of-bias-adjustment-methods"
            class="level4"
          >
            <h4>
              ibicus: an open-source Python packages for the comparison and
              evaluation of bias adjustment methods
            </h4>
            <p>
              Statistical bias adjustment is commonly applied to climate models
              before using their results in impact studies. However, different
              methods based on a distributional mapping between observational
              and model data can change the simulated trends as well as the
              spatiotemporal and inter-variable consistency of the model, and
              are prone to misuse if not evaluated thoroughly. To address the
              practical issues impeding this, we introduce ibicus, an
              open-source Python package for the implementation of eight
              different peer-reviewed and widely used bias adjustment methods in
              a common framework and their comprehensive evaluation. The
              evaluation framework introduced in ibicus allows the user to
              analyse changes to the marginal, spatiotemporal and inter-variable
              structure of user-defined climate indices and distributional
              properties as well as any alteration of the climate change trend
              simulated in the model. The package was developed by Fiona Spuler
              and Jakob Wessel in collaboration with ECMWF.
            </p>
            <ul>
              <li>
                <a href="https://ibicus.readthedocs.io/en/latest/">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://github.com/ecmwf-projects/ibicus">Github</a>
              </li>
              <li>
                <a href="https://pypi.org/project/ibicus/">PyPI</a> - pip
                install ibicus
              </li>
              <li>
                <a href="https://gmd.copernicus.org/articles/17/1249/2024/gmd-17-1249-2024.html">
                  Paper
                </a>
              </li>
            </ul>
          </section>
          <section
            id="ibicus-an-open-source-python-packages-for-the-comparison-and-evaluation-of-bias-adjustment-methods"
            class="level4"
          >
            <h4>
              StoryPy: A Python-based package to compute climate storylines
            </h4>
            <p>
              Dynamical storylines explore qualitatively different changes in
              climate driven by forced responses in large-scale remote drivers,
              such as Arctic Amplification. Our project aims to make this
              advanced methodology accessible to a broader audience through a
              user-friendly Python package and an intuitive interface. Our
              package, termed StoryPy, provides a set of functions to analyze
              multi-model ensembles by focusing on the identification of
              dynamical storylines. With customizable options for selecting
              remote drivers, target seasons, and climate variables or
              climatic-impact drivers, the StoryPy provides flexibility and
              adaptability for various research and policy applications. This
              package is currently in development, led by Richard Alawode.
            </p>
          </section>
        </section>
      </div>
    </Fragment>
  );
}
