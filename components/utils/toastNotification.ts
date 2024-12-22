import { toast, ToastOptions } from "react-toastify";

// Default options to centralize configuration
const defaultOptions: ToastOptions = {
  position: "top-right",
  autoClose: 5000, // Auto-close after 5 seconds
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

// Success Toast
export const successToast = (message: string, options?: ToastOptions) => {
  toast.success(message, { ...defaultOptions, ...options });
};

// Error Toast
export const errorToast = (message: string, options?: ToastOptions) => {
  toast.error(message, { ...defaultOptions, ...options });
};

// Warning Toast
export const warnToast = (message: string, options?: ToastOptions) => {
  toast.warn(message, { ...defaultOptions, ...options });
};

// Info Toast
export const infoToast = (message: string, options?: ToastOptions) => {
  toast.info(message, { ...defaultOptions, ...options });
};
