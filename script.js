document.addEventListener('DOMContentLoaded', () => {
    // Typing effect for the main title
    const titleObj = document.querySelector('.hero-title');
    if (titleObj) {
        const text = titleObj.innerHTML;
        titleObj.innerHTML = '';
        let i = 0;
        
        // Add cursor
        const cursorNode = document.createElement('span');
        cursorNode.className = 'blinking-cursor';
        titleObj.parentNode.insertBefore(cursorNode, titleObj.nextSibling);
        
        const typeWriter = () => {
            if (i < text.length) {
                titleObj.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, Math.random() * 50 + 50); // Random delay between 50-100ms
            } else {
                // Done typing, maybe move cursor to the end inside the title or just leave it out
                titleObj.appendChild(cursorNode);
            }
        };
        
        // slight delay before starting to type
        setTimeout(typeWriter, 500);
    }
});
