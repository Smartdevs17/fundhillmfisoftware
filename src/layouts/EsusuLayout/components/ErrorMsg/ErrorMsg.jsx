import { ErrorMessage } from 'formik';
import { Fragment } from 'react';

const ErrorMsg = ({ name }) => {
  const styles = {
    'fontSize': '15px',
    'lineHeight': '16px',
  };

  return (
    <Fragment>
      <ErrorMessage name={name}>
        {(msg) => (
          <div className="animate__animated animate__shakeX text-danger" style={styles}>
            {msg}
          </div>
        )}
      </ErrorMessage>
    </Fragment>
  );
};

export { ErrorMsg as default };
