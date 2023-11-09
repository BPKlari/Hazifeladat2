function citySelected(selectedCity, selectedButton) {
    if (selectedCity == 'voltam') {
        document.getElementById('resulttext').textContent = 'Itt már voltam: ' + document.getElementById(selectedButton).innerHTML + '!';
        document.getElementById(selectedButton).style.background = "green";
    } else {
        document.getElementById('resulttext').textContent = 'Itt még  nem voltam: ' + document.getElementById(selectedButton).innerHTML + '!';
        document.getElementById(selectedButton).style.background = "red";
    }
}
