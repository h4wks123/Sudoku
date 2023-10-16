import { toast } from "react-toastify";

function EntryMessage() {
  const notify = () =>
    toast.success("🦄 Welcome Username!", {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  notify();
}

export default EntryMessage;
