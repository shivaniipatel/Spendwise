import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


export function notify(msg) {
    toast.success(msg, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        draggable: false,
        draggablePercent: 60
    });
}

