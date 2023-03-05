import React from "react";

type FormattedDateProps = {
  date: Date;
};

const FormattedDate = (props: FormattedDateProps) => {
  const { date } = props;
  return (
    <time datetime={date.toISOString()}>
      {date.toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric"
      })}
    </time>
  );
};

export default FormattedDate;
