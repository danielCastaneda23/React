import { useParams } from 'react-router';
import ItemList from './ItemList';
import ReactPlayer from 'react-player'
const ListContainer = (props) => {
    let { id } = useParams();
    return (
        <>
            {id === '1' || id === undefined ?
            <div className="row mx-0">
                <ReactPlayer
                    url={"/videos/videoEquipos2.mp4"}
                    width="100%"
                    height="auto"
                    playing
                    muted
                    loop
                    style={{ filter: 'sepia(70%)' }}
                />
            </div> : null}
            <div className="row px-5 mx-5 mt-5 justify-content-center"><ItemList item={props.items} idCategory={id} /></div>
        </>
    )
}
export default ListContainer;