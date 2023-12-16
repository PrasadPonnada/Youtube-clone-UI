import { VideoCard } from "./VideoCard"

export function VideoGrid() {
    const videos = [{
        title: "Animal Movie Controversy | Interesting Facts | Telugu",
        author: "VR Facts",
        views: "100K",
        timestamp: "2 days ago",
        thumbnail: "./Thumbnail1.jpg",
        icon: "./Icon.jpg",
    },
    {
        title: "Animal Movie Controversy | Interesting Facts | Telugu",
        author: "VR Facts",
        views: "100K",
        timestamp: "2 days ago",
        thumbnail: "./Thumbnail1.jpg",
        icon: "./Icon.jpg",
    },
    {
        title: "Animal Movie Controversy | Interesting Facts | Telugu",
        author: "VR Facts",
        views: "100K",
        timestamp: "2 days ago",
        thumbnail: "./Thumbnail1.jpg",
        icon: "./Icon.jpg",
    },
    {
        title: "Animal Movie Controversy | Interesting Facts | Telugu",
        author: "VR Facts",
        views: "100K",
        timestamp: "2 days ago",
        thumbnail: "./Thumbnail1.jpg",
        icon: "./Icon.jpg",
    },
    {
        title: "Animal Movie Controversy | Interesting Facts | Telugu",
        author: "VR Facts",
        views: "100K",
        timestamp: "2 days ago",
        thumbnail: "./Thumbnail1.jpg",
        icon: "./Icon.jpg",
    },
    {
        title: "Animal Movie Controversy | Interesting Facts | Telugu",
        author: "VR Facts",
        views: "100K",
        timestamp: "2 days ago",
        thumbnail: "./Thumbnail1.jpg",
        icon: "./Icon.jpg",
    }, {
        title: "Animal Movie Controversy | Interesting Facts | Telugu",
        author: "VR Facts",
        views: "100K",
        timestamp: "2 days ago",
        thumbnail: "./Thumbnail1.jpg",
        icon: "./Icon.jpg",
    }, {
        title: "Animal Movie Controversy | Interesting Facts | Telugu",
        author: "VR Facts",
        views: "100K",
        timestamp: "2 days ago",
        thumbnail: "./Thumbnail1.jpg",
        icon: "./Icon.jpg",
    }]

    return <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
            videos.map((video) => {
                return <VideoCard title={video.title}
                    author={video.author}
                    views={video.views}
                    timestamp={video.timestamp}
                    thumbnail={video.thumbnail}
                    icon={video.icon} />
            })}
    </div>

}
