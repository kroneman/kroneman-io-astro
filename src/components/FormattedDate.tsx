import React from "react";

type FormattedDateProps = {
  date: Date;
  className?: string;
};

const FormattedDate = (props: FormattedDateProps) => {
  const { date, className } = props;
  return (
    <time datetime={date.toISOString()} className={className}>
      {date.toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric"
      })}
    </time>
  );
};

export default FormattedDate;
