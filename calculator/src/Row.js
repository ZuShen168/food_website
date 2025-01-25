import Button from './Button';

function Row(props){
    const divStyle = {
        display: "flex",
        marginLeft: "auto",
        marginRight: "auto"
    }

    return(
        <div style={divStyle}>
            <Button element={props.row[0]} handle={props.handle[props.handleIdx[0]]}/>
            <Button element={props.row[1]} handle={props.handle[props.handleIdx[1]]}/>
            <Button element={props.row[2]} handle={props.handle[props.handleIdx[2]]}/>
            <Button element={props.row[3]} handle={props.handle[props.handleIdx[3]]}/>
            <Button element={props.row[4]} handle={props.handle[props.handleIdx[4]]}/>
        </div>
    )
}

export default Row;