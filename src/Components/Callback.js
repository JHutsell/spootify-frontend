
const Callback = ({location, handleCode}) =>{

    const code = location.search.split("?code=")[1];
    handleCode(code)
    return null
}

export default Callback;
