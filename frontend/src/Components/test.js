const userList = [];
async function fetchList() {
    const response = await fetch("http://localhost:3000/api/v1/user/bulk", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
    }
    else {
        const data = await response.json();
        userList.push(...data.user);
        //console.log(...data.user);
        for(let i = 0; i<userList.length;i++){
            console.log(userList[i]);
        }
    }
}
fetchList();

