import React from 'react';
import {
  faCheckCircle,
  faExclamationCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import styles from '../styles/StatusMessage.module.css';
import { StatusType } from '../config/types';

type StatusMessageProps = {
  statusMessage: React.ReactElement | null;
  statusType: StatusType;
};

const StatusMessage = ({ statusMessage, statusType }: StatusMessageProps) => {
  const themeColor = () => {
    switch (statusType) {
      case StatusType.success:
        return styles.success;
      case StatusType.warn:
        return styles.warning;
      case StatusType.error:
        return styles.error;
    }
  };
  return (
    <div
      className={classNames(
        themeColor(),
        'p-4 rounded-md flex items-center justify-center w-auto'
      )}
    >
      {statusType === StatusType.success && (
        <FontAwesomeIcon icon={faCheckCircle} color="#155724" width={30} />
      )}
      {statusType === StatusType.warn && (
        <FontAwesomeIcon
          icon={faExclamationCircle}
          color="#856404"
          width={30}
        />
      )}
      {statusType === StatusType.error && (
        <FontAwesomeIcon icon={faTimesCircle} color="#721c24" width={30} />
      )}
      <div className="ml-2 mb-0">{statusMessage}</div>
    </div>
  );
};

export default StatusMessage;
