import {useState} from "react";

export const useInput = initVal => {
    const [value, setValue] = useState(initVal)
    const onChange = e => setValue(e.target.value)

    return {value, onChange}
}