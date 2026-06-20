const insert = document.querySelector(".insert");

window.addEventListener("keyup", function (e) {
    insert.innerHTML=`
    <div>
        <table>
            <tr>
                <th>Key</th>
                <th>Keycode</th>
                <th>Code</th>
            </tr>
            <tr>
                <th>${e.key}</th>
                <th>${e.keyCode}</th>
                <th>${e.code}</th>
            </tr>
        </table>
    </div>`
})