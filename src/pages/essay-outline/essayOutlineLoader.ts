
export default function essayOutlineLoader({params}) {
    console.log("Call backend from here to get data and return necessary data to load it into the EssayOutline component. The uuid is: ", params.uuid)
    return params.uuid
}