import React, {useContext} from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";
import {DispatchContext} from "./contexts/contextTodos";

function EditTodoForm({id, task, toggleEditForm}) {
    const [value, handleChange, reset] = useInputState(task);
    const dispatch = useContext(DispatchContext);
    console.log("EDIT FORM RENDER");
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                dispatch({type: "EDIT", id: id, task: value});
                reset();
                toggleEditForm();
            }}
            style={{marginLeft: "1rem", width: "50%"}}
        >
            <TextField
                margin='normal'
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
            />
        </form>
    );
}

export default EditTodoForm;
