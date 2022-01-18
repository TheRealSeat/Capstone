import './Timeline.css'

function Timeline(props) {
    const listItems = props.data.map((number) =>
        <li key={number.toString()}>
            {number}
            <div>According to all known laws of aviation, there is no way a bee should be able to fly.
                Its wings are too small to get its fat little body off the ground.
                The bee, of course, flies anyway because bees don't care what humans think is impossible.</div>
        </li>
    );
    return (
        <div className="Timeline">
            <div className='orange-large'>
                {props.title}
            </div>
            <ul>{listItems}</ul>
        </div>
    );
}

export default Timeline;