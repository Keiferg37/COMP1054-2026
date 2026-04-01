// Select the first (and only) table on the page
const standingsTable = document.querySelector("table");
 
// Initialize Tablesort – this makes every TH in the THEAD clickable to sort the table
let sortableTable = new Tablesort(standingsTable);