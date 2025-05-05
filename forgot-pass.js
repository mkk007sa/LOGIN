document.getElementById('resert').addEventListener('click' , () => {
    let recovery = document.getElementById('recovery').value.trim();
    
    if(recovery === ''){
        alert('enter email');
    }else {
        alert('email sent...✅');
        window.location.href = 'index.html';
    };

});