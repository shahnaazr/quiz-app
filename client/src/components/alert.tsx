interface AlertProps extends React.HTMLAttributes<HTMLQuoteElement> {
  status: string;
  message: string;
}

const statuses: {
  info: string;
  success: string;
  warning: string;
  error: string;
  [key: string]: string;
} = {
  info: "bg-info",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-danger",
};

export const Alert = ({ message, status }: AlertProps) => {
  let statusClass = `${statuses[status]} text-light`;
  return (
    <blockquote className={`alert px-4 py-1 m-4 rounded-md ${statusClass}`} role="alert">
      <h4 className="mt-2 mb-0 uppercase font-bold opacity-85" role="heading">
        {status}
      </h4>
      <div className=" mb-4 mt-4" dangerouslySetInnerHTML={{ __html: message }}></div>
    </blockquote>
  );
};
