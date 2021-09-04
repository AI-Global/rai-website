/**
 * Disabling no-explicit-any here as the query will be the type
 * of a custom hook that wraps useStaticQuery.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, ReactNode, useState } from "react";
import { BlockQuote } from "@/components/BlockQuote";
import { Emphasis } from "@/components/Emphasis";
import { Divider } from "@/components/Divider";

import styles from "./ContentType.module.css";

interface ContentTypeProps {
  query: any;
  component: ReactNode;
}

export function ContentType({ query, component }: ContentTypeProps) {
  const { nodes } = query();
  const Component = component;

  return (
    <div>
      {nodes?.map((node: any, index: number) => {
        return (
          <div key={node?.title}>
            <div className={styles.meta}>
              <BlockQuote>
                {node?.title && (
                  <div className={styles.title}>
                    <Emphasis variation="bold">Title: </Emphasis>
                    {node?.title}
                  </div>
                )}
                {node?.pageUsage && (
                  <div>
                    <Emphasis variation="bold">Used on pages: </Emphasis>{" "}
                    {node?.pageUsage.map((page: any) => page.title).join(",")}
                  </div>
                )}
              </BlockQuote>
            </div>
            {/* @ts-expect-error Typescript doesn't like this because Component doesn't have props. */}
            <Component {...node} />
            <details className={styles.details}>
              <summary className={styles.summary}>Content Details</summary>
              <pre className={styles.code}>
                {JSON.stringify(node, undefined, 2)}
              </pre>
            </details>
            {nodes.length !== index + 1 && <Divider spacing="largest" />}
          </div>
        );
      })}
    </div>
  );
}

interface ContentPropProps {
  label: string;
  onChange(val: boolean): void;
}

export function ContentProp({ label, onChange }: ContentPropProps) {
  const [id] = useState(uniqueId());

  return (
    <div className={styles.prop}>
      <input
        id={id}
        type="checkbox"
        onChange={handleChange}
        className={styles.checkbox}
      />
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    return onChange(e.target.checked);
  }

  function uniqueId() {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < 9; i += 1) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
