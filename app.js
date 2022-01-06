//get books from input
function addBook(){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    const Book = {'title':title , 'author':author};

   console.log(Book.title);

    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');

    row.innerHTML =`
    <td>` + Book.title  +`</td>
    <td>`+  Book.author +`</td>
    `;
    list.appendChild(row);
    document.getElementById('title').value ='';
    document.getElementById('author').value ='';
    //document.addEventListener('DOMContentLoaded',)
}