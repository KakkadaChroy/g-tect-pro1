import Swal from 'sweetalert2';

interface AlertProps {
    text: string;
    timer?: number;
}

// Success Alert
export const SuccessAlert = ({ text, timer = 3000 }: AlertProps) => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: timer,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    Toast.fire({
        icon: "success",
        title: text
    });
};

// Error Alert
export const ErrorAlert = ({ text, timer = 3000 }: AlertProps) => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: timer,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    Toast.fire({
        icon: "error",
        title: text
    });
};

// Warning Alert
export const WarningAlert = ({ text, timer = 3000 }: AlertProps) => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: timer,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    Toast.fire({
        icon: "warning",
        title: text
    });
};

// Info Alert
export const InfoAlert = ({ text, timer = 3000 }: AlertProps) => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: timer,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    Toast.fire({
        icon: "info",
        title: text
    });
};


interface DeleteAlertProps {
    title?: string;
    text?: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
}

export const AskToDeleteAlert = ({
                                     title = "Are you sure?",
                                     text = "You won't be able to revert this!",
                                     confirmButtonText = "Yes, delete it!",
                                     cancelButtonText = "Cancel",
                                     onConfirm,
                                     onCancel
                                 }: DeleteAlertProps = {}) => {
    return Swal.fire({
        title: title,
        text: text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText,
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            if (onConfirm) onConfirm();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // If user cancels deletion
            if (onCancel) onCancel();
        }

        return result;
    });
};
