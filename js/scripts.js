let url = 'https://raw.githubusercontent.com/banteg/blue-pill/blue/blue-pill.json';

function bluepill(out) {
    var address = document.getElementById('address').value.toLowerCase();
    var count = 0;
    var div = document.getElementById('pills')
    div.innerHTML = '';
    console.log(out)
    pills = Object.keys(out).length
    for (var i = 0; i < pills; i++)
    {   
        key = Object.keys(out)[i];
        arr = out[key];
        console.log(arr)
        for(var j = 1; j < arr.length; j++) {
            arr[j] = arr[j].toLowerCase()
        };

        if (arr.includes(address)) {
            var tag = document.createElement('p')
            var text = document.createTextNode(key)
            tag.appendChild(text);
            div.appendChild(tag);
            count += 1;
        }
    }

    console.log(count)
    var pillcount = document.getElementById('pillcount')
    pillcount.innerText = count + '/' + pills + ' pills'
}

function check() {
    fetch(url).then(res => res.json()).then(out => bluepill(out));
}