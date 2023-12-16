fetch('https://reqres.in/api/users'),
{
    method: 'POST',
    body: {
        name: 'User 1'
    }
}).then(res => {
    return res.json();
})
// fetch always succeeds no matter what
// FAILURE not a result of the api
    .then(res => {
    if (res.ok)
    {
        console.log('SUCCESS');
    }
    else
    {
        console.log('NOT SUCCESSFUL');
    }
    })
    .then(data => console.log(data)) // {data: Array(6), support: {…}}
    .catch(error => console.log('ERROR')); // ERROR