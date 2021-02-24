let burger = document.querySelectorAll("#burger-menu");
let openState = false;


   burger[0].addEventListener('click', function(){
        openState = !openState;
        console.log(openState);
        
        if(openState === true){
                burger[0].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><rect width="30" height="2" x=".686" y="21.899" fill="#1F3A74" rx="1" transform="rotate(-45 .686 21.9)"/><rect width="30" height="2" x="2.1" y=".686" fill="#1F3A74" rx="1" transform="rotate(45 2.1 .686)"/></svg>';
            burger[0].insertAdjacentHTML('afterend', `
            <div class="mobile-menu">
            <div class="nav">
                <ul>
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="blog.html">Blog</a>
                    </li>
                    <li>
                        <a href="features.html">Features</a>
                    </li>
                    <li>
                        <a href="pricing.html">Pricing</a>
                    </li>
                    <li>
                        <a href="documentation.html">Documentation</a>
                    </li>
                </ul>
            </div>
            <ul class="socials_menu">
                <li>
                    <a href="https://www.facebook.com/" target="_blank"> <!-- facebook -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 9 17"><path fill="#B6BAC7" d="M5.656 17V9.245h2.569l.385-3.022H5.656V4.294c0-.875.24-1.471 1.478-1.471h1.58V.118C8.44.082 7.503 0 6.412 0 4.135 0 2.576 1.408 2.576 3.995v2.228H0v3.022h2.576V17h3.08z"/></svg>
                    </a>
                </li>
                <li>
                    <a href="https://web.telegram.org/" target="_blank"> <!-- telegram -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 13"><path fill="#9399AB" d="M5.82 12.023c-.438 0-.364-.158-.515-.557L4.018 7.413l9.91-5.623"/><path fill="#70788E" d="M5.82 12.023c.338 0 .487-.148.676-.323l1.801-1.676L6.05 8.728"/><path fill="#B6BAC7" d="M6.05 8.728l5.446 3.849c.621.328 1.07.158 1.224-.552l2.217-9.993c.227-.87-.346-1.265-.941-1.007L.978 5.827c-.888.34-.883.815-.162 1.026l3.341.997 7.734-4.667c.365-.211.7-.098.425.136"/></svg>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/" target="_blank"> <!-- twitter -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 14"><path fill="#B6BAC7" fill-rule="evenodd" d="M17.033 1.84a6.642 6.642 0 01-1.945.549A3.477 3.477 0 0016.577.463a6.673 6.673 0 01-2.151.845A3.34 3.34 0 0011.953.211c-1.87 0-3.387 1.558-3.387 3.48 0 .272.03.538.088.792C5.839 4.338 3.342 2.952 1.672.847a3.536 3.536 0 00-.458 1.75c0 1.207.597 2.272 1.506 2.896a3.308 3.308 0 01-1.534-.436v.044c0 1.687 1.169 3.092 2.717 3.412a3.3 3.3 0 01-1.528.06c.43 1.383 1.682 2.389 3.164 2.417a6.686 6.686 0 01-5.015 1.44 9.402 9.402 0 005.192 1.564c6.23 0 9.637-5.302 9.637-9.9 0-.151-.003-.301-.01-.45a6.976 6.976 0 001.69-1.803" clip-rule="evenodd"/></svg>
                    </a>
                </li>
                <li>
                    <a href="https://medium.com/" target="_blank"> <!-- medium -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path fill="#757E9A" d="M17 2.107h-.653c-.242 0-.585.344-.585.564v7.987c0 .22.343.522.585.522H17v1.896h-5.916V11.18h1.238V2.784h-.06L9.37 13.075H7.131L4.277 2.784h-.072v8.396h1.238v1.896H.49V11.18h.634c.261 0 .604-.301.604-.522V2.671c0-.22-.343-.564-.604-.564H.49V.21h6.194l2.033 7.448h.056L10.825.21H17v1.896z"/></svg>
                    </a>
                </li>
            </ul>
            <a href="pricing.html" class="button_link">Get started</a>
        </div> 
            `)
        }
        else{
                burger[0].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.97 384.97"><path d="M12.03 120.303h360.909c6.641 0 12.03-5.39 12.03-12.03 0-6.641-5.39-12.03-12.03-12.03H12.03c-6.641 0-12.03 5.39-12.03 12.03s5.39 12.03 12.03 12.03zM372.939 180.455H12.03c-6.641 0-12.03 5.39-12.03 12.03s5.39 12.03 12.03 12.03h360.909c6.641 0 12.03-5.39 12.03-12.03s-5.389-12.03-12.03-12.03zM372.939 264.667H132.333c-6.641 0-12.03 5.39-12.03 12.03 0 6.641 5.39 12.03 12.03 12.03h240.606c6.641 0 12.03-5.39 12.03-12.03.001-6.641-5.389-12.03-12.03-12.03z"/></svg>';
            let mobileMenu = document.querySelector(".mobile-menu");

            mobileMenu.remove();
        }
        

}); 

burger[1].addEventListener('click', function(){
    openState = !openState;
    console.log(openState);
    
    if(openState === true){
            burger[1].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><rect width="30" height="2" x=".686" y="21.899" fill="#1F3A74" rx="1" transform="rotate(-45 .686 21.9)"/><rect width="30" height="2" x="2.1" y=".686" fill="#1F3A74" rx="1" transform="rotate(45 2.1 .686)"/></svg>';
        burger[1].insertAdjacentHTML('afterend', `
        <div class="mobile-menu_bottom">
        <div class="nav">
            <ul>
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="blog.html">Blog</a>
                </li>
                <li>
                    <a href="features.html">Features</a>
                </li>
                <li>
                    <a href="pricing.html">Pricing</a>
                </li>
                <li>
                    <a href="documentation.html">Documentation</a>
                </li>
            </ul>
        </div>
        <ul class="socials_menu">
            <li>
                <a href="https://www.facebook.com/" target="_blank"> <!-- facebook -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 9 17"><path fill="#B6BAC7" d="M5.656 17V9.245h2.569l.385-3.022H5.656V4.294c0-.875.24-1.471 1.478-1.471h1.58V.118C8.44.082 7.503 0 6.412 0 4.135 0 2.576 1.408 2.576 3.995v2.228H0v3.022h2.576V17h3.08z"/></svg>
                </a>
            </li>
            <li>
                <a href="https://web.telegram.org/" target="_blank"> <!-- telegram -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 13"><path fill="#9399AB" d="M5.82 12.023c-.438 0-.364-.158-.515-.557L4.018 7.413l9.91-5.623"/><path fill="#70788E" d="M5.82 12.023c.338 0 .487-.148.676-.323l1.801-1.676L6.05 8.728"/><path fill="#B6BAC7" d="M6.05 8.728l5.446 3.849c.621.328 1.07.158 1.224-.552l2.217-9.993c.227-.87-.346-1.265-.941-1.007L.978 5.827c-.888.34-.883.815-.162 1.026l3.341.997 7.734-4.667c.365-.211.7-.098.425.136"/></svg>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/" target="_blank"> <!-- twitter -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 14"><path fill="#B6BAC7" fill-rule="evenodd" d="M17.033 1.84a6.642 6.642 0 01-1.945.549A3.477 3.477 0 0016.577.463a6.673 6.673 0 01-2.151.845A3.34 3.34 0 0011.953.211c-1.87 0-3.387 1.558-3.387 3.48 0 .272.03.538.088.792C5.839 4.338 3.342 2.952 1.672.847a3.536 3.536 0 00-.458 1.75c0 1.207.597 2.272 1.506 2.896a3.308 3.308 0 01-1.534-.436v.044c0 1.687 1.169 3.092 2.717 3.412a3.3 3.3 0 01-1.528.06c.43 1.383 1.682 2.389 3.164 2.417a6.686 6.686 0 01-5.015 1.44 9.402 9.402 0 005.192 1.564c6.23 0 9.637-5.302 9.637-9.9 0-.151-.003-.301-.01-.45a6.976 6.976 0 001.69-1.803" clip-rule="evenodd"/></svg>
                </a>
            </li>
            <li>
                <a href="https://medium.com/" target="_blank"> <!-- medium -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path fill="#757E9A" d="M17 2.107h-.653c-.242 0-.585.344-.585.564v7.987c0 .22.343.522.585.522H17v1.896h-5.916V11.18h1.238V2.784h-.06L9.37 13.075H7.131L4.277 2.784h-.072v8.396h1.238v1.896H.49V11.18h.634c.261 0 .604-.301.604-.522V2.671c0-.22-.343-.564-.604-.564H.49V.21h6.194l2.033 7.448h.056L10.825.21H17v1.896z"/></svg>
                </a>
            </li>
        </ul>
        <a href="pricing.html" class="button_link">Get started</a>
    </div> 
        `)
    }
    else{
            burger[1].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.97 384.97"><path d="M12.03 120.303h360.909c6.641 0 12.03-5.39 12.03-12.03 0-6.641-5.39-12.03-12.03-12.03H12.03c-6.641 0-12.03 5.39-12.03 12.03s5.39 12.03 12.03 12.03zM372.939 180.455H12.03c-6.641 0-12.03 5.39-12.03 12.03s5.39 12.03 12.03 12.03h360.909c6.641 0 12.03-5.39 12.03-12.03s-5.389-12.03-12.03-12.03zM372.939 264.667H132.333c-6.641 0-12.03 5.39-12.03 12.03 0 6.641 5.39 12.03 12.03 12.03h240.606c6.641 0 12.03-5.39 12.03-12.03.001-6.641-5.389-12.03-12.03-12.03z"/></svg>';
        let mobileMenu = document.querySelector(".mobile-menu_bottom");

        mobileMenu.remove();
    }
    

});