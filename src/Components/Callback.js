
const Callback = ({location, handleCode }) =>{
    // debugger
    console.log(location)
    const code = location.search.split("?code=")[1];
    handleCode(code)
    return null
}

export default Callback;
