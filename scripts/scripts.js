function openTab(tabName) {
    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }
    document.getElementById(tabName).style.display = 'block';
}

function redirectToNewDebtPage() {
    // Replace with the actual URL of your new debt page
    window.location.href = 'update_index.html';
}
