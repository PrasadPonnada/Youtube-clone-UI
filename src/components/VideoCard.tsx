export function VideoCard(props: any) {
    return <div className="p-2">
        <img src={props.thumbnail} className="rounded-xl" />
        <div className="grid grid-cols-12">
            <div className="col-span-3 ml-4 mt-1">
                <img className="w-12 h-12 rounded-full" src={props.icon} />
            </div>
            <div className="col-span-9">
                <div className="text-lg">
                    {props.title}
                </div>
                <div className="text-base text-gray-600">
                    {props.author}
                </div>
                <div className="text-sm text-gray-600">
                    {props.views} Views | {props.timestamp}
                </div>
            </div>
        </div>
    </div>
}