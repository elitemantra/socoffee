import { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import styles from "./hoverAnnotation.module.scss";
const HoverAnnotation = (props) => {
  const { reference } = props.value;
  const [referenceData, setReferenceData] = useState(null);

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
      return <div>Loading...</div>;
    }

    if (referenceData._type === "people") {
      return (
        <div>
          <strong>Name:</strong> {referenceData.name}
          <br />
          <strong>Email:</strong> {referenceData.email}
        </div>
      );
    }

    if (referenceData._type === "category") {
      return (
        <div>
          <strong>Category:</strong> {referenceData.name}
        </div>
      );
    }

    return <div>Unknown reference type</div>;
  };

  return (
    <span className={styles.tooltip}>
      {props.renderDefault(props)}
      <span contentEditable={false} className={styles.tooltipText}>
        {renderReferenceContent()}
      </span>
    </span>
  );
};

export default HoverAnnotation;
