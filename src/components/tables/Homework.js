import './tables.css';
import TextField from '@material-ui/core/TextField';
import { API, graphqlOperation } from 'aws-amplify';
import { listHomework } from '../../graphql/queries';
import { updateHomework } from '../../graphql/mutations';
import { useEffect, useState } from 'react';


const Homework = (props) => {

    const [dbRowID, setDbRowID] = useState("");
    const [homeworkJSON, sethomeworkJSON] = useState([]);
    const [edit, setEdit] = useState(null);
    const [updateObj, setUpdateObj] = useState({
            name: "",
            data: ""
    });

    const GetHomework = async() => {
        try {
            const response = (await API.graphql(graphqlOperation(listHomework, {
                filter: {
                    year_group: {
                            eq: props.year_group
                    }
                }
            })));
            // console.log("response",response.data)
            const homeworkList = response.data.listHomework.items[0].homework; 
            setDbRowID(response.data.listHomework.items[0].id);
            // console.log(homeworkList)
            sethomeworkJSON(homeworkList);

        } catch(e) {
            console.log("error fetching data: ",e);
        }

    }
 
    const EditRow = (rowID) => {
        console.log("make changes", rowID)
        setEdit(rowID);
        const tempUpdate = { name:homeworkJSON[rowID].name, data:homeworkJSON[rowID].data }
        setUpdateObj(tempUpdate);
    }

    const SaveEdit = (rowID) => {
        console.log("made changes", updateObj)
        const tempUpdate = [];
        Object.keys(homeworkJSON).map((cell) => {
                // console.log(cell, rowID)

                if (cell === rowID) {
                    // console.log(updateObj.name)
                    if (updateObj.name !== "") {   // only add the data if the homework has a name
                        tempUpdate.push({cellID:cell.toString(), name:updateObj.name, data: updateObj.data, time: homeworkJSON[cell].time})
                    }
                } else {
                    tempUpdate.push({cellID:cell.toString(), name:homeworkJSON[cell].name, data: homeworkJSON[cell].data, time: homeworkJSON[cell].time})
                }
                return <></>
            }
        )
        sethomeworkJSON(tempUpdate, setEdit(null) );
    }

    useEffect(() => {
        GetHomework();
    }, []);

    const handleUpdate = (text, field) => {
        console.log(text, " ", field)
        let tempUpdate = updateObj;
        if (field === "n") {
            tempUpdate.name = text;

        } else if (field === "d") {

            tempUpdate.data = text;
        }
        setUpdateObj(tempUpdate)

    };


    const confirmChanges = () => {
        API.graphql(graphqlOperation(updateHomework, {input: {id:dbRowID, homework:homeworkJSON}}))
        .catch((err) => console.log("Error saving changes: ", err))
        .finally(() =>  console.log("changes saved"));
    }
    

    return (
        <>
            <div className="display-table-container" >
                <table className="display-table">
                    <tr className="table-header">
                        <td className="table-title" colSpan="2"> <h2>Homework Table</h2> </td>
                        <td>
                            <button className="table-save" className="row-buttons-save" onClick={confirmChanges}> Save </button>
                        </td>
                    </tr>
                    <tr className="display-titles">
                        <th style={{width: "20%"}}>
                            Title
                        </th>
                        <th>
                            Message
                        </th>
                        <th>
                            Date sent
                        </th>
                    </tr>
                    {homeworkJSON.map((message) => {
                        if (edit === message.cellID) {
                            return <tr onDoubleClick={() => SaveEdit(message.cellID)} key={message.cellID} className="all-row-data" >
                                <td> 
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Name"
                                        fullWidth 
                                        multiline
                                        rows={4}
                                        defaultValue={message.name}
                                        variant="outlined"
                                        onChange={(event) => handleUpdate(event.target.value, "n" )}
                                    /> 
                                </td>
                                <td> 
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Data"
                                        fullWidth 
                                        multiline
                                        rows={4}
                                        defaultValue={message.data}
                                        variant="outlined"
                                        onChange={(event) => handleUpdate(event.target.value, "d" )}
                                    />  
                                </td>
                                <td> {message.time} </td>
                            </tr>
                        } else {
                            return <tr onDoubleClick={() => EditRow(message.cellID)} key={message.cellID} className="all-row-data" >
                                <td> {message.name} </td>
                                <td> {message.data} </td>
                                <td> {message.time} </td>
                            </tr> 
                        }
                    })}
                </table>
            </div>
        </>
    );
}

export default Homework;