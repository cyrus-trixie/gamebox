export default function GameCard(props: {
    imageUrl?: string;
    title: string;
    description: string;
}) {
    return (
        <div className="w-80 rounded-md shadow-lg bg-black overflow-hidden text-yellow-700 relative">
            {props.imageUrl && (
                <img
                    src={props.imageUrl}
                    alt={props.title}
                    className="w-full h-60 object-cover"
                />
            )}

            <div className="p-4 space-y-2 ">
                <h2 className="text-base font-bold">{props.title}</h2>
                <p className="text-sm text-yellow-900">{props.description}</p>
            </div>
        </div>
    );
}