import { VideoIcon } from "lucide-react";

function CallButton({ handleVideoCall }) {
  return (
    <div className="p-3 flex items-center justify-end max-w-7xl mx-auto w-full absolute top-0 right-0">
      <button onClick={handleVideoCall} className="btn bg-green-500 text-white p-1">
        <VideoIcon className="size-6" />
      </button>
    </div>
  );
}

export default CallButton;