// Navbar 
const nav = document.querySelector('.navbar')
fetch('navbar.html')
.then(res => res.text())
.then(data => {
    nav.innerHTML = data
})

// table
fetch('https://jsonplaceholder.typicode.com/comments')
.then((data) => {
   // console.log(data);
   return data.json(); //converted to object
}).then((objectData)=> {
    console.log(objectData[0].id);
    let tableData = '';
    objectData.map((values) => {
        tableData += `<tr>
        <td>${values.id}</td>
        <td>${values.name}</td>
        <td>${values.email}</td>
        <td>${values.body}</td>
      </tr>`;
    });
    document.getElementById("table-body").innerHTML = tableData;
})

//footer
const footer = document.querySelector('footer')
fetch('footer.html')
.then(res => res.text())
.then(data => {
    footer.innerHTML = data
})