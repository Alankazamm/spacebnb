import { Lodge } from "@/API"

type PropertyProps = {
    lodge: Lodge
}
export const Property = ({lodge}:PropertyProps) => {

    return (
        <div className= "property" >
            <div className="title" >
                <h2>{lodge.title}</h2>
            </div>
        </div>
    )
}
