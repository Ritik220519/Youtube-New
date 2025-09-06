import { useSelector } from "react-redux";
import SimilerVideoCard from "./SimilerVideoCard";

const SimilerVideos = () => {
  const videos = useSelector((store) => store.videos);

  return (
    <div className=" bg-gray-200 rounded-2xl h-[800px] m-2 shadow-lg overflow-y-scroll">
      {videos &&
        videos.map((video) => <SimilerVideoCard key={video.id} data={video} />)}
    </div>
  );
};

export default SimilerVideos;
