document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("form");
    const dataTable = document.getElementById('table');

    function saveTable() {
        let tableData = [];

        for (let i = 1; i < dataTable.rows.length; i++) {
            let row = dataTable.rows[i];
            let rowData = {
                name: row.cells[0].textContent,
                rating: row.cells[1].textContent,
                comment: row.cells[2].textContent
            };
            tableData.push(rowData);
        }

        localStorage.setItem("tableData", JSON.stringify(tableData));
    }

    function restoreTable() {
        let storedTable = localStorage.getItem("tableData");
        if (storedTable) {
            let tableData = JSON.parse(storedTable);

            tableData.forEach((rowData) => {
                let row = dataTable.insertRow();
                addCell(row, rowData.name);
                addCell(row, rowData.rating);
                addCell(row, rowData.comment);
            });
        }
    }

    restoreTable();

    form.onsubmit = function (event) {
        event.preventDefault();

        let formData = new FormData(event.target);

        const name = formData.get('name');
        const rating = formData.get('rating');
        const comment = formData.get('comment');

        let row = dataTable.insertRow();

        addCell(row, name);
        addCell(row, rating);
        addCell(row, comment);

        function addCell(row, text) {
            const cell = row.insertCell();
            cell.textContent = text;
        }

        form.reset();
        saveTable();
    };
});