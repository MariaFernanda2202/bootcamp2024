function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Fechar o modal quando o usuário clicar fora do conteúdo
window.onclick = function(event) {
    const modals = document.getElementsByClassName("modal");
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = "none";
        }
    }
}


function selectOnlyOne(checkbox) {
    var checkboxes = document.querySelectorAll('input[name="option"]');
    checkboxes.forEach((item) => {
        if (item !== checkbox) {
            item.checked = false;
        }
    });
}