import React from "react";

import Toast from "../Toast";
import { ToastProviderContext } from "../ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts } = React.useContext(ToastProviderContext);

  return toasts.length > 0 && (
    <ol className={styles.wrapper} role="region" aria-live="assertive" aria-label="Notification">
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            id={toast.id}
            variant={toast.variant}
          >
            {toast.children}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
