const dodger = document.getElementById("dodger");
            function moveDodgerLeft() {
                const leftNumbers = dodger.style.left.replace("px", "");
                   const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }


  function moveDodgerRight() {
             let dodger = document.getElementById('dodger');
                 let currentLeft = parseInt(dodger.style.left) || 0;
                      dodger.style.left = currentLeft + 10 + 'px';
  }