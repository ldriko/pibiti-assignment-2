// Tugas PIBITI Day 2: To do list!
// Cek file index.html untuk mengetahui id dari elemen-elemen yang
// kamu butuhkan selama pengerjaan.

// Selamat mengerjakan! :)

// Array yang berisi daftar to do item. Data di dalam array ini
// cukup berupa object dengan key `text` dan `done`.
// (Tidak perlu diubah)
const todoList = [];

// Fungsi untuk menandai sebuah to do item sebagai selesai.
// (Tidak perlu diubah)
function checkTodoItem(index) {
  todoList[index].done = !todoList[index].done;
  renderTodoList();
}

// Fungsi untuk membuat elemen <li> yang berisi sebuah to do item.
// (Tidak perlu diubah)
function createTodoItemElement(todo, index) {
  const todoItemElement = document.createElement('li');
  todoItemElement.classList.add('list-group-item', 'list-group-item-action');
  todoItemElement.setAttribute('role', 'button');
  todoItemElement.innerHTML = todo.done ? `<del>${todo.text}</del>` : todo.text;
  todoItemElement.addEventListener('click', () => {
    checkTodoItem(index);
  });

  return todoItemElement;
}

// Kerjakan kode JavaScript kamu di bawah ini!
// (Note: kamu bebas menambahkan fungsi-fungsi baru jika diperlukan)

// 1. Implementasikan fungsi addTodoItem
function addTodoItem() {
  // 1.1 Ambil nilai dari input field `#inputTodo`
  //     (Hint: gunakan `document.querySelector` dan `value`)

  // 1.2 Buat sebuah object baru dengan key `text` dan `done`
  //     Isi `text` dengan nilai dari input field `#inputTodo` yang sudah diambil di langkah 1.1
  //     Isi `done` dengan nilai boolean `false`

  // 1.3 Tambahkan nilai tersebut ke dalam array `todoList`

  // 1.4 Kosongkan input field `#inputTodo`
  //     (Hint: gunakan `document.querySelector` dan `value`)

  // Panggil fungsi `renderTodoList` di paling akhir dari fungsi ini.
}

// 2. Berikan event handler `click` ke tombol "Tambah"
//    yang memanggil fungsi addTodoItem.
//    (Hint: gunakan `document.querySelector` dan `addEventListener`)

// 3. Kerjakan fungsi renderTodoList
//    Fungsi ini digunakan untuk menampilkan to do item dari array `todoList`.
function renderTodoList() {
  // 3.1 Ambil elemen <li> dengan id `todoList` dan masukkan ke dalam sebuah variabel
  //     (Hint: gunakan `document.querySelector`)

  // 3.2 Kosongkan isi dari elemen <li> tersebut
  //     (Hint: gunakan `innerHTML`)

  // 3.3 Untuk setiap to do item yang ada di dalam array `todoList`.
  //     (Hint: gunakan `forEach` untuk melakukan iterasi pada array `todoList`)
  //     Di dalam loop `forEach`:
  //     3.3.1 Panggil fungsi `createTodoItemElement`
  //           untuk membuat elemen todo item baru dengan memberikan data
  //           dari loop sebagai parameter pertama
  //           dan index dari loop sebagai parameter kedua.
  //     3.3.2 Tambahkan hasil dari fungsi `createTodoItemElement`
  //           ke dalam variabel elemen <li> yang sudah diambil di langkah 3.1
  //           (Hint: gunakan `appendChild`)
}
