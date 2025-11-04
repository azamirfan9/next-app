import { toast, Slide, Zoom, Flip, Bounce } from 'react-toastify';
export function success(value) {
    return toast.success(value);
}

export function warning(value) {
    return toast.error(value);
}

export function info(value) {
    return toast.info(value);
}

export function successbg(value) {
    return toast.success("Lorem ipsum dolor", {
        theme: "colored"
    })
}

export function warningbottom(value) {
    return toast("Lorem ipsum dolor", {type: "warning", position: 'bottom-right', theme: "colored", transition: Bounce});
}

export function multitoast(value) {
    return toast("This toast is super big. I don't think anyone could eat it in one bite.\n\nIt's larger than you expected. You eat it but it does not seem to get smaller.",
        {
        position: 'top-center'
        }
    );
}