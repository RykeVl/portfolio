const IDB = window.indexedDB;

let database = null;

const openRequest = IDB.open("RykeVl");

openRequest.onupgradeneeded = () => {
  database = openRequest.result;
  database.createObjectStore("User", {
    keyPath: "email",
    autoIncrement: true,
  });
};

export function startDB(): void {}

export function getUsers(callback: Function): void {
  database = openRequest.result;
  const transaction = database.transaction("User", "readwrite");
  const userTable = transaction.objectStore("User");

  const result = userTable.getAll();

  transaction.oncomplete = () => {
    callback(result.result);
  };
}

export function addRecord() {
  database = openRequest.result;
  const transaction = database.transaction("User", "readwrite");
  const userTable = transaction.objectStore("User");
  const newRecord = {
    name: localStorage.getItem("name"),
    surname: localStorage.getItem("surname"),
    email: localStorage.getItem("email"),
    score: localStorage.getItem("score"),
  };

  userTable.add({
    name: newRecord.name,
    surname: newRecord.surname,
    email: newRecord.email,
    score: newRecord.score,
  });
}
