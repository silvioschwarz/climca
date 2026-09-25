import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div>
        <p><a href="./impressum.html">IMPRESSUM</a></p>
      </div>
      <div>
        <a
          href="https://github.com/LIM-Climate-Causality/lim-climate-causality.github.io"
        >
          <i className="fa fa-github"></i>
        </a>

        <a href="mailto:marlene.kretschmer@uni-leipzig.de">
          <i className="fa fa-envelope" role="img"> </i>
        </a>
      </div>
      <div>Copyright © ClimCA 2025</div>
    </footer>
  );
}