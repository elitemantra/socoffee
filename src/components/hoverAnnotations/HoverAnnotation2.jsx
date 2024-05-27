import { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import styles from "./hoverAnnotation.module.scss";
const HoverAnnotation = ({ props }) => {
  const [referenceData, setReferenceData] = useState(null);
  const {
    children,
    value: { reference },
  } = props;
  // console.log(props);

  useEffect(() => {
    const fetchReferenceData = async () => {
      if (reference?._ref) {
        const result = await client.fetch(`*[_id == $ref]`, {
          ref: reference._ref,
        });
        if (result && result.length > 0) {
          setReferenceData(result[0]);
        }
      }
    };

    fetchReferenceData();
  }, [reference]);

  // console.log(referenceData);

  const renderReferenceContent = () => {
    if (!referenceData) {
      return <span style={{ display: "block" }}>Loading...</span>;
    }

    if (referenceData._type === "people") {
      return (
        <span style={{ display: "block" }}>
          <strong>Name:</strong> {referenceData.name}
          <br />
          <strong>Email:</strong> {referenceData.email}
        </span>
      );
    }

    if (referenceData._type === "category") {
      return (
        <span style={{ display: "block" }}>
          <strong>Category:</strong> {referenceData.name}
        </span>
      );
    }

    return <div>Unknown reference type</div>;
  };

  return (
    <span className={styles.tooltip2}>
      <span
        style={{
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        {children}
      </span>
      <span className={styles.tooltipText2}>{renderReferenceContent()} </span>
    </span>
  );
};

export default HoverAnnotation;
