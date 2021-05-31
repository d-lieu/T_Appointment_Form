import React from "react";
import Head from "next/head";

import "../styles.scss";
import { CliniaForm } from "../components/CliniaForm/CliniaForm";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Appointment Form</title>
        </Head>
        <div style={{ textAlign: "center" }} className="example">
          Request an Appointment {this.props.userAgent}
        </div>
        <CliniaForm />
      </div>
    );
  }
}
