const result = [];
let resultOfday = 0;

function update_input_Form() {



    let parent = document.getElementById('inputs_eletor'),
        count = document.getElementById('count_input').value;

    parent.innerHTML = '';

    for (let i = 0; i < count; i++) {
        parent.innerHTML += `${i+1} :
                             <input placeholder="เครื่องใช้ไฟฟ้า" name="name_electric${i+1}" id="name_electric${i+1}"/> &nbsp;
                             <input placeholder="กำลังใช้ไฟฟ้า (W) "        name="power_electric${i+1}" id="power_electric${i+1}" /> (W)
                             <input placeholder="จำนวนเครื่องใช้ไฟฟ้า"       name="many_electric${i+1}" id="many_electric${i+1}" /> ตัว
                             <input placeholder="จำนวนชั่วโมงที่ใช้ใน 1 วัน"   name="time_use_electric${i+1}" id="time_use_electric${i+1}" /> ชั่วโมง<br><br>`;
    }
    document.getElementById('test').innerHTML = `<button type="submit" onclick="button_click()" class="center">ตกลง</button><br><br>`;

}

function update_output_Form() {

    let parent = document.getElementById('outputs_eletor'),
        count = document.getElementById('count_input').value;

    parent.innerHTML = '';

    for (let i = 0; i < count; i++) {
        parent.innerHTML += `<p>(${i+1}) ${document.getElementById("name_electric" + (i + 1)).value} : 
                                จำนวนหน่วยที่ใช้ไปทั้งหมด  ${result[i]} หน่วย/วัน</p>`;
    }

}

function calculate_electric() {
    resultOfday = 0;

    let count = document.getElementById('count_input').value;
    for (let i = 0; i < count; i++) {
        result[i] = parseFloat(((document.getElementById('power_electric' + (i + 1)).value * document.getElementById('many_electric' + (i + 1)).value / 1000) * document.getElementById('time_use_electric' + (i + 1)).value).toFixed(2));
        resultOfday += result[i];
    }
    console.log(result);
    console.log((resultOfday * 30).toFixed(2));

}

function showResult() {
    document.getElementById('result').innerHTML = resultOfday.toFixed(2);
}

function button_click() {
    calculate_electric();
    showResult();
    update_output_Form();
}

function openNav() {
    document.getElementById("mySidenav").style.width = "170px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}